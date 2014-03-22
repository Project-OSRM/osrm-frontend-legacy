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
// [Portuguese language support]


OSRM.Localization["pt"] = {
// own language
"CULTURE": "pt-PT",
"LANGUAGE": "Português",
// gui
"GUI_START": "Origem",
"GUI_END": "Destino",
"GUI_RESET": "Restabelecer",
"GUI_ZOOM_ON_ROUTE": "Focar na rota",
"GUI_ZOOM_ON_USER": "Focar no utilizador",
"GUI_SEARCH": "Mostrar",
"GUI_REVERSE": "Inverter",
"GUI_START_TOOLTIP": "Indique a origem",
"GUI_END_TOOLTIP": "Indique o destino",
"GUI_MAIN_WINDOW": "Janela principal",
"GUI_ZOOM_IN": "Aumentar",
"GUI_ZOOM_OUT": "Reduzir",
// config
"GUI_CONFIGURATION": "Configuração",
"GUI_LANGUAGE": "Idioma",
"GUI_UNITS": "Unidades",
"GUI_KILOMETERS": "Quilômetros",
"GUI_MILES": "Milhas",
// abbreviations
"GUI_M": "m",
"GUI_KM": "km",
"GUI_MI": "mi",
"GUI_FT": "ft",
"GUI_H": "h",
"GUI_MIN": "min",
"GUI_S": "s",
// mapping
"GUI_MAPPING_TOOLS": "Ferramentas de mapeamento",
"GUI_HIGHLIGHT_UNNAMED_ROADS": "Destacar ruas sem nome",
"GUI_SHOW_PREVIOUS_ROUTES": "Mostrar rotas anteriores",
"GUI_EXTERNAL_TOOLS": "Ferramentas externas",
"OPEN_EDITOR": "Editor OSM",
"OPEN_JOSM": "JOSM",
"OPEN_OSMBUGS": "Notas",
"OPEN_EDITOR_FAILED": "Reduza o zoom para abrir o editor do OSM",
"OPEN_JOSM_FAILED": "Reduza o zoom para abrir o editor JOSM",
"OPEN_OSMBUGS_FAILED": "Reduza o zoom para colocar uma nota",
// geocoder
"SEARCH_RESULTS": "Resultados da pesquisa",
"FOUND_X_RESULTS": "foram encontrados %i resultados",
"TIMED_OUT": "Tempo limite esgotado",
"NO_RESULTS_FOUND": "Nenhum resultado foi encontrado",
"NO_RESULTS_FOUND_SOURCE": "Não foram encontrados resultados para a origem",
"NO_RESULTS_FOUND_TARGET": "Não foram encontrados resultados para o destino",
// routing
"ROUTE_DESCRIPTION": "Descrição da rota",
"GET_LINK_TO_ROUTE": "Gerar link para a rota",
"ROUTE_LINK": "Link para a rota",
"GENERATE_LINK_TO_ROUTE": "esperando pelo link",
"LINK_TO_ROUTE_TIMEOUT": "não disponível",
"GPX_FILE": "Ficheiro GPX",
"DISTANCE": "Distância",
"DURATION": "Duração",
"YOUR_ROUTE_IS_BEING_COMPUTED": "A sua rota está a ser calculada",
"NO_ROUTE_FOUND": "A rota não é possivel",
// printing
"OVERVIEW_MAP": "Mapa de visão global",
"NO_ROUTE_SELECTED": "Nenhuma rota foi selecionada",
// routing engines
"ENGINE_0": "Carro (mais rápido)",
"ENGINE_1": "Bicicleta (mais rápido)",
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
"N": "norte",
"E": "este",
"S": "sul",
"W": "oeste",
"NE": "nordeste",
"SE": "sudeste",
"SW": "sudoeste",
"NW": "noroeste",
// driving directions
// %s: road name
// %d: direction
// [*]: will only be printed when there actually is a road name
"DIRECTION_0":"Instrução desconhecida[ para <b>%s</b>]",
"DIRECTION_1":"Continuar[ para <b>%s</b>]",
"DIRECTION_2":"Virar ligeiramente à direita[ para <b>%s</b>]",
"DIRECTION_3":"Virar à direita[ para <b>%s</b>]",
"DIRECTION_4":"Virar à direita apertada[ para <b>%s</b>]",
"DIRECTION_5":"Inversão de marcha[ para <b>%s</b>]",
"DIRECTION_6":"Virar à esquerda apertada[ para <b>%s</b>]",
"DIRECTION_7":"Virar à esquerda[ para <b>%s</b>]",
"DIRECTION_8":"Virar ligeiramente à esquerda[ para <b>%s</b>]",
"DIRECTION_10":"Em direção a <b>%d</b>[ para <b>%s</b>]",
"DIRECTION_11-1":"Entrar na rotunda e sair na primeira saída[ para <b>%s</b>]",
"DIRECTION_11-2":"Entrar na rotunda e sair na segunda saída[ para <b>%s</b>]",
"DIRECTION_11-3":"Entrar na rotunda e sair na terceira saída[ para <b>%s</b>]",
"DIRECTION_11-4":"Entrar na rotunda e sair na quarta saída[ para <b>%s</b>]",
"DIRECTION_11-5":"Entrar na rotunda e sair na quinta saída[ para <b>%s</b>]",
"DIRECTION_11-6":"Entrar na rotunda e sair na sexta saída[ para <b>%s</b>]",
"DIRECTION_11-7":"Entrar na rotunda e sair na sétima saída[ para <b>%s</b>]",
"DIRECTION_11-8":"Entrar na rotunda e sair na oitava saída[ para <b>%s</b>]",
"DIRECTION_11-9":"Entrar na rotunda e sair na nona saída[ para <b>%s</b>]",
"DIRECTION_11-x":"Entrar na rotunda e sair numa das saídas[ para <b>%s</b>]",
"DIRECTION_15":"Você chegou ao seu destino",
// street types
"HIGHWAY_DEFAULT": "via terreste",
"HIGHWAY_PATH": "caminho",
"HIGHWAY_FOOTWAY": "pista de caminhada",
"HIGHWAY_CYCLEWAY": "ciclovia",
"HIGHWAY_BRIDLEWAY": "hipovia",
"HIGHWAY_STEPS": "via com degras",
"HIGHWAY_MOTORWAY": "autoestrada",
"HIGHWAY_MOTORWAY_LINK": "ligação de autoestrada",
"HIGHWAY_TRUNK": "via expressa",
"HIGHWAY_TRUNK_LINK": "ligação de via expressa",
"HIGHWAY_PRIMARY": "via primária",
"HIGHWAY_PRIMARY_LINK": "ligação primária",
"HIGHWAY_SECONDARY": "via secundária",
"HIGHWAY_SECONDARY_LINK": "ligação secundária",
"HIGHWAY_TERTIARY": "via terciária",
"HIGHWAY_TERTIARY_LINK": "ligação terciária",
"HIGHWAY_LIVING_STREET": "via de espaço compartilhado",
"HIGHWAY_PEDESTRIAN": "calçadão",
"HIGHWAY_RESIDENTAL": "via residencial",
"HIGHWAY_unclassified": "via não classificada",
"HIGHWAY_service": "via de serviço",
"HIGHWAY_track": "estrada rústica",
"HIGHWAY_raceway": "pista de corrida",
"HIGHWAY_road": "estrada",
// notifications
"NOTIFICATION_MAINTENANCE_HEADER":	"Manutenção Programada",
"NOTIFICATION_MAINTENANCE_BODY":	"O site do OSRM está desligado devido a uma manutenção programada. " + 
									"Por favor, seja paciente enquanto as atualizações necessárias são realizadas. " +
									"O site estará de volta online em breve." +
									"<br/><br/>" + 
									"Entretanto poderá sair e mapear um bairro neighborhood perto de si..." + 
									"<br/><br/><br/>[OSRM]",
"NOTIFICATION_LOCALIZATION_HEADER":	"Você sabia? Você pode alterar o idioma do ecrã de exibição.",
"NOTIFICATION_LOCALIZATION_BODY":	"Pode usar o menu suspenso no canto superior esquerdo para selecionar o seu idioma preferido. " +
									"<br/><br/>" +
									"Não desespere se não consegue encontrar o idioma de sua escolha. " +
									"Se quiser, você pode ajudar a fornecer traduções adicionais! " +
									"Visite <a href='https://github.com/DennisSchiefer/Project-OSRM-Web'>aqui</a> para mais informações.",
"NOTIFICATION_CLICKING_HEADER":		"Você sabia? Você pode clicar no mapa para definir pontos da rota.",
"NOTIFICATION_CLICKING_BODY":		"Clique no mapa com o botão esquerdo do rato para definir o ponto de origem (verde) ou o ponto de destino (vermelho), " +
									"se o ponto de origem já existe. " +
									"O endereço do local selecionado será exibido nas caixas à esquerda. " + 
									"<br/><br/>" +
									"Pode excluir um ponto com um clique sobre ele novamente com o botão esquerdo do rato.",
"NOTIFICATION_DRAGGING_HEADER":		"Você sabia? Você pode arrastar cada ponto da rota no mapa.",
"NOTIFICATION_DRAGGING_BODY":		"Pode arrastar um ponto com um clique sobre ele com o botão esquerdo do rato e mantendo o botão pressionado. " +
									"Então pode mover o ponto ao redor do mapa e a rota será atualizada instantaneamente. " +
									"<br/><br/>" +
									"You can even create intermediate markers by dragging them off of the main route! ",
"NOTIFICATION_GEOCODERWAIT_HEADER":	"Esperando pelo Geocoder",
"NOTIFICATION_GEOCODERWAIT_BODY":	"Esperando por resultados do  geocoder.",
"NOTIFICATION_GEOCODERFAIL_HEADER":	"Falha do Geocoder",
"NOTIFICATION_GEOCODERFAIL_BODY":	"Falha recuperando coordenadas do geocoder.",
};

// set GUI language on load
if( OSRM.DEFAULTS.LANUGAGE_ONDEMAND_RELOADING == true )
	OSRM.Localization.setLanguage("pt", true);
