(self.webpackChunkpro_gamin=self.webpackChunkpro_gamin||[]).push([[671],{2671:(t,e,a)=>{"use strict";a.r(e),a.d(e,{CharactersModule:()=>v});var n=a(1116),i=a(3337),c=a(6121),r=a(1906),o=a(6238),s=a(4689),l=a(9241),p=a(6636),u=a(8187),m=a(5366),h=a(2693);let f=(()=>{class t{constructor(t){this.httpSvc=t}getCharacters(t){return this.httpSvc.get(t)}}return t.\u0275fac=function(e){return new(e||t)(m.LFG(h.eN))},t.\u0275prov=m.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var d=a(2935),g=a(9199),w=a(7064);function C(t,e){1&t&&(m.TgZ(0,"th",10),m._uU(1," NAME "),m.qZA())}function N(t,e){if(1&t&&(m.TgZ(0,"td",11),m._uU(1),m.qZA()),2&t){const t=e.$implicit;m.xp6(1),m.hij(" ",t.name," ")}}function Z(t,e){1&t&&(m.TgZ(0,"th",10),m._uU(1," GENDER "),m.qZA())}function A(t,e){if(1&t&&(m.TgZ(0,"td",11),m._uU(1),m.qZA()),2&t){const t=e.$implicit;m.xp6(1),m.hij(" ",t.gender," ")}}function T(t,e){1&t&&(m.TgZ(0,"th",10),m._uU(1," FATHER "),m.qZA())}function _(t,e){if(1&t&&(m.TgZ(0,"td",11),m._uU(1),m.qZA()),2&t){const t=e.$implicit;m.xp6(1),m.hij(" ",t.father," ")}}function R(t,e){1&t&&(m.TgZ(0,"th",10),m._uU(1,"MOTHER"),m.qZA())}function k(t,e){if(1&t&&(m.TgZ(0,"td",11),m._uU(1),m.qZA()),2&t){const t=e.$implicit;m.xp6(1),m.hij(" ",t.mother," ")}}function E(t,e){1&t&&m._UZ(0,"tr",12)}function S(t,e){if(1&t){const t=m.EpF();m.TgZ(0,"tr",13),m.NdJ("click",function(){const e=m.CHM(t).$implicit;return m.oxw().handleRowClick(e)}),m.qZA()}}const Y=[{path:"",component:(()=>{class t{constructor(t,e){this.charactersSvc=t,this.dialog=e,this.PAGINATOR_ENUM=u.k,this.data=[],this.displayedColumns=["name","gender","father","mother"]}ngOnInit(){}handleRowClick(t){console.log(t),this.dialog.open(p.r,{data:t.url})}ngAfterViewInit(){(0,r.T)(this.paginator.page).pipe((0,o.O)({}),(0,s.w)(()=>this.charactersSvc.getCharacters(`https://www.anapioficeandfire.com/api/characters?page=${this.paginator.pageIndex+1}&pageSize=${this.paginator.pageSize}`))).subscribe(t=>this.data=t)}}return t.\u0275fac=function(e){return new(e||t)(m.Y36(f),m.Y36(d.uw))},t.\u0275cmp=m.Xpm({type:t,selectors:[["app-characters"]],viewQuery:function(t,e){if(1&t&&(m.Gf(c.NW,5),m.Gf(l.YE,5)),2&t){let t;m.iGM(t=m.CRH())&&(e.paginator=t.first),m.iGM(t=m.CRH())&&(e.sort=t.first)}},decls:16,vars:5,consts:[["matSort","","mat-table","",1,"mat-elevation-z8","list",3,"dataSource"],["matColumnDef","name"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","gender"],["matColumnDef","father"],["matColumnDef","mother"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","","matRipple","",3,"click",4,"matRowDef","matRowDefColumns"],[3,"pageSize","length"],["mat-header-cell",""],["mat-cell",""],["mat-header-row",""],["mat-row","","matRipple","",3,"click"]],template:function(t,e){1&t&&(m.TgZ(0,"table",0),m.ynx(1,1),m.YNc(2,C,2,0,"th",2),m.YNc(3,N,2,1,"td",3),m.BQk(),m.ynx(4,4),m.YNc(5,Z,2,0,"th",2),m.YNc(6,A,2,1,"td",3),m.BQk(),m.ynx(7,5),m.YNc(8,T,2,0,"th",2),m.YNc(9,_,2,1,"td",3),m.BQk(),m.ynx(10,6),m.YNc(11,R,2,0,"th",2),m.YNc(12,k,2,1,"td",3),m.BQk(),m.YNc(13,E,1,0,"tr",7),m.YNc(14,S,1,0,"tr",8),m.qZA(),m._UZ(15,"mat-paginator",9)),2&t&&(m.Q6J("dataSource",e.data),m.xp6(13),m.Q6J("matHeaderRowDef",e.displayedColumns),m.xp6(1),m.Q6J("matRowDefColumns",e.displayedColumns),m.xp6(1),m.Q6J("pageSize",e.PAGINATOR_ENUM.ITEMS_PER_PAGE)("length",e.PAGINATOR_ENUM.ITEMS_LENGTH))},directives:[g.BZ,l.YE,g.w1,g.fO,g.Dz,g.as,g.nj,c.NW,g.ge,g.ev,g.XQ,g.Gk,w.wG],styles:[".list[_ngcontent-%COMP%]{width:100%}"]}),t})()}];let U=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=m.oAB({type:t}),t.\u0275inj=m.cJS({imports:[[i.Bz.forChild(Y)],i.Bz]}),t})(),v=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=m.oAB({type:t}),t.\u0275inj=m.cJS({imports:[[n.ez,U,g.p0,c.TU,l.JX,d.Is,w.si]]}),t})()}}]);