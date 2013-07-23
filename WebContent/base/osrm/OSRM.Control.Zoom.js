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

// zoom control
// [modified zoom control with ids, prevention of click propagation, show/hide with respect to main OSRM window; added comments to all changes]
OSRM.Control.Zoom = L.Control.extend({
	options: {
		position: 'topleft'
	},

	onAdd: function (map) {
		var zoomName = 'gui-zoom',
			container = L.DomUtil.create('div', 'box-wrapper gui-control-wrapper');			// changed classes
		L.DomEvent.disableClickPropagation(container);										// made grey container unclickable

		this._map = map;
		this._zoomInButton  = this._createButton('', 'Zoom in',  zoomName + '-in',  container, this._zoomIn,  this);	// removed html
		this._zoomOutButton = this._createButton('', 'Zoom out', zoomName + '-out', container, this._zoomOut, this);	// removed html
		this._container = container;														// stored container reference	

		map.on('zoomend zoomlevelschange', this._updateDisabled, this);

		return container;
	},

	onRemove: function (map) {
		map.off('zoomend zoomlevelschange', this._updateDisabled, this);
	},

	_zoomIn: function (e) {
		this._map.zoomIn(e.shiftKey ? 3 : 1);
	},

	_zoomOut: function (e) {
		this._map.zoomOut(e.shiftKey ? 3 : 1);
	},

	_createButton: function (html, title, className, container, fn, context) {
		var classNames = "box-content" + " " + "gui-control" + " " + className;
		var link = L.DomUtil.create('a', classNames, container);
		link.innerHTML = html;
//		link.href = '#';																	// commented to remove link borders
		link.title = title;

		var stop = L.DomEvent.stopPropagation;

		L.DomEvent
		    .on(link, 'click', stop)
		    .on(link, 'mousedown', stop)
		    .on(link, 'dblclick', stop)
		    .on(link, 'click', L.DomEvent.preventDefault)
		    .on(link, 'click', fn, context);

		return link;
	},

	_updateDisabled: function () {															// changed in large parts
		var map = this._map,
			className = 'gui-control',
			zoomName = 'gui-zoom'; 

		if (map._zoom === map.getMinZoom()) {
			L.DomUtil.changeClass(this._zoomOutButton, className, className+'-inactive');
			L.DomUtil.changeClass(this._zoomOutButton, zoomName+'-out', zoomName+'-out-inactive');
		} else {
			L.DomUtil.changeClass(this._zoomOutButton, className+'-inactive', className);
			L.DomUtil.changeClass(this._zoomOutButton, zoomName+'-out-inactive', zoomName+'-out');
		}
		if (map._zoom === map.getMaxZoom()) {
			L.DomUtil.changeClass(this._zoomInButton, className, className+'-inactive');
			L.DomUtil.changeClass(this._zoomInButton, zoomName+'-in', zoomName+'-in-inactive');
		} else {
			L.DomUtil.changeClass(this._zoomInButton, className+'-inactive', className);
			L.DomUtil.changeClass(this._zoomInButton, zoomName+'-in-inactive', zoomName+'-in');			
		}
	},
	
	// new functionality
	hide: function() {
		if( this._container )
			this._container.style.visibility="hidden";		
	},
	hide: function() {
		if( this._container )
			this._container.style.visibility="hidden";		
	},
	show: function() {
		if( this._container ) {
			this._container.style.top = "5px";
			this._container.style.left = ( OSRM.G.main_handle.boxVisible() == true ? (OSRM.G.main_handle.boxWidth()+10) : "30") + "px";
			this._container.style.visibility="visible";
		}		
	},
	setTooltips: function( zoomIn, zoomOut) {
		this._zoomInButton.title = zoomIn;
		this._zoomOutButton.title = zoomOut;
	}	
});
