(this["webpackJsonpradio-pa-cuba-admin"]=this["webpackJsonpradio-pa-cuba-admin"]||[]).push([[0],{47:function(a,e,t){},48:function(a,e,t){"use strict";t.r(e);var n=t(0),r=t(15),c=t.n(r),s=t(18),i=t(9),d=t(11),o=t(7),l=t.n(o),u=t(10),j="[Auth] Login",b="[Auth] Logout",m="[UI] Set Error",p="[UI] Set Loading",y="[BILLBOARD] Set Billboard",f="[BILLBOARD] Set Active Program",h=function(){var a=Object(u.a)(l.a.mark((function a(){var e,t,n,r,c,s,i,d,o,u,j;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return"https://radio-pa-cuba.herokuapp.com/api/radio",a.next=3,fetch("https://radio-pa-cuba.herokuapp.com/api/radio");case 3:return e=a.sent,a.next=6,e.json();case 6:return t=a.sent,n=t.data,[],[],[],[],[],[],[],j=n.find((function(a){return"RPC"===a.code})),r=j.billboard.find((function(a){return 1===a.day})),c=j.billboard.find((function(a){return 2===a.day})),s=j.billboard.find((function(a){return 3===a.day})),i=j.billboard.find((function(a){return 4===a.day})),d=j.billboard.find((function(a){return 5===a.day})),o=j.billboard.find((function(a){return 6===a.day})),u=j.billboard.find((function(a){return 7===a.day})),a.abrupt("return",{monday:r.programs,tuesday:c.programs,wednesday:s.programs,thursday:i.programs,friday:d.programs,saturday:o.programs,sunday:u.programs});case 24:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}(),O=function(){var a=Object(u.a)(l.a.mark((function a(e,t,n,r,c,s,i,d){var o,u,j;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return o=d,"https://radio-pa-cuba.herokuapp.com/api/radio",u={code:"RPC",billboard:[{day:1,programs:e},{day:2,programs:t},{day:3,programs:n},{day:4,programs:r},{day:5,programs:c},{day:6,programs:s},{day:7,programs:i}]},a.next=5,fetch("https://radio-pa-cuba.herokuapp.com/api/radio",{headers:{"Content-Type":"application/json","x-token":o},method:"POST",body:JSON.stringify(u)});case 5:return j=a.sent,a.next=8,j.json();case 8:return a.abrupt("return",a.sent);case 9:case"end":return a.stop()}}),a)})));return function(e,t,n,r,c,s,i,d){return a.apply(this,arguments)}}(),x=function(a){return function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:f,payload:{id:null,name:"",image:"",start:"",finish:"",day:a}});case 2:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()},v=function(a){return function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:f,payload:a});case 1:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()},g=function(a,e,t){return function(){var n=Object(u.a)(l.a.mark((function n(r,c){var s,i,d,o,u;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return s=c(),i=s.billboard,d=c().auth.token,i[e].forEach((function(e,n){e._id!==a||(e.active=t)})),r({type:p,payload:!0}),n.next=6,O(i.monday,i.tuesday,i.wednesday,i.thursday,i.friday,i.saturday,i.sunday,d);case 6:o=n.sent,u=o.status,r("SUCCESS"!==u?{type:m,payload:"Error al actualizar la lista de programas por favor intente m\xe1s tarde."}:{type:y,payload:{monday:i.monday,tuesday:i.tuesday,wednesday:i.wednesday,thursday:i.thursday,friday:i.friday,saturday:i.saturday,sunday:i.sunday,activeProgram:null}}),r({type:p,payload:!1});case 10:case"end":return n.stop()}}),n)})));return function(a,e){return n.apply(this,arguments)}}()},N=t(1),w=function(a){var e=a.name,t=a.start,n=a.finish,r=a.image,c=a.active,s=void 0===c||c,i=a.id,o=a.day,j=Object(d.b)();return Object(N.jsx)(N.Fragment,{children:Object(N.jsx)("div",{className:"card",children:Object(N.jsx)("div",{className:"card-content",children:Object(N.jsxs)("div",{className:"card-body custom-padding",children:[Object(N.jsx)("div",{className:"media d-flex",children:Object(N.jsxs)("div",{className:"media-body text-right",children:[Object(N.jsx)("span",{children:e}),Object(N.jsx)("br",{}),Object(N.jsx)("span",{children:"".concat(t," - ").concat(n)})]})}),Object(N.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(N.jsxs)("div",{children:[Object(N.jsx)("br",{}),Object(N.jsx)("i",{className:"fas fa-edit icon-blue",onClick:function(){j(function(a,e,t,n,r,c){return function(){var s=Object(u.a)(l.a.mark((function s(i){return l.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:i({type:f,payload:{id:a,name:e,image:t,start:n,finish:r,day:c}});case 2:case"end":return s.stop()}}),s)})));return function(a){return s.apply(this,arguments)}}()}(i,e,r,t,n,o))}}),s?Object(N.jsx)("i",{className:"fas fa-ban icon-red",onClick:function(){j(g(i,o,!1))}}):Object(N.jsx)("i",{className:"fas fa-check icon-green",onClick:function(){j(g(i,o,!0))}}),Object(N.jsx)("i",{className:"fas fa-trash icon-red",onClick:function(){j(function(a,e){return function(){var t=Object(u.a)(l.a.mark((function t(n,r){var c,s,i,d,o;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=r(),s=c.billboard,i=r().auth.token,s[e].forEach((function(t,n){t._id!==a||s[e].splice(n,1)})),n({type:p,payload:!0}),t.next=6,O(s.monday,s.tuesday,s.wednesday,s.thursday,s.friday,s.saturday,s.sunday,i);case 6:d=t.sent,o=d.status,n("SUCCESS"!==o?{type:m,payload:"Error al actualizar la lista de programas por favor intente m\xe1s tarde."}:{type:y,payload:{monday:s.monday,tuesday:s.tuesday,wednesday:s.wednesday,thursday:s.thursday,friday:s.friday,saturday:s.saturday,sunday:s.sunday,activeProgram:null}}),n({type:p,payload:!1});case 10:case"end":return t.stop()}}),t)})));return function(a,e){return t.apply(this,arguments)}}()}(i,o))}})]}),Object(N.jsx)("img",{className:"program-img ",src:r,alt:e})]})]})})})})},k=t(8),C=t(51),_=t(52),E=t(53),S=function(a){var e=Object(d.b)(),t=Object(d.c)((function(a){return a.billboard})).activeProgram,n=t||"",r=n.name,c=n.image,s=n.start,i=n.finish;return Object(N.jsx)(C.a,Object(k.a)(Object(k.a)({},a),{},{"aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:Object(N.jsxs)(C.a.Body,{className:"show-grid",children:[Object(N.jsxs)(_.a,{children:[null==(null===t||void 0===t?void 0:t.id)?Object(N.jsx)("h3",{children:"Adicionar programa"}):Object(N.jsx)("h3",{children:"Editar Programa"}),Object(N.jsx)("br",{}),Object(N.jsx)(_.a.Label,{children:Object(N.jsx)("strong",{children:"Ingrese el nombre del programa."})}),Object(N.jsx)(_.a.Control,{size:"sm",type:"text",value:r,onChange:function(a){var n=Object(k.a)(Object(k.a)({},t),{},{name:a.target.value});e(v(n))},placeholder:"Nombre",name:"name"}),Object(N.jsx)("br",{}),Object(N.jsx)(_.a.Label,{children:Object(N.jsx)("strong",{children:"Ingrese la url de la imagen."})}),Object(N.jsx)(_.a.Control,{size:"sm",type:"text",value:c,onChange:function(a){var n=Object(k.a)(Object(k.a)({},t),{},{image:a.target.value});e(v(n))},placeholder:"Imagen",name:"image"}),Object(N.jsx)("br",{}),Object(N.jsx)(_.a.Label,{children:Object(N.jsx)("strong",{children:"Ingrese la hora de inicio del programa ej. 8:00"})}),Object(N.jsx)(_.a.Control,{size:"sm",type:"text",value:s,onChange:function(a){var n=Object(k.a)(Object(k.a)({},t),{},{start:a.target.value});e(v(n))},placeholder:"Hora inicio",name:"start"}),Object(N.jsx)("br",{}),Object(N.jsx)(_.a.Label,{children:Object(N.jsx)("strong",{children:"Ingrese la hora de fin del programa ej. 14:00"})}),Object(N.jsx)(_.a.Control,{size:"sm",type:"text",value:i,onChange:function(a){var n=Object(k.a)(Object(k.a)({},t),{},{finish:a.target.value});e(v(n))},placeholder:"Hora fin",name:"finish"}),Object(N.jsx)("br",{})]}),Object(N.jsxs)("div",{className:"d-flex justify-content-around",children:[Object(N.jsx)(E.a,{variant:"success",type:"submit",onClick:function(){e(function(){var a=Object(u.a)(l.a.mark((function a(e,t){var n,r,c,s,i,d;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n=t(),r=n.billboard,c=t().auth.token,null==(s=t().billboard.activeProgram).id?r[s.day].push(s):r[s.day].forEach((function(a){if(a._id===s.id){var e=s.name,t=s.image,n=s.start,r=s.finish;a.name=e,a.image=t,a.start=n,a.finish=r}})),e({type:p,payload:!0}),a.next=7,O(r.monday,r.tuesday,r.wednesday,r.thursday,r.friday,r.saturday,r.sunday,c);case 7:i=a.sent,d=i.status,e("SUCCESS"!==d?{type:m,payload:"Error al actualizar la lista de programas por favor intente m\xe1s tarde."}:{type:y,payload:{monday:r.monday,tuesday:r.tuesday,wednesday:r.wednesday,thursday:r.thursday,friday:r.friday,saturday:r.saturday,sunday:r.sunday,activeProgram:null}}),e({type:p,payload:!1});case 11:case"end":return a.stop()}}),a)})));return function(e,t){return a.apply(this,arguments)}}())},children:"Guardar"}),Object(N.jsx)(E.a,{variant:"secondary",onClick:function(){e(function(){var a=Object(u.a)(l.a.mark((function a(e){return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:e({type:f,payload:null});case 1:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}())},children:"Cancelar"})]})]})}))},P=function(a){return a.sort((function(a,e){return parseInt(a.start.split(":")[0])>parseInt(e.start.split(":")[0])?1:parseInt(a.start.split(":")[0])<parseInt(e.start.split(":")[0])?-1:0}))},I=function(a){var e=a.history,t=Object(d.b)(),r=Object(d.c)((function(a){return a})),c=Object(d.c)((function(a){return a.billboard})).activeProgram,s=Object(d.c)((function(a){return a.ui})).loading,i=Object(d.c)((function(a){return a.billboard}))||[],o=i.monday,l=i.tuesday,u=i.wednesday,j=i.thursday,b=i.friday,m=i.saturday,p=i.sunday;return Object(n.useEffect)((function(){null===r.auth.token&&e.replace("/login")}),[null!=r.auth.token]),Object(N.jsx)("div",{children:s?Object(N.jsx)("p",{className:"loading-margin",children:"Cargando cartelera..."}):Object(N.jsx)("div",{children:Object(N.jsxs)("div",{className:"container",children:[Object(N.jsxs)("div",{className:"row",children:[Object(N.jsxs)("div",{className:"col",children:[Object(N.jsx)("div",{className:"card alert-primary",children:Object(N.jsx)("div",{className:"card-content",children:Object(N.jsx)("div",{className:"card-body",children:Object(N.jsxs)("div",{className:"media d-flex justify-content-between",children:[Object(N.jsx)("div",{className:"media-body text-right",children:Object(N.jsx)("span",{className:"font-bold",children:"Lunes"})}),Object(N.jsx)("i",{onClick:function(){t(x("monday"))},className:"fas fa-plus-square icon-green"})]})})})}),P(o).map((function(a){return Object(N.jsx)("div",{className:"program-container",children:Object(N.jsx)(w,{id:a._id,name:a.name,start:a.start,finish:a.finish,image:a.image,active:a.active,day:"monday"},a._id)},"cont-".concat(a._id))}))]}),Object(N.jsxs)("div",{className:"col",children:[Object(N.jsx)("div",{className:"card alert-primary",children:Object(N.jsx)("div",{className:"card-content",children:Object(N.jsx)("div",{className:"card-body",children:Object(N.jsxs)("div",{className:"media d-flex justify-content-between",children:[Object(N.jsx)("div",{className:"media-body text-right",children:Object(N.jsx)("span",{className:"font-bold",children:"Martes"})}),Object(N.jsx)("i",{onClick:function(){t(x("tuesday"))},className:"fas fa-plus-square icon-green"})]})})})}),P(l).map((function(a){return Object(N.jsx)("div",{className:"program-container",children:Object(N.jsx)(w,{id:a._id,name:a.name,start:a.start,finish:a.finish,image:a.image,active:a.active,day:"tuesday"},a._id)},"cont-".concat(a._id))}))]}),Object(N.jsxs)("div",{className:"col",children:[Object(N.jsx)("div",{className:"card alert-primary",children:Object(N.jsx)("div",{className:"card-content",children:Object(N.jsx)("div",{className:"card-body",children:Object(N.jsxs)("div",{className:"media d-flex justify-content-between",children:[Object(N.jsx)("div",{className:"media-body text-right",children:Object(N.jsx)("span",{className:"font-bold",children:"Mi\xe9rcoles"})}),Object(N.jsx)("i",{onClick:function(){t(x("wednesday"))},className:"fas fa-plus-square icon-green"})]})})})}),P(u).map((function(a){return Object(N.jsx)("div",{className:"program-container",children:Object(N.jsx)(w,{id:a._id,name:a.name,start:a.start,finish:a.finish,image:a.image,active:a.active,day:"wednesday"},a._id)},"cont-".concat(a._id))}))]}),Object(N.jsxs)("div",{className:"col",children:[Object(N.jsx)("div",{className:"card alert-primary",children:Object(N.jsx)("div",{className:"card-content",children:Object(N.jsx)("div",{className:"card-body",children:Object(N.jsxs)("div",{className:"media d-flex justify-content-between",children:[Object(N.jsx)("div",{className:"media-body text-right",children:Object(N.jsx)("span",{className:"font-bold",children:"Jueves"})}),Object(N.jsx)("i",{onClick:function(){t(x("thursday"))},className:"fas fa-plus-square icon-green"})]})})})}),P(j).map((function(a){return Object(N.jsx)("div",{className:"program-container",children:Object(N.jsx)(w,{id:a._id,name:a.name,start:a.start,finish:a.finish,image:a.image,active:a.active,day:"thursday"},a._id)},"cont-".concat(a._id))}))]}),Object(N.jsxs)("div",{className:"col",children:[Object(N.jsx)("div",{className:"card alert-primary",children:Object(N.jsx)("div",{className:"card-content",children:Object(N.jsx)("div",{className:"card-body",children:Object(N.jsxs)("div",{className:"media d-flex justify-content-between",children:[Object(N.jsx)("div",{className:"media-body text-right",children:Object(N.jsx)("span",{className:"font-bold",children:"Viernes"})}),Object(N.jsx)("i",{onClick:function(){t(x("friday"))},className:"fas fa-plus-square icon-green"})]})})})}),P(b).map((function(a){return Object(N.jsx)("div",{className:"program-container",children:Object(N.jsx)(w,{id:a._id,name:a.name,start:a.start,finish:a.finish,image:a.image,active:a.active,day:"friday"},a._id)},"cont-".concat(a._id))}))]}),Object(N.jsxs)("div",{className:"col",children:[Object(N.jsx)("div",{className:"card alert-primary",children:Object(N.jsx)("div",{className:"card-content",children:Object(N.jsx)("div",{className:"card-body",children:Object(N.jsxs)("div",{className:"media d-flex justify-content-between",children:[Object(N.jsx)("div",{className:"media-body text-right",children:Object(N.jsx)("span",{className:"font-bold",children:"S\xe1bado"})}),Object(N.jsx)("i",{onClick:function(){t(x("saturday"))},className:"fas fa-plus-square icon-green"})]})})})}),P(m).map((function(a){return Object(N.jsx)("div",{className:"program-container",children:Object(N.jsx)(w,{id:a._id,name:a.name,start:a.start,finish:a.finish,image:a.image,active:a.active,day:"saturday"},a._id)},"cont-".concat(a._id))}))]}),Object(N.jsxs)("div",{className:"col",children:[Object(N.jsx)("div",{className:"card alert-primary",children:Object(N.jsx)("div",{className:"card-content",children:Object(N.jsx)("div",{className:"card-body",children:Object(N.jsxs)("div",{className:"media d-flex justify-content-between",children:[Object(N.jsx)("div",{className:"media-body text-right",children:Object(N.jsx)("span",{className:"font-bold",children:"Domingo"})}),Object(N.jsx)("i",{onClick:function(){t(x("sunday"))},className:"fas fa-plus-square icon-green"})]})})})}),P(p).map((function(a){return Object(N.jsx)("div",{className:"program-container",children:Object(N.jsx)(w,{id:a._id,name:a.name,start:a.start,finish:a.finish,image:a.image,active:a.active,day:"sunday"},a._id)},"cont-".concat(a._id))}))]})]}),Object(N.jsx)(S,{show:null!=c})]})})})},L=function(a,e){return function(){var t=Object(u.a)(l.a.mark((function t(n){var r,c,s,i;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:p,payload:!0}),"https://radio-pa-cuba.herokuapp.com/api/auth",t.next=4,fetch("https://radio-pa-cuba.herokuapp.com/api/auth",{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify({email:a,password:e})});case 4:return r=t.sent,t.next=7,r.json();case 7:c=t.sent,s=c.data,i=c.status,c.message,"SUCCESS"===i?(n({type:j,payload:s.token}),n({type:m,payload:null})):(n({type:m,payload:"Invalid user y/o password."}),n({type:b,payload:null})),n({type:p,payload:!1});case 13:case"end":return t.stop()}}),t)})));return function(a){return t.apply(this,arguments)}}()},U=function(){var a=Object(d.b)(),e=function(){var e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a((function(a){a({type:b,payload:null}),a({type:m,payload:null})}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(N.jsxs)("nav",{className:"navbar navbar-expand-sm navbar-dark bg-dark custom-nav",children:[Object(N.jsx)(s.b,{className:"navbar-brand",to:"/",children:"Radio Pa Cuba"}),Object(N.jsx)("div",{className:"navbar-collapse",children:Object(N.jsx)("div",{className:"navbar-nav"})}),Object(N.jsx)("div",{className:"navbar-collapse collapse w-100 order-3 dual-collapse2",children:Object(N.jsx)("ul",{className:"navbar-nav ml-auto",children:Object(N.jsx)(s.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/login",onClick:e,children:"Logout"})})})]})},q=function(){return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(U,{}),Object(N.jsx)("div",{className:"container position-normal",children:Object(N.jsxs)(i.d,{children:[Object(N.jsx)(i.b,{exact:!0,path:"/billboard",component:I}),Object(N.jsx)(i.a,{to:"/billboard"})]})})]})},z=t(22),A=t(21),B=function(a){var e=a.history,t=Object(d.b)(),r=Object(d.c)((function(a){return a})),c=Object(d.c)((function(a){return a.ui})).loading;Object(n.useEffect)((function(){null!=r.auth.token&&(t(function(){var a=Object(u.a)(l.a.mark((function a(e){var t;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return e({type:p,payload:!0}),a.next=3,h();case 3:t=a.sent,e({type:y,payload:t}),e({type:p,payload:!1});case 6:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()),e.replace("/"))}),[r.auth.token]);var s=function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=Object(n.useState)(a),t=Object(z.a)(e,2),r=t[0],c=t[1];return[r,function(a){var e=a.target;c(Object(k.a)(Object(k.a)({},r),{},Object(A.a)({},e.name,e.value)))},function(){c(a)}]}({email:"",password:""}),i=Object(z.a)(s,2),o=i[0],j=i[1],b=o.email,m=o.password,f=function(){var a=Object(u.a)(l.a.mark((function a(e){return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:e.preventDefault(),t(L(b,m));case 2:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}();return Object(N.jsx)("div",{className:"container",children:Object(N.jsx)("form",{onSubmit:f,children:Object(N.jsx)("div",{className:"row",children:Object(N.jsx)("div",{className:"d-flex justify-content-center ",children:Object(N.jsxs)("div",{className:"form-login",children:[Object(N.jsx)("h4",{children:"Radio Pa Cuba Admin"}),Object(N.jsx)("input",{type:"text",name:"email",className:"form-control input-sm chat-input",placeholder:"Email",autoComplete:"off",value:b,onChange:j}),Object(N.jsx)("br",{}),Object(N.jsx)("input",{type:"text",name:"password",className:"form-control input-sm chat-input",placeholder:"Password",autoComplete:"off",value:m,onChange:j}),Object(N.jsx)("br",{}),Object(N.jsx)("div",{className:"wrapper",children:c?Object(N.jsxs)("button",{className:"btn btn-primary",type:"button",disabled:!0,children:[Object(N.jsx)("span",{className:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"}),"Verificando..."]}):Object(N.jsx)("button",{type:"submit",className:"btn btn-primary btn-md",onClick:f,children:"Entrar"})}),Object(N.jsx)("br",{}),r.ui.msgError&&Object(N.jsx)("div",{className:"alert alert-danger",role:"alert",children:"Usuario y/o contrase\xf1a incorrectos."})]})})})})})},R=function(){return Object(n.useEffect)((function(){}),[]),Object(N.jsx)(s.a,{children:Object(N.jsx)("div",{children:Object(N.jsxs)(i.d,{children:[Object(N.jsx)(i.b,{exact:!0,path:"/login",component:B}),Object(N.jsx)(i.b,{path:"/",component:q})]})})})},D=t(17),T={token:null},J={loading:!1,msgError:null},M={monday:[],tuesday:[],wednesday:[],thursday:[],friday:[],saturday:[],sunday:[],activeProgram:null},V=t(34),F="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||D.d,H=Object(D.c)({auth:function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case j:return Object(k.a)(Object(k.a)({},a),{},{token:e.payload});case b:return Object(k.a)(Object(k.a)({},a),{},{token:null});default:return a}},ui:function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case m:return Object(k.a)(Object(k.a)({},a),{},{msgError:e.payload});case p:return Object(k.a)(Object(k.a)({},a),{},{loading:e.payload});default:return a}},billboard:function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case y:var t=e.payload,n=t.monday,r=t.tuesday,c=t.wednesday,s=t.thursday,i=t.friday,d=t.saturday,o=t.sunday,l=t.activeProgram;return Object(k.a)(Object(k.a)({},a),{},{monday:n,tuesday:r,wednesday:c,thursday:s,friday:i,saturday:d,sunday:o,activeProgram:l});case f:return Object(k.a)(Object(k.a)({},a),{},{activeProgram:e.payload});default:return a}}}),X=Object(D.e)(H,F(Object(D.a)(V.a))),G=function(){return Object(N.jsx)(d.a,{store:X,children:Object(N.jsx)(R,{})})};t(47);c.a.render(Object(N.jsx)(G,{}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.d31733c0.chunk.js.map