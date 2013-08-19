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
// [Norwegian bokmål language support]


OSRM.Localization["nb"] = {
// own language
"CULTURE": "nb-NO",
"LANGUAGE": "Bokmål",
// gui
"GUI_START": "Fra",
"GUI_END": "Til",
"GUI_RESET": "&nbsp;&nbsp;Nullstill&nbsp;&nbsp;",
"GUI_ZOOM_ON_ROUTE": "Zoom til rute",
"GUI_ZOOM_ON_USER": "Zoom til bruker",
"GUI_SEARCH": "&nbsp;&nbsp;Søk&nbsp;&nbsp;",
"GUI_REVERSE": "Reverser",
"GUI_START_TOOLTIP": "Legg inn startsted",
"GUI_END_TOOLTIP": "Legg inn reisemål",
"GUI_MAIN_WINDOW": "Hovedvindu",
"GUI_ZOOM_IN": "Zoom inn",
"GUI_ZOOM_OUT": "Zoom ut",
// config
"GUI_CONFIGURATION": "Oppsett",
"GUI_LANGUAGE": "Språk",
"GUI_UNITS": "Enheter",
"GUI_KILOMETERS": "Kilometer",
"GUI_MILES": "Miles",
// mapping
"GUI_MAPPING_TOOLS": "Kartleggingsverktøy",
"GUI_HIGHLIGHT_UNNAMED_ROADS": "Uthev veier uten navn",
"GUI_SHOW_PREVIOUS_ROUTES": "Vis tidligere ruter",
"OPEN_EDITOR": "Editor",
"OPEN_OSMBUGS": "Notes",
// geocoder
"SEARCH_RESULTS": "Søkeresultater",
"FOUND_X_RESULTS": "fant %i resultater",
"TIMED_OUT": "Tidsavbrudd",
"NO_RESULTS_FOUND": "Fant ingen resultater",
"NO_RESULTS_FOUND_SOURCE": "Fant ingen resultater for startsted",
"NO_RESULTS_FOUND_TARGET": "Fant ingen resultater for reisemål",
// routing
"ROUTE_DESCRIPTION": "Rutebeskrivelse",
"GET_LINK_TO_ROUTE": "Lag direktekobling",
"GENERATE_LINK_TO_ROUTE": "venter på kobling",
"LINK_TO_ROUTE_TIMEOUT": "ikke tilgjengelig",
"GPX_FILE": "GPX-fil",
"DISTANCE": "Avstand",
"DURATION": "Reisetid",
"YOUR_ROUTE_IS_BEING_COMPUTED": "Ruten din beregnes",
"NO_ROUTE_FOUND": "Ikke mulig å finne rute",
// printing
"OVERVIEW_MAP": "Oversiktskart",
"NO_ROUTE_SELECTED": "Ingen rute valgt",
// routing engines
"ENGINE_0": "Bil (raskest)",
// directions
"N": "nord",
"E": "øst",
"S": "sør",
"W": "vest",
"NE": "nordøst",
"SE": "sørøst",
"SW": "sørvest",
"NW": "nordvest",
// driving directions
// %s: road name
// %d: direction
// [*]: will only be printed when there actually is a road name
"DIRECTION_0":"Ukjent instruksjon[ inn på <b>%s</b>]",
"DIRECTION_1":"Fortsett[ inn på <b>%s</b>]",
"DIRECTION_2":"Hold svakt mot høyre[ inn på <b>%s</b>]",
"DIRECTION_3":"Ta til høyre[ inn på <b>%s</b>]",
"DIRECTION_4":"Ta skarpt til høyre[ inn på <b>%s</b>]",
"DIRECTION_5":"U-sving[ inn på <b>%s</b>]",
"DIRECTION_6":"Ta skarpt til venstre[ inn på <b>%s</b>]",
"DIRECTION_7":"Ta til venstre[ inn på <b>%s</b>]",
"DIRECTION_8":"Hold svakt mot venstre[ inn på <b>%s</b>]",
"DIRECTION_10":"Kjør <b>%dover</b>[ inn på <b>%s</b>]",
"DIRECTION_11-1":"Ta første avkjøring i rundkjøringen[ inn på <b>%s</b>]",
"DIRECTION_11-2":"Ta andre avkjøring i rundkjøringen[ inn på <b>%s</b>]",
"DIRECTION_11-3":"Ta tredje avkjøring i rundkjøringen[ inn på <b>%s</b>]",
"DIRECTION_11-4":"Ta fjerde avkjøring i rundkjøringen[ inn på <b>%s</b>]",
"DIRECTION_11-5":"Ta femte avkjøring i rundkjøringen[ inn på <b>%s</b>]",
"DIRECTION_11-6":"Ta sjette avkjøring i rundkjøringen[ inn på <b>%s</b>]",
"DIRECTION_11-7":"Ta sjuende avkjøring i rundkjøringen[ inn på <b>%s</b>]",
"DIRECTION_11-8":"Ta åttende avkjøring i rundkjøringen[ inn på <b>%s</b>]",
"DIRECTION_11-9":"Ta niende avkjøring i rundkjøringen[ inn på <b>%s</b>]",
"DIRECTION_11-x":"Kjør inn i rundkjøringen og ta av på en av de for mange avkjøringene[ inn på <b>%s</b>]",
"DIRECTION_15":"Du er fremme",
// notifications
"NOTIFICATION_MAINTENANCE_HEADER":	"Planlagt vedlikehold",
"NOTIFICATION_MAINTENANCE_BODY":	"OSRMs nettsted er nede for planlagt vedlikehold. " +
									"Vennligst vær tålmodig mens de nødvendige oppdateringene gjøres. " +
									"Siden vil snart være tilgjengelig igjen." +
									"<br/><br/>" +
									"I mellomtiden vil du kanskje gå ut og kartlegge et nabolag i nærheten..." +
									"<br/><br/><br/>[OSRM]",
"NOTIFICATION_LOCALIZATION_HEADER":	"Visste du at du kan endre språk?",
"NOTIFICATION_LOCALIZATION_BODY":	"Du kan velge favorittspråket ditt i nedtrekksmenyen i øvre venstre hjørne. " +
									"<br/><br/>" +
									"Ikke fortvil hvis du ikke finner ditt foretrukne språk, " +
									"hvis du vil kan du hjelpe til med å tilby flere oversettelser! " +
									"Se <a href='https://github.com/DennisSchiefer/Project-OSRM-Web'>her</a> for mer informasjon.",
"NOTIFICATION_CLICKING_HEADER":		"Visste du at du kan trykke i kartet for å sette rutemarkører?", //fixme better word for marker?
"NOTIFICATION_CLICKING_BODY":		"Du kan trykke i kartet med venstre museknapp for å sette startmarkør (grønn) eller, hvis startmarkøren allerede fins, målmarkør (rød). " +
									"Adressen til stedet du har markert vises i boksene til venstre. " +
									"<br/><br/>" +
									"Du fjerner markøren ved å trykke på den igjen.",
"NOTIFICATION_DRAGGING_HEADER":		"Visste du at du kan dra rutemarkørene i kartet?",
"NOTIFICATION_DRAGGING_BODY":		"Du kan dra markørene ved å trykke og holde nede venstre museknapp. " +
									"Da kan du flytte markøren rundt på kartet, og ruten din blir kontinuerlig oppdatert. " +
									"<br/><br/>" +
									"Du kan til og med lage via-punkter ved å dra dem ut fra hovedruten! ",
};

// set GUI language on load
if( OSRM.DEFAULTS.LANUGAGE_ONDEMAND_RELOADING == true )
	OSRM.Localization.setLanguage("nb", true);
