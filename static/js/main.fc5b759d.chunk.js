(this["webpackJsonpsmartee-shoping"]=this["webpackJsonpsmartee-shoping"]||[]).push([[0],{13:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return c}));var r=function(e,t){return{type:"SHOW_NOTIFICATION",payload:{message:e,key:(new Date).getTime()+Math.random(),autoHideDuration:7500,type:t}}},c=function(e){return{type:"HIDE_NOTIFICATION",payload:e}}},16:function(e,t,n){"use strict";n.d(t,"h",(function(){return a})),n.d(t,"i",(function(){return s})),n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return i})),n.d(t,"e",(function(){return l})),n.d(t,"g",(function(){return u})),n.d(t,"f",(function(){return d})),n.d(t,"j",(function(){return j})),n.d(t,"c",(function(){return b})),n.d(t,"k",(function(){return h})),n.d(t,"d",(function(){return O}));var r=n(8),c=n.n(r);c.a.defaults.baseURL="https://smartee-backend.herokuapp.com/";var a=function(){return c.a.get("/products")},s=function(){return c.a.get("/products/withoutCategory")},o=function(e){return c.a.post("/products",{productId:e})},i=function(e){return c.a.post("/product-groups",e)},l=function(e){return c.a.get("/product-groups/detailed/".concat(e))},u=function(e){return c.a.get("/product-groups/byTitle/".concat(e))},d=function(e){return c.a.get("/product-groups/".concat(e))},j=function(e,t){return c.a.patch("/product-groups/".concat(e),t)},b=function(e){return c.a.delete("/product-groups/".concat(e))},h=function(e){return c.a.patch("/product-groups/updateGroupProducts/".concat(e))},O=function(){return c.a.get("/categories")}},29:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"g",(function(){return s})),n.d(t,"e",(function(){return o})),n.d(t,"b",(function(){return i})),n.d(t,"d",(function(){return l})),n.d(t,"c",(function(){return u})),n.d(t,"h",(function(){return d})),n.d(t,"f",(function(){return j}));var r=n(16),c=n(13),a=function(e){return function(t){Object(r.b)(e).then((function(){return t(Object(c.b)("\u041d\u043e\u0432\u0430\u044f \u0433\u0440\u0443\u043f\u043f\u0430 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0441\u043e\u0437\u0434\u0430\u043d\u0430","success"))}),(function(e){return t(Object(c.b)(e.message,"error"))}))}},s=function(e,t){return function(n){Object(r.j)(e,t).then((function(){return n(Object(c.b)("\u0413\u0440\u0443\u043f\u043f\u0430 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0430","success"))}),(function(e){return n(Object(c.b)(e.message,"error"))}))}},o=function(e,t){return function(n){Object(r.c)(e).then((function(){n(Object(c.b)("\u0417\u0430\u043f\u0438\u0441\u044c \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0443\u0434\u0430\u043b\u0435\u043d\u0430","success")),n(i(t))}),(function(e){return n(Object(c.b)(e.message,"error"))}))}},i=function(e){return function(t){t({type:"CLEAR_PRODUCT_GROUP"}),Object(r.e)(e).then((function(e){var n=e.data;return t(b(n))}))}},l=function(e){return function(t){t({type:"CLEAR_PRODUCT_GROUP_FOUNDED_ITEMS"}),Object(r.g)(e).then((function(e){var n=e.data;return t(h(n))}))}},u=function(e){return function(t){t({type:"CLEAR_PRODUCT_GROUP",payload:!1}),Object(r.f)(e).then((function(e){var n=e.data;return t(b(n))}))}},d=function(e){return function(t){t(Object(c.b)("\u0417\u0430\u043f\u0440\u043e\u0441 \u043d\u0430 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u0441\u043e\u0437\u0434\u0430\u043d","success")),Object(r.k)(e).then((function(){return""}),(function(e){return t(Object(c.b)(e.response.data.message,"error"))}))}},j=function(e){return{type:"SET_SORT_BY",payload:e}},b=function(e){return{type:"SET_PRODUCT_GROUP",payload:e}},h=function(e){return{type:"SET_PRODUCT_GROUP_FOUNDED_ITEMS",payload:e}}},31:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(0);function c(){return Object(r.jsxs)("div",{className:"flex justify-center my-4",children:[Object(r.jsxs)("svg",{className:"animate-spin -ml-1 mr-3 h-8 w-8 text-yellow-500",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[Object(r.jsx)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),Object(r.jsx)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),Object(r.jsx)("p",{className:"text-xl",children:"\u0412\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442\u0441\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."})]})}},47:function(e,t,n){},6:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r="addProductGroup",c="product",a={ADD_PRODUCT_GROUP_EDIT:"/".concat(r,"/:params"),ADD_PRODUCT_GROUP:"/".concat(r),ADD_PRODUCT:"/".concat("addProduct"),PRODUCT_GROUP_INFO:"/".concat(c,"/:params"),PRODUCT_GROUP:"/".concat(c),PRODUCT_GROUPS_BY_CATEGORY:"/:params",MAIN_PAGE:"/"}},72:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(21),a=n.n(c),s=(n(47),n(5)),o=n(6),i=n(0);function l(){return Object(i.jsx)(s.b,{to:o.a.MAIN_PAGE,children:Object(i.jsx)("div",{className:"select-none font-extrabold italic text-3xl tracking-wide group",children:Object(i.jsxs)("h1",{children:[Object(i.jsx)("span",{children:"SMART"}),Object(i.jsx)("span",{className:"transition duration-300 ease-in-out text-yellow-500 group-hover:text-opacity-70",children:"EE"})]})})})}var u=n(2),d=n(14),j=n(15);var b=n(29);function h(e){var t=e._id,n=e.photoURL,c=e.title,a=e.onClickCard,l=Object(r.useState)(!1),u=Object(d.a)(l,2),j=u[0],b=u[1];return Object(i.jsx)("div",{className:"hover:bg-gray-100 transition-colors mt-2",onClick:a,children:Object(i.jsx)(s.b,{to:"".concat(o.a.PRODUCT_GROUP,"/").concat(t),className:"py-4 ",children:Object(i.jsxs)("div",{className:"flex px-2",children:[Object(i.jsx)("img",{onLoad:function(){return b(!0)},className:j?"opacity-100 transition-opacity h-32":"opacity-0 transition-opacity",src:n+"_".concat(350,"x").concat(350,".jpg"),alt:c}),Object(i.jsx)("p",{className:"ml-2 truncate text-xl font-bold",children:c})]})})})}var O=n.p+"static/media/worried-face_emoji.8fde2560.png";function m(){return Object(i.jsxs)("div",{className:"flex flex-col justify-center items-center",children:[Object(i.jsx)("img",{className:"w-30 select-none",src:O,alt:"Data Not Found Emoji"}),Object(i.jsx)("p",{className:"text-3xl text-center font-bold my-3 opacity-75",children:"\u041a \u0441\u043e\u0436\u0430\u043b\u0435\u043d\u0438\u044e, \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"})]})}function f(){var e=Object(j.b)(),t=Object(r.useRef)(),n=Object(j.c)((function(e){return e.productsGroup.foundItems})),c=Object(r.useState)(!1),a=Object(d.a)(c,2),s=a[0],o=a[1],l=Object(r.useState)(""),O=Object(d.a)(l,2),f=O[0],x=O[1],p=function(e,t){var n=Object(r.useState)(e),c=Object(d.a)(n,2),a=c[0],s=c[1];return Object(r.useEffect)((function(){var n=setTimeout((function(){s(e)}),t);return function(){clearTimeout(n)}})),a}(f,750),g=function(e){(e.path||e.composedPath&&e.composedPath()).includes(t.current)||o(!1)};Object(r.useEffect)((function(){""!==p&&e(Object(b.d)(p))}),[e,p]),Object(r.useEffect)((function(){return document.body.addEventListener("click",g),function(){o({})}}),[]);var v=function(){o(!1)};return Object(i.jsxs)("div",{className:"relative",ref:t,children:[Object(i.jsx)("div",{children:Object(i.jsxs)("div",{className:"relative text-gray-600",children:[Object(i.jsx)("span",{className:"absolute inset-y-0 left-0 flex items-center pl-2",children:Object(i.jsx)("button",{"aria-label":"Search",type:"submit",className:"p-1 focus:outline-none focus:shadow-outline",children:Object(i.jsx)("svg",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,viewBox:"0 0 24 24",className:"w-4 h-4",children:Object(i.jsx)("path",{d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})})}),Object(i.jsx)("input",{type:"search",name:"search",className:s?"py-2 pl-10 pr-2 block w-full focus:shadow-xl border border-gray-300 focus:rounded-t-lg focus:outline-none focus:ring-transparent focus:border-b-0 focus:border-gray-300 transition-shadow":"py-2 pl-10 pr-2 block w-full border border-gray-300 focus:outline-none focus:ring-gray-300",placeholder:"\u041f\u043e\u0438\u0441\u043a...",autoComplete:"off",onInput:function(e){x(e.target.value)},onFocus:function(){o(!0)}})]})}),s&&Object(i.jsx)("div",{className:"absolute max-h-screen w-full overflow-y-auto py-6 rounded-b-xl shadow-xl border border-t-0 border-gray-300 bg-white animate-fade-in transition-all",children:n.length>0?n.map((function(e){return Object(i.jsx)(h,Object(u.a)({onClickCard:v},e),e._id)})):""!==p?Object(i.jsx)(m,{}):Object(i.jsx)("p",{className:"text-xl italic",children:"\u041d\u0430\u0447\u043d\u0438\u0442\u0435 \u0432\u0432\u043e\u0434\u0438\u0442\u044c \u0437\u0430\u043f\u0440\u043e\u0441..."})})]})}function x(){return Object(i.jsxs)("div",{className:"relative inline-flex",children:[Object(i.jsx)("span",{className:"h-7 w-7 cursor-pointer transition duration-300 ease-in-out text-gray-500 hover:text-gray-800",children:Object(i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(i.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"})})}),Object(i.jsxs)("span",{className:"absolute h-4 w-4 right-0 top-0 -mt-2 -mr-2",children:[Object(i.jsx)("span",{className:"animate-ping absolute inline-flex h-full w-3 rounded-full bg-yellow-400 opacity-25"}),Object(i.jsx)("span",{className:"relative inline-flex rounded-full h-3 w-3 bg-yellow-500"})]})]})}var p=n(13);function g(e){var t=e.notification,n=e.onClickCloseButton,c=setTimeout((function(){return n(t.key)}),t.autoHideDuration);return Object(r.useEffect)((function(){return function(){clearTimeout(c)}}),[c]),Object(i.jsx)("div",{className:"success"===t.type?"h-16 animate-fade-in flex items-center bg-green-100 transition-all":"h-16 animate-fade-in flex items-center bg-red-100 transition-all",children:Object(i.jsx)("div",{className:"container align-middle mx-auto",children:Object(i.jsxs)("div",{className:"flex items-center justify-between px-5 rounded",children:[Object(i.jsxs)("div",{className:"flex items-center",children:[Object(i.jsx)("div",{className:"success"===t.type?"rounded bg-green-400 hover:bg-opacity-75 cursor-pointer transition":"rounded bg-red-400 hover:bg-opacity-75 cursor-pointer transition",children:Object(i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-7 m-2 text-white relative",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(i.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})}),Object(i.jsx)("p",{className:"pl-2 text-lg",children:t.message})]}),Object(i.jsx)("button",{className:"rounded hover:bg-gray-100 transition",onClick:function(){return n(t.key)},children:Object(i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(i.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]})})},t.key)}function v(){var e=Object(j.c)((function(e){return e.notifications.notifications})),t=Object(j.b)(),n=function(e){return t(Object(p.a)(e))};return e&&e.map((function(e){return Object(i.jsx)(g,{notification:e,onClickCloseButton:n},e.key)}))}function y(){return Object(i.jsxs)("ul",{className:"justify-center align-middle",children:[Object(i.jsx)("li",{className:"h-10 px-5 hover:bg-gray-100 group mb-2",children:Object(i.jsxs)(s.b,{className:"flex align-middle",to:"/cpu",children:[Object(i.jsx)("div",{className:"rounded flex justify-center bg-yellow-500 group-hover:bg-opacity-75 transition mr-3",children:Object(i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",className:"w-7 mx-1.5 text-white relative",children:Object(i.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"})})}),Object(i.jsx)("p",{className:"cursor-pointer width-100 leading-10 font-medium text-sm opacity-75",children:"\u041f\u0440\u043e\u0446\u0435\u0441\u0441\u043e\u0440\u044b"})]})}),Object(i.jsx)("li",{className:"h-10 px-5 hover:bg-gray-100 group mb-2",children:Object(i.jsxs)(s.b,{className:"flex align-middle",to:"/motherboard",children:[Object(i.jsx)("div",{className:"rounded flex justify-center bg-yellow-500 group-hover:bg-opacity-75 transition mr-3",children:Object(i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",className:"w-7 mx-1.5 text-white relative",children:Object(i.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"})})}),Object(i.jsx)("p",{className:"cursor-pointer width-100 leading-10 font-medium text-sm opacity-75",children:"\u041c\u0430\u0442\u0435\u0440\u0438\u043d\u0441\u043a\u0438\u0435 \u043f\u043b\u0430\u0442\u044b"})]})}),Object(i.jsx)("li",{className:"h-10 px-5 hover:bg-gray-100 group mb-2",children:Object(i.jsxs)(s.b,{className:"flex align-middle",to:"/ram",children:[Object(i.jsx)("div",{className:"rounded flex justify-center bg-yellow-500 group-hover:bg-opacity-75 transition mr-3",children:Object(i.jsx)("svg",{className:"w-7 mx-1.5 text-white relative",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512",children:Object(i.jsx)("path",{fill:"currentColor",d:"M640 130.94V96c0-17.67-14.33-32-32-32H32C14.33 64 0 78.33 0 96v34.94c18.6 6.61 32 24.19 32 45.06s-13.4 38.45-32 45.06V320h640v-98.94c-18.6-6.61-32-24.19-32-45.06s13.4-38.45 32-45.06zM224 256h-64V128h64v128zm128 0h-64V128h64v128zm128 0h-64V128h64v128zM0 448h64v-26.67c0-8.84 7.16-16 16-16s16 7.16 16 16V448h128v-26.67c0-8.84 7.16-16 16-16s16 7.16 16 16V448h128v-26.67c0-8.84 7.16-16 16-16s16 7.16 16 16V448h128v-26.67c0-8.84 7.16-16 16-16s16 7.16 16 16V448h64v-96H0v96z"})})}),Object(i.jsx)("p",{className:"cursor-pointer width-100 leading-10 font-medium text-sm opacity-75",children:"\u041e\u043f\u0435\u0440\u0430\u0442\u0438\u0432\u043d\u0430\u044f \u043f\u0430\u043c\u044f\u0442\u044c"})]})}),Object(i.jsx)("li",{className:"h-10 px-5 hover:bg-gray-100 group mb-2",children:Object(i.jsxs)(s.b,{className:"flex align-middle",to:"/drive",children:[Object(i.jsx)("div",{className:"rounded flex justify-center bg-yellow-500 group-hover:bg-opacity-75 transition mr-3",children:Object(i.jsx)("svg",{className:"w-7 mx-1.5 text-white relative",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",children:Object(i.jsx)("path",{fill:"currentColor",d:"M567.403 235.642L462.323 84.589A48 48 0 0 0 422.919 64H153.081a48 48 0 0 0-39.404 20.589L8.597 235.642A48.001 48.001 0 0 0 0 263.054V400c0 26.51 21.49 48 48 48h480c26.51 0 48-21.49 48-48V263.054c0-9.801-3-19.366-8.597-27.412zM153.081 112h269.838l77.913 112H75.168l77.913-112zM528 400H48V272h480v128zm-32-64c0 17.673-14.327 32-32 32s-32-14.327-32-32 14.327-32 32-32 32 14.327 32 32zm-96 0c0 17.673-14.327 32-32 32s-32-14.327-32-32 14.327-32 32-32 32 14.327 32 32z"})})}),Object(i.jsx)("p",{className:"cursor-pointer leading-10 font-medium text-sm opacity-75",children:"\u041d\u0430\u043a\u043e\u043f\u0438\u0442\u0435\u043b\u0438"})]})}),Object(i.jsx)("li",{className:"h-10 px-5 hover:bg-gray-100 group mb-2",children:Object(i.jsxs)(s.b,{className:"flex align-middle",to:"/accessories",children:[Object(i.jsx)("div",{className:"rounded flex justify-center bg-yellow-500 group-hover:bg-opacity-75 transition mr-3",children:Object(i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",className:"w-7 mx-1.5 text-white relative",children:Object(i.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"})})}),Object(i.jsx)("p",{className:"cursor-pointer leading-10 font-medium text-sm opacity-75",children:"\u0410\u043a\u0441\u0435\u0441\u0441\u0443\u0430\u0440\u044b"})]})})]})}var w=Object(r.memo)((function(){var e=Object(r.useState)(!1),t=Object(d.a)(e,2),n=t[0],c=t[1],a=Object(r.useRef)(),s=function(e){(e.path||e.composedPath&&e.composedPath()).includes(a.current)||c(!1)};return Object(r.useEffect)((function(){return document.body.addEventListener("click",s),function(){c(!1)}}),[]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{className:"flex flex-col justify-center sm:hidden z-50",children:Object(i.jsx)("div",{className:"relative mx-auto",children:Object(i.jsx)("nav",{children:Object(i.jsxs)("button",{ref:a,className:"text-gray-500 w-10 h-9 relative",onClick:function(){return c(!n)},children:[Object(i.jsx)("span",{className:"sr-only",children:"Open main menu"}),Object(i.jsxs)("div",{className:"flex w-5 left-1/2 top-1/2 transform translate-x-1/2 -translate-y-1/2",children:[Object(i.jsx)("span",{"aria-hidden":"true",className:n?"block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out rotate-45":"block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out -translate-y-1.5"}),Object(i.jsx)("span",{"aria-hidden":"true",className:n?"block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out opacity-0":"block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out"}),Object(i.jsx)("span",{"aria-hidden":"true",className:n?"block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out -rotate-45":"block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out translate-y-1.5"})]})]})})})}),n&&Object(i.jsx)("div",{className:"bg-gray-100 sm:hidden absolute h-screen w-full rounded z-40 top-0 py-6 left-0 shadow-inner",children:Object(i.jsx)("div",{className:"h-full overflow-auto overscroll-contain py-8",children:Object(i.jsx)(y,{})})})]})}));function N(){return Object(i.jsxs)("div",{className:"sticky top-0 z-20 bg-white shadow",children:[Object(i.jsx)("div",{className:"container mx-auto",children:Object(i.jsxs)("nav",{className:"block sm:flex text-center items-center w-full sm:h-16",children:[Object(i.jsxs)("div",{className:"flex flex-row-reverse justify-between mr-2 pt-2 pl-4 sm:pt-0 md:px-16",children:[Object(i.jsx)(w,{}),Object(i.jsx)(l,{})]}),Object(i.jsx)("div",{className:"flex-auto p-3 sm:pl-7",children:Object(i.jsx)(f,{})}),Object(i.jsx)("div",{className:"hidden sm:block flex-none px-6",children:Object(i.jsx)(x,{})})]})}),Object(i.jsx)(v,{})]})}var _=n(4),k=n(31);function T(){return Object(i.jsxs)("div",{className:"block mx-4 mb-4 sm:m-0 sm:flex gap-3",children:[Object(i.jsx)("div",{className:"flex-1 text-center mb-3 group",children:Object(i.jsxs)(s.b,{to:o.a.ADD_PRODUCT,className:"inline-flex w-full px-5 py-4 text-gray-600 rounded border border-gray-200 group-hover:bg-gray-300 transition",children:[Object(i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(i.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})}),Object(i.jsx)("p",{className:"ml-2",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0442\u043e\u0432\u0430\u0440"})]})}),Object(i.jsx)("div",{className:"flex-1 text-center mb-3 group",children:Object(i.jsxs)(s.b,{to:o.a.ADD_PRODUCT_GROUP,className:"inline-flex w-full px-5 py-4 text-gray-600 rounded border border-gray-200 group-hover:bg-gray-300 transition",children:[Object(i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(i.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})}),Object(i.jsx)("p",{className:"ml-2",children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0433\u0440\u0443\u043f\u043f\u0443"})]})})]})}var C=Object(r.lazy)((function(){return n.e(8).then(n.bind(null,100))})),R=Object(r.lazy)((function(){return n.e(6).then(n.bind(null,104))})),D=Object(r.lazy)((function(){return n.e(7).then(n.bind(null,103))})),P=Object(r.lazy)((function(){return n.e(4).then(n.bind(null,101))})),E=Object(r.lazy)((function(){return Promise.all([n.e(3),n.e(5)]).then(n.bind(null,102))}));function U(){return Object(i.jsx)("div",{className:"container mx-auto mt-5",children:Object(i.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-layout gap-0 sm:gap-4",children:[Object(i.jsx)("div",{children:Object(i.jsx)("div",{className:"py-6 bg-white rounded-md shadow hidden sm:block",children:Object(i.jsx)(y,{})})}),Object(i.jsxs)("div",{children:[Object(i.jsx)(T,{}),Object(i.jsx)("section",{className:"px-3 md:px-8 py-6 bg-white rounded-md shadow",children:Object(i.jsx)(r.Suspense,{fallback:Object(i.jsx)(k.a,{}),children:Object(i.jsxs)(_.c,{children:[Object(i.jsx)(_.a,{path:[o.a.ADD_PRODUCT_GROUP_EDIT,o.a.ADD_PRODUCT_GROUP],children:Object(i.jsx)(R,{})}),Object(i.jsx)(_.a,{path:o.a.ADD_PRODUCT,children:Object(i.jsx)(C,{})}),Object(i.jsx)(_.a,{path:o.a.PRODUCT_GROUP_INFO,children:Object(i.jsx)(D,{})}),Object(i.jsx)(_.a,{path:o.a.PRODUCT_GROUPS_BY_CATEGORY,children:Object(i.jsx)(P,{})}),Object(i.jsx)(_.a,{path:o.a.MAIN_PAGE,children:Object(i.jsx)(E,{})})]})})})]})]})})}var L=function(){return Object(i.jsx)("div",{className:"App bg-gray-100 min-h-screen",children:Object(i.jsxs)(s.a,{children:[Object(i.jsx)(N,{}),Object(i.jsx)(U,{})]})})},A=n(17),M=n(42),I={items:[],searchTerm:"",isLoaded:!1,isWaitingResponce:!1},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_PRODUCTS":return Object(u.a)(Object(u.a)({},e),{},{items:t.payload,searchTerm:"",isLoaded:!0});case"SET_PRODUCTS_SEARCH_TERM":return Object(u.a)(Object(u.a)({},e),{},{searchTerm:t.payload});case"CLEAR_PRODUCTS":return Object(u.a)(Object(u.a)({},e),{},{items:[]});case"SET_LOADED":return Object(u.a)(Object(u.a)({},e),{},{isLoaded:t.payload});case"SET_WAITING":return Object(u.a)(Object(u.a)({},e),{},{isWaitingResponce:t.payload});default:return e}},G={categories:[],isLoaded:!1},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CATEGORIES":return Object(u.a)(Object(u.a)({},e),{},{categories:t.payload,isLoaded:!0});case"SET_LOADED":return Object(u.a)(Object(u.a)({},e),{},{isLoaded:t.payload});default:return e}},V={items:[],foundItems:[],isLoaded:!1,sortParam:"asc_price"},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_PRODUCT_GROUP":return Object(u.a)(Object(u.a)({},e),{},{items:t.payload,isLoaded:!0});case"CLEAR_PRODUCT_GROUP":return Object(u.a)(Object(u.a)({},e),{},{items:[],isLoaded:!1});case"SET_SORT_BY":return Object(u.a)(Object(u.a)({},e),{},{sortParam:t.payload});case"SET_PRODUCT_GROUP_FOUNDED_ITEMS":return Object(u.a)(Object(u.a)({},e),{},{foundItems:t.payload});case"CLEAR_PRODUCT_GROUP_FOUNDED_ITEMS":return Object(u.a)(Object(u.a)({},e),{},{foundItems:[]});default:return e}},B=n(40),W={notifications:[]},F=function(e){for(;e.length>=3;)e.shift();return e},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SHOW_NOTIFICATION":return Object(u.a)(Object(u.a)({},e),{},{notifications:[].concat(Object(B.a)(F(e.notifications)),[t.payload])});case"HIDE_NOTIFICATION":return Object(u.a)(Object(u.a)({},e),{},{notifications:e.notifications.filter((function(e){return e.key!==t.payload}))});default:return e}},J=Object(A.c)({productsGroup:H,products:S,categories:z,notifications:Y}),q=A.d,K=Object(A.e)(J,q(Object(A.a)(M.a)));a.a.render(Object(i.jsx)(j.a,{store:K,children:Object(i.jsx)(L,{})}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.fc5b759d.chunk.js.map