(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{24:function(e,t,a){e.exports=a(40)},29:function(e,t,a){},30:function(e,t,a){e.exports=a.p+"static/media/Inter-Black.de70a8a9.ttf"},31:function(e,t,a){e.exports=a.p+"static/media/Inter-Bold.c73899df.ttf"},32:function(e,t,a){e.exports=a.p+"static/media/Inter-Regular.56786aa1.ttf"},39:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),l=a.n(c),o=(a(29),a(30),a(31),a(32),a(6)),s=a(1),i=a(3),u=a.n(i),m=a(7),d=a(5),p=function(e){var t=e.method;return r.a.createElement("div",{className:"method-icon"},r.a.createElement("p",{className:"method-text"},t))},f=function(e){var t=e.url;return r.a.createElement("div",{className:"get-container"},r.a.createElement(p,{method:"get"}),r.a.createElement("p",null,t))},h=function(e){var t=e.result,a=e.refresh;return r.a.createElement("div",{className:"response-container"},r.a.createElement("div",{className:"response-header"},r.a.createElement("p",null,"Response"),r.a.createElement("button",{className:"link",onClick:function(){return a()}},"Refresh")),r.a.createElement("div",{className:"result"},Array.isArray(t)?r.a.createElement("code",{className:"result-text"},"[",r.a.createElement("br",null),t.map((function(e){return r.a.createElement(r.a.Fragment,{key:e},"",' "',e,'",',r.a.createElement("br",null))})),"]"):r.a.createElement("code",{className:"result-text"},t)))},E=a(8),b=a.n(E),v="localhost"===window.location.hostname?"http://localhost:1337/api/":"https://badadvice.vercel.app/api/",g=function(){var e=Object(n.useState)(),t=Object(d.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(),o=Object(d.a)(l,2),s=o[0],i=o[1],p=function(){var e=Object(m.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(v+"/random").then((function(e){return e.json().then((function(e){return c(e)}))}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(m.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(v+"count=5").then((function(e){return e.json().then((function(e){return i(e)}))}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){p()}),[]),Object(n.useEffect)((function(){E()}),[]),r.a.createElement("div",{className:"container"},r.a.createElement("main",null,r.a.createElement("h1",null,r.a.createElement("img",{src:b.a,alt:"",className:"logo"}),"BadAdvice"),r.a.createElement("p",{className:"hero-text"},"A free REST API for bad advice (bad advice as a service). Use it in any project where good advice isn\u2019t a requirement."),r.a.createElement("h2",null,"Usage"),r.a.createElement("h3",null,"Retrieve random advice"),r.a.createElement(f,{url:"https://badadvice.vercel.app/api/random"}),r.a.createElement(h,{result:a,refresh:p}),r.a.createElement("h3",null,"Retrieve multiple random advice"),r.a.createElement(f,{url:"https://badadvice.vercel.app/api/count=5"}),r.a.createElement(h,{result:s,refresh:E}),r.a.createElement("footer",null,r.a.createElement("div",null,r.a.createElement("span",{className:"peace-emoji",role:"img","aria-label":"hidden"},"\u270c\ufe0f"),"Made by"," ",r.a.createElement("a",{href:"https://www.adamparsons.me",className:"link"},"Adam Parsons")),r.a.createElement("div",{className:"github"},r.a.createElement("a",{href:"https://github.com/adamgparsons/badadvice",className:"link"},"GitHub")))))},N=a(12),w=a(20),j=function(e){var t=e.label,a=e.onClick;return r.a.createElement("button",{className:"button",onClick:a},t)},x="localhost"===window.location.hostname?"http://localhost:1337/auth/login":"https://badadvice.vercel.app/auth/login",O=function(){var e=Object(n.useState)({username:"",password:""}),t=Object(d.a)(e,2),a=t[0],c=t[1],l=Object(s.f)(),o=function(e){e.preventDefault(),c(Object(w.a)({},a,Object(N.a)({},e.target.name,e.target.value)))};return r.a.createElement("div",{className:"container bg-near-grey"},r.a.createElement("main",{className:"bg-near-grey"},r.a.createElement("div",{className:"login-box"},r.a.createElement("h1",{className:"admin-logo t-center"},r.a.createElement("img",{src:b.a,alt:"",className:"logo"}),"BadAdvice",r.a.createElement("span",{className:"admin"},"Admin")),r.a.createElement("form",{className:"login-form w-100",onSubmit:function(e){e.preventDefault(),fetch(x,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(a)}).then((function(e){return console.log("response",e),e.ok?e.json():e.json().then((function(e){throw new Error(e.message)}))})).then((function(e){localStorage.setItem("token",e.token),l.push("/dashboard")})).catch((function(e){}))}},r.a.createElement("label",{htmlFor:"username",className:"text-label"},"Username"),r.a.createElement("input",{type:"text",id:"username",name:"username",className:"text-input w-100",value:a.username,onChange:o}),r.a.createElement("label",{htmlFor:"password",className:"text-label"},"Password"),r.a.createElement("input",{type:"password",id:"password",name:"password",className:"text-input w-100",value:a.password,onChange:o}),r.a.createElement(j,{label:"Login",onClick:null})))))},k=a(22),y="localhost"===window.location.hostname?"http://localhost:1337/api/admin":"https://badadvice.vercel.app/api/admin",S=function(){var e=Object(n.useState)(),t=Object(d.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),o=Object(d.a)(l,2),i=o[0],p=o[1],f=Object(s.f)();var h=function(){var e=Object(m.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(y,{headers:{authorization:"bearer "+localStorage.token,"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){return c(e.sort((function(e,t){return t.date_created.localeCompare(e.date_created)})))}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(m.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(y,{method:"POST",headers:{authorization:"bearer "+localStorage.token,"Content-Type":"application/json"},body:JSON.stringify({bad_advice:i})}).then((function(e){return e.json()})).then((function(e){return c([e].concat(Object(k.a)(a)))})).then(p(""));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function v(){return(v=Object(m.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(y,{method:"DELETE",headers:{authorization:"bearer "+localStorage.token,"Content-Type":"application/json"},body:JSON.stringify({id:t})}).then((function(e){e.ok&&c(a.filter((function(e){return e._id!==t})))}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){h()}),[]),r.a.createElement("div",{className:"container top bg-near-grey"},r.a.createElement("main",null,r.a.createElement("div",{className:"logout-holder"},r.a.createElement("a",{className:"link logout",onClick:function(e){e.preventDefault(),localStorage.removeItem("token"),f.push("/admin")}},"Log out")),r.a.createElement("h1",{className:"admin-logo"},r.a.createElement("img",{src:b.a,alt:"",className:"logo"}),"BadAdvice",r.a.createElement("span",{className:"admin"},"Admin")),r.a.createElement("div",{className:"add-advice"},r.a.createElement("form",{className:"login-form w-100",onSubmit:function(e){e.preventDefault(),E()}},r.a.createElement("label",{htmlFor:"new-advice",className:"text-label label-large"},"Add some advice"),r.a.createElement("textarea",{type:"text",id:"new-advice",name:"new-advice",className:"text-input w-100",value:i,onChange:function(e){e.preventDefault(),p(e.target.value)}}),r.a.createElement(j,{label:"Add advice",onClick:null}))),r.a.createElement("h2",null,"Existing Advice"),a?a.map((function(e){return r.a.createElement("div",{className:"existing-advice",key:e._id},r.a.createElement("p",{className:"advice-paragraph"},e.bad_advice),r.a.createElement("div",{className:"delete-holder"},r.a.createElement("a",{className:"delete",onClick:function(){return function(e){return v.apply(this,arguments)}(String(e._id))}},"Delete")))})):null))},C=a(23),A=function(e){var t=e.component,a=e.handleLogout,n=Object(C.a)(e,["component","handleLogout"]);return r.a.createElement(s.b,Object.assign({},n,{render:function(e){return localStorage.token?r.a.createElement(t,Object.assign({},e,{handleLogout:a})):r.a.createElement(s.a,{to:"/admin"})}}))},D=(a(39),function(){return r.a.createElement(o.a,null,r.a.createElement(s.b,{exact:!0,path:"/admin"},r.a.createElement(O,null)),r.a.createElement(A,{exact:!0,path:"/dashboard",component:S}),r.a.createElement(s.b,{exact:!0,path:"/"},r.a.createElement(g,null)))});l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(o.a,null,r.a.createElement(D,null))),document.getElementById("root"))},8:function(e,t,a){e.exports=a.p+"static/media/logo.9c84ab11.svg"}},[[24,1,2]]]);
//# sourceMappingURL=main.39e575fa.chunk.js.map