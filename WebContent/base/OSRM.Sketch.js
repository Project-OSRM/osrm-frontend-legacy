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
	OSRM.G.map.addLayer(this._bounding_boxes);

	this._nosketch = OSRM.Sketch.SKETCH;
	this._zoomlevel = 0;
	this._color_table = [
		"#ff0000",
		"#ffff00",
		"#00ff00",
		"#0000ff"
	];
};
OSRM.Sketch.NOSKETCH = true;
OSRM.Sketch.SKETCH = false;
OSRM.extend( OSRM.Sketch,{
	// show/hide sketch
	showSketch: function(positions, subpaths, nosketch) {
		this._nosketch = nosketch;

		this._bounding_boxes.clearLayers();
		this._simplified_geometry.clearRoutes();

		for (var i = 0; i < subpaths.length; i++)
		{
			var s = subpaths[i];
			var color_idx = i % this._color_table.length;
			this._simplified_geometry.addRoute(
				positions.slice(s.node_range[0], s.node_range[1]+1),
				{color: this._color_table[color_idx], weight: 2}
				);
			var rect = L.rectangle(s.bounding_box, {color: "#000", weight: 1});
			this._bounding_boxes.addLayer(rect);
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
