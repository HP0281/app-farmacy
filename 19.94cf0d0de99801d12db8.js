(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{N8LW:function(e,t,n){"use strict";n.r(t),n.d(t,"EvidenciaKardexModule",function(){return s});var i=n("ofXK"),o=n("tyNb"),c=n("fXoL"),r=n("tBhv");const a=[{path:"",component:(()=>{class e{constructor(e){this.Upservice=e,this.namefiles="Seleccionar archivo"}ngOnInit(){}onFileChange(e){this.uploadedFiles=e.target.files,this.namefiles="";for(let t=0;t<this.uploadedFiles.length;t++)this.namefiles+=this.uploadedFiles[t].name+"\n"}onUpload(){let e=new FormData;for(let t=0;t<this.uploadedFiles.length;t++)e.append("uploads[]",this.uploadedFiles[t],this.uploadedFiles[t].name),console.log(e);this.Upservice.uploadFileK(e).subscribe(e=>{}),this.namefiles=""}}return e.\u0275fac=function(t){return new(t||e)(c.Ib(r.a))},e.\u0275cmp=c.Cb({type:e,selectors:[["app-evidencia-kardex"]],decls:21,vars:1,consts:[[1,"jumbotron"],[1,"container"],[1,"content"],[1,"header"],[1,"row"],[1,"col-md-4"],[1,"input-group"],[1,"input-group-prepend"],["id","btnUpload",1,"input-group-text","uptload","button",3,"click"],[1,"custom-file"],["action","/api/subirk","method","POST","enctype","multipart/form-data"],["type","file","id","input-custom-file",1,"custom-file-input",3,"change"],["for","input-custom-file",1,"custom-file-label"]],template:function(e,t){1&e&&(c.Lb(0,"div",0),c.Lb(1,"h1"),c.ec(2,"CARGUE DE EVIDENCIAS ARCHIVO KARDEX MASIVO"),c.Kb(),c.Kb(),c.Lb(3,"div",1),c.Lb(4,"div",2),c.Lb(5,"div",3),c.Lb(6,"h1"),c.ec(7,"Archivo a Subir"),c.Kb(),c.Kb(),c.Lb(8,"div",4),c.Jb(9,"div",5),c.Lb(10,"div",5),c.Lb(11,"div",6),c.Lb(12,"div",7),c.Lb(13,"button",8),c.Sb("click",function(){return t.onUpload()}),c.ec(14," Subir "),c.Kb(),c.Kb(),c.Lb(15,"div",9),c.Lb(16,"form",10),c.Lb(17,"input",11),c.Sb("change",function(e){return t.onFileChange(e)}),c.Kb(),c.Lb(18,"label",12),c.ec(19),c.Kb(),c.Kb(),c.Kb(),c.Kb(),c.Kb(),c.Jb(20,"div",5),c.Kb(),c.Kb(),c.Kb()),2&e&&(c.yb(19),c.fc(t.namefiles))},styles:[".header[_ngcontent-%COMP%]{text-align:center}.content[_ngcontent-%COMP%]{margin:100px}.upload[_ngcontent-%COMP%]{cursor:pointer}.titulo[_ngcontent-%COMP%]{padding-top:10px;text-align:center;background-color:#00bfff;height:80px}"]}),e})()}];let l=(()=>{class e{}return e.\u0275mod=c.Gb({type:e}),e.\u0275inj=c.Fb({factory:function(t){return new(t||e)},imports:[[o.d.forChild(a)],o.d]}),e})(),s=(()=>{class e{}return e.\u0275mod=c.Gb({type:e}),e.\u0275inj=c.Fb({factory:function(t){return new(t||e)},imports:[[i.b,l]]}),e})()}}]);