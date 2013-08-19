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
// [Catalan language support]


OSRM.Localization["ca"] = {
// own language
"CULTURE": "ca",
"LANGUAGE": "català",
// gui
"GUI_START": "Inici",
"GUI_END": "Final",
"GUI_RESET": "&nbsp;&nbsp;Neteja&nbsp;&nbsp;",
"GUI_ZOOM_ON_ROUTE": "Vés a la ruta",
"GUI_ZOOM_ON_USER": "Vés a l'usuari",
"GUI_SEARCH": "&nbsp;&nbsp;Mostra&nbsp;&nbsp;",
"GUI_REVERSE": "Inverteix",
"GUI_START_TOOLTIP": "Introduïu un inici",
"GUI_END_TOOLTIP": "Introduïu una destinació",
"GUI_MAIN_WINDOW": "Finestra principal",
"GUI_ZOOM_IN": "Apropa't",
"GUI_ZOOM_OUT": "Allunya't",
// config
"GUI_CONFIGURATION": "Configuració",
"GUI_LANGUAGE": "Llengua",
"GUI_UNITS": "Unitats",
"GUI_KILOMETERS": "Kilòmetres",
"GUI_MILES": "Milles",
// abbreviations
"GUI_M": "m",
"GUI_KM": "km",
"GUI_MI": "mi",
"GUI_FT": "ft",
"GUI_H": "h",
"GUI_MIN": "mín",
"GUI_S": "s",
// mapping
"GUI_MAPPING_TOOLS": "Eines de mapatge",
"GUI_HIGHLIGHT_UNNAMED_ROADS": "Realça les vies sense nom",
"GUI_SHOW_PREVIOUS_ROUTES": "Mostra les rutes anteriors",
"OPEN_EDITOR": "Editor",
"OPEN_OSMBUGS": "Notes",
// geocoder
"SEARCH_RESULTS": "Cerca resultats",
"FOUND_X_RESULTS": "trobat %i resultats",
"TIMED_OUT": "Timed Out",
"NO_RESULTS_FOUND": "No s'ha trobat cap resultat",
"NO_RESULTS_FOUND_SOURCE": "No s'ha trobat cap resultats per a l'inici",
"NO_RESULTS_FOUND_TARGET": "No s'ha trobat cap resultats per al final",
// routing
"ROUTE_DESCRIPTION": "Descripció de la ruta",
"GET_LINK_TO_ROUTE": "Genera l'enllaç",
"GENERATE_LINK_TO_ROUTE": "s'està esperant l'enllaç",
"LINK_TO_ROUTE_TIMEOUT": "no disponible",
"GPX_FILE": "Fitxer GPX",
"DISTANCE": "Distància",
"DURATION": "Durada",
"YOUR_ROUTE_IS_BEING_COMPUTED": "s'està calculant la ruta...",
"NO_ROUTE_FOUND": "No hi ha cap ruta possible",
// printing
"OVERVIEW_MAP": "Mapa de referència",
"NO_ROUTE_SELECTED": "No heu seleccionat cap ruta",
// routing engines
"ENGINE_0": "Cotxe (la més ràpida)",
// tile server names
// (only required if names are different to OSRM.config)
//"TILE_SERVER_0": "osm.org",
//"TILE_SERVER_1": "osm.de",
//"TILE_SERVER_2": "MapQuest",
//"TILE_SERVER_3": "CloudMade",
//"TILE_SERVER_4": "Bing Road",
//"TILE_SERVER_5": "Bing Aerial",
// overlay server names
//(only required if names are different to OSRM.config)
//"OVERLAY_SERVER_0": "Small Components",
// directions
"N": "al nord",
"E": "a l'est",
"S": "al sud",
"W": "a l'oest",
"NE": "al nord-est",
"SE": "al sud-est",
"SW": "al sud-oest",
"NW": "al nort-est",
// driving directions
// %s: road name
// %d: direction
// [*]: will only be printed when there actually is a road name
"DIRECTION_0":"Instrucció desconeguda (per <b>%s</b>)",
"DIRECTION_1":"Continueu (per <b>%s</b>)",
"DIRECTION_2":"Feu un gir suau a la dreta (per <b>%s</b>)",
"DIRECTION_3":"Gireu a la dreta (per <b>%s</b>)",
"DIRECTION_4":"Feu un gir tancat a la dreta (per <b>%s</b>)",
"DIRECTION_5":"Feu un canvi de sentit (per <b>%s</b>)",
"DIRECTION_6":"Feu un gir tanct a l'esquerra (per <b>%s</b>)",
"DIRECTION_7":"Gireu a l'esquerra (per <b>%s</b>)",
"DIRECTION_8":"Feu un gir suau a l'esquerra (per <b>%s</b>)",
"DIRECTION_10":"Aneu cap <b>%d</b> (per <b>%s</b>)",
"DIRECTION_11-1":"Entreu a la rotonda i sortiu a la primera sortida (per <b>%s</b>)",
"DIRECTION_11-2":"Entreu a la rotonda i sortiu a la segona sortida (per <b>%s</b>)",
"DIRECTION_11-3":"Entreu a la rotonda i sortiu a la tercera sortida (per <b>%s</b>)",
"DIRECTION_11-4":"Entreu a la rotonda i sortiu a la quarta sortida (per  <b>%s</b>)",
"DIRECTION_11-5":"Entreu a la rotonda i sortiu a la cinquena sortida (per <b>%s</b>)",
"DIRECTION_11-6":"Entreu a la rotonda i sortiu a la sisena sortida (per <b>%s</b>)",
"DIRECTION_11-7":"Entreu a la rotonda i sortiu a la setena sortida (per <b>%s</b>)",
"DIRECTION_11-8":"Entreu a la rotonda i sortiu a la vuitena sortida (per <b>%s</b>)",
"DIRECTION_11-9":"Entreu a la rotonda i sortiu a la novena sortida (per <b>%s</b>)",
"DIRECTION_11-x":"Entreu a la rotonda i sortiu per una de les moltes sortides (per <b>%s</b>)",
"DIRECTION_15":"Heu arribat a la destinació",
// notifications
"NOTIFICATION_MAINTENANCE_HEADER":	"Aturada per manteniment programada",
"NOTIFICATION_MAINTENANCE_BODY":	"El lloc web de l'OSRM és fora de servei per a fer-ne manteniment. " + 
									"Tingueu paciència mentre es realitzen les actualitzacions. " +
									"El web tornarà a ser funcional ben aviat." +
									"<br/><br/>" + 
									"Mentrestant, si voleu podeu sortir fora i mapar un barri proper..." + 
									"<br/><br/><br/>[OSRM]",
"NOTIFICATION_LOCALIZATION_HEADER":	"Sabíeu que... podeu canviar la llengua?",
"NOTIFICATION_LOCALIZATION_BODY":	"You can use the pulldown menu in the upper left corner to select your favorite language. " +
									"<br/><br/>" +
									"No defalliu si la vostra llengua no és disponible. " +
									"Si voleu, poden ajudar propocionant-nos noves traduccions! " +
									"Aneu <a href='https://github.com/DennisSchiefer/Project-OSRM-Web'>aquí</a> per a més informació.",
"NOTIFICATION_CLICKING_HEADER":		"Sabíeu que... podeu clicar al mapa per posar-hi punts de ruta?",
"NOTIFICATION_CLICKING_BODY":		"Podeu clicar al mapa amb el botó primari del ratolí per establir el punt d'inici (verd) o un punt final (vermell), " +
									"si el punt d'inici ja existeix. " +
									"L'adreça de l'ubicació seleccionada es mostrarà en les caixes de l'esquerra. " + 
									"<br/><br/>" +
									"Podeu suprimir un punt clicant-hi altra vegada amb el botó primari del ratolí.",
"NOTIFICATION_DRAGGING_HEADER":		"Sabíeu que... podeu arrossegar cada punt de ruta del mapa?",
"NOTIFICATION_DRAGGING_BODY":		"Podeu arrossegar un punt clicant-hi am bel botó primari del ratolí i mantenint el botó premut. " +
									"Aleshores, podeu moure el punt pel mapa i la ruta s'actualitzarà instantàniament. " +
									"<br/><br/>" +
									"Fins i tot podeu crear punts intermitjos arrossegant-los fora de la ruta principal! ",
// do not translate below this line
"GUI_LEGAL_NOTICE": "Routing by <a href='http://project-osrm.org/'>Project OSRM</a> - Geocoder by <a href='http://wiki.openstreetmap.org/wiki/Nominatim'>Nominatim</a> - OSRM hosting by <a href='http://algo2.iti.kit.edu/'>KIT</a>",
"GUI_DATA_TIMESTAMP": "data: ",
"GUI_VERSION": "gui: ",
"QR": "QR"
};

// set GUI language on load
if( OSRM.DEFAULTS.LANUGAGE_ONDEMAND_RELOADING == true )
	OSRM.Localization.setLanguage("ca", true);
