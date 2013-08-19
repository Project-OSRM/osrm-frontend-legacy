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
// [Slovak language support]


OSRM.Localization["sk"] = {
// own language
"CULTURE": "sk-SK",
"LANGUAGE": "Slovensky", 		
// gui
"GUI_START": "Skade",
"GUI_END": "Kam",
"GUI_RESET": "Vyčistiť",
"GUI_ZOOM_ON_ROUTE": "Zoom na trasu",
"GUI_ZOOM_ON_USER": "Zoom na užívateľ",
"GUI_SEARCH": "Ukázať",
"GUI_REVERSE": "Prehodiť",
"GUI_START_TOOLTIP": "Zadejte začiatok cesty",
"GUI_END_TOOLTIP": "Zadejte cieľ cesty",
"GUI_MAIN_WINDOW": "Hlavné Okno",
"GUI_ZOOM_IN": "Priblížiť",
"GUI_ZOOM_OUT": "Odialiť",
// config
"GUI_CONFIGURATION": "Nastavenia",
"GUI_LANGUAGE": "Jazyk",
"GUI_UNITS": "Jednotky",
"GUI_KILOMETERS": "kilometre",
"GUI_MILES": "míle",
// mapping
"GUI_MAPPING_TOOLS": "Mapovacie nástroje",
"GUI_HIGHLIGHT_UNNAMED_ROADS": "Zvýrazniť nepomenované ulice",
"GUI_SHOW_PREVIOUS_ROUTES": "Zobraziť predchádzajúce trasy",
"OPEN_EDITOR": "Editor",
"OPEN_OSMBUGS": "Notes",
// geocoder
"SEARCH_RESULTS": "Výsledky hľadania",
"FOUND_X_RESULTS": "našlo sa %i výsledkov",
"TIMED_OUT": "Časová lehota uplynula",
"NO_RESULTS_FOUND": "Nie sú žiadne výsledky",
"NO_RESULTS_FOUND_SOURCE": "Nie sú žiadne výsledky pre začiatok trasy",
"NO_RESULTS_FOUND_TARGET": "Nie sú žiadne výsledky pre koniec trasy",
// routing
"ROUTE_DESCRIPTION": "Popis trasy",
"GET_LINK_TO_ROUTE": "Generovať odkaz",
"GENERATE_LINK_TO_ROUTE": "čakanie na odkaz",
"LINK_TO_ROUTE_TIMEOUT": "nie je k dispozícii",
"GPX_FILE": "GPX soubor",
"DISTANCE": "Vzdialenosť",
"DURATION": "Doba",
"YOUR_ROUTE_IS_BEING_COMPUTED": "Vaša trasa bola vyznačená",
"NO_ROUTE_FOUND": "Trasu nejde vyznačiť",
// printing
"OVERVIEW_MAP": "Prehľadová mapka",
"NO_ROUTE_SELECTED": "Nie je vybraná trasa",
// routing engines
"ENGINE_0": "Auto (najrýchlejšie)",
// directions
"N": "sever",
"E": "východ",
"S": "juh",
"W": "západ",
"NE": "severovýchod",
"SE": "juhovýchod",
"SW": "juhozápad",
"NW": "severozápad",
// driving directions
// %s: road name
// %d: direction
// [*]: will only be printed when there actually is a road name
"DIRECTION_0":"Neznámy pokyn [ na <b>%s</b>]",
"DIRECTION_1":"Pokračujte[ cestou <b>%s</b>]",
"DIRECTION_2":"Odbočte miere vpravo[ na cestu <b>%s</b>]",
"DIRECTION_3":"Odbočte vpravo[ na cestu <b>%s</b>]",
"DIRECTION_4":"Odbočte prudko doprava[ na cestu <b>%s</b>]",
"DIRECTION_5":"Otočte sa[ na cestu <b>%s</b>]",
"DIRECTION_6":"Odbočte prudko doľava[ na cestu <b>%s</b>]",
"DIRECTION_7":"Odbočte doľava[ na cestu <b>%s</b>]",
"DIRECTION_8":"Odbočte mierne doľava[ na cestu <b>%s</b>]",
"DIRECTION_10":"Choďte na <b>%d</b>[ cestou <b>%s</b>]",
"DIRECTION_11-1":"Choďte na kruhový objazd a opusite ho prvým výjazdom[ na cestu <b>%s</b>]",
"DIRECTION_11-2":"Choďte na kruhový objazd a opusite ho druhým výjazdom[ na cestu <b>%s</b>]",
"DIRECTION_11-3":"Choďte na kruhový objazd a opusite ho tretím výjazdom[ na cestu <b>%s</b>]",
"DIRECTION_11-4":"Choďte na kruhový objazd a opusite ho štvrtým výjazdom[ na cestu <b>%s</b>]",
"DIRECTION_11-5":"Choďte na kruhový objazd a opusite ho piatym výjazdom[ na cestu <b>%s</b>]",
"DIRECTION_11-6":"Choďte na kruhový objazd a opusite ho šiestym výjazdom[ na cestu <b>%s</b>]",
"DIRECTION_11-7":"Choďte na kruhový objazd a opusite ho siedmym výjazdom[ na cestu <b>%s</b>]",
"DIRECTION_11-8":"Choďte na kruhový objazd a opusite ho ôsmym výjazdom[ na cestu <b>%s</b>]",
"DIRECTION_11-9":"Choďte na kruhový objazd a opusite ho deviatym výjazdom[ na cestu <b>%s</b>]",
"DIRECTION_11-1":"Choďte na kruhový objazd a opusite ho vami vybraným výjazdom[ na cestu <b>%s</b>]",
"DIRECTION_15":"Ste v cieli"
};

// set GUI language on load
if( OSRM.DEFAULTS.LANUGAGE_ONDEMAND_RELOADING == true )
	OSRM.Localization.setLanguage("sk", true);
