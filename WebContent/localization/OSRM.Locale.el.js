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
// [Greek language support]


OSRM.Localization["el"] = {
// own language
"CULTURE": "el-GR",
"LANGUAGE": "Ελληνικά",
// gui
"GUI_START": "Αρχή",
"GUI_END": "Τέλος",
"GUI_RESET": "&nbsp;&nbsp;Καθαρισμός&nbsp;&nbsp;",
"GUI_ZOOM_ON_ROUTE": "Εστίαση στο δρομολόγιο",
"GUI_ZOOM_ON_USER": "Εστίαση στο χρήστη",
"GUI_SEARCH": "&nbsp;&nbsp;Εμφάνιση&nbsp;&nbsp;",
"GUI_REVERSE": "Αντιστροφή",
"GUI_START_TOOLTIP": "Εισαγωγή αφετηρίας",
"GUI_END_TOOLTIP": "Εισαγωγή προορισμού",
"GUI_MAIN_WINDOW": "Κύριο παράθυρο",
"GUI_ZOOM_IN": "Μεγέθυνση",
"GUI_ZOOM_OUT": "Σμίκρυνση",
// config
"GUI_CONFIGURATION": "Ρυθμίσεις",
"GUI_LANGUAGE": "Γλώσσα",
"GUI_UNITS": "Μονάδες",
"GUI_KILOMETERS": "Χιλιόμετρα",
"GUI_MILES": "Μίλια",
// mapping
"GUI_MAPPING_TOOLS": "Εργαλεία Χαρτογράφησης",
"GUI_HIGHLIGHT_UNNAMED_ROADS": "Τονισμός ανώνυμων οδών",
"GUI_SHOW_PREVIOUS_ROUTES": "Εμφάνιση προηγούμενων δρομολογίων",
"OPEN_EDITOR": "Επεξεργαστής",
"OPEN_OSMBUGS": "Σημειώσεις",
// geocoder
"SEARCH_RESULTS": "Αποτελέσματα Αναζήτησης",
"FOUND_X_RESULTS": "βρέθηκαν %i αποτελέσματα",
"TIMED_OUT": "Εκτός χρόνου",
"NO_RESULTS_FOUND": "Δεν βρέθηκαν αποτελέσματα",
"NO_RESULTS_FOUND_SOURCE": "Δεν βρέθηκαν αποτελέσματα για την αρχή",
"NO_RESULTS_FOUND_TARGET": "Δεν βρέθηκαν αποτελέσματα για το τέλος",
// routing
"ROUTE_DESCRIPTION": "Περιγραφή δρομολογίου",
"GET_LINK_TO_ROUTE": "Δημιουργία συνδέσμου",
"GENERATE_LINK_TO_ROUTE": "αναμονή για σύνδεσμο",
"LINK_TO_ROUTE_TIMEOUT": "δεν είναι διαθέσιμο",
"GPX_FILE": "Αρχείο GPX",
"DISTANCE": "Απόσταση",
"DURATION": "Διάρκεια",
"YOUR_ROUTE_IS_BEING_COMPUTED": "Το δρομολόγιό σας υπολογίζεται",
"NO_ROUTE_FOUND": "Αδύτατο το δρομολόγιο",
// printing
"OVERVIEW_MAP": "Overview Map",
"NO_ROUTE_SELECTED": "Δεν επιλέχτηκε δρομολόγιο",
// routing engines
"ENGINE_0": "Αυτοκίνητο (γρηγορότερο)",
// directions
"N": "βόρεια",
"E": "ανατολικά",
"S": "νότια",
"W": "δυτικά",
"NE": "βορειοανατολικά",
"SE": "νοτιοανατολικά",
"SW": "νοτιοδυτικά",
"NW": "βορειοδυτικά",
// driving directions
// %s: road name
// %d: direction
// [*]: will only be printed when there actually is a road name
"DIRECTION_0":"Άγνωστη οδηγία[ στην <b>%s</b>]",
"DIRECTION_1":"Συνεχίστε[ στην <b>%s</b>]",
"DIRECTION_2":"Στρίψτε λοξά δεξιά[ στην <b>%s</b>]",
"DIRECTION_3":"Στρίψτε δεξιά[ στην <b>%s</b>]",
"DIRECTION_4":"Στρίψτε κλειστά δεξιά[ στην <b>%s</b>]",
"DIRECTION_5":"Αναστροφή[ στην <b>%s</b>]",
"DIRECTION_6":"Στρίψτε κλειστά αριστερά[ στην <b>%s</b>]",
"DIRECTION_7":"Στρίψτε αριστερά[ στην <b>%s</b>]",
"DIRECTION_8":"Στρίψτε λοξά αριστερά[ στην <b>%s</b>]",
"DIRECTION_10":"Κατευθυνθείτε <b>%d</b>[ στην <b>%s</b>]",
"DIRECTION_11-1":"Μπείτε στον κυκλικό κόμβο και βγείτε στη πρώτη έξοδο[ στην <b>%s</b>]",
"DIRECTION_11-2":"Μπείτε στον κυκλικό κόμβο και βγείτε στη δεύτερη έξοδο[ στην <b>%s</b>]",
"DIRECTION_11-3":"Μπείτε στον κυκλικό κόμβο και βγείτε στη τρίτη έξοδο[ στην <b>%s</b>]",
"DIRECTION_11-4":"Μπείτε στον κυκλικό κόμβο και βγείτε στη τέταρτη έξοδο[ στην <b>%s</b>]",
"DIRECTION_11-5":"Μπείτε στον κυκλικό κόμβο και βγείτε στη πέμπτη έξοδο[ στην <b>%s</b>]",
"DIRECTION_11-6":"Μπείτε στον κυκλικό κόμβο και βγείτε στη έκτη έξοδο[ στην <b>%s</b>]",
"DIRECTION_11-7":"Μπείτε στον κυκλικό κόμβο και βγείτε στη έβδομη έξοδο[ στην <b>%s</b>]",
"DIRECTION_11-8":"Μπείτε στον κυκλικό κόμβο και βγείτε στη όγδοη έξοδο[ στην <b>%s</b>]",
"DIRECTION_11-9":"Μπείτε στον κυκλικό κόμβο και βγείτε στη ένατη έξοδο[ στην <b>%s</b>]",
"DIRECTION_11-x":"Μπείτε στον κυκλικό κόμβο και βγείτε σε μία από τις πολλές εξόδους[ στην <b>%s</b>]",
"DIRECTION_15":"Φτάσατε στον προορισμό σας",
// notifications
"NOTIFICATION_MAINTENANCE_HEADER":	"Προγραμματισμένη Συντήρηση",
"NOTIFICATION_MAINTENANCE_BODY":	"Ο ιστότοπος OSRM είναι εκτός για προγραμματισμένη συντήρηση. " + 
									"Παρακαλώ κάντε υπομονή όσο γίνονται οι απαραίτητες αναβαθμίσεις. " +
									"Θα είμαστε πάλι κοντά σας σύντομα." +
									"<br/><br/>" + 
									"Στο μεταξύ ίσως να θέλετε να βγείτε και να χαρτογραφήσετε μια φιλική γειτονιά κοντά σας..." + 
									"<br/><br/><br/>[OSRM]",
"NOTIFICATION_LOCALIZATION_HEADER":	"Το ξέρετε? Ότι μπορείτε να αλλλάξετε τη γλώσσα εμφάνισης.",
"NOTIFICATION_LOCALIZATION_BODY":	"Μπορείτε να χρησιμοποιήσετε το αναδιπλώμενο μενού στην πάνω αριστερή γωνία για να επιλέξετε την προτιμώμενη γλώσσα σας. " +
									"<br/><br/>" +
									"Μην απογοητεύεστε αν δεν μπορείτε να βρείτε τη γλώσσα της επιλογής σας. " +
									"Αν θέλετε, μπορείτε να βοηθήσετε παρέχοντας πρόσθετες μεταφράσεις! " +
									"Μπείτε <a href='https://github.com/DennisSchiefer/Project-OSRM-Web'>εδώ</a> για περισσότερες πληροφορίες.",
"NOTIFICATION_CLICKING_HEADER":		"Το ξέρετε? Ότι μπορείτε να κάνετε κλικ στο χάρτη και να θέσετε δείκτες δρομολογίου.",
"NOTIFICATION_CLICKING_BODY":		"Μπορείτε να κάνετε κλικ στο χάρτη με το αριστερό κουμπί του ποντικιού για να θέσετε το δείκτη αρχής (πράσινο) ή το δείκτη τέλους (κόκκινο), " +
									"εάν ο δείκτης αρχής υπάρχει ήδη. " +
									"Η διεύθυνση της επιλεγμένης τοποθεσίας θα εμφανίζεται στα πλαίσια αριστερά. " + 
									"<br/><br/>" +
									"Μπορείτε να σβήσετε έναν δείκτη κάνοντας κλικ ξανά πάνω του με το αριστερό κουμπί του ποντικιού.",
"NOTIFICATION_DRAGGING_HEADER":		"Το ξέρετε? Ότι μπορείτε να σύρετε κάθε δείκτη δρομολογίου στο χάρτη.",
"NOTIFICATION_DRAGGING_BODY":		"Μπορείτε να σύρετε έναν δείκτη κάνοντας κλικ πάνω του με το αριστερό κουμπί του ποντικιού και κρατώντας το κουμπί πατημένο. " +
									"Μετά μπορείτε να μετακινήσετε το δείκτη οπουδήποτε στο χάρτη και το δρομολόγιο θα ενημερώνεται την ίδια στιγμή. " +
									"<br/><br/>" +
									"Μπορείτε ακόμα να δημιουργήσετε ενδιάμεσους δείκτες σύροντας τους εκτός του κύριου δρομολογίου! ",
// do not translate below this line
"GUI_LEGAL_NOTICE": "Routing by <a href='http://project-osrm.org/'>Project OSRM</a> - Geocoder by <a href='http://wiki.openstreetmap.org/wiki/Nominatim'>Nominatim</a> - OSRM hosting by <a href='http://algo2.iti.kit.edu/'>KIT</a>",
"GUI_DATA_TIMESTAMP": "data: ",
"GUI_VERSION": "gui: ",
"QR": "QR"
};

// set GUI language on load
if( OSRM.DEFAULTS.LANUGAGE_ONDEMAND_RELOADING == true )
	OSRM.Localization.setLanguage("el", true);
