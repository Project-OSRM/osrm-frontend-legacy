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
// [Finnish language support]


OSRM.Localization["fi"] = {
// own language
"CULTURE": "fi-FI",
"LANGUAGE": "Suomi",
// gui
"GUI_START": "Lähtöpaikka",
"GUI_END": "Määränpää",
"GUI_RESET": "Tyhjennä",
"GUI_ZOOM_ON_ROUTE": "Näytä reitti",
"GUI_ZOOM_ON_USER": "Näytä oma sijainti",
"GUI_SEARCH": "Etsi",
"GUI_REVERSE": "Käänteinen reitti",
"GUI_START_TOOLTIP": "Syötä lähtöpaikka",
"GUI_END_TOOLTIP": "Syötä määränpää",
"GUI_MAIN_WINDOW": "Pääikkuna",
"GUI_ZOOM_IN": "Lähennä",
"GUI_ZOOM_OUT": "Loitonna",
// config
"GUI_CONFIGURATION": "Asetukset",
"GUI_LANGUAGE": "Kieli",
"GUI_UNITS": "Yksiköt",
"GUI_KILOMETERS": "Kilometri",
"GUI_MILES": "Maili",
// mapping
"GUI_MAPPING_TOOLS": "Kartoitustyökalut",
"GUI_HIGHLIGHT_UNNAMED_ROADS": "Korosta nimettömät tiet",
"GUI_SHOW_PREVIOUS_ROUTES": "Näytä edelliset reitit",
"OPEN_EDITOR": "Editor",
"OPEN_OSMBUGS": "Notes",
// geocoder
"SEARCH_RESULTS": "Haun tulokset",
"FOUND_X_RESULTS": "Löytyi %i vaihtoehtoa",
"TIMED_OUT": "Aikakatkaisu",
"NO_RESULTS_FOUND": "Ei hakutuloksia",
"NO_RESULTS_FOUND_SOURCE": "Ei hakutuloksia lähtöpaikalle",
"NO_RESULTS_FOUND_TARGET": "Ei hakutuloksia määränpäälle",
// routing
"ROUTE_DESCRIPTION": "Reittiohjeet",
"GET_LINK_TO_ROUTE": "Luo linkki",
"GENERATE_LINK_TO_ROUTE": "odotetaan linkkiä",
"LINK_TO_ROUTE_TIMEOUT": "ei saatavilla",
"GPX_FILE": "GPX-tiedosto",
"DISTANCE": "Etäisyys",
"DURATION": "Aika",
"YOUR_ROUTE_IS_BEING_COMPUTED": "Reittiä lasketaan",
"NO_ROUTE_FOUND": "Reittiä ei löytynyt",
// printing
"OVERVIEW_MAP": "Yleiskuvakartta",
"NO_ROUTE_SELECTED": "Ei reittiä valittu",
// routing engines
"ENGINE_0": "Auto (nopein)",
// directions
"N": "pohjoiseen",
"E": "itään",
"S": "etelään",
"W": "länteen",
"NE": "koilliseen",
"SE": "kaakkoon",
"SW": "lounaaseen",
"NW": "luoteeseen",
// driving directions
// %s: road name
// %d: direction
// [*]: will only be printed when there actually is a road name
"DIRECTION_0":"Tuntematon ohje[ tielle <b>%s</b>]",
"DIRECTION_1":"Jatka[ tielle <b>%s</b>]",
"DIRECTION_2":"Käänny loivasti oikealle[ tielle <b>%s</b>]",
"DIRECTION_3":"Käänny oikealle[ tielle <b>%s</b>]",
"DIRECTION_4":"Käänny jyrkästi oikealle[ tielle <b>%s</b>]",
"DIRECTION_5":"Tee U-käännös[ tiellä <b>%s</b>]",
"DIRECTION_6":"Käänny jyrkästi vasemmalle [ tielle <b>%s</b>]",
"DIRECTION_7":"Käänny vasemmalle[ tielle <b>%s</b>]",
"DIRECTION_8":"Käänny loivasti vasemmalle[ tielle <b>%s</b>]",
"DIRECTION_10":"Aja <b>%d</b> [ tielle <b>%s</b>]",
"DIRECTION_11-1":"Aja liikenneympyrään ja poistu ensimmäisestä haarasta[ tielle <b>%s</b>]",
"DIRECTION_11-2":"Aja liikenneympyrään ja poistu toisesta haarasta[ tielle <b>%s</b>]",
"DIRECTION_11-3":"Aja liikenneympyrään ja poistu kolmannesta haarasta[ tielle <b>%s</b>]",
"DIRECTION_11-4":"Aja liikenneympyrään ja poistu neljännestä haarasta[ tielle <b>%s</b>]",
"DIRECTION_11-5":"Aja liikenneympyrään ja poistu viidennestä haarasta[ tielle <b>%s</b>]",
"DIRECTION_11-6":"Aja liikenneympyrään ja poistu kuudennesta haarasta[ tielle <b>%s</b>]",
"DIRECTION_11-7":"Aja liikenneympyrään ja poistu seitsemännestä haarasta[ tielle <b>%s</b>]",
"DIRECTION_11-8":"Aja liikenneympyrään ja poistu kahdeksannesta haarasta[ tielle <b>%s</b>]",
"DIRECTION_11-9":"Aja liikenneympyrään ja poistu yhdeksännestä haarasta[ tielle <b>%s</b>]",
"DIRECTION_11-x":"Aja liikenneympyrään ja poistu monen haaran jälkeen[ tielle <b>%s</b>]",
"DIRECTION_15":"Saavuit määränpäähän",
// notifications
"NOTIFICATION_MAINTENANCE_HEADER":	"Huoltotauko",
"NOTIFICATION_MAINTENANCE_BODY":	"OSRM-sivusto on väliaikaisesti pois käytöstä huoltotauon takia. " + 
									"Ole hyvä ja odota kunnes huoltotoimet ovat valmistuneet. " +
									"Sivusto tulee takaisin käyttöön pian." +
									"<br/><br/>" + 
									"Sillä välin voit halutessasi mennä ulos kartoittamaan naapurustoasi..." + 
									"<br/><br/><br/>[OSRM]",
"NOTIFICATION_LOCALIZATION_HEADER":	"Tiesitkö että voit vaihtaa käyttöliittymän kieltä?",
"NOTIFICATION_LOCALIZATION_BODY":	"Voit valita kielen ruudun vasemmasta yläkulmasta löytyvästä pudotusvalikosta." +
									"<br/><br/>" +
									"Älä huolestu jos et löydä kieltäsi valikosta. " +
									"Jos haluat, voit auttaa tekemään lisää käännöksiä! " +
									"Lisää tietoa <a href='https://github.com/DennisSchiefer/Project-OSRM-Web'>täällä</a>.",
"NOTIFICATION_CLICKING_HEADER":		"Tiesitkö että voit klikata karttaa lisätäksesi reittipisteen?",
"NOTIFICATION_CLICKING_BODY":		"Voit klikatat karttaa hiiren vasemmalla painikkeella asettaaksesi lähtöpaikan (vihreä) tai määränpään (punainen), " +
									"jos lähtpöpaikka on jo asetettu. " +
									"Valittujen paikkojen osoiteet näytetään vasemmassa reunassa olevissa laatikoissa.. " + 
									"<br/><br/>" +
									"Voit poistaa paikat kartalta klikkaamalla niitä uudestaan.",
"NOTIFICATION_DRAGGING_HEADER":		"Tiesitkö että voit raahata jokaista reittipistettä kartalla?",
"NOTIFICATION_DRAGGING_BODY":		"Voit raahata reittipistettä klikkaamalla sitä, ja pitämällä hiiren painikkeen painettuna. " +
									"Sitten voit siirtää pistettä kartalla, ja reitti päivittyy heti. " +
									"<br/><br/>" +
									"Voit jopa lisätä välipisteitä raahamalla reittiä keskeltä! "
};

// set GUI language tielle load
if( OSRM.DEFAULTS.LANUGAGE_ONDEMAND_RELOADING == true )
	OSRM.Localization.setLanguage("fi", true);
