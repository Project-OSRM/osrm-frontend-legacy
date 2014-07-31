/*
This program is free software; you can redistribute it and/or modify
it under the terms of the GNU AFFERO General Public License as published by
the Free Software Foundation; either version 3 of the License, or
any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA  02111-1307  USA
or see http://www.gnu.org/licenses/agpl.txt.
*/

// OSRM route management (handles drawing of route geometry - current route, old route, unnamed route, highlight unnamed streets) 
// [this holds the route geometry]


OSRM.Sketch = function() {
	this._simplified_geometry	= new OSRM.MultiRoute("simplified" , {dashArray:""} );

	this._simplified_geometry_style	= {color:'#FF3300', weight:5, dashArray:""};
	this._bounding_boxes = new L.LayerGroup();
	this._stripes = new L.LayerGroup();
	this._nodes = new L.LayerGroup();
	OSRM.G.map.addLayer(this._bounding_boxes);
	OSRM.G.map.addLayer(this._stripes);
	OSRM.G.map.addLayer(this._nodes);

	this._nosketch = OSRM.Sketch.SKETCH;
	this._zoomlevel = 0;
	this._color_table = [
		"#dd0000",
		"#00dd00",
		"#dddd00",
		"#00dddd",
		"#0000dd"
	];
};
OSRM.Sketch.NOSKETCH = true;
OSRM.Sketch.SKETCH = false;
OSRM.extend( OSRM.Sketch,{
	// show/hide sketch
	showSketch: function(positions, subpaths, nosketch) {
		this._nosketch = nosketch;

		this._bounding_boxes.clearLayers();
		this._stripes.clearLayers();
		this._nodes.clearLayers();
		this._simplified_geometry.clearRoutes();

		for (var i = 0; i < subpaths.length; i++)
		{
			var s = subpaths[i];
			var color_idx = i % this._color_table.length;
			var coords = positions.slice(s.node_range[0], s.node_range[1]+1);
			this._simplified_geometry.addRoute(
				coords,
				{color: this._color_table[color_idx], weight: 4}
				);
			for (var j = 0; j < coords.length; j++)
			{
				var node = L.circle(coords[j], 30, {color: "#000", weight: 0, opacity: 1.0});
				this._nodes.addLayer(node);
			}
			var rect = L.rectangle(s.bounding_box, {color: "#000", weight: 1, fillOpacity: 0.0});
			this._bounding_boxes.addLayer(rect);
			for (var j = 0; j < s.stripes.length; j++)
			{
				var stripe = s.stripes[j];
				var first_idx = stripe[0];
				// horizontal stripes
				if (s.monoticity & 1 == 1)
				{
					var min_lon = s.bounding_box[0][1];
					var max_lon = s.bounding_box[1][1];
					var lat = coords[first_idx][0];
					var stripe_line = L.polyline([[lat, min_lon], [lat, max_lon]], {color: "#aa0000", weight: 0.5, opacity: 0.2});
					this._stripes.addLayer(stripe_line);
				}
				// vertical stripes
				else
				{
					var min_lat = s.bounding_box[0][0];
					var max_lat = s.bounding_box[1][0];
					var lon = coords[first_idx][1];
					var stripe_line = L.polyline([[min_lat, lon], [max_lat, lon]], {color: "#ff0000", weight: 1});
					this._stripes.addLayer(stripe_line);
				}
			}
		}

		this._simplified_geometry.show();

		this._zoomlevel = OSRM.G.map.getZoom();
	},
	hideSketch: function() {
		this._simplified_geometry.hide();
	},
	// query routines
	isShown: function() {
		return this._simplified_geometry.isShown();
	},
	isSketch: function() {
		return !(this._nosketch);
	},
	getPositions: function() {
		return this._simplified_geometry.getPositions();
	},
	getPoints: function() {
		return this._simplified_geometry.getPoints();
	},
	getZoomLevel: function() {
		return this._zoomlevel;
	},

	// helper routines
	reset: function() {
		this._nosketch = OSRM.Sketch.SKETCH;
	},
	fire: function(type,event) {
		this._simplified_geometry.route.fire(type,event);
	},
});
