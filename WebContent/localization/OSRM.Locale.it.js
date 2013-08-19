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
// [Italian language support]


OSRM.Localization["it"] = {
// own language
"CULTURE": "it-IT",
"LANGUAGE": "Italiano",
// gui
"GUI_START": "Partenza",
"GUI_END": "Destinazione",
"GUI_RESET": "&nbsp;&nbsp;Reset&nbsp;&nbsp;",
"GUI_ZOOM_ON_ROUTE": "Zoom su Percorso",
"GUI_ZOOM_ON_USER": "Zoom su Utente",
"GUI_SEARCH": "&nbsp;&nbsp;Mostra&nbsp;&nbsp;",
"GUI_REVERSE": "Inverti",
"GUI_START_TOOLTIP": "Inserire la Partenza",
"GUI_END_TOOLTIP": "Inserire la destinazione",
"GUI_MAIN_WINDOW": "Finestra principale",
"GUI_ZOOM_IN": "Ingrandire",
"GUI_ZOOM_OUT": "Diminuire",
// config
"GUI_CONFIGURATION": "Configurazione",
"GUI_LANGUAGE": "Lingua",
"GUI_UNITS": "Unità",
"GUI_KILOMETERS": "Chilometri",
"GUI_MILES": "Miglia",
// abbreviations
"GUI_M": "m",
"GUI_KM": "km",
"GUI_MI": "mi",
"GUI_FT": "ft",
"GUI_H": "h",
"GUI_MIN": "min",
"GUI_S": "s",
// mapping
"GUI_MAPPING_TOOLS": "Strumenti per la Mappatura",
"GUI_HIGHLIGHT_UNNAMED_ROADS": "Evidenzia strade senza nome",
"GUI_SHOW_PREVIOUS_ROUTES": "Mostra i percorsi precedenti",
"OPEN_EDITOR": "Editor",
"OPEN_OSMBUGS": "Notes",
// geocoder
"SEARCH_RESULTS": "Risultati della ricerca",
"FOUND_X_RESULTS": "trovati %i risultati",
"TIMED_OUT": "Timeout",
"NO_RESULTS_FOUND": "Nessun risultato trovato",
"NO_RESULTS_FOUND_SOURCE": "Nessun risultato trovato per la partenza",
"NO_RESULTS_FOUND_TARGET": "Nessun risultato trovato per la destinazione",
// routing
"ROUTE_DESCRIPTION": "Descrizione del percorso",
"GET_LINK_TO_ROUTE": "Genera un Link",
"GENERATE_LINK_TO_ROUTE": "in attesa del link",
"LINK_TO_ROUTE_TIMEOUT": "non disponibile",
"GPX_FILE": "File GPX",
"DISTANCE": "Distanza",
"DURATION": "Durata",
"YOUR_ROUTE_IS_BEING_COMPUTED": "Sto calcolando il tuo percorso",
"NO_ROUTE_FOUND": "Nessun percorso possibile",
// printing
"OVERVIEW_MAP": "Mappa d'insieme",
"NO_ROUTE_SELECTED": "Nessun percorso selezionato",
// routing engines
"ENGINE_0": "Macchina (più veloce)",
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
"N": "nord",
"E": "est",
"S": "sud",
"W": "ovest",
"NE": "nor-dest",
"SE": "sud-est",
"SW": "sud-ovest",
"NW": "nord-ovest",
// driving directions
// %s: road name
// %d: direction
// [*]: will only be printed when there actually is a road name
"DIRECTION_0":"Istruzione sconosciuta[ su <b>%s</b>]",
"DIRECTION_1":"Continuare[ su <b>%s</b>]",
"DIRECTION_2":"Girare leggermente a destra[ su <b>%s</b>]",
"DIRECTION_3":"Girare a destra[ su <b>%s</b>]",
"DIRECTION_4":"Girare decisamente a destra[ su <b>%s</b>]",
"DIRECTION_5":"Fare inversione a U[ su <b>%s</b>]",
"DIRECTION_6":"Girare decisamente a sinistra[ su <b>%s</b>]",
"DIRECTION_7":"Girare a sinistra[ su <b>%s</b>]",
"DIRECTION_8":"Girare leggermente a sinistra[ su <b>%s</b>]",
"DIRECTION_10":"Dirigersi a <b>%d</b>[ su <b>%s</b>]",
"DIRECTION_11-1":"Immettersi nella rotonda ed abbandonarla alla prima uscita[ su <b>%s</b>]",
"DIRECTION_11-2":"Immettersi nella rotonda ed abbandonarla alla seconda uscita[ su <b>%s</b>]",
"DIRECTION_11-3":"Immettersi nella rotonda ed abbandonarla alla terza uscita[ su <b>%s</b>]",
"DIRECTION_11-4":"Immettersi nella rotonda ed abbandonarla alla quarta uscita[ su <b>%s</b>]",
"DIRECTION_11-5":"Immettersi nella rotonda ed abbandonarla alla quinta uscita[ su <b>%s</b>]",
"DIRECTION_11-6":"Immettersi nella rotonda ed abbandonarla alla sesta uscita[ su <b>%s</b>]",
"DIRECTION_11-7":"Immettersi nella rotonda ed abbandonarla alla settima uscita[ su <b>%s</b>]",
"DIRECTION_11-8":"Immettersi nella rotonda ed abbandonarla alla ottava uscita[ su <b>%s</b>]",
"DIRECTION_11-9":"Immettersi nella rotonda ed abbandonarla alla nona uscita[ su <b>%s</b>]",
"DIRECTION_11-x":"Immettersi nella rotonda ed abbandonarla ad una delle tante uscite[ su <b>%s</b>]",
"DIRECTION_15":"Hai raggiunto la tua destinazione",
// notifications
"NOTIFICATION_MAINTENANCE_HEADER":	"Manutenzione programmata",
"NOTIFICATION_MAINTENANCE_BODY":	"Il sito di OSRM è offline per una manutenzione programmata. " + 
									"Ti preghiamo di pazientare mentre vengono svolti gli aggiornamenti richiesti. " +
									"Il sito tornerà a breve online." +
									"<br/><br/>" + 
									"Nel frattempo potresti voler andare fuori a mappare un quartiere che conosci vicino a te..." + 
									"<br/><br/><br/>[OSRM]",
"NOTIFICATION_LOCALIZATION_HEADER":	"Lo sapevi? Puoi cambiare la lingua dei messaggi.",
"NOTIFICATION_LOCALIZATION_BODY":	"Puoi usare il menù a tendina nell'angolo in alto a sinistra per selezionare la tua lingua preferita. " +
									"<br/><br/>" +
									"Se non trovi la tua lingua preferita non preoccuparti. " +
									"Se vuoi, puoi aiutare ad aggiungere ulteriori traduzioni! " +
									"Visita <a href='https://github.com/DennisSchiefer/Project-OSRM-Web'>qui</a> per maggiori informazioni.",
"NOTIFICATION_CLICKING_HEADER":		"Lo sapevi? Puoi cliccare sulla mappa per impostare i marcatori del percorso.",
"NOTIFICATION_CLICKING_BODY":		"Puoi cliccare sulla mappa con il bottone sinistro del mouse per impostare un marcatore sorgente (verde) o un marcatore destinatario (rosso), " +
									"se il marcatore sorgente esiste già. " +
									"L'indirizzo del luogo selezionato sarà mostrato nei box sulla sinistra. " + 
									"<br/><br/>" +
									"Puoi cancellare un marcatore cliccandolo nuovamente con il tasto sinistro.",
"NOTIFICATION_DRAGGING_HEADER":		"Lo sapevi? Puoi trascinare ogni marcatore di percorso sulla mappa.",
"NOTIFICATION_DRAGGING_BODY":		"Puoi trascinare un marcatore cliccandolo con il tasto sinistro e tenendo il bottone premuto. " +
									"Successivamente puoi muovere il marcatore per la mappa ed il percorso sarà aggiornato istantaneamente. " +
									"<br/><br/>" +
									"Puoi perfino creare marcatori intermedi trascinandoli al di fuori del percorso principale! ",
// do not translate below this line
"GUI_LEGAL_NOTICE": "Routing by <a href='http://project-osrm.org/'>Project OSRM</a> - Geocoder by <a href='http://wiki.openstreetmap.org/wiki/Nominatim'>Nominatim</a> - OSRM hosting by <a href='http://algo2.iti.kit.edu/'>KIT</a>",
"GUI_DATA_TIMESTAMP": "data: ",
"GUI_VERSION": "gui: ",
"QR": "QR"
};

// set GUI language on load
if( OSRM.DEFAULTS.LANUGAGE_ONDEMAND_RELOADING == true )
	OSRM.Localization.setLanguage("it", true);
