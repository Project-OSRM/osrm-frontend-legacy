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

// OSRM routing sketch
// [renders sketch geometry]

OSRM.CONSTANTS.PRECISION = 6;

OSRM.SketchGeometry = {

// show route geometry - if there is a route
show: function(response) {
    var geometry = OSRM.SketchGeometry._decode(response.schematized_geometry, OSRM.C.PRECISION );
    var original_geometry = OSRM.SketchGeometry._decode(response.route_geometry, OSRM.C.PRECISION );

    OSRM.G.sketch.showSketch(original_geometry,
                             geometry,
                             response.street_intervals,
                             response.schematized_street_intervals,
                             response.schematized_instructions,
                             OSRM.Sketch.SKETCH);
},

//show route geometry - if there is no route
showNA: function() {
    var positions = [];

    OSRM.G.sketch.showSketch([], [], [], OSRM.Sketch.NOSKETCH);
},

//decode compressed route geometry
_decode: function(encoded, precision) {
    precision = Math.pow(10, -precision);
    var len = encoded.length, index=0, lat=0, lng = 0, array = [];
    while (index < len) {
        var b, shift = 0, result = 0;
        do {
            b = encoded.charCodeAt(index++) - 63;
            result |= (b & 0x1f) << shift;
            shift += 5;
        } while (b >= 0x20);
        var dlat = ((result & 1) ? ~(result >> 1) : (result >> 1));
        lat += dlat;
        shift = 0;
        result = 0;
        do {
            b = encoded.charCodeAt(index++) - 63;
            result |= (b & 0x1f) << shift;
            shift += 5;
        } while (b >= 0x20);
        var dlng = ((result & 1) ? ~(result >> 1) : (result >> 1));
        lng += dlng;
        //array.push( {lat: lat * precision, lng: lng * precision} );
        array.push( [lat * precision, lng * precision] );
    }
    return array;
}

};
