(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{27:function(t,e,n){t.exports=n(62)},32:function(t,e,n){},33:function(t,e,n){},62:function(t,e,n){"use strict";n.r(e);var o=n(0),c=n.n(o),r=n(4),a=n.n(r),i=(n(32),n(33),n(2)),u=n(12),s=n(39);n(56).config({path:"../../../../.env"});var l=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_DOMAIN_NAME:"http://localhost:5000/",REACT_APP_MODE:"develop"}).DOMAIN_NAME||"http://localhost:5000/";console.log(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_DOMAIN_NAME:"http://localhost:5000/",REACT_APP_MODE:"develop"}).DOMAIN_NAME),s.defaults.baseURL=String(l);var d=n(22),E=n(7),f=n(24),h=n.n(f);function v(){var t=Object(d.a)(["\n    display: block;\n    margin: auto;\n    position: absolute;\n    top: 50%;\n"]);return v=function(){return t},t}var O=Object(E.css)(v());var p=function(t){var e=Object(i.c)((function(t){return!t.receive_products}));return c.a.createElement("div",null,c.a.createElement(h.a,{css:O,size:35,color:"#227766",loading:e}))};var _=Object(i.b)(null,(function(t){return{fetchProds:function(){t((function(t){return t({type:"FETCH"}),s.get(u.join("products","sephora")).then((function(e){t(function(t){return{type:"FETCHED",payload:t}}(e))})).catch((function(t){console.log(t)}))}))}}}))((function(t){return Object(o.useEffect)((function(){t.fetchProds()}),[]),Object(i.c)((function(t){return t.products})),Object(i.c)((function(t){return t.hasFetchedProducts}))?c.a.createElement("div",{className:"App"},"dcc"):c.a.createElement(p,null)}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var T=n(3),b=Object(T.c)({hasFetchedProducts:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"FETCH":return!1;case"FETCHED":return!0;default:return t}},products:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"FETCHED":return e.payload;default:return t}}}),A=n(25),g=n(26),P=Object(g.createLogger)(),C=Object(T.a)(A.a,P),D=Object(T.d)(b,C);a.a.render(c.a.createElement(i.a,{store:D},c.a.createElement(c.a.StrictMode,null,c.a.createElement(_,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.50a67634.chunk.js.map