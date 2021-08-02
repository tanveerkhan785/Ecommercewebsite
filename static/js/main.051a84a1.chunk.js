(this["webpackJsonpreact-redux-crud-app"]=this["webpackJsonpreact-redux-crud-app"]||[]).push([[0],{65:function(e,c,t){},66:function(e,c,t){"use strict";t.r(c);var n=t(0),r=t.n(n),a=t(16),s=t.n(a),i=(t(39),t(13)),d=t(3),l=t(12),o=t.n(l),j=t(18),u=t(19),b=t.n(u),O=t(9),h="SET_PRODUCTS",p="SELECTED_PRODUCT",m="REMOVE_SELECTED_PRODUCT",x=function(e){return{type:h,payload:e}},v=function(e){return{type:p,payload:e}},f=t(1),N=function(){var e=Object(O.c)((function(e){return e.allProducts.products})).map((function(e){var c=e.id,t=e.title,n=e.image,r=e.price,a=e.category;return Object(f.jsx)("div",{className:"col-lg-3 col-md-4 col-sm-6 col-10 mx-auto mt-5 mb-3",children:Object(f.jsx)(i.b,{to:"/product/".concat(c),children:Object(f.jsx)("div",{className:"ui link cards",children:Object(f.jsxs)("div",{className:"card",children:[Object(f.jsx)("div",{className:"image",children:Object(f.jsx)("img",{src:n,alt:t})}),Object(f.jsxs)("div",{className:"content",children:[Object(f.jsx)("div",{className:"header",children:t}),Object(f.jsxs)("div",{className:"meta price",children:["$ ",r]}),Object(f.jsx)("div",{className:"meta",children:a})]})]})})})},c)}));return Object(f.jsx)(f.Fragment,{children:e})},g=function(){var e=Object(O.c)((function(e){return e.allProducts.products})),c=Object(O.b)(),t=function(){var e=Object(j.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("https://fakestoreapi.com/products").catch((function(e){console.log("Err: ",e)}));case 2:t=e.sent,c(x(t.data));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){t()}),[]),console.log("Products :",e),Object(f.jsx)("div",{className:"container",children:Object(f.jsx)("div",{className:"row mt-5",children:Object(f.jsx)(N,{})})})},E=function(){return Object(f.jsx)("div",{className:"ui fixed menu",children:Object(f.jsx)("div",{className:"ui container center",children:Object(f.jsx)("h2",{children:"Shopping Website"})})})},w=(t(65),function(){var e=Object(d.f)().productId,c=Object(O.c)((function(e){return e.product})),t=c.image,r=c.title,a=c.price,s=c.category,i=c.description,l=Object(O.b)(),u=function(){var e=Object(j.a)(o.a.mark((function e(c){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("https://fakestoreapi.com/products/".concat(c)).catch((function(e){console.log("Err: ",e)}));case 2:t=e.sent,l(v(t.data));case 4:case"end":return e.stop()}}),e)})));return function(c){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){return e&&""!==e&&u(e),function(){l({type:m})}}),[e]),Object(f.jsx)("div",{className:"ui grid container",children:0===Object.keys(c).length?Object(f.jsx)("div",{children:"...Loading"}):Object(f.jsx)("div",{className:"ui placeholder segment",children:Object(f.jsxs)("div",{className:"ui two column stackable center aligned grid",children:[Object(f.jsx)("div",{className:"ui vertical divider",children:"AND"}),Object(f.jsxs)("div",{className:"middle aligned row",children:[Object(f.jsx)("div",{className:"column lp",children:Object(f.jsx)("img",{className:"ui fluid image",src:t,style:{maxHeight:"450px"}})}),Object(f.jsxs)("div",{className:"column rp",children:[Object(f.jsx)("h1",{children:r}),Object(f.jsx)("h2",{children:Object(f.jsxs)("a",{className:"ui teal tag label",children:["$",a]})}),Object(f.jsx)("h3",{className:"ui brown block header",children:s}),Object(f.jsx)("p",{children:i}),Object(f.jsxs)("div",{className:"ui vertical animated button",tabIndex:"0",children:[Object(f.jsx)("div",{className:"hidden content",children:Object(f.jsx)("i",{className:"shop icon"})}),Object(f.jsx)("div",{className:"visible content",children:"Add to Cart"})]})]})]})]})})})});var y=function(){return Object(f.jsx)("div",{className:"App",children:Object(f.jsxs)(i.a,{children:[Object(f.jsx)(E,{}),Object(f.jsxs)(d.c,{children:[Object(f.jsx)(d.a,{path:"/",exact:!0,component:g}),Object(f.jsx)(d.a,{path:"/product/:productId",component:w}),Object(f.jsx)(d.a,{children:"404 Not Found!"})]})]})})},_=t(11),k=t(15),D={products:[]},S=Object(_.b)({allProducts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,c=arguments.length>1?arguments[1]:void 0,t=c.type,n=c.payload;switch(t){case h:return Object(k.a)(Object(k.a)({},e),{},{products:n});default:return e}},product:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},c=arguments.length>1?arguments[1]:void 0,t=c.type,n=c.payload;switch(console.log(t),t){case p:return Object(k.a)(Object(k.a)({},e),n);case m:return{};default:return e}}}),T=Object(_.c)(S,{},window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());s.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(O.a,{store:T,children:Object(f.jsx)(y,{})})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.051a84a1.chunk.js.map