(this.webpackJsonpsw_web_app=this.webpackJsonpsw_web_app||[]).push([[0],{112:function(e,t,a){e.exports=a(143)},117:function(e,t,a){},142:function(e,t,a){},143:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(10),c=a.n(o),i=a(33),s=(a(117),a(28)),l=a(20),u=a(192),p=a(196),m=a(187),d=a(184),f=a(191),h=a(83),b=a.n(h),v=a(185),g=a(179),w=a(182),x=a(188),E=a(54),j=a(22),O=a(24),y=a.n(O),k=a(43),C=a(63),I=a.n(C),N=a(42),S=a.n(N),W=function(){var e=Object(k.a)(y.a.mark((function e(t){var a,n,r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.username,n=t.password,e.prev=1,r=function(){var e=Object(k.a)(y.a.mark((function e(t){var o,c;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.get(t,{mode:"cors"});case 2:if(!((o=e.sent)&&o.data&&o.data.count)){e.next=8;break}if(c=o.data.results,!S.a.some(c,{name:a,birth_year:n})){e.next=8;break}return e.abrupt("return",!0);case 8:if(!(o&&o.data&&o.data.next)){e.next=11;break}return e.next=11,r(o.data.next);case 11:return e.abrupt("return",!1);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),e.next=5,r("".concat("https://swapi.co/api","/people"));case 5:if(e.sent){e.next=8;break}return e.abrupt("return","Invalid username or password");case 8:return e.abrupt("return",null);case 11:return e.prev=11,e.t0=e.catch(1),e.abrupt("return","Internal server error");case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=Object(k.a)(y.a.mark((function e(t){var a,n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=[],n=function(){var e=Object(k.a)(y.a.mark((function e(t){var r,o;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.get(t,{mode:"cors"});case 2:if(!((r=e.sent)&&r.data&&r.data.count)){e.next=9;break}if(o=r.data.results,a.push.apply(a,Object(j.a)(o)),!(r&&r.data&&r.data.next)){e.next=9;break}return e.next=9,n(r.data.next);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),e.next=4,n("".concat("https://swapi.co/api","/planets?search=").concat(t),[]);case 4:return e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=Object(g.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},wrapper:{margin:e.spacing(1),position:"relative"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)},buttonProgress:{color:E.a[500],position:"absolute",top:"50%",left:"50%",marginTop:-12,marginLeft:-12}}})),R=Object(s.f)((function(e){var t=e.history,a=_(),o=Object(n.useState)(!1),c=Object(l.a)(o,2),i=c[0],s=c[1],h=Object(n.useState)(),g=Object(l.a)(h,2),E=g[0],j=g[1],O=Object(n.useState)(),y=Object(l.a)(O,2),k=y[0],C=y[1],I=Object(n.useState)(),N=Object(l.a)(I,2),S=N[0],P=N[1];return r.a.createElement(w.a,{component:"main",maxWidth:"xs"},r.a.createElement(d.a,null),r.a.createElement("div",{className:a.paper},r.a.createElement(p.a,{className:a.avatar},r.a.createElement(b.a,null)),r.a.createElement(v.a,{component:"h1",variant:"h5"},"Sign in"),E&&r.a.createElement(u.a,{severity:"error"},E),r.a.createElement(f.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"username",label:"Username",name:"username",autoComplete:"username",autoFocus:!0,onChange:function(e){C(e.target.value)}}),r.a.createElement(f.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:function(e){P(e.target.value)}}),r.a.createElement("div",{className:a.wrapper},r.a.createElement(m.a,{fullWidth:!0,variant:"contained",color:"primary",className:a.submit,onClick:function(){s(!0),W({username:k,password:S}).then((function(e){s(!1),e||(localStorage.setItem("username",k),t.push("/planets")),j(e)}))},disabled:i},"Sign In"),i&&r.a.createElement(x.a,{size:24,className:a.buttonProgress}))))})),T=a(85),L=a(8),q=a(11),z=a(189),B=a(190),D=a(87),G=a.n(D),J=a(195),F=a(194),U=a(66),$=(a(142),Object(g.a)((function(e){return{root:{flexGrow:1,display:"flex"},search:Object(L.a)({flexGrow:1,position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(q.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(q.b)(e.palette.common.white,.25)},margin:"0 20px",width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{width:e.spacing(7),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(L.a)({padding:e.spacing(1,1,1,7),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:120,"&:focus":{width:200}}),contentContainer:{display:"flex",justifyContent:"center",paddingTop:10,flex:1}}}))),A=Object(s.f)((function(e){var t=e.history,a=$(),o=Object(n.useState)(!1),c=Object(l.a)(o,2),i=c[0],s=c[1],u=Object(n.useState)(),p=Object(l.a)(u,2),d=p[0],f=p[1],h=S.a.debounce((function(e){e&&(s(!0),P(e).then((function(e){f(e),s(!1)})))}),300);return r.a.createElement("div",null,r.a.createElement("div",{className:a.root},r.a.createElement(z.a,{position:"static"},r.a.createElement(B.a,null,r.a.createElement(v.a,{variant:"h6",className:a.title},"Planets"),r.a.createElement("div",{className:a.search},r.a.createElement("div",{className:a.searchIcon},r.a.createElement(G.a,null)),r.a.createElement(J.a,{placeholder:"Search\u2026",classes:{root:a.inputRoot,input:a.inputInput},inputProps:{"aria-label":"search"},onChange:function(e){return h(e.target.value)}})),r.a.createElement(m.a,{color:"inherit",onClick:function(){localStorage.removeItem("username"),t.push("/")}},"Logout")))),r.a.createElement("div",{className:a.contentContainer},function(){if(i)return r.a.createElement(x.a,null);if(!d)return null;console.log({planetsData:d});var e={children:S.a.map(d,(function(e){return Object(T.a)({},e,{value:e.population})}))},t=U.a(e);t.sum((function(e){return e.value})),console.log({root:t});var a=U.b().size([960,500])(t);return console.log({treemap:a,root:t}),r.a.createElement("div",null,r.a.createElement("div",{style:{position:"relative",width:"960px",height:"500px",left:"10px",top:"10px"}},a.children.map((function(e){return r.a.createElement(F.a,{title:e.data.name},r.a.createElement("div",{className:"node",style:{background:"silver",left:"".concat(e.x0,"px"),top:"".concat(e.y0,"px"),width:"".concat(e.x1-e.x0,"px"),height:"".concat(e.y1-e.y0,"px")}},e.data.name))}))))}()))}));var H=function(){return r.a.createElement(i.a,null,r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/"},r.a.createElement(R,null)),r.a.createElement(s.a,{path:"/planets"},r.a.createElement(A,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(i.a,null,r.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[112,1,2]]]);
//# sourceMappingURL=main.2096a963.chunk.js.map