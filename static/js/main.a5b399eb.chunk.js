(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{58:function(e,n,t){"use strict";(function(e){t.d(n,"a",(function(){return o}));t(2);var c=t(64),r=t(60),a=t(8),i=t(25).useQuery;function o(){var e=i(r.a),n=e.loading,t=e.error,o=e.data;return n?Object(a.jsx)("p",{children:"Loading..."}):t?Object(a.jsx)("p",{children:"Error with API"}):Object(a.jsx)("div",{children:Object(a.jsx)(c.a,{countries:o.countries})})}e.fetch=t(82)}).call(this,t(43))},60:function(e,n,t){"use strict";var c,r=t(61),a=(0,t(25).gql)(c||(c=Object(r.a)(["\n  {\n    countries {\n      name\n      emoji\n    }\n  }\n"])));n.a=a},64:function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var c=t(38),r=t(2);var a=t(87),i=t(8);function o(e){return Object(i.jsx)("div",{className:"mb-3",children:Object(i.jsx)(a.a.Check,{label:e.name,value:e.name,type:"radio",id:e.name,onChange:e.function,checked:e.checked})},e.name)}function s(e){var n=Object(r.useState)(0),t=Object(c.a)(n,2),a=t[0],s=t[1],j=Object(r.useState)(0),u=Object(c.a)(j,2),d=u[0],h=u[1],l=Object(r.useState)(!1),b=Object(c.a)(l,2),f=b[0],O=b[1],v=function(e){var n=e.target.value===x[a].name;setTimeout((function(){n&&h(d+1),O(!1);var e=Math.floor(Math.random()*x.length);s(e)}),300)},x=e.countries,m=x[a].emoji,g=function(e,n){for(var t=new Set([e[n]]);t.size<5;){var c=Math.floor(Math.random()*e.length);t.add(e[c])}var r=Array.from(t);return function(e){for(var n=e.length-1;n>0;n--){var t=Math.floor(Math.random()*(n+1)),c=e[n];e[n]=e[t],e[t]=c}}(r),r}(x,a),p=Object(i.jsx)("div",{children:g.map((function(e){return Object(i.jsx)(o,{name:e.name,function:v,checked:f})}))});return Object(i.jsxs)("div",{children:["Score - ".concat(d),Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{children:m}),Object(i.jsx)("h4",{children:"What country is this?"})]}),p,Object(i.jsx)("button",{className:"skip",onClick:v,children:"Skip"})]})}},70:function(e,n,t){},71:function(e,n,t){},84:function(e,n,t){"use strict";t.r(n);var c=t(2),r=t.n(c),a=t(57),i=t.n(a),o=(t(70),t(71),t(25)),s=t(85),j=t(86),u=t(59),d=t(58),h=(t(83),t(8)),l=new o.ApolloClient({uri:"https://countries.trevorblades.com",cache:new o.InMemoryCache});var b=function(){return Object(h.jsx)(o.ApolloProvider,{client:l,children:Object(h.jsx)("div",{children:Object(h.jsx)(s.a,{className:"container",children:Object(h.jsxs)(j.a,{children:[Object(h.jsx)(u.a,{}),Object(h.jsx)(u.a,{children:Object(h.jsxs)("div",{id:"box",children:[Object(h.jsx)("h2",{children:"Alec's Flag Quiz \ud83e\udd13"}),Object(h.jsx)(d.a,{})]})}),Object(h.jsx)(u.a,{})]})})})})},f=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,88)).then((function(n){var t=n.getCLS,c=n.getFID,r=n.getFCP,a=n.getLCP,i=n.getTTFB;t(e),c(e),r(e),a(e),i(e)}))};i.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(b,{})}),document.getElementById("root")),f()}},[[84,1,2]]]);
//# sourceMappingURL=main.a5b399eb.chunk.js.map