(this["webpackJsonpkeeper-app-part-1-starting"]=this["webpackJsonpkeeper-app-part-1-starting"]||[]).push([[0],{37:function(e,t,n){e.exports=n(53)},53:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(3),c=n.n(r),u=n(32),o=n(16),i=n(27),m=n.n(i);var E=function(){return l.a.createElement("header",null,l.a.createElement("h1",null,l.a.createElement(m.a,null),"Keeper "))};var p=function(){return l.a.createElement("footer",null,l.a.createElement("p",null," Mitansh Agrawal Copyright \xa9 ",(new Date).getFullYear()))},f=n(29),s=n.n(f);var v=function(e){return l.a.createElement("div",{className:"note"},l.a.createElement("h1",null,e.title),l.a.createElement("p",null,e.content),l.a.createElement("button",{onClick:function(){e.onDelete(e.id)}}," ",l.a.createElement(s.a,null)," "))},d=n(25),b=n(31),h=n.n(b),g=n(80),j=n(81);var k=function(e){var t=Object(a.useState)(!1),n=Object(o.a)(t,2),r=n[0],c=n[1],u=Object(a.useState)({title:"",content:""}),i=Object(o.a)(u,2),m=i[0],E=i[1];function p(e){var t=e.target,n=t.name,a=t.value;E((function(e){return Object(d.a)(Object(d.a)({},e),{},{[n]:a})}))}return l.a.createElement("div",null,l.a.createElement("form",{className:"create-note"},r&&l.a.createElement("input",{name:"title",onChange:p,value:m.title,placeholder:"Title"}),l.a.createElement("textarea",{onClick:function(){c(!0)},name:"content",onChange:p,value:m.content,placeholder:"Take a note...",rows:r?3:1}),l.a.createElement(j.a,{in:r},l.a.createElement(g.a,{onClick:function(t){e.onAdd(m),E({title:"",content:""}),t.preventDefault()}},l.a.createElement(h.a,null)))))};var O=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],r=t[1];function c(e){r((function(t){return t.filter((function(t,n){return n!==e}))}))}return l.a.createElement("div",null,l.a.createElement(E,null),l.a.createElement(k,{onAdd:function(e){r((function(t){return[].concat(Object(u.a)(t),[e])}))}}),n.map((function(e,t){return l.a.createElement(v,{key:t,id:t,title:e.title,content:e.content,onDelete:c})})),l.a.createElement(p,null))};c.a.render(l.a.createElement(O,null),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.6800d97f.chunk.js.map