(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{cVjz:function(e,t,n){"use strict";n.r(t),n.d(t,"VerDocumentacionModule",function(){return a});var s=n("ofXK"),i=n("tyNb"),o=n("fXoL"),r=n("piIm");function c(e,t){if(1&e&&(o.Lb(0,"li",4),o.Lb(1,"a",5),o.ec(2),o.Kb(),o.Kb()),2&e){const e=t.$implicit;o.yb(1),o.Wb("href",e.ruta,o.bc),o.yb(1),o.fc(e.name)}}const b=[{path:"",component:(()=>{class e{constructor(e){this.dbfiles=e}ngOnInit(){this.dbfiles.deleteNames().subscribe(e=>{console.log("eliminados los files")}),this.dbfiles.getNames().subscribe(e=>{this.dbfiles.names=e})}}return e.\u0275fac=function(t){return new(t||e)(o.Ib(r.a))},e.\u0275cmp=o.Cb({type:e,selectors:[["app-ver-documentacion"]],decls:4,vars:1,consts:[[1,"container"],[1,"card-body"],[1,"list-group"],["class","list-group-item",4,"ngFor","ngForOf"],[1,"list-group-item"],[1,"ref",3,"href"]],template:function(e,t){1&e&&(o.Lb(0,"div",0),o.Lb(1,"div",1),o.Lb(2,"ul",2),o.dc(3,c,3,2,"li",3),o.Kb(),o.Kb(),o.Kb()),2&e&&(o.yb(3),o.Vb("ngForOf",t.dbfiles.names))},directives:[s.h],styles:[""]}),e})()}];let l=(()=>{class e{}return e.\u0275mod=o.Gb({type:e}),e.\u0275inj=o.Fb({factory:function(t){return new(t||e)},imports:[[i.d.forChild(b)],i.d]}),e})(),a=(()=>{class e{}return e.\u0275mod=o.Gb({type:e}),e.\u0275inj=o.Fb({factory:function(t){return new(t||e)},imports:[[s.b,l]]}),e})()}}]);