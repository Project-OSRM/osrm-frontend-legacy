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
// [English language support]


OSRM.Localization["ru"] = {
// own language
"CULTURE": "ru-RU",
"LANGUAGE": "Русский",
// gui
"GUI_START": "Начало",
"GUI_END": "Конец",
"GUI_RESET": "Сбросить",
"GUI_ZOOM_ON_ROUTE": "Показать маршрут",
"GUI_ZOOM_ON_USER": "Показать пользователя",
"GUI_SEARCH": "Показать",
"GUI_REVERSE": "Обратно",
"GUI_START_TOOLTIP": "Укажите начальную точку",
"GUI_END_TOOLTIP": "Укажите пункт назначения",
"GUI_MAIN_WINDOW": "Главное окно",
"GUI_ZOOM_IN": "Увеличить",
"GUI_ZOOM_OUT": "Масштаб",
// config
"GUI_CONFIGURATION": "Настройки",
"GUI_LANGUAGE": "Язык",
"GUI_UNITS": "Единицы",
"GUI_KILOMETERS": "Километры",
"GUI_MILES": "Мили",
// abbreviations
"GUI_M": "м",
"GUI_KM": "км",
"GUI_MI": "миль",
"GUI_FT": "футов",
"GUI_H": "ч",
"GUI_MIN": "мин",
"GUI_S": "с",
// mapping
"GUI_MAPPING_TOOLS": "Настройки карты",
"GUI_HIGHLIGHT_UNNAMED_ROADS": "Выделить безымянные улицы",
"GUI_SHOW_PREVIOUS_ROUTES": "Отображать предыдущий маршрут",
"GUI_EXTERNAL_TOOLS": "Внешние инструменты:",
"OPEN_EDITOR": "Редактор",
"OPEN_OSMBUGS": "Заметки",
"OPEN_JOSM_FAILED": "Приблизьте карту, чтобы открыть редактор OSM.",
"OPEN_OSMBUGS_FAILED": "Приблизьте карту, чтобы оставить заметку.",
// geocoder
"SEARCH_RESULTS": "Результаты поиска",
"FOUND_X_RESULTS": "найдено %i результатов",
"TIMED_OUT": "Превышен интервал ожидания",
"NO_RESULTS_FOUND": "Ничего не найдено",
"NO_RESULTS_FOUND_SOURCE": "Начальная точка не найдена",
"NO_RESULTS_FOUND_TARGET": "Пункт назначения не найден",
// routing
"ROUTE_DESCRIPTION": "Описание маршрута",
"GET_LINK_TO_ROUTE": "Постоянная ссылка",
"ROUTE_LINK": "Ссылка на маршрут",
"GENERATE_LINK_TO_ROUTE": "создание ссылки",
"LINK_TO_ROUTE_TIMEOUT": "недоступно",
"GPX_FILE": "GPX Файл",
"DISTANCE": "Расстояние",
"DURATION": "Время",
"YOUR_ROUTE_IS_BEING_COMPUTED": "Вычисление маршрута",
"NO_ROUTE_FOUND": "Маршрут невозможен",
// printing
"OVERVIEW_MAP": "Обзорная карта",
"NO_ROUTE_SELECTED": "Маршрут не выбран",
// routing engines
"ENGINE_0": "Автомобиля (быстрейший)",
// directions
"N": "север",
"E": "восток",
"S": "юг",
"W": "запад",
"NE": "северо-восток",
"SE": "юго-восток",
"SW": "юго-запад",
"NW": "северо-запад",
// driving directions
// %s: road name
// %d: direction
// [*]: will only be printed when there actually is a road name
"DIRECTION_0":"Неизвестная инструкция[ по <b>%s</b>]",
"DIRECTION_1":"Продолжайте движение[ по <b>%s</b>]",
"DIRECTION_2":"Примите вправо[ на <b>%s</b>]",
"DIRECTION_3":"Поверните направо[ на <b>%s</b>]",
"DIRECTION_4":"Поверните резко направо[ на <b>%s</b>]",
"DIRECTION_5":"U-образный разворот[ на <b>%s</b>]",
"DIRECTION_6":"Поверните резко налево[ на <b>%s</b>]",
"DIRECTION_7":"Поверните налево[ на <b>%s</b>]",
"DIRECTION_8":"Примите влево[ на <b>%s</b>]",
"DIRECTION_10":"Направляйтесь на <b>%d</b>[ по <b>%s</b>]",
"DIRECTION_11-1":"На кольцевой дороге выполните 1-ый съезд[ на <b>%s</b>]",
"DIRECTION_11-2":"На кольцевой дороге выполните 2-ой съезд[ на <b>%s</b>]",
"DIRECTION_11-3":"На кольцевой дороге выполните 3-ий съезд[ на <b>%s</b>]",
"DIRECTION_11-4":"На кольцевой дороге выполните 4-ый съезд[ на <b>%s</b>]",
"DIRECTION_11-5":"На кольцевой дороге выполните 5-ый съезд[ на <b>%s</b>]",
"DIRECTION_11-6":"На кольцевой дороге выполните 6-ой съезд[ на <b>%s</b>]",
"DIRECTION_11-7":"На кольцевой дороге выполните 7-ой съезд[ на <b>%s</b>]",
"DIRECTION_11-8":"На кольцевой дороге выполните 8-ой съезд[ на <b>%s</b>]",
"DIRECTION_11-9":"На кольцевой дороге выполните 9-ый съезд[ на <b>%s</b>]",
"DIRECTION_11-x":"На кольцевой дороге выполните съезд[ на <b>%s</b>]",
"DIRECTION_15":"Вы прибыли в пункт назначения",
// notifications
"NOTIFICATION_MAINTENANCE_HEADER":	"Плановое техническое обслуживание",
"NOTIFICATION_MAINTENANCE_BODY":	"Сайт OSRM остановлен для технического обслуживания." + 
									"Пожалуйста, подождите пока не будут установлены необходимые обновления. " +
									"В ближайшее время сайт снова заработает." +
									"<br/><br/>" + 
									"Пока вы можете прогуляться по знакомым окрестностям..." + 
									"<br/><br/><br/>[OSRM]",
"NOTIFICATION_LOCALIZATION_HEADER":	"Знаете ли вы? Вы можете сменить отображаемый язык.",
"NOTIFICATION_LOCALIZATION_BODY":	"Используйте выпадающее меню в левом верхнем углу чтобы выбрать предпочитаемый вами язык. " +
									"<br/><br/>" +
									"Не отчаивайтесь, если вы не можете выбрать свой язык. " +
									"Если захотите, вы можете помочь нам добавив свой новый перевод! " +
									"Заходите <a href='https://github.com/DennisSchiefer/Project-OSRM-Web'>сюда</a> за дополнительной информацией.",
"NOTIFICATION_CLICKING_HEADER":		"Знаете ли вы? Вы можете щёлкать мышью на карте, чтобы устанавливать метки.",
"NOTIFICATION_CLICKING_BODY":		"Вы можете щёлкнуть на карте левой кнопкой мыши чтобы установить зелёную метку начала маршрута или красную метку конца маршрута, " +
									"если начало маршрута уже определено. " +
									"Адрес указанного вами места отобразится слева. " + 
									"<br/><br/>" +
									"Вы можете удалить метку ещё раз щёлкнув по ней левой кнопкой мыши.",
"NOTIFICATION_DRAGGING_HEADER":		"Знаете ли вы? Вы можете перемещать по карте любую метку маршрута.",
"NOTIFICATION_DRAGGING_BODY":		"Щёлкните по метке левой кнопкой мыши и удерживайте кнопку нажатой. " +
									"Затем двигайте метку по карте. Маршрут будет мгновенно обновляться. " +
									"<br/><br/>" +
									"Также вы можете добавлять к маршруту промежуточные метки вытягивая их из основного маршрута! "
};

// set GUI language on load
if( OSRM.DEFAULTS.LANUGAGE_ONDEMAND_RELOADING == true )
	OSRM.Localization.setLanguage("ru", true);

