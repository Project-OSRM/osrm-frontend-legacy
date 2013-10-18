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

// OSRM localization
// [Esperanto language support]


OSRM.Localization["eo"] = {
// own language
"CULTURE": "eo",
"LANGUAGE": "Esperanto",
//gui
"GUI_START": "Ekiro",
"GUI_END": "Alveno",
"GUI_RESET": "Rekomenci",
"GUI_ZOOM_ON_ROUTE": "Zomi laŭ la tuta vojo",
"GUI_ZOOM_ON_USER": "Zomi sur la uzanto",
"GUI_SEARCH": "Montri",
"GUI_REVERSE": "Inversigi",
"GUI_START_TOOLTIP": "Enigi la forir-lokon",
"GUI_END_TOOLTIP": "Enigi la alven-lokon",
"GUI_MAIN_WINDOW": "Ĉefa fenestro",
"GUI_ZOOM_IN": "Zomi",
"GUI_ZOOM_OUT": "Malzomi",
// config
"GUI_CONFIGURATION": "Agordaro",
"GUI_LANGUAGE": "Lingvo",
"GUI_UNITS": "Unuoj",
"GUI_KILOMETERS": "Kilometroj",
"GUI_MILES": "Mejloj",
// abbreviations
"GUI_M": "m",
"GUI_KM": "km",
"GUI_MI": "mi",
"GUI_FT": "ft",
"GUI_H": "h",
"GUI_MIN": "min",
"GUI_S": "s",
// mapping
"GUI_MAPPING_TOOLS": "Iloj por la mapo",
"GUI_HIGHLIGHT_UNNAMED_ROADS": "Marki la sennomajn stratojn",
"GUI_SHOW_PREVIOUS_ROUTES": "Montri la antaŭajn vojojn",
"GUI_EXTERNAL_TOOLS": "Eksteraj Iloj:",
"OPEN_EDITOR": "Redaktilo",
"OPEN_JOSM": "JOSM",
"OPEN_OSMBUGS": "Notoj",
"OPEN_EDITOR_FAILED": "Zomi por malfermi la osm-redaktilon.",
"OPEN_JOSM_FAILED": "Zomi por malfermi JOSM",
"OPEN_OSMBUGS_FAILED": "Zomi por aldoni noton.",
// geocoder
"SEARCH_RESULTS": "Serĉ-rezultoj",
"FOUND_X_RESULTS": "%i rezulto(j)n",
"TIMED_OUT": "Tempolimo atingita",
"NO_RESULTS_FOUND": "Neniuj serĉ-rezultoj",
"NO_RESULTS_FOUND_SOURCE": "Neniuj serĉ-rezultoj por la foriro",
"NO_RESULTS_FOUND_TARGET": "Neniuj serĉ-rezultoj por la aliro",
// routing
"ROUTE_DESCRIPTION": "Priskribo de la vojo",
"GET_LINK_TO_ROUTE": "Krei ligilon al tiu ĉi vojo",
"ROUTE_LINK": "Ligilo al la vojo",
"GENERATE_LINK_TO_ROUTE": "kreado de la ligilo",
"LINK_TO_ROUTE_TIMEOUT": "nedisponebla",
"GPX_FILE": "GPX-dosiero",
"DISTANCE": "Distanco",
"DURATION": "Daŭro",
"YOUR_ROUTE_IS_BEING_COMPUTED": "Via vojo kalkuliĝas",
"NO_ROUTE_FOUND": "Neniu vojo eblas",
// printing
"OVERVIEW_MAP": "Supervida mapo",
"NO_ROUTE_SELECTED": "Neniu vojo elektita",
// routing engines
"ENGINE_0": "aŭto (la plej rapida)",
// tile server names
// (only required if names are different to OSRM.config)
//"TILE_SERVER_0": "osm.org",
//"TILE_SERVER_1": "osm.de",
//"TILE_SERVER_2": "MapQuest",
//"TILE_SERVER_3": "MapBox Terrain",
//"TILE_SERVER_4": "MapBox Labelled Satellite",
//"TILE_SERVER_5": "MapBox Satellite",
// overlay server names
//(only required if names are different to OSRM.config)
//"OVERLAY_SERVER_0": "Small Components",
// directions
"N": "norde",
"E": "oriente",
"S": "sude",
"W": "okcidente",
"NE": "nord-oriente",
"SE": "sud-oriente",
"SW": "sud-okcidente",
"NW": "nord-okcidente",
// driving directions
// %s: road name
// %d: direction
// [*]: will only be printed when there actually is a road name
"DIRECTION_0":"Nekonata instrukcio[ sur la straton <b>%s</b>]",
"DIRECTION_1":"Daŭrigu la vojon[ sur <b>%s</b>]",
"DIRECTION_2":"Turniĝu iomete dekstren[ sur la straton <b>%s</b>]",
"DIRECTION_3":"Turniĝu dekstren[ sur la straton <b>%s</b>]",
"DIRECTION_4":"Turniĝu abrupte dekstren[ sur la straton <b>%s</b>]",
"DIRECTION_5":"Returniĝu [ sur la straton <b>%s</b>]",
"DIRECTION_6":"Turniĝu abrupte maldekstren[ sur la straton <b>%s</b>]",
"DIRECTION_7":"Turniĝu maldekstren[ sur la straton <b>%s</b>]",
"DIRECTION_8":"Turniĝu iomete maldekstren[ sur la straton <b>%s</b>]",
"DIRECTION_10":"Iru <b>%d</b>[ sur la straton <b>%s</b>]",
"DIRECTION_11-1":"Ĉe la trafikcirklo, prenu la unuan eliron[ sur la straton <b>%s</b>]",
"DIRECTION_11-2":"Ĉe la trafikcirklo, prenu la duan eliron[ sur la straton <b>%s</b>]",
"DIRECTION_11-3":"Ĉe la trafikcirklo, prenu la trian eliron[ sur la straton <b>%s</b>]",
"DIRECTION_11-4":"Ĉe la trafikcirklo, prenu la kvaran eliron[ sur la straton <b>%s</b>]",
"DIRECTION_11-5":"Ĉe la trafikcirklo, prenu la kvinan eliron[ sur la straton <b>%s</b>]",
"DIRECTION_11-6":"Ĉe la trafikcirklo, prenu la sesan eliron[ sur la straton <b>%s</b>]",
"DIRECTION_11-7":"Ĉe la trafikcirklo, prenu la sepan eliron[ sur la straton <b>%s</b>]",
"DIRECTION_11-8":"Ĉe la trafikcirklo, prenu la okan eliron[ sur la straton <b>%s</b>]",
"DIRECTION_11-9":"Ĉe la trafikcirklo, prenu la naŭan eliron[ sur la straton <b>%s</b>]",
"DIRECTION_11-x":"ĉe la trafikcirklego, prenu iun grandnombran eliron[ sur la straton<b>%s</b>]",
"DIRECTION_15":"Vi ĵus alvenis",
// notifications
"NOTIFICATION_MAINTENANCE_HEADER":	"Planita Riparado",
"NOTIFICATION_MAINTENANCE_BODY":	"Ni faras planitan riparadon ĉe la retejo OSRM. " + 
									"Bonvolu atendi dum kiam ni ĝisdatigas la servilon. " +
									"La retejo baldaŭ denove ekfunkcios." +
									"<br/><br/>" + 
									"Intertempe vi povus preni vian GPS-ilon kaj krajonon kaj plibonigi la mapon de via kvartalo..." + 
									"<br/><br/><br/>[OSRM]",
"NOTIFICATION_LOCALIZATION_HEADER":	"Ĉu vi sciis? Vi povas ŝanĝi la lingvon de la retejo.",
"NOTIFICATION_LOCALIZATION_BODY":	"Uzu la falmenuon supre-maldekstre por elekti alian lingvon. " +
									"<br/><br/>" +
									"Se ne ĉeestas via preferata lingvo, ne zorgu. " +
									"Se vi volas, vi povas aldoni tradukon al via lingvo! " +
									"Vizitu <a href='https://github.com/DennisSchiefer/Project-OSRM-Web'>la retejon de la projekto</a> por pli da informoj.",
"NOTIFICATION_CLICKING_HEADER":		"Ĉu vi sciis? Vi povas alklaki la mapon por aldoni vojpunktojn.",
"NOTIFICATION_CLICKING_BODY":		"Vi povas alklaki la mapon por aldoni forirpunkton (verdan), aŭ alvenpunkton (ruĝan) " +
									"se la forirpunkto jam estas sur la mapo. " +
									"La adreso de la elektita loko montriĝos en la maldekstra kolumno. " + 
									"<br/><br/>" +
									"Vi povas foriri markilon per dua klako sur ĝi.",
"NOTIFICATION_DRAGGING_HEADER":		"Ĉu vi sciis? Vi povas treni la vojmarkilojn sur la mapo.",
"NOTIFICATION_DRAGGING_BODY":		"Vi povas treni markilon per klako sur ĝi, ne lasante la musbutonon. " +
									"Tiam vi povas movi la markilon sur la mapo kaj la vojo tuj ĝisdatiĝos. " +
									"<br/><br/>" +
									"Vi povas eĉ krei novajn markilojn se vi trenas ilin for de la vojo! ",
// do not translate below this line
"GUI_LEGAL_NOTICE": "Routing by <a href='http://project-osrm.org/'>Project OSRM</a> - Geocoder by <a href='http://wiki.openstreetmap.org/wiki/Nominatim'>Nominatim</a> - OSRM hosting by <a href='http://algo2.iti.kit.edu/'>KIT</a>",
"GUI_DATA_TIMESTAMP": "data: ",
"GUI_VERSION": "gui: ",
"QR": "QR"
};

// set GUI language on load
if( OSRM.DEFAULTS.LANUGAGE_ONDEMAND_RELOADING == true )
	OSRM.Localization.setLanguage("eo", true);
