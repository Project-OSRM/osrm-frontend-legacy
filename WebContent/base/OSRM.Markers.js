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

// OSRM marker management (all route markers should only be set and deleted with these routines!)
// [this holds the vital information of the route]

OSRM.Markers = function() {
	this.route = new Array();
	this.highlight = new OSRM.DragMarker("highlight", {zIndexOffset:-1,draggable:true,icon:OSRM.G.icons['marker-highlight'],dragicon:OSRM.G.icons['marker-highlight-drag']});;
	this.hover = new OSRM.Marker("hover", {zIndexOffset:-1,draggable:false,icon:OSRM.G.icons['marker-highlight']});;
	this.dragger = new OSRM.DragMarker("drag", {draggable:true,icon:OSRM.G.icons['marker-drag'],dragicon:OSRM.G.icons['marker-drag']});;
	this.initial_vias = new Array();
};
OSRM.extend( OSRM.Markers,{
reset: function() {
	// remove route markers
	for(var i=0; i<this.route.length;i++)
		this.route[i].hide();
	this.route.splice(0, this.route.length);
	document.getElementById('gui-delete-source').style.visibility = "hidden";
	document.getElementById('gui-delete-target').style.visibility = "hidden";
	// remove special markers
	this.highlight.hide();
	this.dragger.hide();
	// remove initial vias
	this.initial_vias.length=0;
},
removeVias: function() {
	// assert correct route array s - v - t
	for(var i=1; i<this.route.length-1;i++)
		this.route[i].hide();
	this.route.splice(1, this.route.length-2);
},
setSource: function(position) {
	// source node is always first node
	if( this.route[0] && this.route[0].label == OSRM.C.SOURCE_LABEL )
		this.route[0].setPosition(position);
	else
		this.route.splice(0,0, new OSRM.RouteMarker(OSRM.C.SOURCE_LABEL, {draggable:true,icon:OSRM.G.icons['marker-source'],dragicon:OSRM.G.icons['marker-source-drag']}, position));
	document.getElementById('gui-delete-source').style.visibility = "visible";
	
	// setting initial vias (not so nice, as showing is done here too)
	if(this.initial_vias.length>0) {
		for(var i=0; i<this.initial_vias.length;i++)
			OSRM.G.markers.setVia( i, this.initial_vias[i] );
		for(var i=1; i<OSRM.G.markers.route.length-1;i++)
			OSRM.G.markers.route[i].show();
	}
	
	return 0;	
},
setTarget: function(position) {
	// target node is always last node
	if( this.route[this.route.length-1] && this.route[ this.route.length-1 ].label == OSRM.C.TARGET_LABEL )
		this.route[this.route.length-1].setPosition(position);
	else
		this.route.splice( this.route.length,0, new OSRM.RouteMarker(OSRM.C.TARGET_LABEL, {draggable:true,icon:OSRM.G.icons['marker-target'],dragicon:OSRM.G.icons['marker-target-drag']}, position));
	document.getElementById('gui-delete-target').style.visibility = "visible";

	// setting initial vias (not so nice, as showing is done here too)	
	if(this.initial_vias.length>0) {
		for(var i=0; i<this.initial_vias.length;i++)
			OSRM.G.markers.setVia( i, this.initial_vias[i] );
		for(var i=1; i<OSRM.G.markers.route.length-1;i++)
			OSRM.G.markers.route[i].show();
	}
	
	return this.route.length-1;
},
setVia: function(id, position) {
	// via nodes only between source and target nodes
	if( this.route.length<2 || id > this.route.length-2 )
		return -1;
	
	this.route.splice(id+1,0, new OSRM.RouteMarker(OSRM.C.VIA_LABEL, {draggable:true,icon:OSRM.G.icons['marker-via'],dragicon:OSRM.G.icons['marker-via-drag']}, position));
	return id+1;
},
removeMarker: function(id) {
	if( id >= this.route.length )
		return;
	
	// also remove vias if source or target are removed
	if( id==0 && this.route[0].label == OSRM.C.SOURCE_LABEL ) {
		this.removeVias();
		document.getElementById('gui-input-source').value = "";
		document.getElementById('gui-delete-source').style.visibility = "hidden";
		OSRM.GUI.clearResults();
	} else if( id == this.route.length-1 && this.route[ this.route.length-1 ].label == OSRM.C.TARGET_LABEL ) {
		this.removeVias();
		id = this.route.length-1;
		document.getElementById('gui-input-target').value = "";
		document.getElementById('gui-delete-target').style.visibility = "hidden";
		OSRM.GUI.clearResults();
	}
	
	this.route[id].hide();
	this.route.splice(id, 1);
	// remove initial vias
	this.initial_vias.length=0;
},
reverseDescriptions: function() {
	var last = this.route.length-1;
	var size = this.route.length / 2;
	
	for(var i=0; i<size; ++i) {
		var temp = this.route[i].description;
		this.route[i].description = this.route[last-i].description; 
		this.route[last-i].description =  temp;
	}
},
reverseMarkers: function() {
	var size = this.route.length;
	
	// switch positions in nodes
	var temp_position = this.route[0].getPosition();
	this.route[0].setPosition( this.route[size-1].getPosition() );
	this.route[size-1].setPosition( temp_position );
	// switch nodes in array
	var temp_node = this.route[0];
	this.route[0] = this.route[size-1];
	this.route[size-1] = temp_node;
	// reverse route
	this.route.reverse();
	// clear information (both delete markers stay visible)
	OSRM.GUI.clearResults();

	// remove initial vias	
	this.reverseInitialVias();
},
hasSource: function() {
	if( this.route[0] && this.route[0].label == OSRM.C.SOURCE_LABEL )
		return true;
	return false;
},
hasTarget: function() {
	if( this.route[this.route.length-1] && this.route[this.route.length-1].label == OSRM.C.TARGET_LABEL )
		return true;
	return false;
},

addInitialVia: function(position) {
	this.initial_vias.push(position);
},
reverseInitialVias: function() {
	this.initial_vias.reverse();
},

//relabel all via markers
relabelViaMarkers: function() {
	for(var i=1, size=this.route.length-1; i<size; i++)
		this.route[i].marker.setLabel(i);
}
});