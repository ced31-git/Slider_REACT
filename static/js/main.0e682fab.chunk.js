(this.webpackJsonpcomposants=this.webpackJsonpcomposants||[]).push([[0],{10:function(e,i,n){},12:function(e,i,n){"use strict";n.r(i);var t=n(1),s=n.n(t),r=n(3),c=n.n(r),o=(n(9),n(4)),d=(n(10),n(14)),a=[{id:Object(d.a)(),title:"Lorem ipsum",subTitle:"Lorem"},{id:Object(d.a)(),title:"Lorem ipsum",subTitle:"Lorem"},{id:Object(d.a)(),title:"Lorem ipsum",subTitle:"Lorem"},{id:Object(d.a)(),title:"Lorem ipsum",subTitle:"Lorem"},{id:Object(d.a)(),title:"Lorem ipsum",subTitle:"Lorem"}],m=n.p+"static/media/left-arrow.da21225b.svg",l=n.p+"static/media/right-arrow.d19ce8f8.svg",u=n(0);function x(e){var i=e.direction,n=e.moveSlide;return Object(u.jsx)("button",{onClick:n,className:"next"===i?"btn-slide next":"btn-slide prev",children:Object(u.jsx)("img",{src:"next"===i?l:m,alt:" icone fl\xe8che"})})}function j(){var e=Object(t.useState)({index:1,inProgress:!1}),i=Object(o.a)(e,2),n=i[0],s=i[1];return Object(u.jsxs)("div",{className:"container-slider",children:[a.map((function(e,i){return Object(u.jsx)("div",{className:n.index===i+1?"slide active-anim":"slide",children:Object(u.jsx)("img",{src:"/Slider_REACT"+"/Imgs/img".concat(i+1,".jpg"),alt:""})},e.id)})),Object(u.jsx)(x,{moveSlide:function(){n.index===a.length||n.inProgress?n.index!==a.length||n.inProgress||(s({index:1,inProgress:!0}),setTimeout((function(){s({index:1,inProgress:!1})}),400)):(s({index:n.index+1,inProgress:!0}),setTimeout((function(){s({index:n.index+1,inProgress:!1})}),400))},direction:"next"}),Object(u.jsx)(x,{moveSlide:function(){1===n.index||n.inProgress?1!==n.index||n.inProgress||(s({index:5,inProgress:!0}),setTimeout((function(){s({index:5,inProgress:!1})}),400)):(s({index:n.index-1,inProgress:!0}),setTimeout((function(){s({index:n.index-1,inProgress:!1})}),400))},direction:"prev"}),Object(u.jsx)("div",{className:"container-dots",children:Array.from({length:5}).map((function(e,i){return Object(u.jsx)("div",{className:n.index===i+1?"dot active":"dot",onClick:function(){return function(e){s({index:e,inProgress:!1})}(i+1)}})}))})]})}var b=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(j,{})})};c.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(b,{})}),document.getElementById("root"))},9:function(e,i,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.0e682fab.chunk.js.map