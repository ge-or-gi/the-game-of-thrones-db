(self.webpackChunkpro_gamin=self.webpackChunkpro_gamin||[]).push([[924],{924:(t,i,e)=>{"use strict";e.r(i),e.d(i,{AboutModule:()=>C});var a=e(1116),r=e(3337),s=e(5366),n=e(7064),o=e(9861),l=e(4720);const d=["*"],c=".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-grid-tile-header,.mat-grid-tile .mat-grid-tile-footer{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-header>*,.mat-grid-tile .mat-grid-tile-footer>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-tile-header.mat-2-line,.mat-grid-tile .mat-grid-tile-footer.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}.mat-grid-tile-content{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}\n";class h{constructor(){this.columnIndex=0,this.rowIndex=0}get rowCount(){return this.rowIndex+1}get rowspan(){const t=Math.max(...this.tracker);return t>1?this.rowCount+t-1:this.rowCount}update(t,i){this.columnIndex=0,this.rowIndex=0,this.tracker=new Array(t),this.tracker.fill(0,0,this.tracker.length),this.positions=i.map(t=>this._trackTile(t))}_trackTile(t){const i=this._findMatchingGap(t.colspan);return this._markTilePosition(i,t),this.columnIndex=i+t.colspan,new g(this.rowIndex,i)}_findMatchingGap(t){let i=-1,e=-1;do{this.columnIndex+t>this.tracker.length?(this._nextRow(),i=this.tracker.indexOf(0,this.columnIndex),e=this._findGapEndIndex(i)):(i=this.tracker.indexOf(0,this.columnIndex),-1!=i?(e=this._findGapEndIndex(i),this.columnIndex=i+1):(this._nextRow(),i=this.tracker.indexOf(0,this.columnIndex),e=this._findGapEndIndex(i)))}while(e-i<t||0==e);return Math.max(i,0)}_nextRow(){this.columnIndex=0,this.rowIndex++;for(let t=0;t<this.tracker.length;t++)this.tracker[t]=Math.max(0,this.tracker[t]-1)}_findGapEndIndex(t){for(let i=t+1;i<this.tracker.length;i++)if(0!=this.tracker[i])return i;return this.tracker.length}_markTilePosition(t,i){for(let e=0;e<i.colspan;e++)this.tracker[t+e]=i.rowspan}}class g{constructor(t,i){this.row=t,this.col=i}}const m=new s.OlP("MAT_GRID_LIST");let p=(()=>{class t{constructor(t,i){this._element=t,this._gridList=i,this._rowspan=1,this._colspan=1}get rowspan(){return this._rowspan}set rowspan(t){this._rowspan=Math.round((0,o.su)(t))}get colspan(){return this._colspan}set colspan(t){this._colspan=Math.round((0,o.su)(t))}_setStyle(t,i){this._element.nativeElement.style[t]=i}}return t.\u0275fac=function(i){return new(i||t)(s.Y36(s.SBq),s.Y36(m,8))},t.\u0275cmp=s.Xpm({type:t,selectors:[["mat-grid-tile"]],hostAttrs:[1,"mat-grid-tile"],hostVars:2,hostBindings:function(t,i){2&t&&s.uIk("rowspan",i.rowspan)("colspan",i.colspan)},inputs:{rowspan:"rowspan",colspan:"colspan"},exportAs:["matGridTile"],ngContentSelectors:d,decls:2,vars:0,consts:[[1,"mat-grid-tile-content"]],template:function(t,i){1&t&&(s.F$t(),s.TgZ(0,"div",0),s.Hsn(1),s.qZA())},styles:[c],encapsulation:2,changeDetection:0}),t})();const u=/^-?\d+((\.\d+)?[A-Za-z%$]?)+$/;class _{constructor(){this._rows=0,this._rowspan=0}init(t,i,e,a){this._gutterSize=S(t),this._rows=i.rowCount,this._rowspan=i.rowspan,this._cols=e,this._direction=a}getBaseTileSize(t,i){return`(${t}% - (${this._gutterSize} * ${i}))`}getTilePosition(t,i){return 0===i?"0":y(`(${t} + ${this._gutterSize}) * ${i}`)}getTileSize(t,i){return`(${t} * ${i}) + (${i-1} * ${this._gutterSize})`}setStyle(t,i,e){let a=100/this._cols,r=(this._cols-1)/this._cols;this.setColStyles(t,e,a,r),this.setRowStyles(t,i,a,r)}setColStyles(t,i,e,a){let r=this.getBaseTileSize(e,a);t._setStyle("rtl"===this._direction?"right":"left",this.getTilePosition(r,i)),t._setStyle("width",y(this.getTileSize(r,t.colspan)))}getGutterSpan(){return`${this._gutterSize} * (${this._rowspan} - 1)`}getTileSpan(t){return`${this._rowspan} * ${this.getTileSize(t,1)}`}getComputedHeight(){return null}}class f extends _{constructor(t){super(),this.fixedRowHeight=t}init(t,i,e,a){super.init(t,i,e,a),this.fixedRowHeight=S(this.fixedRowHeight),u.test(this.fixedRowHeight)}setRowStyles(t,i){t._setStyle("top",this.getTilePosition(this.fixedRowHeight,i)),t._setStyle("height",y(this.getTileSize(this.fixedRowHeight,t.rowspan)))}getComputedHeight(){return["height",y(`${this.getTileSpan(this.fixedRowHeight)} + ${this.getGutterSpan()}`)]}reset(t){t._setListStyle(["height",null]),t._tiles&&t._tiles.forEach(t=>{t._setStyle("top",null),t._setStyle("height",null)})}}class x extends _{constructor(t){super(),this._parseRatio(t)}setRowStyles(t,i,e,a){this.baseTileHeight=this.getBaseTileSize(e/this.rowHeightRatio,a),t._setStyle("marginTop",this.getTilePosition(this.baseTileHeight,i)),t._setStyle("paddingTop",y(this.getTileSize(this.baseTileHeight,t.rowspan)))}getComputedHeight(){return["paddingBottom",y(`${this.getTileSpan(this.baseTileHeight)} + ${this.getGutterSpan()}`)]}reset(t){t._setListStyle(["paddingBottom",null]),t._tiles.forEach(t=>{t._setStyle("marginTop",null),t._setStyle("paddingTop",null)})}_parseRatio(t){const i=t.split(":");this.rowHeightRatio=parseFloat(i[0])/parseFloat(i[1])}}class w extends _{setRowStyles(t,i){let e=this.getBaseTileSize(100/this._rowspan,(this._rows-1)/this._rows);t._setStyle("top",this.getTilePosition(e,i)),t._setStyle("height",y(this.getTileSize(e,t.rowspan)))}reset(t){t._tiles&&t._tiles.forEach(t=>{t._setStyle("top",null),t._setStyle("height",null)})}}function y(t){return`calc(${t})`}function S(t){return t.match(/([A-Za-z%]+)$/)?t:`${t}px`}let b=(()=>{class t{constructor(t,i){this._element=t,this._dir=i,this._gutter="1px"}get cols(){return this._cols}set cols(t){this._cols=Math.max(1,Math.round((0,o.su)(t)))}get gutterSize(){return this._gutter}set gutterSize(t){this._gutter=`${null==t?"":t}`}get rowHeight(){return this._rowHeight}set rowHeight(t){const i=`${null==t?"":t}`;i!==this._rowHeight&&(this._rowHeight=i,this._setTileStyler(this._rowHeight))}ngOnInit(){this._checkCols(),this._checkRowHeight()}ngAfterContentChecked(){this._layoutTiles()}_checkCols(){}_checkRowHeight(){this._rowHeight||this._setTileStyler("1:1")}_setTileStyler(t){this._tileStyler&&this._tileStyler.reset(this),this._tileStyler="fit"===t?new w:t&&t.indexOf(":")>-1?new x(t):new f(t)}_layoutTiles(){this._tileCoordinator||(this._tileCoordinator=new h);const t=this._tileCoordinator,i=this._tiles.filter(t=>!t._gridList||t._gridList===this),e=this._dir?this._dir.value:"ltr";this._tileCoordinator.update(this.cols,i),this._tileStyler.init(this.gutterSize,t,this.cols,e),i.forEach((i,e)=>{const a=t.positions[e];this._tileStyler.setStyle(i,a.row,a.col)}),this._setListStyle(this._tileStyler.getComputedHeight())}_setListStyle(t){t&&(this._element.nativeElement.style[t[0]]=t[1])}}return t.\u0275fac=function(i){return new(i||t)(s.Y36(s.SBq),s.Y36(l.Is,8))},t.\u0275cmp=s.Xpm({type:t,selectors:[["mat-grid-list"]],contentQueries:function(t,i,e){if(1&t&&s.Suo(e,p,5),2&t){let t;s.iGM(t=s.CRH())&&(i._tiles=t)}},hostAttrs:[1,"mat-grid-list"],hostVars:1,hostBindings:function(t,i){2&t&&s.uIk("cols",i.cols)},inputs:{cols:"cols",gutterSize:"gutterSize",rowHeight:"rowHeight"},exportAs:["matGridList"],features:[s._Bn([{provide:m,useExisting:t}])],ngContentSelectors:d,decls:2,vars:0,template:function(t,i){1&t&&(s.F$t(),s.TgZ(0,"div"),s.Hsn(1),s.qZA())},styles:[c],encapsulation:2,changeDetection:0}),t})(),T=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[n.uc,n.BQ],n.uc,n.BQ]}),t})();var Z=e(6136);const k=["*",[["mat-card-footer"]]],A=["*","mat-card-footer"];let v=(()=>{class t{constructor(t){this._animationMode=t}}return t.\u0275fac=function(i){return new(i||t)(s.Y36(Z.Qb,8))},t.\u0275cmp=s.Xpm({type:t,selectors:[["mat-card"]],hostAttrs:[1,"mat-card","mat-focus-indicator"],hostVars:2,hostBindings:function(t,i){2&t&&s.ekj("_mat-animation-noopable","NoopAnimations"===i._animationMode)},exportAs:["matCard"],ngContentSelectors:A,decls:2,vars:0,template:function(t,i){1&t&&(s.F$t(k),s.Hsn(0),s.Hsn(1,1))},styles:[".mat-card{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);display:block;position:relative;padding:16px;border-radius:4px}._mat-animation-noopable.mat-card{transition:none;animation:none}.mat-card .mat-divider-horizontal{position:absolute;left:0;width:100%}[dir=rtl] .mat-card .mat-divider-horizontal{left:auto;right:0}.mat-card .mat-divider-horizontal.mat-divider-inset{position:static;margin:0}[dir=rtl] .mat-card .mat-divider-horizontal.mat-divider-inset{margin-right:0}.cdk-high-contrast-active .mat-card{outline:solid 1px}.mat-card-actions,.mat-card-subtitle,.mat-card-content{display:block;margin-bottom:16px}.mat-card-title{display:block;margin-bottom:8px}.mat-card-actions{margin-left:-8px;margin-right:-8px;padding:8px 0}.mat-card-actions-align-end{display:flex;justify-content:flex-end}.mat-card-image{width:calc(100% + 32px);margin:0 -16px 16px -16px}.mat-card-footer{display:block;margin:0 -16px -16px -16px}.mat-card-actions .mat-button,.mat-card-actions .mat-raised-button,.mat-card-actions .mat-stroked-button{margin:0 8px}.mat-card-header{display:flex;flex-direction:row}.mat-card-header .mat-card-title{margin-bottom:12px}.mat-card-header-text{margin:0 16px}.mat-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;object-fit:cover}.mat-card-title-group{display:flex;justify-content:space-between}.mat-card-sm-image{width:80px;height:80px}.mat-card-md-image{width:112px;height:112px}.mat-card-lg-image{width:152px;height:152px}.mat-card-xl-image{width:240px;height:240px;margin:-8px}.mat-card-title-group>.mat-card-xl-image{margin:-8px 0 8px}@media(max-width: 599px){.mat-card-title-group{margin:0}.mat-card-xl-image{margin-left:0;margin-right:0}}.mat-card>:first-child,.mat-card-content>:first-child{margin-top:0}.mat-card>:last-child:not(.mat-card-footer),.mat-card-content>:last-child:not(.mat-card-footer){margin-bottom:0}.mat-card-image:first-child{margin-top:-16px;border-top-left-radius:inherit;border-top-right-radius:inherit}.mat-card>.mat-card-actions:last-child{margin-bottom:-8px;padding-bottom:0}.mat-card-actions:not(.mat-card-actions-align-end) .mat-button:first-child,.mat-card-actions:not(.mat-card-actions-align-end) .mat-raised-button:first-child,.mat-card-actions:not(.mat-card-actions-align-end) .mat-stroked-button:first-child{margin-left:0;margin-right:0}.mat-card-actions-align-end .mat-button:last-child,.mat-card-actions-align-end .mat-raised-button:last-child,.mat-card-actions-align-end .mat-stroked-button:last-child{margin-left:0;margin-right:0}.mat-card-title:not(:first-child),.mat-card-subtitle:not(:first-child){margin-top:-4px}.mat-card-header .mat-card-subtitle:not(:first-child){margin-top:-8px}.mat-card>.mat-card-xl-image:first-child{margin-top:-8px}.mat-card>.mat-card-xl-image:last-child{margin-bottom:-8px}\n"],encapsulation:2,changeDetection:0}),t})(),z=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[n.BQ],n.BQ]}),t})();const H=[{path:"",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-about"]],decls:34,vars:0,consts:[["cols","2","rowHeight","2:1"]],template:function(t,i){1&t&&(s.TgZ(0,"mat-grid-list",0),s.TgZ(1,"mat-grid-tile"),s.TgZ(2,"mat-card"),s.TgZ(3,"h1"),s._uU(4," pick an open api"),s.qZA(),s.TgZ(5,"p"),s._uU(6,"(https://anapioficeandfire.com/) to prepare a SPA with Angular."),s.qZA(),s.qZA(),s.qZA(),s.TgZ(7,"mat-grid-tile"),s.TgZ(8,"mat-card"),s.TgZ(9,"h1"),s._uU(10," goals:"),s.qZA(),s.TgZ(11,"p"),s._uU(12," -app should have list(s), detail(s) and a favorite(s) pages,"),s.qZA(),s.TgZ(13,"p"),s._uU(14," visitor should be able to add/remove any item to favorites page."),s.qZA(),s.TgZ(15,"p"),s._uU(16," -list page should have a quick search bar in order to filter items."),s.qZA(),s.TgZ(17,"p"),s._uU(18,"-provide a github/bitbucket repository which we can access."),s.qZA(),s.TgZ(19,"p"),s._uU(20,"-prepare a read.me file for the repository containing technical details and how to serve/run it."),s.qZA(),s.qZA(),s.qZA(),s.TgZ(21,"mat-grid-tile"),s.TgZ(22,"mat-card"),s.TgZ(23,"h1"),s._uU(24," the nice to have:"),s.qZA(),s.TgZ(25,"p"),s._uU(26," -design a landing page for app according to your taste."),s.qZA(),s.TgZ(27,"p"),s._uU(28,"-pagination/lazy loading for list page"),s.qZA(),s.TgZ(29,"p"),s._uU(30," -build an authentication module which will be let visitors to signup(in) to app with nodejs."),s.qZA(),s.TgZ(31,"p"),s._uU(32,"-build the app in accordance with the TDD approach."),s.qZA(),s.qZA(),s.qZA(),s._UZ(33,"mat-grid-tile"),s.qZA())},directives:[b,p,v],styles:[""]}),t})()}];let $=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[r.Bz.forChild(H)],r.Bz]}),t})(),C=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[a.ez,$,z,T]]}),t})()}}]);