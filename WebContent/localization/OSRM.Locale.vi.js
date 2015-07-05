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
// [Vietnamese language support]


OSRM.Localization["vi"] = {
// own language
"CULTURE": "vi",
"LANGUAGE": "Tiếng Việt",
// gui
"GUI_START": "Đầu",
"GUI_END": "Cuối",
"GUI_RESET": "&nbsp;&nbsp;Đặt lại&nbsp;&nbsp;",
"GUI_ZOOM_ON_ROUTE": "Thu phóng vừa Tuyến đường",
"GUI_ZOOM_ON_USER": "Phóng to Người dùng",
"GUI_SEARCH": "&nbsp;&nbsp;Hiện&nbsp;&nbsp;",
"GUI_REVERSE": "Đảo ngược",
"GUI_START_TOOLTIP": "Nhập nơi bắt đầu",
"GUI_END_TOOLTIP": "Nhập nơi đi tới",
"GUI_MAIN_WINDOW": "Cửa sổ chính",
"GUI_ZOOM_IN": "Phóng to",
"GUI_ZOOM_OUT": "Thu nhỏ",
// config
"GUI_CONFIGURATION": "Thiết lập",
"GUI_LANGUAGE": "Ngôn ngữ",
"GUI_UNITS": "Đơn vị",
"GUI_KILOMETERS": "Kilômét",
"GUI_MILES": "Dặm",
// abbreviations
"GUI_M": "m",
"GUI_KM": "km",
"GUI_MI": "dặm",
"GUI_FT": "foot",
"GUI_H": "g",
"GUI_MIN": "p",
"GUI_S": "gi",
// mapping
"GUI_MAPPING_TOOLS": "Công cụ Bản đồ",
"GUI_HIGHLIGHT_UNNAMED_ROADS": "Tô sáng đường không tên",
"GUI_SHOW_PREVIOUS_ROUTES": "Hiển thị các tuyến đường trước",
"GUI_EXTERNAL_TOOLS": "Công cụ Bên ngoài:",
"OPEN_EDITOR": "Trình vẽ",
"OPEN_JOSM": "JOSM",
"OPEN_OSMBUGS": "Ghi chú",
"OPEN_EDITOR_FAILED": "Phóng to hơn để mở trình vẽ OSM.",
"OPEN_JOSM_FAILED": "Phóng to hơn để mở JOSM.",
"OPEN_OSMBUGS_FAILED": "Phóng to hơn để ghi chú.",
// geocoder
"SEARCH_RESULTS": "Kết quả Tìm kiếm",
"FOUND_X_RESULTS": "tìm thấy %i kết quả",
"TIMED_OUT": "Hết Thời gian",
"NO_RESULTS_FOUND": "Không tìm thấy kết quả",
"NO_RESULTS_FOUND_SOURCE": "Không tìm thấy kết quả cho nơi bắt đầu",
"NO_RESULTS_FOUND_TARGET": "Không tìm thấy kết quả cho nơi đi tới",
// routing
"ROUTE_DESCRIPTION": "Miêu tả Tuyến đường",
"GET_LINK_TO_ROUTE": "Tạo Liên kết",
"ROUTE_LINK": "Liên kết đến Tuyến đường",
"GENERATE_LINK_TO_ROUTE": "đang chờ nhận được liên kết",
"LINK_TO_ROUTE_TIMEOUT": "không có sẵn",
"GPX_FILE": "Tập tin GPX",
"DISTANCE": "Khoảng cách",
"DURATION": "Khoảng thời gian",
"YOUR_ROUTE_IS_BEING_COMPUTED": "Đang tính tuyến đường cho bạn",
"NO_ROUTE_FOUND": "Không thể đi tới nơi",
// printing
"OVERVIEW_MAP": "Bản đồ Tóm tắt",
"NO_ROUTE_SELECTED": "Chưa chọn tuyến đường",
// routing engines
"ENGINE_0": "Xe hơi (nhanh nhất)",
"ENGINE_1": "Xe đạp (nhanh nhất)",
// tile server names
// (only required if names are different to OSRM.config)
//"TILE_SERVER_0": "osm.org",
//"TILE_SERVER_1": "osm.de",
//"TILE_SERVER_2": "MapQuest",
//"TILE_SERVER_3": "Mapbox Địa thế",
//"TILE_SERVER_4": "Mapbox Vệ tinh có Chữ",
//"TILE_SERVER_5": "Mapbox Vệ tinh",
// overlay server names
//(only required if names are different to OSRM.config)
//"OVERLAY_SERVER_0": "Bộ phận Nhỏ",
// directions
"N": "bắc",
"E": "đông",
"S": "nam",
"W": "tây",
"NE": "đông bắc",
"SE": "đông nam",
"SW": "tây nam",
"NW": "tây bắc",
// driving directions
// %s: road name
// %d: direction
// [*]: will only be printed when there actually is a road name
"DIRECTION_0":"Bước dẫn không rõ[ vào <b>%s</b>]",
"DIRECTION_1":"Chạy tiếp[ trên <b>%s</b>]",
"DIRECTION_2":"Nghiêng về bên phải[ vào <b>%s</b>]",
"DIRECTION_3":"Quẹo phải[ vào <b>%s</b>]",
"DIRECTION_4":"Quẹo gắt bên phải[ vào <b>%s</b>]",
"DIRECTION_5":"Quay trở lại[ vào <b>%s</b>]",
"DIRECTION_6":"Quẹo gắt bên trái[ vào <b>%s</b>]",
"DIRECTION_7":"Quẹo trái[ vào <b>%s</b>]",
"DIRECTION_8":"Nghiêng về bên trái[ vào <b>%s</b>]",
"DIRECTION_9":"Tới cuối chặng đường[ trên <b>%s</b>]",
"DIRECTION_10":"Đi về hướng <b>%d</b>[ vào <b>%s</b>]",
"DIRECTION_11-1":"Đi vào bùng binh và ra tại đường đầu tiên[ tức <b>%s</b>]",
"DIRECTION_11-2":"Đi vào bùng binh và ra tại đường thứ hai[ tức <b>%s</b>]",
"DIRECTION_11-3":"Đi vào bùng binh và ra tại đường thứ ba[ tức <b>%s</b>]",
"DIRECTION_11-4":"Đi vào bùng binh và ra tại đường thứ tư[ tức <b>%s</b>]",
"DIRECTION_11-5":"Đi vào bùng binh và ra tại đường thứ năm[ tức <b>%s</b>]",
"DIRECTION_11-6":"Đi vào bùng binh và ra tại đường thứ sáu[ tức <b>%s</b>]",
"DIRECTION_11-7":"Đi vào bùng binh và ra tại đường thứ bảy[ tức <b>%s</b>]",
"DIRECTION_11-8":"Đi vào bùng binh và ra tại đường thứ tám[ tức <b>%s</b>]",
"DIRECTION_11-9":"Đi vào bùng binh và ra tại đường thứ chín[ tức <b>%s</b>]",
"DIRECTION_11-x":"Đi vào bùng binh và ra sau hơn mười đường[ vào <b>%s</b>]",
"DIRECTION_15":"Bạn đã tới nơi",
// street types
"HIGHWAY_DEFAULT": "đường",
"HIGHWAY_PATH": "đường mòn",
"HIGHWAY_FOOTWAY": "đường dạo",
"HIGHWAY_CYCLEWAY": "đường xe đạp",
"HIGHWAY_BRIDLEWAY": "đường mòn ngựa",
"HIGHWAY_STEPS": "cầu thang",
"HIGHWAY_MOTORWAY": "đường cao tốc",
"HIGHWAY_MOTORWAY_LINK": "đường cao tốc",
"HIGHWAY_TRUNK": "xa lộ",
"HIGHWAY_TRUNK_LINK": "xa lộ",
"HIGHWAY_PRIMARY": "đường",
"HIGHWAY_PRIMARY_LINK": "đường",
"HIGHWAY_SECONDARY": "đường",
"HIGHWAY_SECONDARY_LINK": "đường",
"HIGHWAY_TERTIARY": "đường",
"HIGHWAY_TERTIARY_LINK": "đường",
"HIGHWAY_LIVING_STREET": "ngõ dân cư",
"HIGHWAY_PEDESTRIAN": "đường đi bộ",
"HIGHWAY_RESIDENTAL": "ngõ dân cư",
"HIGHWAY_unclassified": "ngõ",
"HIGHWAY_service": "ngõ hẻm",
"HIGHWAY_track": "đường mòn",
"HIGHWAY_raceway": "đường đua",
"HIGHWAY_road": "đường",
// notifications
"NOTIFICATION_MAINTENANCE_HEADER":	"Đang Bảo quản theo Chương trình",
"NOTIFICATION_MAINTENANCE_BODY":	"Trang OSRM đang ngừng hoạt động một cách mong đợi để được bảo quản. " + 
									"Xin vui lòng chờ đợi trong lúc thực hiện việc cập nhật cần thiết. " +
									"Trang sẽ tiếp tục hoạt động trực tuyến không lâu." +
									"<br/><br/>" + 
									"Trong lúc chờ đợi, gợi ý bạn cải thiện hàng xóm của bạn trên bản đồ…" + 
									"<br/><br/><br/>[OSRM]",
"NOTIFICATION_LOCALIZATION_HEADER":	"Bạn có biết? Bạn có thể thay đổi ngôn ngữ hiển thị.",
"NOTIFICATION_LOCALIZATION_BODY":	"Bạn có thể thả xuống trình đơn ở góc trái bên trên để chọn một ngôn ngữ khác. " +
									"<br/><br/>" +
									"Không thất vọng nếu không tìm được ngôn ngữ của bạn. " +
									"Mời bạn cung cấp thêm bản dịch! " +
									"Hãy ghé thăm <a href='https://github.com/DennisSchiefer/Project-OSRM-Web'>trang dự án</a> để biết thêm thông tin.",
"NOTIFICATION_CLICKING_HEADER":		"Bạn có biết? Bạn có thể nhấn chuột vào bản đồ để đánh ghim tuyến đường.",
"NOTIFICATION_CLICKING_BODY":		"Nhấn chuột trái vào bản đồ để đánh ghim vào nơi bắt đầu (màu xanh), hoặc nơi đi tới (màu đỏ), " +
									"nếu đã đánh ghim bắt đầu. " +
									"Địa chỉ của địa điểm được chọn sẽ xuất hiện vào các hộp bên phải. " + 
									"<br/><br/>" +
									"Để xóa ghim, nhấn chuột trái vào nó một lần nữa.",
"NOTIFICATION_DRAGGING_HEADER":		"Bạn có biết? Bạn có thể kéo các ghim tuyến đường trên bản đồ.",
"NOTIFICATION_DRAGGING_BODY":		"Để kéo ghim, nhấn giữ chuột trái vào nó và di chuyển ghim trên bản đồ. " +
									"Tuyến đường sẽ được cập nhật ngay lập tức. " +
									"<br/><br/>" +
									"Để ghé vào thêm nơi nửa đường, kéo ghim từ tuyến đường chính! ",
"NOTIFICATION_GEOCODERWAIT_HEADER":	"Đang chờ Trình định vị",
"NOTIFICATION_GEOCODERWAIT_BODY":	"Đang chờ trình định vị cho ra kết quả.",
"NOTIFICATION_GEOCODERFAIL_HEADER":	"Trình định vị Thất bại",
"NOTIFICATION_GEOCODERFAIL_BODY":	"Đã thất bại khi lấy tọa độ từ trình định vị.",
// do not translate below this line
"GUI_LEGAL_NOTICE": "Routing by <a href='http://project-osrm.org/'>Project OSRM</a> - Geocoder by <a href='http://wiki.openstreetmap.org/wiki/Nominatim'>Nominatim</a> - OSRM hosting by <a href='http://algo2.iti.kit.edu/'>KIT</a>",
"GUI_DATA_TIMESTAMP": "data: ",
"GUI_VERSION": "gui: ",
"QR": "QR"
};

// set GUI language on load
if( OSRM.DEFAULTS.LANUGAGE_ONDEMAND_RELOADING == true )
	OSRM.Localization.setLanguage("vi", true);
