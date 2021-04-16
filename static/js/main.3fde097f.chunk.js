(this["webpackJsonpdata-validation"]=this["webpackJsonpdata-validation"]||[]).push([[0],{35:function(e,t){},37:function(e,t){},49:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var c=n(4),i=n.n(c),r=n(25),a=n.n(r),l=n(17),s=n(18),o=n(26),d=n(0),j=function(e){var t=e.setData,n=e.setFile;return Object(d.jsx)(o.a,{config:{header:!0,skipEmptyLines:!0},style:{dropArea:{width:"50vw",margin:"0 auto"}},onError:function(e,t,n,c){console.log(e)},addRemoveButton:!0,onRemoveFile:function(e){console.log(e),t(null)},onDrop:function(e,c){console.log(e),console.log(c);var i=e.map((function(e,t){var n=e.data;return Object(s.a)(Object(s.a)({},n),{},{id:t+1})}));console.log(i),t(i),n(c)},children:Object(d.jsx)("span",{children:"Drop CSV file here or click to upload."})})},h=n(1),u=n.n(h),b=n(28),m=n(7),x=n.n(m),O=function(e){return!(e.length<10||e.length>12)&&(10===e.length&&Number.isInteger(+e)?"+1".concat(e):11===e.length&&Number.isInteger(+e)&&"1"===e[0]?"+".concat(e):!(12!==e.length||"+1"!==e.slice(0,2)||!Number.isInteger(+e.slice(-10)))&&e)},f=function(e){return+e>=21&&Number.isInteger(+e)},p=function(e){return e>=0&&e<=1e6&&(+e).toFixed(2)},v=function(e){return"true"===e.toLowerCase()||"false"===e.toLowerCase()?e.toUpperCase():!e&&"FALSE"},g=function(e){return e.split("|").map((function(e){return e.trim()})).join(", ")},N=function(e){return!(!x()(e,"YYYY-MM-DD").isValid()&&!x()(e,"MM/DD/YYYY").isValid()||!x()(e).isAfter(x()()))},E=function(e){return 6===e.length&&/^\w*\d*$/g.test(e)},Y=function(e,t){return e.map((function(e){if(e.Phone===t.Phone&&e.id!=t.id||e.Email.toLowerCase()===t.Email.toLowerCase()&&e.id!=t.id)return e.id}))},y=function(e){var t=e.data,n=e.file;return function(e){var t,n=e.map((function(e){return[e["Full Name"],e.Phone,e.Email]})),c=Object(b.a)(n);try{for(c.s();!(t=c.n()).done;)return t.value.every((function(e){return!!e}))}catch(i){c.e(i)}finally{c.f()}}(t)&&function(e){return"csv"===e.name.toLowerCase().split(".")[1]}(n)?Object(d.jsxs)("table",{className:"table",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Id"}),Object(d.jsx)("th",{children:"Full Name"}),Object(d.jsx)("th",{children:"Phone"}),Object(d.jsx)("th",{children:"Email"}),Object(d.jsx)("th",{children:"Age"}),Object(d.jsx)("th",{children:"Experience"}),Object(d.jsx)("th",{children:"Yearly Income"}),Object(d.jsx)("th",{children:"Has children"}),Object(d.jsx)("th",{children:"License states"}),Object(d.jsx)("th",{children:"Expiration date"}),Object(d.jsx)("th",{children:"License number"}),Object(d.jsx)("th",{children:"Dublicate with"})]})}),Object(d.jsx)("tbody",{children:t.map((function(e,n){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:e.id}),Object(d.jsx)("td",{children:e["Full Name"]}),Object(d.jsx)("td",{className:u()({invalid:!O(e.Phone)}),children:O(e.Phone)?O(e.Phone):e.Phone}),Object(d.jsx)("td",{className:u()({invalid:(r=e.Email,!/[^@]+@[^\.]+\..+/g.test(r))}),children:e.Email}),Object(d.jsx)("td",{className:u()({invalid:!f(e.Age)}),children:e.Age}),Object(d.jsx)("td",{className:u()({invalid:(c=e.Experience,i=e.Age,!(+c>=0&&+c<=i-21))}),children:e.Experience}),Object(d.jsx)("td",{className:u()({invalid:!p(e["Yearly Income"])}),children:p(e["Yearly Income"])?p(e["Yearly Income"]):e["Yearly Income"]}),Object(d.jsx)("td",{className:u()({invalid:!v(e["Has children"])}),children:v(e["Has children"])?v(e["Has children"]):e["Has children"]}),Object(d.jsx)("td",{className:u()({invalid:!g(e["License states"])}),children:g(e["License states"])}),Object(d.jsx)("td",{className:u()({invalid:!N(e["Expiration date"])}),children:e["Expiration date"]}),Object(d.jsx)("td",{className:u()({invalid:!E(e["License number"])}),children:e["License number"]}),Object(d.jsx)("td",{children:Y(t,e)})]},n);var c,i,r}))})]}):Object(d.jsx)("div",{className:"error",children:'Your file could not be load. Please, check the fields "Full Name", "Phone", "Email" are not empty and file extension is ".csv"'})};n(49);function L(){var e=Object(c.useState)(null),t=Object(l.a)(e,2),n=t[0],i=t[1],r=Object(c.useState)(null),a=Object(l.a)(r,2),s=a[0],o=a[1];return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(j,{setData:i,setFile:o}),n&&s&&Object(d.jsx)(y,{data:n,file:s})]})}n(50),n(51);a.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(L,{})}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.3fde097f.chunk.js.map