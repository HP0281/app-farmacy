(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"3Cbo":function(t,i,e){"use strict";e.r(i),e.d(i,"DetalleCModule",function(){return u});var n=e("ofXK"),b=e("tyNb"),c=e("mrSG"),o=e("fXoL"),a=e("6Y3L");function r(t,i){if(1&t&&(o.Lb(0,"tr",13),o.Lb(1,"th",14),o.ec(2),o.Kb(),o.Lb(3,"td"),o.ec(4),o.Kb(),o.Lb(5,"td"),o.ec(6),o.Kb(),o.Lb(7,"td"),o.ec(8),o.Kb(),o.Kb()),2&t){const t=i.$implicit;o.yb(2),o.fc(t.medicamento),o.yb(2),o.fc(t.concentracion),o.yb(2),o.fc(t.horario),o.yb(2),o.fc(t.cantidad)}}const l=function(){return["/listC"]},s=[{path:"",component:(()=>{class t{constructor(t,i){var e,n;this.router=t,this.dbcitas=i,this.navigationExtras={state:{value:null}},this.cita=null;const b=this.router.getCurrentNavigation();this.cita=null===(n=null===(e=null==b?void 0:b.extras)||void 0===e?void 0:e.state)||void 0===n?void 0:n.value}ngOnInit(){void 0===this.cita&&this.router.navigate(["listC"])}onEliminar(){return Object(c.a)(this,void 0,void 0,function*(){try{alert("Eliminado")}catch(t){console.log(t)}})}onEditar(){this.navigationExtras.state.value=this.cita,this.router.navigate(["editC"],this.navigationExtras)}eliminar(t){return console.log(t),this.dbcitas.deleteCita(t).subscribe(t=>{console.log("medicamento eliminado")},t=>console.error(t))}}return t.\u0275fac=function(i){return new(i||t)(o.Ib(b.a),o.Ib(a.a))},t.\u0275cmp=o.Cb({type:t,selectors:[["app-detalle-c"]],decls:43,vars:7,consts:[[1,"card","mt-2"],[1,"card-header"],[1,"card-body"],[1,"list-group"],[1,"list-group-item"],[1,"table-responsive"],[1,"table","table-hover"],["scope","col"],["class","table-info",4,"ngFor","ngForOf"],["role","group",1,"btn-group"],[1,"btn","btn-outline-warning","m-1","btn-sm",3,"click"],[1,"btn","btn-outline-danger","m-1","btn-sm",3,"click"],[1,"btn","btn-outline-primary","m-1","btn-sm",3,"routerLink"],[1,"table-info"],["scope","row"]],template:function(t,i){1&t&&(o.Lb(0,"div",0),o.Lb(1,"div",1),o.ec(2," Citas al detalle "),o.Kb(),o.Lb(3,"div",2),o.Lb(4,"ul",3),o.Lb(5,"li",4),o.ec(6," Tip de cita: "),o.Lb(7,"h5"),o.ec(8),o.Kb(),o.Kb(),o.Lb(9,"li",4),o.ec(10," Codigo del participante: "),o.Lb(11,"h5"),o.ec(12),o.Kb(),o.Kb(),o.Lb(13,"li",4),o.ec(14," Nombre del participante: "),o.Lb(15,"h5"),o.ec(16),o.Kb(),o.Kb(),o.Lb(17,"li",4),o.ec(18," Fecha de la cita: "),o.Lb(19,"h5"),o.ec(20),o.Kb(),o.Kb(),o.Lb(21,"li",4),o.Lb(22,"div",5),o.Lb(23,"table",6),o.Lb(24,"thead"),o.Lb(25,"tr"),o.Lb(26,"th",7),o.ec(27,"Medicamento"),o.Kb(),o.Lb(28,"th",7),o.ec(29,"Concentracion"),o.Kb(),o.Lb(30,"th",7),o.ec(31,"Horario"),o.Kb(),o.Lb(32,"th",7),o.ec(33,"Horario"),o.Kb(),o.Kb(),o.Kb(),o.Lb(34,"tbody"),o.dc(35,r,9,4,"tr",8),o.Kb(),o.Kb(),o.Kb(),o.Kb(),o.Kb(),o.Kb(),o.Lb(36,"div",9),o.Lb(37,"button",10),o.Sb("click",function(){return i.onEditar()}),o.ec(38,"Editar"),o.Kb(),o.Lb(39,"button",11),o.Sb("click",function(){return i.eliminar(i.cita._id)}),o.ec(40,"Eliminar"),o.Kb(),o.Kb(),o.Kb(),o.Lb(41,"button",12),o.ec(42,"Volver al listado de Medicamentos"),o.Kb()),2&t&&(o.yb(8),o.gc(" ",i.cita.tipcit," "),o.yb(4),o.gc(" ",i.cita.codpart," "),o.yb(4),o.gc(" ",i.cita.name," "),o.yb(4),o.gc(" ",i.cita.feccit,""),o.yb(15),o.Vb("ngForOf",i.cita.medicamentos),o.yb(6),o.Vb("routerLink",o.Yb(6,l)))},directives:[n.h,b.b],styles:[""]}),t})()}];let d=(()=>{class t{}return t.\u0275mod=o.Gb({type:t}),t.\u0275inj=o.Fb({factory:function(i){return new(i||t)},imports:[[b.d.forChild(s)],b.d]}),t})(),u=(()=>{class t{}return t.\u0275mod=o.Gb({type:t}),t.\u0275inj=o.Fb({factory:function(i){return new(i||t)},imports:[[n.b,d]]}),t})()}}]);