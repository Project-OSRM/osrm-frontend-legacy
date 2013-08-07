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

// OSRM routing description
// [renders routing description and manages events]


OSRM.RoutingDescription = {
		
// directory with qrcodes files
QR_DIRECTORY: 'qrcodes/',
		
// initialization of required variables and events
init: function() {
	OSRM.G.active_shortlink = null;
	OSRM.Browser.onUnloadHandler( OSRM.RoutingDescription.uninit );
},
uninit: function() {
	if( OSRM.G.qrcodewindow )
		OSRM.G.qrcodewindow.close();	
},

// route description events
onMouseOverRouteDescription: function(lat, lng) {
	OSRM.G.markers.hover.setPosition( new L.LatLng(lat, lng) );
	OSRM.G.markers.hover.show();

},
onMouseOutRouteDescription: function(lat, lng) {
	OSRM.G.markers.hover.hide();	
},
onClickRouteDescription: function(lat, lng, desc) {
	OSRM.G.markers.highlight.setPosition( new L.LatLng(lat, lng) );
	OSRM.G.markers.highlight.show();
	OSRM.G.markers.highlight.centerView(OSRM.DEFAULTS.HIGHLIGHT_ZOOM_LEVEL);	

	if( OSRM.G.markers.highlight.description != null && document.getElementById("description-"+OSRM.G.markers.highlight.description) )
		document.getElementById("description-"+OSRM.G.markers.highlight.description).className = "description-body-item";
	OSRM.G.markers.highlight.description = desc;
	document.getElementById("description-"+desc).className = "description-body-item description-body-item-selected";
},
onClickCreateShortcut: function(src){
	var pr = OSRM.C.PRECISION;
	src += '&z='+ OSRM.G.map.getZoom() + '&center=' + OSRM.G.map.getCenter().lat.toFixed(pr) + ',' + OSRM.G.map.getCenter().lng.toFixed(pr);
	src += '&alt='+OSRM.G.active_alternative;
	src += '&df=' + OSRM.G.active_distance_format;
	src += '&re=' + OSRM.G.active_routing_engine;
	src += '&ly=' + OSRM.Utils.getHash( OSRM.G.map.layerControl.getActiveLayerName() );
	
	// uncomment to not use link shorteners
	if( OSRM.DEFAULTS.HOST_SHORTENER_URL == '' ) {
		var response = {};
		response.label = OSRM.loc("ROUTE_LINK");	
		response[OSRM.DEFAULTS.SHORTENER_REPLY_PARAMETER] = src;
		OSRM.RoutingDescription.showRouteLink( response );
		return;	
	} else {
		var source = OSRM.DEFAULTS.HOST_SHORTENER_URL + OSRM.DEFAULTS.SHORTENER_PARAMETERS.replace(/%url/, src);
		// using "encodeURIComponent(src)" instead of "src" required for some URL shortener services, but not functional for others (e.g. ours)
	
		OSRM.JSONP.call(source, OSRM.RoutingDescription.showRouteLink, OSRM.RoutingDescription.showRouteLink_TimeOut, OSRM.DEFAULTS.JSONP_TIMEOUT, 'shortener');
		document.getElementById('route-link').innerHTML = '[<a class="text-link-inactive">'+OSRM.loc("GENERATE_LINK_TO_ROUTE")+'</a>]';
	}
},
showRouteLink: function(response){
	if(!response || !response[OSRM.DEFAULTS.SHORTENER_REPLY_PARAMETER]) {
		OSRM.RoutingDescription.showRouteLink_TimeOut();
		return;
	}
	
	OSRM.G.active_shortlink = response[OSRM.DEFAULTS.SHORTENER_REPLY_PARAMETER];
	var shortlink_label = response.label;
	if( !shortlink_label )
		shortlink_label = OSRM.G.active_shortlink.substring(7);
	document.getElementById('route-link').innerHTML =
		'[<a class="text-link" onClick="OSRM.RoutingDescription.showQRCode();">'+OSRM.loc("QR")+'</a>]' + '&nbsp;' +
		'[<a class="text-link" href="' +OSRM.G.active_shortlink+ '">'+shortlink_label+'</a>]';
},
showRouteLink_TimeOut: function(){
	document.getElementById('route-link').innerHTML = '[<a class="text-link-inactive">'+OSRM.loc("LINK_TO_ROUTE_TIMEOUT")+'</a>]';
},
showQRCode: function(response){
	if( OSRM.G.qrcodewindow )
		OSRM.G.qrcodewindow.close();	
	OSRM.G.qrcodewindow = window.open( OSRM.RoutingDescription.QR_DIRECTORY+"qrcodes.html","","width=280,height=250,left=100,top=100,dependent=yes,location=no,menubar=no,scrollbars=no,status=no,toolbar=no,resizable=no");
},

// handling of routing description
show: function(response) {
	var pr = OSRM.C.PRECISION;
	
	// activate GUI features that need a route
	OSRM.GUI.activateRouteFeatures();
	
	// compute query string
	var query_string = '?hl=' + OSRM.Localization.current_language;
	for(var i=0; i<OSRM.G.markers.route.length; i++)
		query_string += '&loc=' + OSRM.G.markers.route[i].getLat().toFixed(pr) + ',' + OSRM.G.markers.route[i].getLng().toFixed(pr); 
 						
	// create link to the route
	var route_link ='[<a class="text-link" onclick="OSRM.RoutingDescription.onClickCreateShortcut(\'' + OSRM.DEFAULTS.WEBSITE_URL + query_string + '\')">'+OSRM.loc("GET_LINK_TO_ROUTE")+'</a>]';

	// create GPX link
	var gpx_link = '[<a class="text-link" onClick="document.location.href=\'' + OSRM.G.active_routing_server_url + query_string + '&output=gpx\';">'+OSRM.loc("GPX_FILE")+'</a>]';
	
	// check highlight marker to get id of corresponding description
	// [works as changing language or metric does not remove the highlight marker!]	
	var selected_description = null;
	if( OSRM.G.markers.highlight.isShown() )
		selected_description = OSRM.G.markers.highlight.description;
		
	// create route description
	var positions = OSRM.G.route.getPositions();
	var body = "";
	body += '<table class="description medium-font">';
	for(var i=0; i < response.route_instructions.length; i++){
		//odd or even ?
		var rowstyle='description-body-odd';
		if(i%2==0) { rowstyle='description-body-even'; }

		body += '<tr class="'+rowstyle+'">';
		
		body += '<td class="description-body-directions">';
		body += '<img class="description-body-direction" src="'+ OSRM.RoutingDescription._getDrivingInstructionIcon(response.route_instructions[i][0]) + '" alt=""/>';		
		body += '</td>';
		
		body += '<td class="description-body-items">';
		var pos = positions[response.route_instructions[i][3]];
		body += '<div id="description-'+i+'" class="description-body-item '+(selected_description==i ? "description-body-item-selected": "")+'" ' +
			'onclick="OSRM.RoutingDescription.onClickRouteDescription('+pos.lat.toFixed(pr)+","+pos.lng.toFixed(pr)+","+i+')" ' +
			'onmouseover="OSRM.RoutingDescription.onMouseOverRouteDescription('+pos.lat.toFixed(pr)+","+pos.lng.toFixed(pr)+')" ' +
			'onmouseout="OSRM.RoutingDescription.onMouseOutRouteDescription('+pos.lat.toFixed(pr)+","+pos.lng.toFixed(pr)+')">';

		// build route description
		if( response.route_instructions[i][1] != "" )
			body += OSRM.loc(OSRM.RoutingDescription._getDrivingInstruction(response.route_instructions[i][0])).replace(/\[(.*)\]/,"$1").replace(/%s/, OSRM.RoutingDescription._getStreetName(response.route_instructions[i][1]) ).replace(/%d/, OSRM.loc(response.route_instructions[i][6]));
		else
			body += OSRM.loc(OSRM.RoutingDescription._getDrivingInstruction(response.route_instructions[i][0])).replace(/\[(.*)\]/,"").replace(/%d/, OSRM.loc(response.route_instructions[i][6]));

		body += '</div>';
		body += "</td>";
		
		body += '<td class="description-body-distance">';
		if( i != response.route_instructions.length-1 )
		body += '<b>'+OSRM.Utils.toHumanDistance(response.route_instructions[i][2])+'</b>';
		body += "</td>";
		
		body += "</tr>";
	}	
	body += '</table>';
	
	// create route name
	var route_name = "(";
	for(var j=0, sizej=response.route_name.length; j<sizej; j++)
		route_name += ( j>0 && response.route_name[j] != "" && response.route_name[j-1] != "" ? " - " : "") + "<span style='white-space:nowrap;'>" + OSRM.RoutingDescription._getStreetName(response.route_name[j]) + "</span>";
	if( route_name == "(" )
		route_name += " - ";
	route_name += ")";
	
	// build header
	header = OSRM.RoutingDescription._buildHeader(OSRM.Utils.toHumanDistance(response.route_summary.total_distance), OSRM.Utils.toHumanTime(response.route_summary.total_time), route_link, gpx_link, route_name);
	
	// check if route_name causes a line break -> information-box height has to be reduced
	var tempDiv = document.createElement('tempDiv');
	document.body.appendChild(tempDiv);
	tempDiv.className = "base-font absolute-hidden";
	tempDiv.innerHTML = route_name;
	var width = tempDiv.clientWidth;
	var max_width = 370;					// 370 = information-box.width - header-subtitle.margin-left	
	document.body.removeChild(tempDiv);

	// update DOM
	document.getElementById('information-box').className = (width > max_width ? 'information-box-with-larger-header' : 'information-box-with-large-header');
	document.getElementById('information-box-header').innerHTML = header;
	document.getElementById('information-box').innerHTML = body;
	
	// add alternative GUI (has to be done last since DOM has to be updated before events are registered)
	OSRM.RoutingAlternatives.show();	
},

// simple description
showSimple: function(response) {
	// build header
	header = OSRM.RoutingDescription._buildHeader(OSRM.Utils.toHumanDistance(response.route_summary.total_distance), OSRM.Utils.toHumanTime(response.route_summary.total_time), "", "");

	// update DOM
	document.getElementById('information-box').className = 'information-box-with-normal-header';	
	document.getElementById('information-box-header').innerHTML = header;
	document.getElementById('information-box').innerHTML = "<div class='no-results big-font'>"+OSRM.loc("YOUR_ROUTE_IS_BEING_COMPUTED")+"</div>";	
},

// no description
showNA: function( display_text ) {
	// activate GUI features that need a route
	OSRM.GUI.activateRouteFeatures();
	
	// compute query string
	var query_string = '?hl=' + OSRM.Localization.current_language;
	var pr = OSRM.C.PRECISION;
	for(var i=0; i<OSRM.G.markers.route.length; i++)
		query_string += '&loc=' + OSRM.G.markers.route[i].getLat().toFixed(pr) + ',' + OSRM.G.markers.route[i].getLng().toFixed(pr); 
 						
	// create link to the route
	var route_link ='[<a class="text-link" onclick="OSRM.RoutingDescription.onClickCreateShortcut(\'' + OSRM.DEFAULTS.WEBSITE_URL + query_string + '\')">'+OSRM.loc("GET_LINK_TO_ROUTE")+'</a>]';
	
	// build header
	header = OSRM.RoutingDescription._buildHeader("N/A", "N/A", route_link, "");

	// update DOM
	document.getElementById('information-box').className = 'information-box-with-normal-header';	
	document.getElementById('information-box-header').innerHTML = header;
	document.getElementById('information-box').innerHTML = "<div class='no-results big-font'>"+display_text+"</div>";	
},

// build header
_buildHeader: function(distance, duration, route_link, gpx_link, route_name) {
	var temp = 
		'<div class="header-title">' + OSRM.loc("ROUTE_DESCRIPTION") + (route_name ? '<br/><div class="header-subtitle">' + route_name + '</div>' : '') + '</div>' +
		
		'<div class="full">' +
		'<div class="row">' +

		'<div class="left">' +
		'<div class="full">' +
		'<div class="row">' +
		'<div class="left header-label nowrap">' + OSRM.loc("DISTANCE")+":" + '</div>' +
		'<div class="left header-content stretch">' + distance + '</div>' +
		'</div>' +
		'<div class="row">' +
		'<div class="left header-label nowrap">' + OSRM.loc("DURATION")+":" + '</div>' +
		'<div class="left header-content stretch">' + duration + '</div>' +
		'</div>' +
		'</div>' +
		'</div>' +
		
		'<div class="left">' +
		'<div class="full">' +
		'<div class="row">' +
		'<div class="right header-content" id="route-link">' + route_link + '</div>' +
		'</div>' +
		'<div class="row">' +
		'<div class="right header-content">' + gpx_link + '</div>' +
		'</div>' +
		'</div>' +
		'</div>' +
		
		'</div>' +
		'</div>' +		
		
		'</div>';	
	return temp;
},

// retrieve driving instruction icon from instruction id
_getDrivingInstructionIcon: function(server_instruction_id) {
	var local_icon_id = "direction_";
	server_instruction_id = server_instruction_id.replace(/^11-\d{1,}$/,"11");		// dumb check, if there is a roundabout (all have the same icon)
	local_icon_id += server_instruction_id;
	
	if( OSRM.G.images[local_icon_id] )
		return OSRM.G.images[local_icon_id].getAttribute("src");
	else
		return OSRM.G.images["direction_0"].getAttribute("src");
},

// retrieve driving instructions from instruction ids
_getDrivingInstruction: function(server_instruction_id) {
	var local_instruction_id = "DIRECTION_";
	server_instruction_id = server_instruction_id.replace(/^11-\d{2,}$/,"11-x");	// dumb check, if there are 10+ exits on a roundabout (say the same for exit 10+)
	local_instruction_id += server_instruction_id;
	
	var description = OSRM.loc( local_instruction_id );
	if( description == local_instruction_id)
		return OSRM.loc("DIRECTION_0");
	return description;
},

// retrieve street name
_getStreetName: function(street) {
	var name = street.match(/\{highway:(.*)\}/);
	if( name )
		name = OSRM.loc('HIGHWAY_'+name[1].toUpperCase(), 'HIGHWAY_DEFAULT');
	else
		name = street;
	return name;
}

};