(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var c,s=n(7),o=n.n(s),r=n(6),i=n(8),a=n(1),u=(n(13),n(14),n(4)),l=n.n(u),b=n(0),j=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"].map((function(t,e){return{name:t,id:e}}));!function(t){t[t.NONE=0]="NONE",t[t.ALPABET=1]="ALPABET",t[t.LENGTH=2]="LENGTH"}(c||(c={}));var h=function(){var t=Object(a.useState)(!1),e=Object(r.a)(t,2),n=e[0],s=e[1],o=Object(a.useState)(c.NONE),u=Object(r.a)(o,2),h=u[0],d=u[1],N=function(t,e,n){var s=Object(i.a)(t);return s.sort((function(t,n){switch(e){case c.ALPABET:return t.name.localeCompare(n.name);case c.LENGTH:return t.name.length-n.name.length;case c.NONE:default:return 0}})),n&&s.reverse(),s}(j,h,n),O=h!==c.NONE||n;return Object(b.jsxs)("div",{className:"section content",children:[Object(b.jsxs)("div",{className:"buttons",children:[Object(b.jsx)("button",{type:"button",className:l()("button is-info",{"is-light":h!==c.ALPABET}),onClick:function(){return d(c.ALPABET)},children:"Sort alphabetically"}),Object(b.jsx)("button",{type:"button",className:l()("button is-success",{"is-light":h!==c.LENGTH}),onClick:function(){return d(c.LENGTH)},children:"Sort by length"}),Object(b.jsx)("button",{type:"button",className:l()("button is-warning",{"is-light":!n}),onClick:function(){return s((function(t){return!t}))},children:"Reverse"}),O&&Object(b.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){s(!1),d(c.NONE)},children:"Reset"})]}),Object(b.jsx)("ul",{children:Object(b.jsx)("ul",{children:N.map((function(t){var e=t.name,n=t.id;return Object(b.jsx)("li",{"data-cy":"Good",children:e},n)}))})})]})};o.a.render(Object(b.jsx)(h,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.e6b20441.chunk.js.map