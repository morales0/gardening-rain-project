(this["webpackJsonpgardening-rain-project"]=this["webpackJsonpgardening-rain-project"]||[]).push([[0],{27:function(e,t,n){},28:function(e,t,n){},34:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),r=n(19),s=n.n(r),a=(n(27),n(8)),j=n(2),d=n(7),o=(n(28),n(1)),l=Object(d.a)("div").withConfig({displayName:"CropItem___StyledDiv",componentId:"sc-1d03juv-0"})(["display:flex;"]),b=function(e){return Object(o.jsxs)("div",{className:"CropItem",children:[Object(o.jsx)("h2",{children:e.name}),Object(o.jsxs)(l,{children:[Object(o.jsx)("img",{src:e.imgSrc,alt:e.name,align:"left",width:"200px"}),Object(o.jsx)("p",{children:e.description})]})]})},p=(n(34),function(){return Object(o.jsxs)("nav",{className:"Navbar",children:[Object(o.jsx)("div",{className:"brand",children:Object(o.jsx)(a.b,{to:"/",children:"Home"})}),Object(o.jsxs)("ul",{className:"navList",children:[Object(o.jsx)("li",{children:Object(o.jsx)(a.b,{to:"/gardening",children:"Garden Stuff"})}),Object(o.jsx)("li",{children:Object(o.jsx)(a.b,{to:"/rain",children:"Rain"})}),Object(o.jsx)("li",{children:Object(o.jsx)(a.b,{to:"/user",children:"User"})})]})]})}),h=n(12),u=(n(41),Object(d.a)("div").withConfig({displayName:"Gardening___StyledDiv",componentId:"sc-1dipl8t-0"})(["padding:24px 20px;overflow-y:auto;"])),O=Object(d.a)("form").withConfig({displayName:"Gardening___StyledForm",componentId:"sc-1dipl8t-1"})(["display:flex;align-items:stretch;"]),x=Object(d.a)("input").withConfig({displayName:"Gardening___StyledInput",componentId:"sc-1dipl8t-2"})(["padding:5px 8px;"]),f=function(){var e=Object(c.useState)(""),t=Object(h.a)(e,2),n=t[0],i=t[1],r=Object(c.useState)("off"),s=Object(h.a)(r,2),a=s[0],j=s[1],d=Object(c.useState)([]),l=Object(h.a)(d,2),p=l[0],f=l[1],m=function(e){e.preventDefault(),j("pending"),function(e){return fetch("https://openfarm.cc/api/v1/crops/?filter=".concat(e)).then((function(e){return e.json()}))}(n).then((function(e){console.log(e),f(e.data),j("found")}))};return Object(o.jsxs)(u,{children:[Object(o.jsxs)(O,{onSubmit:function(e){return m(e)},children:[Object(o.jsx)(x,{type:"text",placeholder:"Search crops...",onChange:function(e){return i(e.target.value)}}),Object(o.jsx)("button",{type:"submit",children:"Search"}),"pending"===a&&Object(o.jsxs)("div",{children:["Looking for ",n,"..."]}),"found"===a&&Object(o.jsx)("div",{children:"Found!"})]}),"found"===a&&Object(o.jsx)("div",{children:Object(o.jsx)("div",{children:p.map((function(e,t){return Object(o.jsx)(b,{name:e.attributes.name,description:e.attributes.description,imgSrc:e.attributes.main_image_path},"cropItem".concat(t))}))},"cropsList")})]})},m=function(){return Object(o.jsx)("div",{children:"My portal"})};var g=function(){return Object(o.jsxs)(a.a,{children:[Object(o.jsx)(p,{}),Object(o.jsxs)(j.c,{children:[Object(o.jsx)(j.a,{exact:!0,path:"/",children:Object(o.jsx)(m,{})}),Object(o.jsx)(j.a,{path:"/gardening",children:Object(o.jsx)(f,{})}),Object(o.jsx)(j.a,{path:"/rain",children:Object(o.jsx)("div",{children:"Rain!"})}),Object(o.jsx)(j.a,{path:"/user",children:Object(o.jsx)("div",{children:"User!"})})]})]})};s.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(g,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.a89ab61e.chunk.js.map