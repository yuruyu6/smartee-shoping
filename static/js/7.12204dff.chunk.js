(this["webpackJsonpsmartee-shoping"]=this["webpackJsonpsmartee-shoping"]||[]).push([[7],{105:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return w}));var r=n(2),i=n(1),s=n(16),o=n(5),c=n(33),a=n(31),u=n(80),l=function(t){return t.productsGroup},d=Object(u.a)([function(t){return l(t).items},function(t){return l(t).sortParam}],(function(t,e){var n,i,s,o;switch(e){case"asc_price":return Object(r.a)(Object(r.a)({},t),{},{productIds:null===(n=t.productIds)||void 0===n?void 0:n.sort((function(t,e){return t.salePrice.min-e.salePrice.min}))});case"desc_rating":return Object(r.a)(Object(r.a)({},t),{},{productIds:null===(i=t.productIds)||void 0===i?void 0:i.sort((function(t,e){return t.averageStar===e.averageStar?t.salePrice.min<e.salePrice.min?-1:t.salePrice.min>e.salePrice.min?1:0:t.averageStar>e.averageStar?-1:1}))});case"desc_orders":return Object(r.a)(Object(r.a)({},t),{},{productIds:null===(s=t.productIds)||void 0===s?void 0:s.sort((function(t,e){return e.orders-t.orders}))});default:return Object(r.a)(Object(r.a)({},t),{},{productIds:null===(o=t.productIds)||void 0===o?void 0:o.sort((function(t,e){return t.salePrice.min-e.salePrice.min}))})}})),h=n(85),f=n.n(h),p=n(0);var m=function(t){var e=t.title,n=t.storeName,r=t.averageStar,i=t.salePrice,s=t.orders,o=t.edited;return Object(p.jsxs)("div",{className:"px-1 py-3 grid grid-cols-8 hover:bg-gray-200 transition",children:[Object(p.jsx)("div",{className:"m-auto",children:Object(p.jsx)("img",{className:"h-6 object-contain",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Aliexpress_logo.svg/1280px-Aliexpress_logo.svg.png",alt:"Aliexpress shop"})}),Object(p.jsxs)("div",{className:"col-span-5 lg:col-span-6",children:[Object(p.jsx)("p",{className:"truncate w-full xl:w-1/2",title:e,children:e}),Object(p.jsx)("p",{className:"text-xl py-1 font-semibold",children:n}),Object(p.jsxs)("div",{className:"flex justify-between",children:[Object(p.jsxs)("div",{className:"flex opacity-75",children:[Object(p.jsxs)("p",{className:"flex ",children:[Object(p.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 mr-1 text-yellow-600",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(p.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"})}),r]}),Object(p.jsxs)("p",{className:"flex",children:[Object(p.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 mx-1 text-yellow-600",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(p.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"})}),s]})]}),Object(p.jsx)("div",{children:Object(p.jsxs)("p",{className:"hidden xl:flex text-sm text-gray-400",title:"\u041f\u043e\u0441\u043b\u0435\u0434\u043d\u0435\u0435 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435",children:[Object(p.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 mr-1",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(p.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"})}),f()(o).format("DD.MM.YYYY")]})})]})]}),Object(p.jsxs)("div",{className:"text-xl font-bold opacity-75 m-auto",children:["US $",parseFloat(i.min).toFixed(2)]})]})},b=n(15),j=Object(i.memo)((function(t){var e=t.items,n=t.activeSortType,r=t.onSelectItem,i=t.setOptionRef;return Object(p.jsx)("ul",{tabIndex:"0","data-testid":"sortPopupOptions",children:e&&e.map((function(t,s){return Object(p.jsx)("li",{tabIndex:"0",role:"option",ref:i,"aria-posinset":s,"aria-setsize":e.length,"aria-selected":t.type===n.type,onClick:function(e){return r(e,t.type,s)},onKeyDown:function(e){return r(e,t.type,s)},className:t.type===n.type?"p-3 focus:bg-gray-100 hover:bg-gray-200 transition cursor-pointer outline-none font-bold text-yellow-500":"p-3 focus:bg-gray-100 hover:bg-gray-200 transition cursor-pointer outline-none",children:t.name},t.type)}))})}));function v(t){var e=t.items,n=t.activeSortType,r=t.onClickSortType,s=Object(i.useState)(!1),o=Object(b.a)(s,2),c=o[0],a=o[1],u=Object(i.useRef)(),l=[],d=function(t){(t.path||t.composedPath&&t.composedPath()).includes(u.current)||a(!1)};Object(i.useEffect)((function(){return document.body.addEventListener("click",d),function(){a({}),document.body.removeEventListener("click",d)}}),[]);return Object(p.jsxs)("div",{children:[Object(p.jsxs)("button",{tabIndex:"0",ref:u,className:"flex items-center focus:outline-black",onClick:function(t){return function(){if(!1===c)return a(!c);a(!c)}()},"aria-haspopup":"listbox",children:[Object(p.jsx)("span",{className:"opacity-75 font-bold",children:"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u043e:"}),Object(p.jsx)("span",{className:"cursor-pointer font-semibold border-b-2 mx-2 border-dashed text-yellow-500 border-yellow-500",children:n.name}),Object(p.jsx)("svg",{className:c?"opacity-30":"transform rotate-180 opacity-30",width:"8",height:"5",viewBox:"0 0 10 6",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(p.jsx)("path",{d:"M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z",fill:"#2C2C2C"})})]}),c&&Object(p.jsx)("div",{className:"overflow-hidden absolute right-0 py-2 shadow rounded bg-white z-10 w-48 ",children:Object(p.jsx)(j,{items:e,activeSortType:n,onSelectItem:function(t,e,n){switch(t.type){case"click":r&&r(e);break;case"keydown":t.preventDefault(),"Enter"!==t.key&&" "!==t.key||r&&(r(e),a(!1),u.current&&u.current.focus()),"ArrowUp"===t.key&&l[0===n?l.length-1:n-1].focus(),"ArrowDown"===t.key&&l[n>=l.length-1?0:n+1].focus()}},setOptionRef:function(t){var r;null!==t&&(l.push(t),null===(r=l[e.indexOf(n)])||void 0===r||r.focus())}})})]})}var y=Object(i.memo)(v),g=n(75),x=n(25),O="asc_price",$=[{name:"\u0446\u0435\u043d\u0435",type:"asc_price"},{name:"\u0440\u0435\u0439\u0442\u0438\u043d\u0433\u0443",type:"desc_rating"},{name:"\u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0443 \u0437\u0430\u043a\u0430\u0437\u043e\u0432",type:"desc_orders"}];function w(){var t,e=Object(o.g)().params,n=Object(s.b)(),u=Object(s.c)(d),l=Object(s.c)((function(t){return t.productsGroup.isLoaded})),h=Object(s.c)((function(t){return t.productsGroup.sortParam}));return Object(i.useEffect)((function(){n(Object(a.c)(e))}),[n,e]),Object(p.jsx)("div",{children:l&&u?Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3",children:[Object(p.jsx)("div",{className:"m-auto",children:u.photoURL&&Object(p.jsx)("img",{className:"h-cardphoto w-cardphoto object-cover",src:u.photoURL+"_".concat(x.a,"x").concat(x.a,".jpg"),alt:u.title})}),Object(p.jsx)("div",{className:"flex flex-col justify-between mt-4 md:m-0",children:Object(p.jsx)(g.a,{text:u.title})}),Object(p.jsx)("div",{className:"hidden md:block ml-4",children:Object(p.jsx)("button",{className:"cursor-pointer text-gray-400 font-semibold border-b-2 border-dashed border-gray-400 focus:outline-black hover:bg-gray-200 transition ",onClick:function(){n(Object(a.h)(u._id))},children:"\u0418\u0437\u043c\u0435\u043d\u0438\u043b\u0430\u0441\u044c \u0446\u0435\u043d\u0430?"})})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{className:"flex relative justify-end my-6",children:Object(p.jsx)(y,{items:$,activeSortType:$.find((function(t){return t.type===h})),onClickSortType:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O;n(Object(a.f)(t))}})}),Object(p.jsx)("div",{className:"border rounded",children:null===(t=u.productIds)||void 0===t?void 0:t.map((function(t){return t.isActive&&Object(p.jsx)("div",{className:"odd:bg-gray-50",children:Object(p.jsx)("a",{href:"https://www.aliexpress.com/item/".concat(t.productId,".html"),target:"_blank",rel:"noreferrer",children:Object(p.jsx)(m,Object(r.a)({},t))})},t.productId)}))})]})]}):Object(p.jsx)(c.a,{})})}},75:function(t,e,n){"use strict";var r=n(0);e.a=function(t){var e=t.text;return Object(r.jsx)("h1",{className:"text-3xl font-bold mb-3 opacity-75",children:e})}},80:function(t,e,n){"use strict";function r(t,e){return t===e}function i(t,e,n){if(null===e||null===n||e.length!==n.length)return!1;for(var r=e.length,i=0;i<r;i++)if(!t(e[i],n[i]))return!1;return!0}function s(t){var e=Array.isArray(t[0])?t[0]:t;if(!e.every((function(t){return"function"===typeof t}))){var n=e.map((function(t){return typeof t})).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: ["+n+"]")}return e}n.d(e,"a",(function(){return o}));var o=function(t){for(var e=arguments.length,n=Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return function(){for(var e=arguments.length,r=Array(e),i=0;i<e;i++)r[i]=arguments[i];var o=0,c=r.pop(),a=s(r),u=t.apply(void 0,[function(){return o++,c.apply(null,arguments)}].concat(n)),l=t((function(){for(var t=[],e=a.length,n=0;n<e;n++)t.push(a[n].apply(null,arguments));return u.apply(null,t)}));return l.resultFunc=c,l.dependencies=a,l.recomputations=function(){return o},l.resetRecomputations=function(){return o=0},l}}((function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r,n=null,s=null;return function(){return i(e,n,arguments)||(s=t.apply(null,arguments)),n=arguments,s}}))},85:function(t,e,n){t.exports=function(){"use strict";var t="millisecond",e="second",n="minute",r="hour",i="day",s="week",o="month",c="quarter",a="year",u="date",l=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,d=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,h={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},f=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},p={s:f,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+f(r,2,"0")+":"+f(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,o),s=n-i<0,c=e.clone().add(r+(s?-1:1),o);return+(-(r+(n-i)/(s?i-c:c-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(l){return{M:o,y:a,w:s,d:i,D:u,h:r,m:n,s:e,ms:t,Q:c}[l]||String(l||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},m="en",b={};b[m]=h;var j=function(t){return t instanceof x},v=function(t,e,n){var r;if(!t)return m;if("string"==typeof t)b[t]&&(r=t),e&&(b[t]=e,r=t);else{var i=t.name;b[i]=t,r=i}return!n&&r&&(m=r),r||!n&&m},y=function(t,e){if(j(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new x(n)},g=p;g.l=v,g.i=j,g.w=function(t,e){return y(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var x=function(){function h(t){this.$L=v(t.locale,null,!0),this.parse(t)}var f=h.prototype;return f.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(g.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(l);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},f.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},f.$utils=function(){return g},f.isValid=function(){return!("Invalid Date"===this.$d.toString())},f.isSame=function(t,e){var n=y(t);return this.startOf(e)<=n&&n<=this.endOf(e)},f.isAfter=function(t,e){return y(t)<this.startOf(e)},f.isBefore=function(t,e){return this.endOf(e)<y(t)},f.$g=function(t,e,n){return g.u(t)?this[e]:this.set(n,t)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(t,c){var l=this,d=!!g.u(c)||c,h=g.p(t),f=function(t,e){var n=g.w(l.$u?Date.UTC(l.$y,e,t):new Date(l.$y,e,t),l);return d?n:n.endOf(i)},p=function(t,e){return g.w(l.toDate()[t].apply(l.toDate("s"),(d?[0,0,0,0]:[23,59,59,999]).slice(e)),l)},m=this.$W,b=this.$M,j=this.$D,v="set"+(this.$u?"UTC":"");switch(h){case a:return d?f(1,0):f(31,11);case o:return d?f(1,b):f(0,b+1);case s:var y=this.$locale().weekStart||0,x=(m<y?m+7:m)-y;return f(d?j-x:j+(6-x),b);case i:case u:return p(v+"Hours",0);case r:return p(v+"Minutes",1);case n:return p(v+"Seconds",2);case e:return p(v+"Milliseconds",3);default:return this.clone()}},f.endOf=function(t){return this.startOf(t,!1)},f.$set=function(s,c){var l,d=g.p(s),h="set"+(this.$u?"UTC":""),f=(l={},l[i]=h+"Date",l[u]=h+"Date",l[o]=h+"Month",l[a]=h+"FullYear",l[r]=h+"Hours",l[n]=h+"Minutes",l[e]=h+"Seconds",l[t]=h+"Milliseconds",l)[d],p=d===i?this.$D+(c-this.$W):c;if(d===o||d===a){var m=this.clone().set(u,1);m.$d[f](p),m.init(),this.$d=m.set(u,Math.min(this.$D,m.daysInMonth())).$d}else f&&this.$d[f](p);return this.init(),this},f.set=function(t,e){return this.clone().$set(t,e)},f.get=function(t){return this[g.p(t)]()},f.add=function(t,c){var u,l=this;t=Number(t);var d=g.p(c),h=function(e){var n=y(l);return g.w(n.date(n.date()+Math.round(e*t)),l)};if(d===o)return this.set(o,this.$M+t);if(d===a)return this.set(a,this.$y+t);if(d===i)return h(1);if(d===s)return h(7);var f=(u={},u[n]=6e4,u[r]=36e5,u[e]=1e3,u)[d]||1,p=this.$d.getTime()+t*f;return g.w(p,this)},f.subtract=function(t,e){return this.add(-1*t,e)},f.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=g.z(this),i=this.$locale(),s=this.$H,o=this.$m,c=this.$M,a=i.weekdays,u=i.months,l=function(t,r,i,s){return t&&(t[r]||t(e,n))||i[r].substr(0,s)},h=function(t){return g.s(s%12||12,t,"0")},f=i.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:c+1,MM:g.s(c+1,2,"0"),MMM:l(i.monthsShort,c,u,3),MMMM:l(u,c),D:this.$D,DD:g.s(this.$D,2,"0"),d:String(this.$W),dd:l(i.weekdaysMin,this.$W,a,2),ddd:l(i.weekdaysShort,this.$W,a,3),dddd:a[this.$W],H:String(s),HH:g.s(s,2,"0"),h:h(1),hh:h(2),a:f(s,o,!0),A:f(s,o,!1),m:String(o),mm:g.s(o,2,"0"),s:String(this.$s),ss:g.s(this.$s,2,"0"),SSS:g.s(this.$ms,3,"0"),Z:r};return n.replace(d,(function(t,e){return e||p[t]||r.replace(":","")}))},f.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},f.diff=function(t,u,l){var d,h=g.p(u),f=y(t),p=6e4*(f.utcOffset()-this.utcOffset()),m=this-f,b=g.m(this,f);return b=(d={},d[a]=b/12,d[o]=b,d[c]=b/3,d[s]=(m-p)/6048e5,d[i]=(m-p)/864e5,d[r]=m/36e5,d[n]=m/6e4,d[e]=m/1e3,d)[h]||m,l?b:g.a(b)},f.daysInMonth=function(){return this.endOf(o).$D},f.$locale=function(){return b[this.$L]},f.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=v(t,e,!0);return r&&(n.$L=r),n},f.clone=function(){return g.w(this.$d,this)},f.toDate=function(){return new Date(this.valueOf())},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},h}(),O=x.prototype;return y.prototype=O,[["$ms",t],["$s",e],["$m",n],["$H",r],["$W",i],["$M",o],["$y",a],["$D",u]].forEach((function(t){O[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),y.extend=function(t,e){return t.$i||(t(e,x,y),t.$i=!0),y},y.locale=v,y.isDayjs=j,y.unix=function(t){return y(1e3*t)},y.en=b[m],y.Ls=b,y.p={},y}()}}]);
//# sourceMappingURL=7.12204dff.chunk.js.map