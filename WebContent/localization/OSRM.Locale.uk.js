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
// [Ukrainian language support]


OSRM.Localization["uk"] = {
// own language
"CULTURE": "uk-UA",
"LANGUAGE": "Українська",
// gui
"GUI_START": "Початок",
"GUI_END": "Кінець",
"GUI_RESET": "Скинути",
"GUI_ZOOM_ON_ROUTE": "Масштабувати за маршрутом",
"GUI_ZOOM_ON_USER": "Масштабувати за розташуванням користувача",
"GUI_SEARCH": "Показати",
"GUI_REVERSE": "Зворотний напрям",
"GUI_START_TOOLTIP": "Вкажіть початкову точку",
"GUI_END_TOOLTIP": "Вкажіть пункт призначення",
"GUI_MAIN_WINDOW": "Головне вікно",
"GUI_ZOOM_IN": "Наблизити",
"GUI_ZOOM_OUT": "Віддалити",
// config
"GUI_CONFIGURATION": "Налаштування",
"GUI_LANGUAGE": "Мова",
"GUI_UNITS": "Одиниці",
"GUI_KILOMETERS": "Кілометри",
"GUI_MILES": "Милі",
// mapping
"GUI_MAPPING_TOOLS": "Інструменти мапи",
"GUI_HIGHLIGHT_UNNAMED_ROADS": "Підсвічувати безіменні вулиці",
"GUI_SHOW_PREVIOUS_ROUTES": "Показувати попередній маршрут",
"OPEN_EDITOR": "Editor",
"OPEN_OSMBUGS": "Notes",
// geocoder
"SEARCH_RESULTS": "Результати пошуку",
"FOUND_X_RESULTS": "знайдено %i результатів",
"TIMED_OUT": "Перевищений інтервал очікування",
"NO_RESULTS_FOUND": "Нічого не знайдено",
"NO_RESULTS_FOUND_SOURCE": "Початкова точка не знайдена",
"NO_RESULTS_FOUND_TARGET": "Пункт призначення не знайдений",
// routing
"ROUTE_DESCRIPTION": "Опис маршруту",
"GET_LINK_TO_ROUTE": "Постійне посилання",
"GENERATE_LINK_TO_ROUTE": "створення посилання",
"LINK_TO_ROUTE_TIMEOUT": "недоступно",
"GPX_FILE": "Файл GPX",
"DISTANCE": "Відстань",
"DURATION": "Час",
"YOUR_ROUTE_IS_BEING_COMPUTED": "Обрахунок маршруту",
"NO_ROUTE_FOUND": "Маршрут не можливий",
// printing
"OVERVIEW_MAP": "Оглядова мапа",
"NO_ROUTE_SELECTED": "Маршрут не вибрано",
// routing engines
"ENGINE_0": "Автомобіль (швидко)",
// directions
"N": "північ",
"E": "схід",
"S": "південь",
"W": "захід",
"NE": "північний схід",
"SE": "південний схід",
"SW": "південний захід",
"NW": "північний захід",
// driving directions
// %s: road name
// %d: direction
// [*]: will only be printed when there actually is a road name
"DIRECTION_0":"Невідома інструкція[ по <b>%s</b>]",
"DIRECTION_1":"Продовжуйте рух[ по <b>%s</b>]",
"DIRECTION_2":"Прийміть вправо[ на <b>%s</b>]",
"DIRECTION_3":"Поверніть направо[ на <b>%s</b>]",
"DIRECTION_4":"Поверніть різко направо[ на <b>%s</b>]",
"DIRECTION_5":"U-подібний розворот[ на <b>%s</b>]",
"DIRECTION_6":"Поверніть різко наліво[ на <b>%s</b>]",
"DIRECTION_7":"Поверніть наліво[ на <b>%s</b>]",
"DIRECTION_8":"Приміть вліво[ на <b>%s</b>]",
"DIRECTION_10":"Прямуйте на <b>%d</b>[ по <b>%s</b>]",
"DIRECTION_11-1":"На кільцевій дорозі виконайте 1-ий з’їзд[ на <b>%s</b>]",
"DIRECTION_11-2":"На кільцевій дорозі виконайте 2-ий з’їзд[ на <b>%s</b>]",
"DIRECTION_11-3":"На кільцевій дорозі виконайте 3-ій з’їзд[ на <b>%s</b>]",
"DIRECTION_11-4":"На кільцевій дорозі виконайте 4-ий з’їзд[ на <b>%s</b>]",
"DIRECTION_11-5":"На кільцевій дорозі виконайте 5-ий з’їзд[ на <b>%s</b>]",
"DIRECTION_11-6":"На кільцевій дорозі виконайте 6-ий з’їзд[ на <b>%s</b>]",
"DIRECTION_11-7":"На кільцевій дорозі виконайте 7-ий з’їзд[ на <b>%s</b>]",
"DIRECTION_11-8":"На кільцевій дорозі виконайте 8-ий з’їзд[ на <b>%s</b>]",
"DIRECTION_11-9":"На кільцевій дорозі виконайте 9-ий з’їзд[ на <b>%s</b>]",
"DIRECTION_11-x":"На кільцевій дорозі виконайте з’їзд[ на <b>%s</b>]",
"DIRECTION_15":"Ви прибули до пункту призначення",
// notifications
"NOTIFICATION_MAINTENANCE_HEADER":	"Планове технічне обслуговування",
"NOTIFICATION_MAINTENANCE_BODY":	"Сайт OSRM призупинений на планове технічне обслуговування. " + 
									"Будь ласка, будьте терплячими поки виконуються необхідні оновлення. " +
									"Сайт відновить роботу найближчим часом." +
									"<br/><br/>" + 
									"На цей час Ви можете оглянути мапу поруч з Вами…" + 
									"<br/><br/><br/>[OSRM]",
"NOTIFICATION_LOCALIZATION_HEADER":	"Чи Ви знаєте? Ви можете змінити мову інтерфейсу.",
"NOTIFICATION_LOCALIZATION_BODY":	"Скористайтеся спливаючим меню у лівому верхньому кутку та виберіть свою улюблену мову. " +
									"<br/><br/>" +
									"Не впадайте у відчай, якщо не можете знайти Вашу мову. " +
									"Якщо маєте бажання, допоможіть надати додаткові переклади! " +
									"Відвідайте „<a href='https://github.com/DennisSchiefer/Project-OSRM-Web'>Project-OSRM-Web</a>“ щодо додаткової інформації.",
"NOTIFICATION_CLICKING_HEADER":		"Чи Ви знаєте? Для встановлення маршрутних маркерів Вам потрібно клацнути на мапі.",
"NOTIFICATION_CLICKING_BODY":		"Ви можете клацнути на мапу за допомогою лівої кнопки миші, щоб встановити початкову позначку (зелену) чи кінцеву позначку (червону), " +
									"якщо вже присутня початкова позначка. " +
									"Адреса обраного місця буде показуватися у блоці зліва. " + 
									"<br/><br/>" +
									"Ви можете вилучити позначку, клацнувши на неї знову лівою кнопкою миші.",
"NOTIFICATION_DRAGGING_HEADER":		"Чи Ви знаєте? Ви можете перетягувати кожну маршрутну позначку на мапі.",
"NOTIFICATION_DRAGGING_BODY":		"Ви можете перетягнути позначку, клацнувши на неї лівою кнопкою миші та утримуючи кнопку натиснутою. " +
									"Тоді Ви можете переміщати позначку по мапі і маршрут буде оновлюватися миттєво. " +
									"<br/><br/>" +
									"Ви навіть можете створювати проміжні позначки, витягуючи їх з основного маршруту! ",
};

// set GUI language on load
if( OSRM.DEFAULTS.LANUGAGE_ONDEMAND_RELOADING == true )
	OSRM.Localization.setLanguage("uk");
