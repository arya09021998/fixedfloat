;(function() {
	window.UI.extend({
		// v 2.2.1
		// v 2.2.0 Add "per" varible instead of "amount"
		// v 2.1.9 Patch pasteData() for only object in self.rows
		// v 2.1.8 Fix del()
		// v 2.1.7 Fix moving when edit
		// v 2.1.6 Patch pasteData for self.selected
		// v 2.1.5 Patch for self.count()
		// v 2.1.4 Add to onRowInitBind() rowID
		// v 2.1.3 Add loadOnInit config
		// v 2.1.2 Patch delRows(), selectRow(), deselectRow()
		// v 2.1.1 Add onInit()
		// v 2.1.0 Selected when init (self.initselect)
		// v 2.0.9 Add hashCode for storage
		// v 2.0.8 Add Flow pages
		// v 2.0.7 Patch rowFunc
		// v 2.0.6 Add params for drag&drop
		// v 2.0.5 Change var to let
		// v 2.0.4 Patch if count pages 0
		// v 2.0.3 Add preInit param
		// v 2.0.2 Patch load
		// v 2.0.1 Patch pasteData
		// v 2.0.0 Patch if not table
		ztable: function(id, data) {
			function self() {
				return this;
			}
			let F = UI.func;

			self.id 		= id;

			let useStorHash = (typeof(data) == "object" && typeof(data.hashStorage) == 'boolean') ? data.hashStorage : true;
			let storageName = useStorHash ? 'ztp.'+self.id + hashCode(location.host+location.pathname) : 'ztp.'+self.id;
			let storAmount  = F.localStorage.get(storageName+'.amount');

			self.type 		= (typeof(data) == "object" && data.type) 		? data.type 		: '';
			self.page 		= (typeof(data) == "object" && data.page) 		? data.page 		: 1;
			self.pagesShow 	= (typeof(data) == "object" && data.pagesShow) 	? data.pagesShow 	: 5;
			self.sale 		= (typeof(data) == "object" && data.sale) 		? data.sale 		: false;
			self.editable 	= (typeof(data) == "object" && data.editable) 	? data.editable 	: false;
			self.dbclickedit= (typeof(data) == "object" && data.dbclickedit)? data.dbclickedit 	: false;
			self.dragdrop 	= (typeof(data) == "object" && data.dragdrop) 	? data.dragdrop 	: false;
			self.initselect	= (typeof(data) == "object" && data.initselect) ? data.initselect 	: false;
			self.heightFill	= (typeof(data) == "object" && data.heightFill) ? data.heightFill 	: null;
			self.loadOnInit	= (typeof(data) == "object" && typeof(data.loadOnInit) == "boolean") ? data.loadOnInit 	: true;

			self.amount 	= (typeof(data) == "object" && data.amount) 	? data.amount 		: (storAmount ? storAmount : 25);
			self.per 	    = (typeof(data) == "object" && data.per) 	    ? data.per 		    : self.amount;
			self.important 	= (typeof(data) == "object" && data.important) 	? data.important 	: [];
			self.tmpl 		= (typeof(data) == "object" && data.tmpl) 		? data.tmpl 		: [];
			self.sort 		= (typeof(data) == "object" && data.sort) 		? data.sort 		: undefined;
			self.orderDir 	= (typeof(data) == "object" && data.orderDir) 	? data.orderDir 	: undefined;
			self.typeSelect = (typeof(data) == "object" && data.typeSelect) ? data.typeSelect 	: {};
			self.addFields  = (typeof(data) == "object" && data.addFields)  ? data.addFields 	: [];
			self.ajaxURL 	= (typeof(data) == "object" && data.ajaxURL) 	? data.ajaxURL 		: '/ajax';
			self.ajaxFunc 	= (typeof(data) == "object" && data.ajaxFunc) 	? data.ajaxFunc 	: {};
			self.rowFunc 	= (typeof(data) == "object" && data.rowFunc) 	? data.rowFunc 		: {};
			self.minHeight 	= (typeof(data) == "object" && data.minHeight) 	? +data.minHeight 	: 0;
			self.rows 		= (typeof(data) == "object" && data.rows) 		? data.rows 		: {};

			self.rowsOrder	= [];
			self.newRows 	= {};
			self.lenNewRows	= 1;
			self.pages 		= (typeof(data) == "object" && data.floatPages) ? null : 1;
			self.showPage 	= self.page;
			self.count      = 0;

			self.selection 	= false;
			self.selected 	= [];
			self.filter 	= {};

			self.newRow 		 = function() {};
			self.delRows 		 = function() {};
			self.selectRow 		 = function(rowIDs) {};
			self.deselectRow 	 = function(rowIDs) {};
			self.toggleSelectRow = function(rowID) {};
			self.load 			 = function(per, page, sort, order, filter) {};
			self.reload 		 = function() {};
			self.add 			 = function(rowID, rowData) {};
			self.del 			 = function(rowID) {};
			self.update 		 = function(rowID, rowData) {};
			self.clear 			 = function() {};
			self.editOnPaste 	 = function(func) {};
			self.onSelect 	 	 = function(func) {};
			self.getTr 			 = function() {};

			let allowBlurApply 	= true;
			let dataFilter 		= (typeof(data) == "object" && data.filter) ? data.filter : {};
			let _table 			= document.getElementById(self.id);
			let _addbtn 		= document.getElementById(self.id+'_add');
			let _delbtn 		= document.getElementById(self.id+'_del');
			let _tmpl 			= document.getElementById(self.id+'_tmpl');
			let _tmplMore 		= document.getElementById(self.id+'_tmpl_more');
			let _edit 			= document.getElementById(self.id+'_edit');
			let _pages 			= document.getElementById(self.id+'_pages');
			let _countShow 		= document.getElementById(self.id+'_countshow');
			let _countof 		= document.getElementById(self.id+'_countof');
			let _reload 		= document.getElementById(self.id+'_reload');
			let _selection 		= document.getElementById(self.id+'_selection');
			let _selectUL 		= _edit ? _edit.nextElementSibling : null;
			let _wrapEdit 		= _edit ? _edit.parentNode : null;
			let _hintEdit 		= _edit && _edit.nextElementSibling && _edit.nextElementSibling.nextElementSibling ? _edit.nextElementSibling.nextElementSibling : null;
			let _colSort, _activeTR, _activeTD, _activeCell, _selectOption;

			let editOnPasteBind  = function() {};
			let editOnChangeBind = function() {};
			let onSelectBind     = (typeof(data) == "object" && data.onSelect)    ? data.onSelect    : function() {};
			let onRowInitBind    = (typeof(data) == "object" && data.onRowInit)   ? data.onRowInit   : function() {};
			let onInitBind       = (typeof(data) == "object" && data.onInit)      ? data.onInit      : function() {};
			let onDropBind    	 = (typeof(data) == "object" && data.onDrop)   	  ? data.onDrop      : function() {};
			let preInitBind      = (typeof(data) == "object" && data.preInit)     ? data.preInit     : undefined;
			let requestEdit      = (typeof(data) == "object" && data.requestEdit) ? data.requestEdit : false;

			// let abortController = new AbortController();
			let abortController = undefined;
			let abortLoading    = false;
			let apiPromise      = undefined;
			let evDown	= (('ontouchstart' in window) || (window.DocumentTouch && document instanceof DocumentTouch)) ? 'touchstart' : 'mousedown';
			let evMove	= (('ontouchmove' in window) || (window.DocumentTouch && document instanceof DocumentTouch)) ? 'touchmove' : 'mousemove';
			let evUp	= (('ontouchend' in window) || (window.DocumentTouch && document instanceof DocumentTouch)) ? 'touchend' : 'mouseup';
			let drag    = {
				allowed: false,
				elem:    undefined,
				target:  undefined,
				above:   undefined,
				is:      {x: false, y: false},
				start:   {x: 0, y: 0},
			};
			let start   = {move: 0, pos: 0}




			if (!_table) {
				return self;
			}

			//
			self.add = function(rowID, rowData, totop) {
				let _cloneTmpl, _cloneTmplMore;
				let t1 = document.createElement('tbody');
				let t2 = document.createElement('tbody');

				for (let param in rowData) {
					if (Array.isArray(rowData[param]) && self.typeSelect[param]) {
						rowData[param] = '<option>' + rowData[param].join('</option><option>') + '</option>';
					}
				}

				rowID = rowID ? rowID : self.count;

				self.rows[rowID] = rowData;
				self.count += 1;

				_cloneTmpl = _tmpl.cloneNode(true);
				F.remClass(_cloneTmpl, 'ztp-tmpl');
				F.addClass(_cloneTmpl, 'ztp-row');
				_cloneTmpl.setAttribute('data-id', rowID);
				_cloneTmpl.setAttribute('id', self.id + '_' +rowID);
				t1.innerHTML = F.fmt(_cloneTmpl.outerHTML, rowData);

				if (_tmplMore) {
					_cloneTmplMore = _tmplMore.cloneNode(true);
					_cloneTmplMore.removeAttribute('id');
					F.remClass(_cloneTmplMore, 'ztp-tmpl');
					F.addClass(_cloneTmplMore, 'ztp-more');
					_cloneTmplMore.setAttribute('data-id', rowID);
					t2.innerHTML = F.fmt(_cloneTmplMore.outerHTML, rowData);
				}

				if (totop) {
					if (t2.firstChild) _table.tBodies[0].insertBefore(t2.firstChild, _table.tBodies[0].firstChild);
					if (t1.firstChild) _table.tBodies[0].insertBefore(t1.firstChild, _table.tBodies[0].firstChild);
				} else {
					if (t1.firstChild) _table.tBodies[0].appendChild(t1.firstChild);
					if (t2.firstChild) _table.tBodies[0].appendChild(t2.firstChild);
				}
			}
			
			self.del = function(rowIDs) {
				let a = [];
				if (!Array.isArray(rowIDs) && typeof(rowIDs) != 'object') {
					a.push(rowIDs);
				} else {
					for (let i in rowIDs) {
						a.push(rowIDs[i]);
					}
				}
				// let a = !Array.isArray(rowIDs) && typeof(rowIDs) != 'object' ? [rowIDs] : rowIDs;
				for (let i in a) {
					let rowID = a[i];
					let delRow = document.getElementById(self.id+'_'+rowID);
					if (!delRow) {
						return;
					}
					if (delRow.nextElementSibling && F.hasClass(delRow.nextElementSibling, 'ztp-more')) {
						delRow.nextElementSibling.remove();
					}
					delRow.remove();
					self.deselectRow(rowID);
					delete self.rows[rowID];
					// if (Array.isArray(self.rows)) {
					// 	self.rows.splice(rowID, 1);
					// }
					if (self.count) self.count--;
				}
			}
			self.newRow = function() {
				let _cloneTmpl, _cloneTmplMore;
				let t1 = document.createElement('tbody');
				let t2 = document.createElement('tbody');

				_cloneTmpl = _tmpl.cloneNode(true);
				F.remClass(_cloneTmpl, 'ztp-tmpl');
				F.addClass(_cloneTmpl, 'ztp-row');
				F.addClass(_cloneTmpl, 'open');
				_cloneTmpl.setAttribute('data-id', -self.lenNewRows);
				_cloneTmpl.removeAttribute('id');
				t1.innerHTML = F.fmt(_cloneTmpl.outerHTML);

				if (_tmplMore) {
					_cloneTmplMore = _tmplMore.cloneNode(true);
					_cloneTmplMore.removeAttribute('id');
					F.remClass(_cloneTmplMore, 'ztp-tmpl');
					F.addClass(_cloneTmplMore, 'ztp-more');
					_cloneTmplMore.setAttribute('data-id', -self.lenNewRows);
					t2.innerHTML = F.fmt(_cloneTmplMore.outerHTML);
				}
				
				if (t2.firstChild) _table.tBodies[0].insertBefore(t2.firstChild, _table.tBodies[0].firstChild);
				if (t1.firstChild) _table.tBodies[0].insertBefore(t1.firstChild, _table.tBodies[0].firstChild);

				self.newRows[self.lenNewRows] = {}; 
				self.newRows[self.lenNewRows] = F.extend(self.newRows[self.lenNewRows], self.tmpl);
				self.lenNewRows++;
			}
			self.delRows = function() {
				if (self.ajaxFunc['del']) {
					APP.api(self.ajaxFunc['del'],
						{
							'type': self.type,
							'ids': self.selected.join(',')
						},
						function(res) {
							self.reload();
						},
						function(res) {
							// error
						}
					)
				}
			}
			self.getRows = function(rowIDs) {
				let list = [];
				for (let i = 0; i < rowIDs.length; i++) {
					list.push(document.getElementById(self.id+'_'+rowIDs[i]));
				}
				return list;
			}
			self.getSelectRows = function() {
				return self.getRows(self.selected);
			}
			self.selectRow = function(rowIDs) {
				let a = !Array.isArray(rowIDs) && typeof(rowIDs) != 'object' ? [rowIDs] : rowIDs;
				for (let i in a) {
					let rowID = a[i];
					let _row = document.getElementById(self.id+'_'+rowID);
					F.addClass(_row, 'selected');
					if (self.selected.indexOf(rowID) < 0) self.selected.push(rowID);
				}
				onSelectBind.call(self, self.selected, rowIDs);
			}
			self.deselectRow = function(rowIDs) {
				let a = !Array.isArray(rowIDs) && typeof(rowIDs) != 'object' ? [rowIDs] : rowIDs;
				for (let i in a) {
					let rowID = a[i];
					let _row = document.getElementById(self.id+'_'+rowID);
					F.remClass(_row, 'selected');
					if (self.selected.indexOf(rowID) >= 0) self.selected.splice(self.selected.indexOf(rowID), 1);
				}
				onSelectBind.call(self, self.selected, rowIDs);
			}
			self.selectRowAll = function() {
				self.selected = [];
				let selRows = _table.querySelectorAll('.ztp-row');
				for (let i = 0; i < selRows.length; i++) {
					F.addClass(selRows[i], 'selected');
					self.selected.push(selRows[i].getAttribute('data-id'));
				}
				onSelectBind.call(self, self.selected);
			}
			self.deselectRowAll = function() {
				self.selected = [];
				F.remClass(_table.querySelectorAll('.ztp-row.selected'), 'selected');
				onSelectBind.call(self, self.selected);
			}
			self.toggleSelectRow = function(rowID) {
				let _row = document.getElementById(self.id+'_'+rowID);
				if (F.hasClass(_row, 'selected')) {
					self.deselectRow(rowID);
				} else {
					self.selectRow(rowID);
				}
			}
			self.toggleSelectRowAll = function() {
				if (self.selected.length) {
					self.deselectRowAll();
				} else {
					self.selectRowAll();
				}
			}

			self.load = function(per, page, sort, order, filter) {
				if (self.heightFill) {
					fillTableHeight();
				}
				let ajaxLoad = self.sale ? self.ajaxFunc['loadSale'] : self.ajaxFunc['load'];
				if (ajaxLoad) {
					F.addClass(_table, 'loading');
					F.remClass(_edit, 'error');
					if (_wrapEdit) _table.parentNode.appendChild(_wrapEdit);


					if (apiPromise && apiPromise.isPending() && abortController && abortController instanceof AbortController) {
						abortController.abort();
						abortLoading = true;
					}
					abortController = new AbortController();

					apiPromise = APP.api(ajaxLoad,
						{
							'type':   self.type,
							'amount': per,
							'per':    per,
							'page':   page,
							'sort':   sort,
							'order':  order,
							'filter': filter
						},
						function(res) {
							abortLoading = false;
							if (res.data) {
								if (res.data.pages && res.data.pages < res.data.page) {
									page = res.data.page = res.data.pages;
									self.load(per, page, sort, order, filter);
								} else {
									let loadData = preInitBind ? preInitBind.call(self, res.data) : res.data;
									pasteData(loadData);
								}
							} else {
								if (_pages) _pages.innerHTML = paginate(1, 1);
								F.remClass(_table, 'loading');
							}
						},
						function(res) {
							if (res.code == 2 && abortLoading) {
							} else {
								if (_pages) _pages.innerHTML = paginate(1, 1);
								F.remClass(_table, 'loading');
							}
						},
						abortController
					)
				} else if (typeof(per) == 'string' && typeof(page) == 'object') {
					let ajaxLoad = per, ajaxData = page, func = sort;
					apiPromise = APP.api(ajaxLoad, ajaxData,
						function(res) {
							if (func && typeof(func) == 'function') {
								pasteData(func(res));
							} else if (res.data) {
								let loadData = preInitBind ? preInitBind.call(self, res.data) : res.data;
								pasteData(loadData);
							}
						},
						function(res) {
						},
						// abortController
					)
				} else if (typeof(per) == 'object' && per.rows && (Array.isArray(per.rows) || typeof(per.rows) == 'object')) {
					pasteData(per);
				} else if (Array.isArray(per) && per.length) {
					pasteData({rows: per});
				// } else if (!F.isEmptyObject(self.rows) && (!Array.isArray(self.rows) || Array.isArray(self.rows) && self.rows.length)) {
				} else if (!F.isEmptyObject(self.rows)) {
					pasteData({rows: self.rows});
				}
			}

			self.reload = function() {
				self.load(self.per, self.page, self.sort, self.orderDir, self.filter);
			}

			
			self.update = function(rowID, rowData, full) {
				// onRowInitBind.call(self, rowData, rowID);
				let row = document.getElementById(self.id+'_'+rowID);
				rowData = self.rowInit(rowID, rowData);

				if (!full) {
					for (let param in rowData) {
						if (Array.isArray(rowData[param]) && self.typeSelect[param]) {
							rowData[param] = '<option>' + rowData[param].join('</option><option>') + '</option>';
						}
					}

					let changed = {};
					for (let param in rowData) {
						if (rowData[param] != self.rows[rowID][param]) {
							self.rows[rowID][param] = rowData[param];
							changed[param] = true;
						}
					}
					for (let key in changed) {
						let qs = '[data-type="'+key+'"]';
						let _upd_obj = row.querySelector(qs);
						if (!_upd_obj) {
							continue;
						}
						let html = F.fmt(document.getElementById(self.id+'_tmpl').querySelector(qs).innerHTML, rowData);
						_upd_obj.innerHTML = html;
						let _upd_obj_more = row && row.nextElementSibling ? row.nextElementSibling.querySelector(qs) : null;
						if (_upd_obj_more) {
							let html = F.fmt(document.getElementById(self.id+'_tmpl_more').querySelector(qs).innerHTML, rowData);
							_upd_obj_more.innerHTML = html;
						}
					}
					return changed;
					
				} else {
					self.rows[rowID] = rowData;
					row.innerHTML = F.fmt(_tmpl.innerHTML, rowData);
					if (_tmplMore && row.nextElementSibling && F.hasClass(row.nextElementSibling, 'ztp-more')) {
						row.nextElementSibling.innerHTML = F.fmt(_tmplMore.innerHTML, rowData);
					}
					F.blinkCl(row, 'transition', 1300);
					F.blinkCl(row, 'updated', 1000);
				}
			}

			self.clear = function() {
				self.rows 	= {};
				self.count = 0;
				_table.tBodies[0].innerHTML = '';
				return self;
			}

			self.rowInit = function(rowID, rowData) {
				onRowInitBind.call(self, rowData, rowID);
				for (let key in self.typeSelect) {
					let parent,
						value = rowData,
						arrKey = key.split('.');
					for (let j = 0; j < arrKey.length; j++) {
						parent = value;
						value = value[arrKey[j]];
					}
					parent[arrKey[arrKey.length - 1] + '_valname'] = self.typeSelect[key][value];
				}
				return rowData;
			}
			self.onRowInit = function(func) {
				onRowInitBind = func;
				return self;
			}
			self.onInit = function(func) {
				onInitBind = func;
				return self;
			}
			self.onDrop = function(func) {
				onDropBind = func;
				return self;
			}
			// self.editClose = function(apply) {
			// 	if (apply) {
			// 		// applyСhanges();
			// 		Edit.apply();
			// 	} else {
			// 		Edit.close();
			// 		// closeEdit();
			// 	}
			// };
			self.editOnPaste = function(func) {
				editOnPasteBind = func;
				return self;
			}
			self.onSelect = function(func) {
				onSelectBind = func;
				return self;
			}
			self.getTr = function(rowID) {
				return document.getElementById(self.id+'_'+rowID);
			}


			// filter
			Object.keys(dataFilter).map(function(key, index) {
				let item = dataFilter[key];
				if (item && typeof(item.change) === 'function') {
					self.filter[key] = dataFilter[key].value;
					item.change(function() {
						self.filter[key] = this.value;
						self.reload();
					})
				} else {
					self.filter[key] = item;
				}
			});
			// 

			if (self.loadOnInit) {
				self.reload();
			}

			_table.onclick = function(e) {
				e = e || event;
				let _this;
				if (_this = e.target.closest('.sorting')) {
					if (_colSort) {
						F.remClass(_colSort, 'sort-desc');
						F.remClass(_colSort, 'sort-asc');
						F.addClass(_colSort, 'sorting');
					}
					_colSort = _this;
					F.remClass(_colSort, 'sorting');
					F.addClass(_colSort, 'sort-asc');
					self.sort = _colSort.getAttribute('data-type');
					self.orderDir = 'asc';
					self.reload();
				} else
				if (_colSort = e.target.closest('.sort-asc')) {
					F.remClass(_colSort, 'sort-asc');
					F.addClass(_colSort, 'sort-desc');
					self.sort = _colSort.getAttribute('data-type');
					self.orderDir = 'desc';
					self.reload();
				} else
				if (_colSort = e.target.closest('.sort-desc')) {
					F.remClass(_colSort, 'sort-desc');
					F.addClass(_colSort, 'sort-asc');
					self.sort = _colSort.getAttribute('data-type');
					self.orderDir = 'asc';
					self.reload();
				} else
				if (_this = e.target.closest('.ztp-btc-more')) {
					F.togClass(_this.parentNode.parentNode, 'open');
				} else
				if (_this = e.target.closest('.ztp-btc-pick')) {
					if (!self.selection) {
						let _row = _this.parentNode.parentNode;
						let rowID = _row.getAttribute('data-id');
						self.toggleSelectRow(rowID);
					}
				} else
				if (e.target.closest('.ztp-btc-pick-all')) {
					self.toggleSelectRowAll();
				} else
				if (_this = e.target.closest('.ztp-func li')) {
					let funcName = _this.getAttribute('data-func');
					let id 		 = _this.closest('.ztp-row').getAttribute('data-id');
					let func 	 = typeof(self.rowFunc[funcName]) == 'function' ? self.rowFunc[funcName] : function() {};
					func.call(self, id);
				} else
				if (_this = e.target.closest('.ztp-row')) {
					if (e.ctrlKey) {
						let rowID = _this.getAttribute('data-id');	
						self.toggleSelectRow(rowID);
					} else 
					if (self.selection) {
						let rowID = _this.getAttribute('data-id');	
						self.toggleSelectRow(rowID);
					}
				} else
				if (_this = e.target.closest('.ztp-c')) {
					F.remClass(_edit, 'select');
					if (!F.hasClass(_edit, 'error') && !self.sale && self.editable && !self.selection && !self.dbclickedit) {
						Edit.openClick(_this);
					}
				}
			}
			_table.ondblclick = function(e) {
				e = e || event;
				let _this;
				if (_this = e.target.closest('.ztp-c')) {
					if (_edit && !F.hasClass(_edit, 'error') && !self.sale && self.editable && !self.selection && self.dbclickedit) {
						Edit.openClick(_this);
					}
				}
			}
			_table.onmouseover = function(e) {
				e = e || event;
				let _this;
				if (_this = e.target.closest('.ztp-more')) {
					F.addClass(_this, 'hover');
					F.addClass(_this.previousElementSibling, 'hover');
				}
			}
			_table.onmouseout = function(e) {
				e = e || event;
				let _this;
				if (_this = e.target.closest('.ztp-more')) {
					F.remClass(_this, 'hover');
					F.remClass(_this.previousElementSibling, 'hover');
				}
			}

			if (self.dragdrop) {
				F.bind(document, 'keydown', function(e) {
					e = e || event;
					drag.allowed = e.ctrlKey && self.dragdrop;
					F.togClass(_table, 'dragdrop-rows', drag.allowed);
				})
				F.bind(document, 'keyup', function(e) {
					e = e || event;
					if (!e.ctrlKey) {
						drag.allowed = false;
						F.remClass(_table, 'dragdrop-rows');
					}
				})
				F.on(_table.tBodies[0], evDown, '.ztp-row', function(e) {
					e = e || event;
					if (e.which == 1 && drag.allowed && !drag.is.y) {
						e.preventDefault();
						drag.elem = this; 
						F.addClass(this, 'draggable');
						F.addClass(_table, 'dragdrop-movable');
						drag.is.y = true;
					}
				})
				F.bind(document, evMove, function(e) {
					e = e || event;
					if (drag.allowed && drag.is.y) {
						let row = e.target.closest('.ztp-row');
						let to = 'bottom';
						if (!row) {
							let row = e.target.closest('.ztp-more');

						} else if (row.nextElementSibling && F.hasClass(row.nextElementSibling, 'ztp-more')) {
							to = 'top';
							
						} else {
							let clientY = e.clientY || e.originalEvent.touches[0].clientY;
							let offsetY = clientY - row.getBoundingClientRect().top;
							to = offsetY < row.offsetHeight * 0.5 ? 'top' : 'bottom';
						}

						if (drag.target) drag.target.removeAttribute('data-drop');

						drag.above = to == 'top' ? true : false;
						if (row && row != drag.elem && (
							drag.above && row.previousElementSibling != drag.elem || 
							!drag.above && row.nextElementSibling != drag.elem)
						) {
							drag.target = row;
							row.setAttribute('data-drop', to); 
						} else {
							drag.target = undefined;
						}
					}
				})
				F.bind(document, evUp, function(e) {
					e = e || event;
					if (e.which == 1 && drag.is.y) {
						drag.is.y = false;
						F.remClass(drag.elem, 'draggable');
						F.remClass(_table, 'dragdrop-movable');
						if (drag.target) {
							drag.target.removeAttribute('data-drop');
							onDropBind.call(self, drag.elem, drag.target, drag.above);
						}
					}
				})
			}


			if (_reload) {	
				_reload.onclick = function() {
					self.reload();
				}
			}

			if (_edit) {
				_edit.onkeydown = function(e) {
					e = e || event;
					if (e.keyCode == 9 || (e.ctrlKey && !e.shiftKey && e.keyCode == 39)) {// right
						Edit.apply(function() {
							Edit.move.next();
						})
					} else if (e.ctrlKey && !e.shiftKey && e.keyCode == 37) {// left
						Edit.apply(function() {
							Edit.move.prev();
						})
					} else if (e.ctrlKey && !e.shiftKey && e.keyCode == 38) {//top
						Edit.apply(function() {
							Edit.move.top();
						})
					} else if (e.ctrlKey && !e.shiftKey && e.keyCode == 40) {//bottom
						Edit.apply(function() {
							Edit.move.bottom();
						})
					} else if (e.keyCode == 13) {// enter
						Edit.apply();
					} else if (e.keyCode == 27) {// esc
						Edit.close();
					} else if (F.hasClass(_edit, 'select')) {
						if (e.keyCode == 40) {//bottom
							if (typeof(_selectOption) == 'undefined') {
								_selectOption = _selectUL.children[0];
							} else {
								let _selectOptionN = _selectOption.nextElementSibling;
								F.remClass(_selectOption, 'active');
								_selectOption = (_selectOptionN.length != 0) ? _selectOptionN : _selectOption;
							}
							F.addClass(_selectOption, 'active');
							_edit.setAttribute('data-value', _selectOption.getAttribute('data-value'))
							_edit.value = _selectOption.innerHTML;
						} else if (e.keyCode == 38) {//top
							if (typeof(_selectOption) == 'undefined') {
								_selectOption = _selectUL.children[_selectUL.children.length - 1];
							} else {
								let _selectOptionN = _selectOption.previousElementSibling;
								F.remClass(_selectOption, 'active');
								_selectOption = (_selectOptionN.length != 0) ? _selectOptionN : _selectOption;
							}
							F.addClass(_selectOption, 'active');
							_edit.setAttribute('data-value', _selectOption.getAttribute('data-value'))
							_edit.value = _selectOption.innerHTML;
						}
					}
				}
				_edit.onblur = function() {
					if (Edit.blurApply) {
						Edit.apply();
					}
				}
				_edit.onpaste = function(e) {
					e = e || event;
					editOnPasteBind.call(this, e, self, Edit);
				}
			}


			if (_selectUL) {
				_selectUL.onclick = function() {
					let _this;
					if (_this = e.target.closest('li')) {
						Edit.i.setAttribute('data-value', _this.getAttribute('data-value'))
						Edit.i.value = _this.innerHTML;
						Edit.apply();
					}
				}
				_selectUL.onmouseover = function() {
					allowBlurApply = false;
				}
				_selectUL.onmouseout = function() {
					allowBlurApply = true;
				}
			}

			if (_addbtn) {
				_addbtn.onclick = function() {
					self.newRow();
				}
			}

			if (_delbtn) {
				_delbtn.onclick = function() {
					self.delRows();
				}
			}

			if (_selection) {
				_selection.onclick = function() {
					self.selection = self.selection ? false : true;
					F.togClass(this, 'active');
					F.togClass(_table, 'selection');
				}
			}

			if (_countShow) {
				_countShow.onchange = function() {
					self.per = this.value;
					self.reload();
					F.localStorage.set(storageName+'.amount', self.per);
				}
			}

			if (_pages) { // paginate
				_pages.onclick = function(e) {
					e = e || event;
					let _this;
					if (_this = e.target.closest('.ztp-page-number')) {
						self.page = +_this.innerHTML;
						self.showPage = self.page;
						self.reload();
					} else
					if (_this = e.target.closest('.ztp-page-next')) {
						if (!F.hasClass(_this, 'disabled')) {
							self.page = (self.page + 1 < self.pages) || self.pages === null ? self.page + 1 : self.pages;
							self.showPage = self.page;
							self.reload();
						}
					} else
					if (_this = e.target.closest('.ztp-page-prev')) {
						if (!F.hasClass(_this, 'disabled')) {
							self.page = self.page - 1 > 1 ? self.page - 1 : 1;
							self.showPage = self.page;
							self.reload();
						}
					} else
					if (_this = e.target.closest('.ztp-page-show-next')) {
						self.showPage = self.showPage < self.pagesShow ? self.pagesShow - 1 : self.showPage;
						self.showPage = self.showPage + 3 < self.pages ? self.showPage + 3 : self.pages;
						_pages.innerHTML = paginate(self.page, self.pages, self.showPage);
					} else
					if (_this = e.target.closest('.ztp-page-show-prev')) {
						self.showPage = self.showPage >= self.pages - self.pagesShow + 2 ? self.pages - self.pagesShow + 2 : self.showPage;
						self.showPage = self.showPage - 3 > 1 ? self.showPage - 3 : 1;
						_pages.innerHTML = paginate(self.page, self.pages, self.showPage);
					}
				}
			}

			if (self.heightFill) {
				fillTableHeight();
				window.addEventListener('resize', function() {
					fillTableHeight();
				})
				// let padding = 0;
				// function isChild(em, search) {
				// 	while (em) {
				// 		padding += parseInt(getComputedStyle(em).paddingTop) + parseInt(getComputedStyle(em).paddingBottom);
				// 		if (em == search) return em;
				// 		if (parent && em == parent) return false;
				// 		em = em.parentNode;
				// 	}
				// 	return false;
				// };
				// let fillObj	= typeof(self.heightFill) == "string" ? document.getElementById(self.heightFill) : self.heightFill;
				// let hf = fillObj.clientHeight;
				// isChild(_table, fillObj);
				// hf -= padding;
				// if (_pages) {
				// 	hf -= _pages.parentNode.clientHeight;
				// }
				// F.css(_table.parentNode, {'min-height': hf+'px'});
			} else 
			if (self.minHeight) {
				F.css(_table.parentNode, {'min-height': self.minHeight+'px'});
			}

			function pasteData(data) {
				// let start = new Date().getTime();
				// console.log(data);
				function arrayToObject(arr) {
					let obj = {};
					for (let i = 0; i < arr.length; ++i) obj[i] = arr[i];
					return obj;
				}

				self.selected   = [];
				self.rows 		= Array.isArray(data['rows']) ? arrayToObject(data['rows']) : data['rows'];
				self.amount 	= typeof(data['amount']) == 'number' ? data['amount'] : self.amount;
				self.per 	    = typeof(data['per']) == 'number'    ? data['per']    : self.amount;
				self.pages 		= typeof(data['pages']) == 'number'  ? data['pages']  : self.pages;
				self.page 	 	= typeof(data['page']) == 'number'   ? data['page']   : self.page;
				self.count      = data.count;

				let dataSort 		= data['order'] && data['order'][0] && data['order'][0]['field'] ? data['order'][0]['field'] : self.sort;
				let dataOrderDir 	= data['order'] && data['order'][0] && data['order'][0]['dir']   ? data['order'][0]['dir']   : self.orderDir;

				let countRows   = 0;
				_table.tBodies[0].innerHTML = '';
				if (!self.rows) {
					if (_pages) _pages.innerHTML = paginate(1, 1);
					F.remClass(_table, 'loading');
					return false;
				}
				// for (let rowID = 0; rowID < self.rows.length; rowID++) {
				for (let rowID in self.rows) {
					let _cloneTmpl, _cloneTmplMore;
					let t1 = document.createElement('tbody');
					let t2 = document.createElement('tbody');

					countRows++;
					self.rows[rowID] = self.rowInit(rowID, self.rows[rowID]);
					// onRowInitBind.call(self, self.rows[rowID], rowID);
					// for (let key in self.typeSelect) {
					// 	let parent,
					// 		value = self.rows[rowID],
					// 		arrKey = key.split('.');
					// 	for (let j = 0; j < arrKey.length; j++) {
					// 		parent = value;
					// 		value = value[arrKey[j]];
					// 	}
					// 	parent[arrKey[arrKey.length - 1] + '_valname'] = self.typeSelect[key][value];
					// }
					
					_cloneTmpl = _tmpl.cloneNode(true);
					F.remClass(_cloneTmpl, 'ztp-tmpl');
					F.addClass(_cloneTmpl, 'ztp-row');
					_cloneTmpl.setAttribute('data-id', rowID);
					_cloneTmpl.setAttribute('id', self.id + '_' +rowID);
					if (self.initselect) {
						if (self.rows[rowID].selected) {
							F.addClass(_cloneTmpl, 'selected');
							if (self.selected.indexOf(+rowID) < 0) self.selected.push(rowID);
						}
					}
					t1.innerHTML = F.fmt(_cloneTmpl.outerHTML, self.rows[rowID]);

					if (_tmplMore) {
						_cloneTmplMore = _tmplMore.cloneNode(true);
						_cloneTmplMore.removeAttribute('id');
						F.remClass(_cloneTmplMore, 'ztp-tmpl');
						F.addClass(_cloneTmplMore, 'ztp-more');
						_cloneTmplMore.setAttribute('data-id', rowID);
						t2.innerHTML = F.fmt(_cloneTmplMore.outerHTML, self.rows[rowID]);
					}

					for (let j = 0; j < self.addFields.length; j++) {
						let newField = self.addFields[j];
						switch(newField.type) {
							case 'moment':
								if (newField.calendar) {
									self.rows[rowID][newField.name] = moment(self.rows[rowID][newField.field]).calendar(null, newField.calendar);
								}
								break;
							default:
								break;
						}
					}

					if (t1.firstChild) _table.tBodies[0].appendChild(t1.firstChild);
					if (t2.firstChild) _table.tBodies[0].appendChild(t2.firstChild);
				}
				if (_colSort) {
					F.remClass(_colSort, 'sort-desc');
					F.remClass(_colSort, 'sort-asc');
					F.addClass(_colSort, 'sorting');
				}
				if (typeof(data.count) == 'undefined') {
					self.count = countRows;
				}

				_colSort = _table.querySelector('thead td[data-type="'+dataSort+'"]');
				F.remClass(_colSort, 'sorting');
				F.remClass(_colSort, 'sort-asc');
				F.remClass(_colSort, 'sort-desc');
				if (dataOrderDir) F.addClass(_colSort, 'sort-'+dataOrderDir.toLowerCase());

				F.remClass(_table, 'loading');
				if (_countShow) _countShow.value = self.per;
				if (_countof) _countof.innerHTML = self.count ? self.count : '';
				if (_pages) _pages.innerHTML = paginate(self.page, self.pages);

				onInitBind.call(self);
				if (self.heightFill) {
					fillTableHeight();
				}

				// let elapsed = new Date().getTime() - start;
				// console.log(elapsed, 'ms');
			}

			


			let Edit = {
				i: 	     _edit,
				wrap:    _wrapEdit,
				hint:    _hintEdit,
				tr:      undefined,
				td:      undefined,
				zcell:   undefined,
				oldData: '',
				blurApply: true,
				checkFill: function(dataRow) {
					let correctlyCount = 0;
					for (let i = 0; i < self.important.length; i++) {
						if (dataRow[self.important[i]] != '') correctlyCount++;
					}
					return (correctlyCount == self.important.length) ? true : false;
				},
				openClick: function(_obj, close) {
					if (!_obj) {
						return;
					}
					if (close) {
						Edit.close();
					}
					if (!F.hasClass(Edit.i, 'error') && !self.sale && self.editable && !self.selection) {
						Edit.open(_obj);
					}
				},
				open: function(_obj) {
					if (!_obj) {
						return;
					}
					let dataType = _obj.getAttribute('data-type');
					if (typeof(self.typeSelect[dataType]) != 'undefined') { // if data is selectable
						if (_selectUL) {
							let _selectLI = document.createElement('li');
							_selectLI.setAttribute('data-value', '');
							_selectLI = '–';
							_selectUL.innerHTML = '';
							_selectUL.appendChild(_selectLI)
							for (prop in self.typeSelect[dataType]) {
								let _selectLI = document.createElement('li');
								_selectLI.setAttribute('data-value', prop);
								_selectLI = self.typeSelect[dataType][prop];
								_selectUL.appendChild(_selectLI);
							}
						}
						
						let dataVal = _obj.getAttribute('data-value');
						let dataValName = dataVal != '' ? self.typeSelect[dataType][dataVal] : '';
						F.addClass(Edit.i, 'select');
						Edit.i.setAttribute('data-value', dataVal);
						Edit.i.value = dataValName;
					} else {
						Edit.i.value = _obj.innerHTML;
					}

					_obj.parentNode.appendChild(Edit.wrap);
					Edit.i.focus();
					Edit.i.select();

					if (Edit.td) {
						F.remClass(Edit.td, 'active');
						F.remClass(Edit.tr, 'active');
					}
					Edit.zcell = _obj;
					
					if (!F.hasClass(Edit.zcell, 'more')) {
						Edit.td = _obj.parentNode
						Edit.tr = Edit.td.parentNode;
					} else {
						Edit.td = _obj.closest('.ztp-cw').parentNode;
						Edit.tr = Edit.td.parentNode;
					}
					F.addClass(Edit.td, 'active');
					F.addClass(Edit.tr, 'active');

				},
				close: function() {
					Edit.blurApply = false;
					F.remClass(Edit.td, 'active');
					F.remClass(Edit.tr, 'active');
					if (Edit.wrap) {
						_table.parentNode.appendChild(Edit.wrap);
						F.remClass(Edit.i, 'error');
						F.remClass(Edit.i, 'select');
					}
					Edit.i.style.width = '';
					Edit.i.style.height = '';
					_selectOption = undefined;
					Edit.blurApply = true;
				},
				apply: function(callback) {
					if (!Edit.zcell || !Edit.tr) {
						return false;
					}
					let d = {	
						name: Edit.zcell.getAttribute('data-type'),
						val:  F.hasClass(Edit.i, 'select') ? Edit.i.getAttribute('data-value') : Edit.i.value,
						id:   +Edit.tr.getAttribute('data-id'),
					}
					let dataRow 	= (d.id < 0) ? self.newRows[-d.id] : self.rows[d.id];
					Edit.oldData 	= dataRow[d.name];

					if (requestEdit) {
						editOnChangeBind.call(Edit, d, callback);
					} else {
						Edit.applyValue(d.id, d.val, d.name, callback);
					}

				},
				applyValue: function(id, val, name, callback) {
					Edit.blurApply = false;
					if (F.hasClass(Edit.i, 'select') && typeof(self.typeSelect[name]) != 'undefined') {
						let dataValName = val != '' ? self.typeSelect[name][val] : '';
						Edit.zcell.setAttribute('data-value', val);
						Edit.zcell.innerHTML = dataValName;
					} else {
						Edit.zcell.innerHTML = val;
					}
					let dataRow = (id < 0) ? self.newRows[-id] : self.rows[id];
					dataRow[name] = val;

					if (callback && typeof(callback) == "function") {
						callback.call();
					} else {
						Edit.close();
					}
					Edit.blurApply = true;
				},
				error: function(errText) {
					F.addClass(Edit.i, 'error');
					Edit.i.select();
					// dataRow[dataType] = dataOld;
					Edit.hint.innerHTML = errText;
				},
				move: {
					top: function() {
						let _rowTO = Edit.tr.previousElementSibling;
						if (F.hasClass(Edit.tr, 'ztp-more')) {
							Edit.move.more(-1);
						} else if (_rowTO && F.hasClass(Edit.tr, 'ztp-row')) {
							if (F.hasClass(_rowTO, 'ztp-more')) {
								_rowTO = _rowTO.previousElementSibling ? _rowTO.previousElementSibling : _rowTO;
							}
							let indexCell = Array.from(Edit.tr.querySelectorAll('.ztp-c')).indexOf(Edit.zcell);
							let cells = _rowTO.querySelectorAll('.ztp-c');
							let cell  = cells.length ? cells[indexCell] : null;
							Edit.openClick(cell, true);
						}
					},
					bottom: function() {
						let _rowTO = Edit.tr.nextElementSibling;
						if (F.hasClass(Edit.tr, 'ztp-more')) {
							Edit.move.more(1);
						} else if (_rowTO && F.hasClass(Edit.tr, 'ztp-row')
								  && (F.hasClass(_rowTO, 'ztp-row') || !F.hasClass(_rowTO, 'ztp-row') && _rowTO.nextElementSibling)) {
							if (F.hasClass(_rowTO, 'ztp-more')) {
								_rowTO = _rowTO.nextElementSibling ? _rowTO.nextElementSibling : _rowTO;
							}
							let indexCell = Array.from(Edit.tr.querySelectorAll('.ztp-c')).indexOf(Edit.zcell);
							let cells = _rowTO.querySelectorAll('.ztp-c');
							let cell  = cells.length ? cells[indexCell] : null;
							Edit.openClick(cell, true);
						}
					},
					prev: function() {
						let _rowTO = Edit.tr.previousElementSibling;
						let _prevEdit = Edit.td.previousElementSibling ? Edit.td.previousElementSibling.querySelector('.ztp-c') : null;
						if (!_prevEdit && !_rowTO) {
							return false;
						}
						if (F.hasClass(Edit.tr, 'ztp-row')) {
							let _toObj = null;
							if (_prevEdit) {
								_toObj = _prevEdit;
							} else if (_rowTO.previousElementSibling && F.hasClass(_rowTO.previousElementSibling, 'open') && F.hasClass(_rowTO, 'ztp-more')) {
								let cells = _rowTO.querySelectorAll('.ztp-c');
								_toObj = cells.length ? cells[cells.length - 1] : null;
							} else if (_rowTO && F.hasClass(_rowTO, 'ztp-row')) {
								let cells = _rowTO ? _rowTO.querySelectorAll('.ztp-c') : null;
								_toObj = cells ? cells[cells.length - 1] : null;
							} else if (_rowTO.previousElementSibling) {
								let cells = _rowTO.previousElementSibling ? _rowTO.previousElementSibling.querySelectorAll('.ztp-c') : null;
								_toObj = cells ? cells[cells.length - 1] : null;
							}
							Edit.openClick(_toObj, true);
						} else if (F.hasClass(Edit.tr, 'ztp-more')) {
							Edit.move.more(-1);
						}
					},
					next: function() {
						let _rowTO 	  = Edit.tr.nextElementSibling;
						let _nextEdit = Edit.td.nextElementSibling ? Edit.td.nextElementSibling.querySelector('.ztp-c') : null;
						if (F.hasClass(Edit.tr, 'ztp-row')) {
							let _toObj = null;
							if (_nextEdit) {
								_toObj = _nextEdit;
							} else if (F.hasClass(Edit.tr, 'open') && _rowTO && F.hasClass(_rowTO, 'ztp-more')) {
								_toObj = _rowTO.querySelector('.ztp-c');
							} else if (_rowTO && F.hasClass(_rowTO, 'ztp-row')) {
								_toObj = _rowTO.querySelector('.ztp-c');
							} else if (_rowTO && _rowTO.nextElementSibling) {
								_toObj = _rowTO.nextElementSibling.querySelector('.ztp-c');
							}
							Edit.openClick(_toObj, true);
						} else if (F.hasClass(Edit.tr, 'ztp-more')) {
							Edit.move.more(1);
						}
					},
					more: function(i) {
						let _arrCells = Edit.td.querySelectorAll('.ztp-c');
						let nextCell = Array.from(_arrCells).indexOf(Edit.zcell) + i;
						let _nextEdit = _arrCells[nextCell];
						
						if (_nextEdit) {
							Edit.openClick(_nextEdit, true);
						} else {
							if (i > 0) {
								Edit.openClick(Edit.tr.nextElementSibling.querySelectorAll('.ztp-c')[0], true);
							} else if (i < 0){
								let cells = Edit.tr.previousElementSibling.querySelectorAll('.ztp-c');
								Edit.openClick(cells[cells.length - 1], true);
							}
						}
					},
				}
			}

			function fillTableHeight() {
				let padding = 0;
				function isChild(em, search) {
					while (em) {
						padding += parseInt(getComputedStyle(em).paddingTop) + parseInt(getComputedStyle(em).paddingBottom);
						if (em == search) return em;
						if (parent && em == parent) return false;
						em = em.parentNode;
					}
					return false;
				};
				F.css(_table.parentNode, {'min-height': '0px'});
				let fillObj	= typeof(self.heightFill) == "string" ? document.getElementById(self.heightFill) : self.heightFill;
				let hf = fillObj.clientHeight;
				isChild(_table, fillObj);
				hf -= padding;
				if (_pages) {
					hf -= _pages.parentNode.clientHeight;
				}
				F.css(_table.parentNode, {'min-height': hf+'px'});
			}

			function paginate(page, pages, showPage, amount) {
				function chkPaste(a, b, text, c) {
					return a == b && !c ? text : '';
				}

				amount = typeof(amount) == "undefined" ? 5 : amount;
				showPage = typeof(showPage) == "undefined" ? page : showPage;

				let iPages = pages || 1;
				let beforeShowPage = ~~((amount - 1) / 2) - 1;
				let afterShowPage = amount - beforeShowPage - 3;
				let html = '';
				html += '<li><button class="ztp-page-prev"' + chkPaste(page, 1, ' disabled', pages === null) + '>‹</button></li>';
				if (pages === null) {
					html += '<li><button class="ztp-page-number active">'+page+'</button></li>';
				} else {
					html += '<li><button class="ztp-page-number' + chkPaste(page, 1, ' active') + '">1</button></li>';
				}
				if (iPages > 1) {
					if (showPage <= amount - afterShowPage || iPages <= amount + 2) {
						html += '<li><button class="ztp-page-number' + chkPaste(page, 2, ' active') + '">2</button></li>';
						showPage = amount - afterShowPage;
					} else {
						html += '<li><button class="ztp-page-show-prev">...</button></li>';
					}
				}

				let startShow = showPage - beforeShowPage;
				let endShow = startShow + amount - 3;

				let startShowF = (startShow < iPages - afterShowPage - 3) ? startShow : iPages - afterShowPage - 3;
				startShowF = (startShowF > 2) ? startShowF : 3;
				let endShowF = endShow < iPages ? endShow : iPages;

				if (iPages > 2) {
					for (let i = startShowF; i <= endShowF; i++) {
						html += '<li><button class="ztp-page-number' + chkPaste(page, i, ' active') + '">' + i + '</button></li>';
					}
				}
				if (endShowF != iPages) {
					if (showPage + afterShowPage < iPages - 2) {
						html += '<li><button class="ztp-page-show-next">...</button></li>';
					} else if (showPage + afterShowPage < iPages - 1) {
						html += '<li><button class="ztp-page-number' + chkPaste(page, iPages - 1, ' active') + '">' + (iPages - 1) + '</button></li>';
					}
					html += '<li><button class="ztp-page-number' + chkPaste(page, iPages, ' active') + '">' + iPages + '</button></li>';
				}
				html += '<li><button class="ztp-page-next"' + chkPaste(page, iPages, ' disabled', pages === null) + '>›</button></li>';	
				return html;
			}

			function hashCode(str) {
				let hash = 0;
				if (str.length == 0) {
					return hash;
				}
				for (let i = 0; i < str.length; i++) {
					let char = str.charCodeAt(i);
					hash = ((hash<<5)-hash)+char;
					hash = hash & hash;
				}
				return hash;
			}

			return self;
		}
	})
})();