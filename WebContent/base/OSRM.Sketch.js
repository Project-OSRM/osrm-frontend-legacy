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
    this._bounding_boxes = new L.LayerGroup();
    this._stripes = new L.LayerGroup();
    this._nodes = new L.LayerGroup();
    OSRM.G.map.addLayer(this._bounding_boxes);
    OSRM.G.map.addLayer(this._stripes);
    OSRM.G.map.addLayer(this._nodes);

    this._schematized_geometry    = L.featureGroup();
    this._schematized_geometry.on('mouseover', this.onMouseOver);
    this._schematized_geometry.addTo(OSRM.G.map);
    this._original_geometry    = new OSRM.MultiRoute("original" , {dashArray:""} );

    this._nosketch = OSRM.Sketch.SKETCH;
    this._zoomlevel = 0;
    this._color_table = [
        "#ff4136",
        "#2ecc40",
        "#0074d9",
        "#ff851b",
        "#b10dc9",
        "#ffdc00"
    ];

    this._hover_state = {
        layer: null,
        popup: null
    };
};
OSRM.Sketch.NOSKETCH = true;
OSRM.Sketch.SKETCH = false;
OSRM.extend( OSRM.Sketch,{
    onMouseOver: function(e)
    {
        if (e.layer.streetname)
        {
            var p = L.popup().setLatLng(e.latlng).setContent(e.layer.streetname);
            p.className = "StreetNames";
            p.closeButton = false;
            OSRM.G.map.openPopup(p);
        }
    },

    showSketchIntervals: function(intervals, coords, color_map, group) {
        var line, i, interval, color_idx;
        for (i = 0; i < intervals.length; i++)
        {
            interval = intervals[i];
            color_idx = color_map[interval[2]];
            sub_coords = coords.slice(interval[0], interval[1]+1);
            line = L.polyline(sub_coords,
                {color: this._color_table[color_idx], weight: 8, opacity: 1.0});
            line.streetname = interval[2];
            group.addLayer(line);
        }
    },

    showStreetIntervals: function(intervals, coords, color_map, group) {
        var line, i, interval, color_idx;
        for (i = 0; i < intervals.length; i++)
        {
            interval = intervals[i];
            color_idx = color_map[interval[2]];
            sub_coords = coords.slice(interval[0], interval[1]+1);
            group.addRoute(sub_coords,
                {color: this._color_table[color_idx], weight: 3, opacity: 1.0});
        }
    },

    mapColors: function(intervals) {
        var color_map = {};
        for (var i = 0; i < intervals.length; i++)
        {
            if (intervals[i][2] in color_map)
            {
                continue;
            }

            color_map[intervals[i][2]] = i % this._color_table.length;
        }

        return color_map;
    },

    // show/hide sketch
    showSketch: function(original_positions, positions, street_intervals, schematized_street_intervals, nosketch) {
        this._nosketch = nosketch;

        this._bounding_boxes.clearLayers();
        this._stripes.clearLayers();
        this._nodes.clearLayers();
        this._schematized_geometry.clearLayers();
        this._original_geometry.clearRoutes();

        var color_map = this.mapColors(street_intervals);
        this.showStreetIntervals(street_intervals, original_positions, color_map, this._original_geometry);
        this.showSketchIntervals(schematized_street_intervals, positions, color_map, this._schematized_geometry);

        this._original_geometry.show();
        this._zoomlevel = OSRM.G.map.getZoom();
    },
    hideSketch: function() {
        this._schematized_geometry.hide();
    },
    // query routines
    isShown: function() {
        return this._schematized_geometry.isShown();
    },
    isSketch: function() {
        return !(this._nosketch);
    },
    getPositions: function() {
        return this._schematized_geometry.getPositions();
    },
    getPoints: function() {
        return this._schematized_geometry.getPoints();
    },
    getZoomLevel: function() {
        return this._zoomlevel;
    },

    // helper routines
    reset: function() {
        this._nosketch = OSRM.Sketch.SKETCH;
    },
    fire: function(type,event) {
        this._schematized_geometry.route.fire(type,event);
    },
});
