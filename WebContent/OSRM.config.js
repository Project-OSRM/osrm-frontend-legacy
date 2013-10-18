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

// OSRM config file
// [has to be loaded directly after OSRM.base]

OSRM.DEFAULTS = {
		ROUTING_ENGINES: [
			{	url: 'http://router.project-osrm.org/viaroute',
				timestamp: 'http://router.project-osrm.org/timestamp',
				metric: 0,
				label: 'ENGINE_0',
			}
		],

	
	WEBSITE_URL: document.URL.replace(/#*(\?.*|$)/i,""),					// truncates URL before first ?, and removes tailing #
	HOST_GEOCODER_URL: 'http://nominatim.openstreetmap.org/search',
	HOST_REVERSE_GEOCODER_URL: 'http://nominatim.openstreetmap.org/reverse',
	HOST_SHORTENER_URL: 'http://map.project-osrm.org/shorten/',				// use '' to not use url shortener service
	
	SHORTENER_PARAMETERS: '%url&jsonp=%jsonp',
	SHORTENER_REPLY_PARAMETER: 'ShortURL',									// keep set, even if not using url shortener service!
	
	ROUTING_ENGINE: 0,
	DISTANCE_FORMAT: 0,														// 0: km, 1: miles
	GEOCODER_BOUNDS: '',	
	ZOOM_LEVEL: 14,
	HIGHLIGHT_ZOOM_LEVEL: 16,
	JSONP_TIMEOUT: 10000,
	EDITOR_MIN_ZOOM_LEVEL: 16,
	JOSM_MIN_ZOOM_LEVEL: 16,	
	NOTES_MIN_ZOOM_LEVEL: 8,
	
	ONLOAD_ZOOM_LEVEL: 5,
	ONLOAD_LATITUDE: 48.84,
	ONLOAD_LONGITUDE: 10.10,
	ONLOAD_SOURCE: "",
	ONLOAD_TARGET: "",
	
	LANGUAGE: "en",
	LANGUAGE_USE_BROWSER_SETTING: true,
	LANUGAGE_ONDEMAND_RELOADING: true,
	LANGUAGE_SUPPORTED: [ 
		{encoding:"en", name:"English"},
		{encoding:"bg", name:"Български"},
		{encoding:"ca", name:"Català"},
		{encoding:"cs", name:"Česky"},
		{encoding:"de", name:"Deutsch"},
		{encoding:"da", name:"Dansk"},
		{encoding:"el", name:"Ελληνικά"},
		{encoding:"eo", name:"Esperanto"},
		{encoding:"es", name:"Español"},
		{encoding:"fi", name:"Suomi"},
		{encoding:"fr", name:"Français"},
		{encoding:"it", name:"Italiano"},
		{encoding:"ja", name:"日本人"},
		{encoding:"ka", name:"ქართული"},
		{encoding:"lv", name:"Latviešu"},
		{encoding:"nb", name:"Bokmål"},
		{encoding:"pl", name:"Polski"},
		{encoding:"pt", name:"Portugues"},
		{encoding:"ro", name:"Română"},
		{encoding:"ru", name:"Русский"},
		{encoding:"sk", name:"Slovensky"},
		{encoding:"sv", name:"Svenska"},
		{encoding:"ta", name:"தமிழ்"},
		{encoding:"tr", name:"Türkçe"},
		{encoding:"uk", name:"Українська"}
	],
		
	TILE_SERVERS: [
		{	display_name: 'Mapbox Terrain',
			url:'http://{s}.tiles.mapbox.com/v3/dennisl.map-dfbkqsr2/{z}/{x}/{y}.png',
			attribution:'Data © <a href="http://www.openstreetmap.org/copyright/en">OpenStreetMap</a> contributors (ODbL), Imagery © <a href="http://mapbox.com/">MapBox</a>',
			options:{maxZoom: 18}
		},
		{
			display_name: 'Mapbox Labelled Satellite',
			url:'http://{s}.tiles.mapbox.com/v3/dennisl.map-6g3jtnzm/{z}/{x}/{y}.png',
			attribution:'Data © <a href="http://www.openstreetmap.org/copyright/en">OpenStreetMap</a> contributors (ODbL), Imagery © <a href="http://mapbox.com/">MapBox</a>',
			options:{maxZoom: 18}
		},
		{
			display_name: 'Mapbox Satellite',
			url:'http://{s}.tiles.mapbox.com/v3/dennisl.map-inp5al1s/{z}/{x}/{y}.png',
			attribution:'Data © <a href="http://www.openstreetmap.org/copyright/en">OpenStreetMap</a> contributors (ODbL), Imagery © <a href="http://mapbox.com/">MapBox</a>',
			options:{maxZoom: 18}
		},
		{	display_name: 'osm.org',
			url:'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
			attribution:'Data © <a href="http://www.openstreetmap.org/copyright/en">OpenStreetMap</a> contributors (ODbL), Imagery © <a href="http://www.openstreetmap.org/copyright/en">OpenStreetMap</a> contributors (CC-BY-SA)',
			options:{maxZoom: 18}
		},
		{	display_name: 'osm.de',
			url:'http://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png',
			attribution:'Data © <a href="http://www.openstreetmap.org/copyright/en">OpenStreetMap</a> contributors (ODbL), Imagery © <a href="http://www.openstreetmap.org/copyright/en">OpenStreetMap</a> contributors (CC-BY-SA)',
			options:{maxZoom: 18}
		},
		{	display_name: 'MapQuest',
			url:'http://otile{s}.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.png',
			attribution:'Data © <a href="http://www.openstreetmap.org/copyright/en">OpenStreetMap</a> contributors (ODbL), Imagery © <a href="http://www.mapquest.de/">MapQuest</a>',
			options:{maxZoom: 18, subdomains: '1234'}
		}
	],
	
	OVERLAY_SERVERS: [
  		{	display_name: 'Small Components',
			url:'http://tools.geofabrik.de/osmi/tiles/routing_i/{z}/{x}/{y}.png',
			attribution:'',
			options:{}
		}
	],

	NOTIFICATIONS: {
		LOCALIZATION:	1800000,	// 30min
		CLICKING: 		60000,		// 1min
		DRAGGING: 		120000,		// 2min 
		MAINTENANCE:	false
	},
	OVERRIDE_MAINTENANCE_NOTIFICATION_HEADER: undefined,
	OVERRIDE_MAINTENANCE_NOTIFICATION_BODY: undefined
};
