(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a.p+"static/media/logo.9c84ab11.svg"},function(e,t,a){e.exports=a(18)},,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/Inter-Black.de70a8a9.ttf"},function(e,t,a){e.exports=a.p+"static/media/Inter-Bold.c73899df.ttf"},function(e,t,a){e.exports=a.p+"static/media/Inter-Regular.56786aa1.ttf"},,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(5),l=a.n(c),s=(a(12),a(13),a(14),a(15),a(1)),i=a.n(s),u=a(2),o=a(3),m=(a(17),function(e){var t=e.method;return r.a.createElement("div",{className:"method-icon"},r.a.createElement("p",{className:"method-text"},t))}),d=function(e){var t=e.url;return r.a.createElement("div",{className:"get-container"},r.a.createElement(m,{method:"get"}),r.a.createElement("p",null,t))},p=function(e){var t=e.result,a=e.refresh;return r.a.createElement("div",{className:"response-container"},r.a.createElement("div",{className:"response-header"},r.a.createElement("p",null,"Response"),r.a.createElement("button",{className:"link",onClick:function(){return a()}},"Refresh")),r.a.createElement("div",{className:"result"},Array.isArray(t)?r.a.createElement("code",{className:"result-text"},"[",r.a.createElement("br",null),t.map((function(e){return r.a.createElement(r.a.Fragment,null,"",' "',e,'",',r.a.createElement("br",null))})),"]"):r.a.createElement("code",{className:"result-text"},t)))},f=a(6),h=a.n(f),E="localhost"===window.location.hostname?"http://localhost:1337/api/":"https://badadvice.rest/api/",v=function(){var e=Object(n.useState)(),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(),s=Object(o.a)(l,2),m=s[0],f=s[1],v=function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(E+"/random").then((function(e){return e.json().then((function(e){return c(e)}))}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(E+"count=5").then((function(e){return e.json().then((function(e){return f(e)}))}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){v()}),[]),Object(n.useEffect)((function(){b()}),[]),r.a.createElement("main",null,r.a.createElement("h1",null,r.a.createElement("img",{src:h.a,alt:"",className:"logo"}),"BadAdvice"),r.a.createElement("p",{className:"hero-text"},"A free REST API for bad advice (bad advice as a service). Use it in any project where good advice isn\u2019t a requirement."),r.a.createElement("h2",null,"Usage"),r.a.createElement("h3",null,"Retrieve random advice"),r.a.createElement(d,{url:"https://badadvice.rest/api/random"}),r.a.createElement(p,{result:a,refresh:v}),r.a.createElement("h3",null,"Retrieve multiple random advice"),r.a.createElement(d,{url:"https://badadvice.rest/api/count=5"}),r.a.createElement(p,{result:m,refresh:b}),r.a.createElement("footer",null,r.a.createElement("div",null,r.a.createElement("span",{className:"peace-emoji",role:"img","aria-label":"hidden"},"\u270c\ufe0f"),"Made by"," ",r.a.createElement("a",{href:"https://www.adamparsons.me",className:"link"},"Adam Parsons")),r.a.createElement("div",{className:"github"},r.a.createElement("a",{href:"https://github.com/adamgparsons/badadvice",class:"link"},"GitHub"))))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root"))}],[[7,1,2]]]);
//# sourceMappingURL=main.ba3e332a.chunk.js.map