(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{CKh3:function(t,e,n){"use strict";n.r(e),n.d(e,"ListEntradaModule",function(){return l});var o=n("ofXK"),i=n("tyNb"),a=n("mrSG"),c=n("fXoL"),r=n("Kwkp");function b(t,e){if(1&t){const t=c.Mb();c.Lb(0,"tr",6),c.Lb(1,"th",7),c.ec(2),c.Kb(),c.Lb(3,"td"),c.ec(4),c.Kb(),c.Lb(5,"td"),c.ec(6),c.Kb(),c.Lb(7,"td"),c.ec(8),c.Kb(),c.Lb(9,"td",8),c.Lb(10,"button",9),c.Sb("click",function(){c.ac(t);const n=e.$implicit;return c.Ub().onEditar(n)}),c.ec(11,"Editar"),c.Kb(),c.Lb(12,"button",9),c.Sb("click",function(){c.ac(t);const n=e.$implicit;return c.Ub().onVer(n)}),c.ec(13,"Ver"),c.Kb(),c.Lb(14,"button",5),c.Sb("click",function(){c.ac(t);const n=e.$implicit;return c.Ub().eliminar(n._id)}),c.ec(15,"Eliminar"),c.Kb(),c.Kb(),c.Kb()}if(2&t){const t=e.$implicit;c.yb(2),c.fc(t.name),c.yb(2),c.fc(t.cantidad),c.yb(2),c.fc(t.lote),c.yb(2),c.fc(t.fecha)}}const s=[{path:"",component:(()=>{class t{constructor(t,e){this.router=t,this.dbentrada=e,this.navigationExtras={state:{value:null}},this.busqueda=[]}ngOnInit(){this.getMedicamentos()}onEditar(t){this.navigationExtras.state.value=t,this.router.navigate(["editarEntrada"],this.navigationExtras)}onVer(t){this.navigationExtras.state.value=t,this.router.navigate(["detalleEntrada"],this.navigationExtras)}onEliminar(t){return Object(a.a)(this,void 0,void 0,function*(){try{alert("Eliminado")}catch(t){console.log(t)}})}onSearch(){console.log("entro a busqueda"),console.log(this.busqueda)}getMedicamentos(){this.dbentrada.getEntradas().subscribe(t=>{console.log(t),this.dbentrada.medicamentos=t},t=>console.error(t))}eliminar(t){return console.log(t),this.dbentrada.deleteEntrada(t).subscribe(t=>{this.getMedicamentos()},t=>console.error(t))}}return t.\u0275fac=function(e){return new(e||t)(c.Ib(i.a),c.Ib(r.a))},t.\u0275cmp=c.Cb({type:t,selectors:[["app-list-entrada"]],decls:18,vars:1,consts:[[1,"table-responsive"],[1,"table","table-hover"],["scope","col"],["scope","col",1,"d-none","d-sm-block"],["class","table-info",4,"ngFor","ngForOf"],["type","button",1,"btn","btn-danger","m-1",3,"click"],[1,"table-info"],["scope","row"],["role","group",1,"btn-group","d-none","d-sm-block"],["type","button",1,"btn","btn-warning","m-1",3,"click"]],template:function(t,e){1&t&&(c.Lb(0,"div",0),c.Lb(1,"table",1),c.Lb(2,"thead"),c.Lb(3,"tr"),c.Lb(4,"th",2),c.ec(5,"Nombre"),c.Kb(),c.Lb(6,"th",2),c.ec(7,"Cantidad"),c.Kb(),c.Lb(8,"th",2),c.ec(9,"Numero de lote"),c.Kb(),c.Lb(10,"th",2),c.ec(11,"Fecha de vencimiento"),c.Kb(),c.Lb(12,"th",3),c.ec(13,"Accion"),c.Kb(),c.Kb(),c.Kb(),c.Lb(14,"tbody"),c.dc(15,b,16,4,"tr",4),c.Kb(),c.Kb(),c.Kb(),c.Lb(16,"button",5),c.Sb("click",function(){return e.onSearch()}),c.ec(17,"busqueda"),c.Kb()),2&t&&(c.yb(15),c.Vb("ngForOf",e.dbentrada.medicamentos))},directives:[o.h],styles:[""]}),t})()}];let d=(()=>{class t{}return t.\u0275mod=c.Gb({type:t}),t.\u0275inj=c.Fb({factory:function(e){return new(e||t)},imports:[[i.d.forChild(s)],i.d]}),t})(),l=(()=>{class t{}return t.\u0275mod=c.Gb({type:t}),t.\u0275inj=c.Fb({factory:function(e){return new(e||t)},imports:[[o.b,d]]}),t})()}}]);