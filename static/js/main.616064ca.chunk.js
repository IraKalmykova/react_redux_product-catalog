(window["webpackJsonpreact_redux_product-catalog"]=window["webpackJsonpreact_redux_product-catalog"]||[]).push([[0],{24:function(e,t,a){e.exports=a(41)},33:function(e,t,a){},34:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(13),i=a.n(c),o=a(5),u=a(8),s=a(15),l=(a(33),a(34),Object(u.b)(function(e){return{quantityProducts:Object.keys(e.basketItems).map(function(t){return e.basketItems[t].count}).reduce(function(e,t){return e+t},0)}})(function(e){var t=e.quantityProducts;return r.a.createElement("header",{className:"header"},r.a.createElement("nav",{className:"nav"},r.a.createElement("ul",{className:"nav__list"},r.a.createElement("li",{className:"nav__item"},r.a.createElement(o.b,{className:"nav__item",activeClassName:"nav__item--active",to:"/",exact:!0},"Product catalog")),r.a.createElement("li",{className:"nav__item"},r.a.createElement(o.b,{className:"nav__item",activeClassName:"nav__item--active",to:"/basket"},"Basket\xa0",t>0&&"(".concat(t,")"))))))})),d=a(10),m=function(e,t,a){return{type:"ADD_TO_BASKET",productId:e,productTitle:t,productPrice:a}},p=[{title:"Product 1",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",price:"128",id:"15"},{title:"Product 2",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",price:"9",id:"26"},{title:"Product 3",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",price:"146",id:"23"},{title:"Product 4",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",price:"256",id:"74"},{title:"Product 5",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",price:"28",id:"89"}],b=(a(36),Object(u.b)(null,function(e){return{addProductToBasket:function(t,a,n){return e(m(t,a,n))}}})(function(e){var t=e.addProductToBasket;return r.a.createElement("main",{className:"products"},r.a.createElement("h1",{className:"products__title"},"Product Catalog"),p.map(function(e){return r.a.createElement("div",{className:"product",key:e.id},r.a.createElement("div",{className:"product__img"},r.a.createElement(o.b,{to:"/".concat(e.id)},r.a.createElement("img",{alt:e.title,src:"https://source.unsplash.com/250x250/?plate/".concat(e.id),width:"100%"}))),r.a.createElement("div",{className:"product__title"},r.a.createElement(o.b,{to:"/".concat(e.id),className:"product__title-link"},e.title)),r.a.createElement("div",{className:"product__bottom-info"},r.a.createElement("div",{className:"product__price"},"$",e.price),r.a.createElement("button",{type:"button",className:"product__btn",onClick:function(){return t(e.id,e.title,e.price)}},"Buy")))}))})),E=(a(37),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.c,null,r.a.createElement(d.a,{path:"/",exact:!0,component:b})))}),f=(a(38),Object(u.b)(function(e){return{products:e.basketItems,productsSubtotal:Object.keys(e.basketItems).map(function(t){return e.basketItems[t].amount}).reduce(function(e,t){return e+t},0)}},function(e){return{increaseItem:function(t,a){return e(function(e,t){return{type:"BASKET_ITEM_INCREASED",productId:e,productPrice:t}}(t,a))},decreaseItem:function(t,a){return e(function(e,t){return{type:"BASKET_ITEM_DECREASED",productId:e,productPrice:t}}(t,a))},removeItem:function(t,a){return e(function(e){return{type:"BASKET_ITEM_REMOVED",productId:e}}(t))}}})(function(e){var t=e.products,a=e.increaseItem,n=e.decreaseItem,c=e.removeItem,i=e.productsSubtotal;return r.a.createElement("main",{className:"basket"},r.a.createElement("h1",{className:"basket__title"},"Basket"),Object.keys(t).map(function(e){return r.a.createElement("div",{key:e,className:"basket__product"},r.a.createElement("div",{className:"basket__product-name"},t[e].title),r.a.createElement("button",{type:"button",className:"basket__product-btn",onClick:function(){return a(e,t[e].price)}},"+"),r.a.createElement("div",{className:"basket__product-count"},t[e].count),r.a.createElement("button",{type:"button",className:"basket__product-btn",onClick:function(){return n(e,t[e].price)}},"-"),r.a.createElement("div",{className:"basket__product-amount"},"$",t[e].amount),r.a.createElement("button",{type:"button",className:"basket__product-btn-delete",onClick:function(){return c(e,t[e].count)}},"x"))}),r.a.createElement("div",{className:"basket__products-subtotal"},"Subtotal: $",i))})),_=(a(39),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"error-404"},"404"),r.a.createElement("p",{className:"error-404-desc"},"NotFoundPage"),r.a.createElement(o.b,{className:"error-404-link",to:"/"},"Back to Product Catalog"))}),I=(a(40),Object(u.b)(null,function(e){return{addProductToBasket:function(t,a,n){return e(m(t,a,n))}}})(function(e){var t=e.match,a=e.addProductToBasket,n=t.params.productId,c=p.filter(function(e){return+e.id===+n})[0];return r.a.createElement("div",{className:"product-wrap"},r.a.createElement("div",{className:"product__name"},c.title),r.a.createElement("div",{className:"product__image"},r.a.createElement("img",{alt:c.title,src:"https://source.unsplash.com/250x250/?plate/".concat(c.id),width:"100%"})),r.a.createElement("div",{className:"product__info-wrap"},r.a.createElement("div",{className:"product__info-description"},c.description),r.a.createElement("div",{className:"product__info-price"},"$",c.price),r.a.createElement("button",{type:"button",className:"product__info-btn",onClick:function(){return a(c.id,c.title,c.price)}},"buy")))})),k=function(){return r.a.createElement(d.c,null,r.a.createElement(d.a,{path:"/",component:E,exact:!0}),r.a.createElement(d.a,{path:"/basket",exact:!0,component:f}),r.a.createElement(d.a,{path:"/:productId",exact:!0,component:I}),r.a.createElement(d.a,{component:_}))},v=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(l,null),r.a.createElement(k,null))},N=a(11);function g(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function O(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?g(a,!0).forEach(function(t){Object(N.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):g(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var P={basketItems:[]},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0,a=O({},e.basketItems);switch(t.type){case"ADD_TO_BASKET":return e.basketItems[t.productId]?O({},e,{basketItems:O({},e.basketItems,Object(N.a)({},t.productId,O({},e.basketItems[t.productId],{amount:e.basketItems[t.productId].amount+ +t.productPrice,count:e.basketItems[t.productId].count+1})))}):O({},e,{basketItems:O({},e.basketItems,Object(N.a)({},t.productId,O({},e.basketItems[t.productId],{id:t.productId,title:t.productTitle,amount:+t.productPrice,price:t.productPrice,count:1})))});case"BASKET_ITEM_INCREASED":return O({},e,{basketItems:O({},e.basketItems,Object(N.a)({},t.productId,O({},e.basketItems[t.productId],{count:e.basketItems[t.productId].count+1,amount:+e.basketItems[t.productId].amount+ +t.productPrice})))});case"BASKET_ITEM_DECREASED":return O({},e,{basketItems:O({},e.basketItems,Object(N.a)({},t.productId,O({},e.basketItems[t.productId],{count:e.basketItems[t.productId].count>1?e.basketItems[t.productId].count-1:1,amount:e.basketItems[t.productId].count>1?+e.basketItems[t.productId].amount-+t.productPrice:+t.productPrice})))});case"BASKET_ITEM_REMOVED":return delete a[t.productId],O({},e,{basketItems:a});default:return e}},h=Object(s.b)(y,P);i.a.render(r.a.createElement(o.a,null,r.a.createElement(u.a,{store:h},r.a.createElement(v,null))),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.616064ca.chunk.js.map