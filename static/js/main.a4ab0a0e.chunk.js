(this.webpackJsonpnotes=this.webpackJsonpnotes||[]).push([[0],{29:function(e,t,n){},30:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var c=n(2),o=n.n(c),s=n(31),a=n.n(s),r=(n(40),n(41),n(7)),i=n.n(r),l=n(14),d=n(3),u=n(23),j=(n(43),n(64),u.a.initializeApp({apiKey:"AIzaSyCkF4cag9y7dsYpkKXgFkl3_UkSyAMTOP0",authDomain:"notes-11360.firebaseapp.com",projectId:"notes-11360",storageBucket:"notes-11360.appspot.com",messagingSenderId:"1027385684806",appId:"1:1027385684806:web:767a31f30bd0d173612b47"})),b=j.auth(),f=new u.a.auth.GoogleAuthProvider,x=j.firestore(),O={users:x.collection("users"),notesM:x.collection("notes"),getCurrentTimeStamp:u.a.firestore.FieldValue.serverTimestamp},h=n(1),m=o.a.createContext();function p(){return Object(c.useContext)(m)}function v(e){var t=e.children,n=Object(c.useState)(),o=Object(d.a)(n,2),s=o[0],a=o[1],r=Object(c.useState)(!0),i=Object(d.a)(r,2),l=i[0],u=i[1];Object(c.useEffect)((function(){return b.onAuthStateChanged((function(e){e?(a(e),u(!1)):u(!1)}))}));var j={currentUser:s,logIn:function(){b.signInWithPopup(f).then().catch((function(e){return console.log(e)}))},logOut:function(){return b.signOut()}};return Object(h.jsx)(m.Provider,{value:j,children:!l&&t})}var g=o.a.createContext(),y=function(){return Object(c.useContext)(g)},N=function(e){var t=e.children,n=Object(c.useState)(!1),o=Object(d.a)(n,2),s=o[0],a=o[1],r=Object(c.useState)(""),i=Object(d.a)(r,2),l=i[0],u=i[1],j=Object(c.useState)([]),b=Object(d.a)(j,2),f=b[0],x=b[1],O=Object(c.useState)("#ffffff"),m=Object(d.a)(O,2),p=m[0],v=m[1],y=Object(c.useState)("#000000"),N=Object(d.a)(y,2),C=N[0],S=N[1],k=Object(c.useState)("Sans-serif"),w=Object(d.a)(k,2),L=w[0],z=w[1],T=Object(c.useState)("25"),B=Object(d.a)(T,2),I=B[0],A=B[1],E=Object(c.useState)(""),F=Object(d.a)(E,2),q=F[0],D=F[1],M=Object(c.useState)("title"),W=Object(d.a)(M,2),_=W[0],P=W[1],J=Object(c.useState)({}),U=Object(d.a)(J,2),Y=U[0],R=U[1],X=Object(c.useState)(!1),V=Object(d.a)(X,2),G=V[0],K=V[1],Z=Object(c.useState)(!1),H=Object(d.a)(Z,2),Q=H[0],$=H[1],ee=Object(c.useState)(!1),te=Object(d.a)(ee,2),ne=te[0],ce=te[1],oe=Object(c.useState)(!1),se=Object(d.a)(oe,2),ae={addNote:s,setAddNote:a,text:l,setText:u,notes:f,setNotes:x,noteBackgroundColor:p,setNoteBackgroundColor:v,textColor:C,setTextColor:S,font:L,setFont:z,fontSize:I,setFontSize:A,title:q,setTitle:D,sort:_,setSort:P,currentNote:Y,setCurrentNote:R,preview:G,setPreview:K,edit:Q,setEdit:$,sideNavbar:ne,setSideNavbar:ce,themes:se[0],setThemes:se[1]};return Object(h.jsx)(g.Provider,{value:ae,children:t})};n(47);function C(){var e=y().setAddNote,t=Object(c.useState)(!0),n=Object(d.a)(t,2),o=n[0],s=n[1];return Object(h.jsxs)(h.Fragment,{children:[!o&&Object(h.jsx)("div",{className:"offline",children:Object(h.jsxs)("div",{children:[Object(h.jsx)("p",{children:"Check your internet connection and try again."}),Object(h.jsx)("button",{onClick:function(){return s(!0)},children:"Close"})]})}),Object(h.jsxs)("span",{className:"addNotesBtn",onClick:function(){navigator.onLine&&e(!0),!1===navigator.onLine&&s(!1)},children:[Object(h.jsx)("div",{}),Object(h.jsx)("div",{})]})]})}var S=n(22);n(29),n(48);function k(e){e.Font;var t=Object(c.useRef)(),n=Object(c.useState)(!1),o=Object(d.a)(n,2),s=o[0],a=o[1],r=y(),i=r.font,l=r.setFont,u=function(e){t.current.contains(e.target)||a(!1)};return Object(c.useEffect)((function(){return s?document.addEventListener("mousedown",u):document.removeEventListener("mousedown",u),function(){document.removeEventListener("mousedown",u)}}),[s]),Object(h.jsxs)("div",{style:{zIndex:"".concat(s?"4":"")},ref:t,className:"fontSelect",onClick:function(){return a(!s)},children:[Object(h.jsx)("div",{className:"title",children:"Font"}),Object(h.jsx)("div",{className:"selectDefault",style:{fontFamily:"".concat(i)},children:i}),Object(h.jsx)("div",{className:"fontCon",style:{height:"".concat(s?"250px":""),opacity:"".concat(s?"1":""),pointerEvents:"".concat(s?"all":"")},children:["Sans-serif","Cursive","Fantasy","Pattaya","Monospace"].map((function(e){return Object(h.jsxs)("div",{className:"fontOption",style:{},children:[Object(h.jsx)("input",{type:"radio",name:"font",value:e,onChange:function(e){return l(e.target.value)}},e),Object(h.jsx)("div",{className:e,style:{fontFamily:"".concat(e)},children:e})]},e)}))})]})}n(49);function w(){var e=Object(c.useRef)(),t=y(),n=t.fontSize,o=t.setFontSize,s=Object(c.useState)(!1),a=Object(d.a)(s,2),r=a[0],i=a[1],l=function(t){e.current.contains(t.target)||i(!1)};return Object(c.useEffect)((function(){return r?document.addEventListener("mousedown",l):document.removeEventListener("mousedown",l),function(){document.removeEventListener("mousedown",l)}}),[r]),Object(h.jsxs)("div",{ref:e,className:"fontSizeSelect",onClick:function(){return i(!r)},children:[Object(h.jsx)("div",{className:"fontSizeSelectDefault",style:{fontSize:"".concat(n,"px")},children:n}),Object(h.jsx)("div",{className:"fontSizeCon",style:{height:"".concat(r?"210px":""),opacity:"".concat(r?"1":""),pointerEvents:"".concat(r?"all":"")},children:[15,25,35,45].map((function(e){return Object(h.jsxs)("div",{className:"fontSizeOption",style:{},children:[Object(h.jsx)("input",{type:"radio",name:"fontSize",value:e,onChange:function(e){return o(e.target.value)}},e),Object(h.jsx)("div",{className:e,style:{fontSize:"".concat(e,"px")},children:e})]},e)}))})]})}n(50);function L(e){var t=e.color,n=e.setColor,o=e.title,s=e.paddingT,a=e.paddingB,r=e.align_1,i=e.align_2,l=e.colors,u=Object(c.useRef)(),j=Object(c.useState)(!1),b=Object(d.a)(j,2),f=b[0],x=b[1],O=Object(c.useState)(3),m=Object(d.a)(O,2),p=m[0],v=m[1],g=function(e){u.current.contains(e.target)||x(!1)};return Object(c.useEffect)((function(){return f?document.addEventListener("mousedown",g):document.removeEventListener("mousedown",g),function(){document.removeEventListener("mousedown",g)}}),[f]),Object(c.useEffect)((function(){f?v(6):setTimeout((function(){v(1)}),300)}),[f]),Object(h.jsx)("div",{ref:u,className:"selectCon",style:{paddingTop:"".concat(s),paddingBottom:"".concat(a),top:"".concat(r),bottom:"".concat(i),zIndex:"".concat(p)},children:Object(h.jsxs)("div",{className:"select",style:{width:"".concat(f?"95vw":""),height:"".concat(f?"80px":""),borderRadius:"".concat(f?"15px":"")},onClick:function(){x(!f)},children:[Object(h.jsx)("p",{children:o}),Object(h.jsx)("div",{className:"selected",style:{pointerEvents:"".concat(f?"none":""),opacity:"".concat(f?"0":""),background:"".concat(t)},children:Object(h.jsx)("div",{id:"tick-mark"})}),Object(h.jsxs)("div",{className:"colorInput optionCon",style:{width:"".concat(f?"100%":""),opacity:"".concat(f?"1":"")},children:[l.map((function(e){return Object(h.jsxs)("div",{className:"colorContainer option",style:{pointerEvents:"".concat(f?"all":""),margin:"".concat(f?"4%":"")},children:[Object(h.jsx)("div",{className:e,style:{background:"".concat(e)}}),Object(h.jsx)("input",{type:"radio",name:"color",value:e,onChange:function(e){return n(e.target.value)}},e)]},e)})),Object(h.jsxs)("div",{className:"colorContainer option",style:{pointerEvents:"".concat(f?"all":""),margin:"".concat(f?"4%":"")},children:[Object(h.jsx)("div",{}),Object(h.jsx)("input",{type:"color",value:t,onChange:function(e){return n(e.target.value)}})]})]})]})})}var z=n(65);function T(){var e=y(),t=e.setAddNote,n=e.text,o=e.setText,s=e.noteBackgroundColor,a=e.setNoteBackgroundColor,r=e.textColor,i=e.setTextColor,l=e.font,u=e.setFont,j=e.fontSize,b=e.setFontSize,f=e.title,x=e.setTitle,m=Object(c.useState)(!1),v=Object(d.a)(m,2),g=(v[0],v[1]),N=Object(c.useState)(!1),C=Object(d.a)(N,2),T=C[0],B=C[1],I=Object(c.useState)(!1),A=Object(d.a)(I,2),E=A[0],F=A[1],q=Object(c.useState)(!0),D=Object(d.a)(q,2),M=D[0],W=D[1],_=p().currentUser,P=Object(z.a)();return Object(h.jsxs)("div",{className:"formContainer",children:[E&&Object(h.jsxs)("div",{className:"loading",children:[Object(h.jsx)("svg",{className:"svgLoad2",height:"100",width:"100",children:Object(h.jsx)("circle",{cx:"50",cy:"50",r:"40",strokeLinecap:"round",strokeWidth:"10",fill:"none"})}),Object(h.jsx)("svg",{className:"svgLoad1",height:"100",width:"100",children:Object(h.jsx)("circle",{cx:"50",cy:"50",r:"40",stroke:"#fff",strokeLinecap:"round",strokeWidth:"10",fill:"none"})})]}),!M&&Object(h.jsx)("div",{className:"offline",children:Object(h.jsxs)("div",{children:[Object(h.jsx)("p",{children:"Check your internet connection and try again."}),Object(h.jsx)("button",{onClick:function(){return W(!0)},children:"Close"})]})}),Object(h.jsxs)("div",{className:"navInput",children:[Object(h.jsx)("button",{className:"backInput",onClick:function(){g(!0),document.querySelector(".formContainer").classList.add("close"),setTimeout((function(){t(!1),g(!1)}),300)},children:Object(h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 119.57 219.15",style:{fill:"none",stroke:"#fff",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"23px",width:"37px",height:"37px",overflow:"visible"},children:Object(h.jsx)("g",{id:"Layer_2","data-name":"Layer 2",children:Object(h.jsxs)("g",{id:"Layer_1-2","data-name":"Layer 1",children:[Object(h.jsx)("line",{className:"cls-1",x1:"10",y1:"109.57",x2:"109.57",y2:"10"}),Object(h.jsx)("line",{className:"cls-1",x1:"10",y1:"109.57",x2:"109.57",y2:"209.15"})]})})})}),Object(h.jsx)("h1",{children:"Add Note"})]}),Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),navigator.onLine&&(console.log("online"),F(!0),function(){var e=new Date,c="".concat(e.getDate()," ").concat(["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][e.getMonth()]," ").concat(e.getFullYear());O.users.doc(_.uid).get().then((function(e){if(e.exists){console.log("geting data");var d=e.data().note;console.log("setData"),d=[].concat(Object(S.a)(d),[{title:f,note:n,backgroundColor:s,textColor:r,font:l,fontSize:j,noteId:P,date:c}]),console.log("updated data"),O.users.doc(_.uid).update({note:d}).then((function(e){console.log("updated note at server"),o(""),x(""),i("#000000"),u("Sans-serif"),b("25"),a("#ffffff"),F(!1),t(!1)})),console.log("updated server data")}}))}()),!1===navigator.onLine&&(W(!1),console.log("offline"))},children:[Object(h.jsxs)("div",{className:"inputCon",children:[Object(h.jsx)("input",{className:"titleInput",type:"text",value:f,onChange:function(e){return x(e.target.value)},required:!0,placeholder:"Title...",maxLength:"15",style:{background:"".concat(s),color:"".concat(r),transition:"all 0.35s",fontFamily:"".concat(l)}}),Object(h.jsxs)("div",{className:"chaLimit",children:[f.length,"/15"]})]}),Object(h.jsxs)("div",{className:"textareaCon",children:[Object(h.jsx)("textarea",{type:"text",value:n,onChange:function(e){return o(e.target.value)},required:!0,placeholder:"Note...",maxLength:"1000",style:{background:"".concat(s),color:"".concat(r),transition:"all 0.35s",fontFamily:"".concat(l),fontSize:"".concat(j,"px")}}),Object(h.jsxs)("div",{className:"chaLimit",children:[n.length,"/1000"]})]}),Object(h.jsxs)("div",{className:"selectContainer",children:[Object(h.jsx)(L,{title:"Background",paddingT:"0px",paddingB:"0px",align_1:"0",color:s,setColor:a,colors:["#ffffff","#f2cdaf","#f9e2cf","#fcd9dd","#b6dee7"]}),Object(h.jsx)(L,{title:"Text Color",paddingT:"10px",paddingB:"0px",align_2:"0",color:r,setColor:i,colors:["#000000","#ffffff","#ff0000","#9500ff","#ff00ff"]}),Object(h.jsx)(k,{}),Object(h.jsx)(w,{})]}),Object(h.jsx)("button",{type:"submit",className:"save",onClick:function(e){B(!T);var t=e.target.className,n=e.clientX-e.target.offsetLeft,c=e.clientY-e.target.offsetTop,o=document.createElement("span");o.style.left=n+"px",o.style.top=c+"px",document.querySelector(".".concat(t)).appendChild(o),setTimeout((function(){o.remove()}),500)},children:"Save"})]})]})}n(30),n(51);function B(e){var t=e.note,n=p().currentUser;return Object(c.useEffect)((function(){n&&O.users.doc(n.uid)}),[]),Object(h.jsx)("div",{className:"previewCon",children:Object(h.jsxs)("div",{className:"preview",style:{background:"".concat(t.backgroundColor),color:"".concat(t.textColor),fontFamily:"".concat(t.font)},children:[Object(h.jsx)("h1",{children:t.title}),Object(h.jsx)("div",{style:{fontSize:"".concat(t.fontSize,"px")},children:t.note}),Object(h.jsx)("p",{children:t.date})]})})}function I(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("svg",{className:"svgLoad2",height:"100",width:"100",children:Object(h.jsx)("circle",{cx:"50",cy:"50",r:"40",strokeLinecap:"round",strokeWidth:"10",fill:"none"})}),Object(h.jsx)("svg",{className:"svgLoad1",height:"100",width:"100",children:Object(h.jsx)("circle",{cx:"50",cy:"50",r:"40",stroke:"#fff",strokeLinecap:"round",strokeWidth:"10",fill:"none"})})]})}function A(){return Object(h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 119.57 219.15",style:{fill:"none",stroke:"#fff",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"23px",width:"37px",height:"37px",overflow:"visible"},children:Object(h.jsx)("g",{id:"Layer_2","data-name":"Layer 2",children:Object(h.jsxs)("g",{id:"Layer_1-2","data-name":"Layer 1",children:[Object(h.jsx)("line",{className:"cls-1",x1:"10",y1:"109.57",x2:"109.57",y2:"10"}),Object(h.jsx)("line",{className:"cls-1",x1:"10",y1:"109.57",x2:"109.57",y2:"209.15"})]})})})}function E(){var e=y(),t=e.setAddNote,n=e.text,o=e.setText,s=e.noteBackgroundColor,a=e.setNoteBackgroundColor,r=e.textColor,u=e.setTextColor,j=e.font,b=e.setFont,f=e.fontSize,x=e.setFontSize,m=e.title,v=e.setTitle,g=e.currentNote,N=e.setPreview,C=e.setEdit,T=Object(c.useState)(!1),B=Object(d.a)(T,2),E=(B[0],B[1]),F=Object(c.useState)(!1),q=Object(d.a)(F,2),D=q[0],M=q[1],W=Object(c.useState)(!1),_=Object(d.a)(W,2),P=_[0],J=_[1],U=Object(c.useState)(!0),Y=Object(d.a)(U,2),R=Y[0],X=Y[1],V=p().currentUser,G=Object(z.a)();Object(c.useEffect)((function(){v(g.title),o(g.note),u(g.textColor),a(g.backgroundColor),b(g.font),x(g.fontSize)}),[]);var K=function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,document.querySelector(".formContainer").classList.add("close");case 2:setTimeout((function(){o(""),v(""),u("#000000"),b("Sans-serif"),x("25"),a("#ffffff"),N(!1),E(!0),t(!1),E(!1),C(!1)}),300);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"formContainer",children:[P&&Object(h.jsx)("div",{className:"loading",children:Object(h.jsx)(I,{})}),!R&&Object(h.jsx)("div",{className:"offline",children:Object(h.jsxs)("div",{children:[Object(h.jsx)("p",{children:"Check your internet connection and try again."}),Object(h.jsx)("button",{onClick:function(){return X(!0)},children:"Close"})]})}),Object(h.jsxs)("div",{className:"navInput",children:[Object(h.jsx)("button",{className:"backInput",onClick:K,children:Object(h.jsx)(A,{})}),Object(h.jsx)("h1",{children:"Edit Note"})]}),Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),navigator.onLine&&(console.log("online"),J(!0),function(){var e=new Date,c="".concat(e.getDate()," ").concat(["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][e.getMonth()]," ").concat(e.getFullYear());O.users.doc(V.uid).get().then((function(e){if(e.exists){console.log("geting data");var i=e.data().note,l=-1;i.map((function(e){l+=1,e.noteId!==g.noteId||i.splice(l,1)})),console.log("setData"),i=[].concat(Object(S.a)(i),[{title:m,note:n,backgroundColor:s,textColor:r,font:j,fontSize:f,noteId:G,date:c}]),console.log("updated data"),O.users.doc(V.uid).update({note:i}).then((function(e){console.log("updated note at server"),o(""),v(""),u("#000000"),b("Sans-serif"),x("25"),a("#ffffff"),J(!1),t(!1),N(!1),C(!1)})),console.log("updated server data")}}))}()),!1===navigator.onLine&&(X(!1),console.log("offline"))},children:[Object(h.jsxs)("div",{className:"inputCon",children:[Object(h.jsx)("input",{className:"titleInput",type:"text",value:m,onChange:function(e){return v(e.target.value)},required:!0,placeholder:"Title...",maxLength:"15",style:{background:"".concat(s),color:"".concat(r),transition:"all 0.35s",fontFamily:"".concat(j)}}),Object(h.jsxs)("div",{className:"chaLimit",children:[m.length,"/15"]})]}),Object(h.jsxs)("div",{className:"textareaCon",children:[Object(h.jsx)("textarea",{type:"text",value:n,onChange:function(e){return o(e.target.value)},required:!0,placeholder:"Note...",maxLength:"1000",style:{background:"".concat(s),color:"".concat(r),transition:"all 0.35s",fontFamily:"".concat(j),fontSize:"".concat(f,"px")}}),Object(h.jsxs)("div",{className:"chaLimit",children:[n.length,"/1000"]})]}),Object(h.jsxs)("div",{className:"selectContainer",children:[Object(h.jsx)(L,{title:"Background",paddingT:"0px",paddingB:"0px",align_1:"0",color:s,setColor:a,colors:["#ffffff","#f2cdaf","#f9e2cf","#fcd9dd","#b6dee7"]}),Object(h.jsx)(L,{title:"Text Color",paddingT:"10px",paddingB:"0px",align_2:"0",color:r,setColor:u,colors:["#000000","#ffffff","#ff0000","#9500ff","#ff00ff"]}),Object(h.jsx)(k,{}),Object(h.jsx)(w,{})]}),Object(h.jsx)("button",{type:"submit",className:"save",onClick:function(e){M(!D);var t=e.target.className,n=e.clientX-e.target.offsetLeft,c=e.clientY-e.target.offsetTop,o=document.createElement("span");o.style.left=n+"px",o.style.top=c+"px",document.querySelector(".".concat(t)).appendChild(o),setTimeout((function(){o.remove()}),500)},children:"Save"})]})]})}function F(){return Object(h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 208.52 219.6",style:{fill:"none",stroke:"#fff",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"18px",width:"35px",height:"35px",overflow:"visible"},children:Object(h.jsx)("g",{id:"Layer_2","data-name":"Layer 2",children:Object(h.jsxs)("g",{id:"Layer_1-2","data-name":"Layer 1",children:[Object(h.jsx)("line",{className:"cls-1",x1:"10",y1:"43.8",x2:"198.52",y2:"43.8"}),Object(h.jsx)("line",{className:"cls-1",x1:"70.94",y1:"10",x2:"70.94",y2:"34.18"}),Object(h.jsx)("line",{className:"cls-1",x1:"70.94",y1:"10",x2:"137.61",y2:"10.35"}),Object(h.jsx)("line",{className:"cls-1",x1:"137.61",y1:"10.35",x2:"137.61",y2:"36.9"}),Object(h.jsx)("line",{className:"cls-1",x1:"170.94",y1:"43.8",x2:"170.94",y2:"209.6"}),Object(h.jsx)("line",{className:"cls-1",x1:"37.61",y1:"45.04",x2:"37.61",y2:"209.6"}),Object(h.jsx)("line",{className:"cls-1",x1:"37.61",y1:"209.6",x2:"170.94",y2:"209.6"}),Object(h.jsx)("line",{className:"cls-1",x1:"70.64",y1:"76.73",x2:"71.6",y2:"176.27"}),Object(h.jsx)("line",{className:"cls-1",x1:"104.53",y1:"76.73",x2:"104.53",y2:"176.05"}),Object(h.jsx)("line",{className:"cls-1",x1:"137.4",y1:"76.27",x2:"137.61",y2:"176.27"})]})})})}function q(){return Object(h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 120.32 120.15",style:{fill:"#fff",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"18px",width:"35px",height:"35px",overflow:"visible"},children:Object(h.jsx)("g",{id:"Layer_2","data-name":"Layer 2",children:Object(h.jsxs)("g",{id:"Layer_1-2","data-name":"Layer 1",children:[Object(h.jsx)("rect",{x:"0.49",y:"48.35",width:"99.86",height:"42.76",transform:"translate(-34.54 56.08) rotate(-45)"}),Object(h.jsx)("rect",{x:"0.16",y:"89.94",width:"30.14",height:"30.14",transform:"translate(-89.78 120.25) rotate(-90)"}),Object(h.jsx)("path",{d:"M89.31-.59h16.6A3.64,3.64,0,0,1,109.55,3V38.81A3.22,3.22,0,0,1,106.33,42h-17a0,0,0,0,1,0,0V-.59A0,0,0,0,1,89.31-.59Z",transform:"translate(14.47 76.38) rotate(-45)"})]})})})}var D=n(6);n(52);function M(){var e=Object(c.useState)(!1),t=Object(d.a)(e,2),n=t[0],o=t[1],s=Object(c.useState)(""),a=Object(d.a)(s,2),r=(a[0],a[1]),u=Object(c.useState)(!1),j=Object(d.a)(u,2),f=j[0],x=j[1],O=Object(D.g)(),m=p().logOut,v=y(),g=(v.sideNavbar,v.setSideNavbar),N=v.setThemes,C=function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:document.querySelector(".delCon").classList.remove("openAnime"),document.querySelector(".delCon").classList.add("cancelAnime"),setTimeout((function(){x(!1);try{r(""),o(!0),m(),b.onAuthStateChanged((function(e){e||O.push("/Notes/login")}))}catch(e){r("Failed to logOUt")}o(!1)}),300);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(!0);case 2:document.querySelector(".delCon").classList.add("openAnime");case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,document.querySelector(".delCon").classList.remove("openAnime");case 2:document.querySelector(".delCon").classList.add("cancelAnime"),setTimeout((function(){x(!1)}),300);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"sideNav",children:[f&&Object(h.jsx)("div",{className:"delCon",children:Object(h.jsxs)("div",{className:"del",children:[Object(h.jsx)("h1",{children:"Are you sure ?"}),Object(h.jsxs)("div",{children:[Object(h.jsx)("button",{className:"cancelDel",onClick:k,children:"Cancel"}),Object(h.jsx)("button",{className:"deleteDel",onClick:C,children:"Log Out"})]})]})}),Object(h.jsx)("button",{className:"navClose",onClick:function(){document.querySelector(".sideNav").classList.add("navBarOut"),setTimeout((function(){g(!1)}),400)},children:Object(h.jsxs)("div",{className:"burger",children:[Object(h.jsx)("div",{}),Object(h.jsx)("div",{}),Object(h.jsx)("div",{})]})}),Object(h.jsxs)("div",{className:"optionCon",children:[Object(h.jsx)("button",{className:"themes",onClick:function(){return N(!0)},children:"Themes"}),Object(h.jsx)("button",{className:"about",children:"About"}),Object(h.jsx)("button",{className:"contact",children:"Contact"}),Object(h.jsx)("button",{disabled:n,className:"logOut",onClick:S,children:"Log Out"})]})]})}n(60),n(61);function W(e){var t=e.theme,n=e.backgroundColor,c=e.background,o=e.color,s=e.boxShadow;return Object(h.jsxs)("div",{className:"themeCon",style:{background:n,color:o},children:[Object(h.jsx)("h1",{style:{background:c,boxShadow:"6px 6px 5px ".concat(s,",0 10px 5px rgba(0,0,0,0)")},children:t}),Object(h.jsx)("div",{style:{background:c,boxShadow:"6px 6px 5px ".concat(s,",0 10px 5px rgba(0,0,0,0)")},className:"theme1"})]})}function _(){var e=y().setThemes;return Object(h.jsxs)("div",{className:"themesCon",children:[Object(h.jsxs)("div",{className:"navInput",children:[Object(h.jsx)("button",{className:"backInput",onClick:function(){e(!1)},children:Object(h.jsx)(A,{})}),Object(h.jsx)("h1",{children:"Themes"})]}),Object(h.jsxs)("div",{className:"theme",children:[Object(h.jsx)(W,{theme:"Notes",backgroundColor:"#ececec",background:"white",color:"blace",boxShadow:"#bbb"}),Object(h.jsx)(W,{theme:"Notes",backgroundColor:"#000",background:"#232323",color:"white",boxShadow:"rgba(0,0,0,0)"}),Object(h.jsx)(W,{theme:"Notes",backgroundColor:"#44318d",background:"#6a50d0",color:"white",boxShadow:"rgba(0,0,0,0)"}),Object(h.jsx)(W,{theme:"Notes",backgroundColor:"#3aafa9",background:"#47d4cd",color:"white",boxShadow:"rgba(0,0,0,0)"}),Object(h.jsx)(W,{theme:"Notes",backgroundColor:"#d83f87",background:"#ef5aa0",color:"white",boxShadow:"rgba(0,0,0,0)"})]})]})}function P(){var e=Object(c.useState)(!0),t=Object(d.a)(e,2),n=t[0],o=t[1],s=Object(c.useState)(),a=Object(d.a)(s,2),r=a[0],u=a[1],j=Object(c.useState)({}),b=Object(d.a)(j,2),f=b[0],x=b[1],m=Object(c.useState)(!1),v=Object(d.a)(m,2),g=v[0],N=v[1],S=Object(c.useState)(!1),k=Object(d.a)(S,2),w=k[0],L=k[1],z=p().currentUser,D=y(),W=D.addNote,P=D.setNotes,J=D.sort,U=(D.setSort,D.setCurrentNote),Y=D.preview,R=D.setPreview,X=D.edit,V=D.setEdit,G=D.sideNavbar,K=D.setSideNavbar,Z=D.themes;D.setThemes;if(z)O.users.doc(z.uid).get().then((function(e){e.exists||O.users.doc(z.uid).set({note:[],uid:z.uid})}));Object(c.useEffect)((function(){O.users.doc(z.uid).get().then((function(e){var t=e.data().note;t=function(e){for(var t=[],n=e.length-1;n>=0;n--)t.push(e[n]);return t}(t),u(t),P(t),o(!1)}))}),[W,X,g]);var H=function(e){var t=e.target.id,n=document.getElementById("".concat(t)).dataset;x({note:n.note,title:n.title,backgroundColor:n.backgroundcolor,textColor:n.textcolor,font:n.font,fontSize:n.fontsize,date:n.date,noteId:n.noteid}),U({note:n.note,title:n.title,backgroundColor:n.backgroundcolor,textColor:n.textcolor,font:n.font,fontSize:n.fontsize,date:n.date,noteId:n.noteid}),R(!0)},Q=function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L(!0);case 2:document.querySelector(".delCon").classList.add("openAnime");case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),$=function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,document.querySelector(".delCon").classList.remove("openAnime");case 2:document.querySelector(".delCon").classList.add("cancelAnime"),setTimeout((function(){L(!1)}),300);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ee=!1,te=function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:ee=!ee,K(!G);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){ne()}),[G]);var ne=function(){var e=document.querySelector(".burger").children;G?(e.item(0).classList.remove("closeBurger1"),e.item(1).classList.remove("closeBurger2"),e.item(2).classList.remove("closeBurger3"),e.item(0).offsetWidth,e.item(1).offsetWidth,e.item(2).offsetWidth,e.item(0).classList.add("openBurger1"),e.item(1).classList.add("openBurger2"),e.item(2).classList.add("openBurger3")):G||(e.item(0).classList.remove("openBurger1"),e.item(1).classList.remove("openBurger2"),e.item(2).classList.remove("openBurger3"),e.item(0).offsetWidth,e.item(1).offsetWidth,e.item(2).offsetWidth,e.item(0).classList.add("closeBurger1"),e.item(1).classList.add("closeBurger2"),e.item(2).classList.add("closeBurger3"))};return Object(h.jsxs)(h.Fragment,{children:[G&&Object(h.jsx)(M,{}),Z&&Object(h.jsx)(_,{}),Y&&!X&&Object(h.jsxs)("div",{className:"preCon",children:[Object(h.jsxs)("div",{className:"navPreview",children:[Object(h.jsx)("button",{className:"back",onClick:function(){return document.querySelector(".preCon").classList.add("back1"),void setTimeout((function(){R(!1)}),400)},children:Object(h.jsx)(A,{})}),Object(h.jsx)("h1",{children:"Note"}),Object(h.jsx)("button",{className:"edit",onClick:function(){return V(!0)},children:Object(h.jsx)(q,{})}),Object(h.jsx)("button",{className:"delete",onClick:Q,children:Object(h.jsx)(F,{})})]}),w&&Object(h.jsx)("div",{className:"delCon",children:Object(h.jsxs)("div",{className:"del",children:[Object(h.jsx)("h1",{children:"Are you sure to delete?"}),Object(h.jsxs)("div",{children:[Object(h.jsx)("button",{className:"cancelDel",onClick:$,children:"Cancel"}),Object(h.jsx)("button",{className:"deleteDel",id:"".concat(f.noteId),onClick:function(e){!function(e){var t=e.target.className,n=e.clientX-e.target.offsetLeft,c=e.clientY-e.target.offsetTop,o=document.createElement("span");o.style.left=n+"px",o.style.top=c+"px",document.querySelector(".".concat(t)).appendChild(o),setTimeout((function(){o.remove()}),500)}(e),document.querySelector(".delCon").classList.remove("openAnime"),document.querySelector(".delCon").classList.add("cancelAnime"),setTimeout((function(){L(!1)}),300),N(!0);var t=e.target.id;console.log(e.target.id),O.users.doc(z.uid).get().then((function(e){if(e.exists){console.log("geting data");var n=e.data().note,c=-1;n.map((function(e){c+=1,e.noteId!==t||n.splice(c,1)})),O.users.doc(z.uid).update({note:n}),console.log("deleted"),N(!1),R(!1)}}))},children:"Delete"})]})]})}),g&&Object(h.jsx)("div",{className:"loading",children:Object(h.jsx)(I,{})}),Object(h.jsx)(B,{note:f})]}),X&&Object(h.jsx)("div",{className:"preCon",children:Object(h.jsx)(E,{})}),W&&!Y&&Object(h.jsx)(T,{}),!W&&!Y&&Object(h.jsxs)("div",{className:"notesContainer",children:[Object(h.jsxs)("h1",{className:"logo",children:["Notes",Object(h.jsx)("button",{onClick:te,children:Object(h.jsxs)("div",{className:"burger",children:[Object(h.jsx)("div",{}),Object(h.jsx)("div",{}),Object(h.jsx)("div",{})]})})]}),n&&Object(h.jsx)("div",{className:"loading",children:Object(h.jsx)(I,{})}),Object(h.jsx)("div",{className:"noteCon",children:r&&r.map((function(e){return Object(h.jsxs)("div",{className:"notes",style:{background:"".concat(e.backgroundColor),color:"".concat(e.textColor),fontFamily:"".concat(e.font),fontSize:"".concat(e.fontSize,"px")},onClick:H,id:"a".concat(e.noteId),"data-note":e.note,"data-title":e.title,"data-date":e.date,"data-backgroundcolor":e.backgroundColor,"data-textcolor":e.textColor,"data-font":e.font,"data-fontsize":e.fontSize,"data-noteid":e.noteId,children:[Object(h.jsx)("h1",{children:e.title}),Object(h.jsx)("div",{style:{padding:"".concat("title"===J?"0px":"10px")},children:"grid"===J&&(e.note.length>460&&"15"===e.fontSize?Object(h.jsxs)("p",{children:[e.note.slice(0,461),Object(h.jsx)("a",{style:{fontSize:"".concat(e.fontSize,"px")},children:"..."})]}):e.note.length>250&&"25"===e.fontSize?Object(h.jsxs)("p",{children:[e.note.slice(0,240),Object(h.jsx)("a",{style:{fontSize:"".concat(e.fontSize,"px")},children:"..."})]}):e.note.length>115&&"35"===e.fontSize?Object(h.jsxs)("p",{children:[e.note.slice(0,120),Object(h.jsx)("a",{style:{fontSize:"".concat(e.fontSize,"px")},children:"..."})]}):e.note.length>44&&"45"===e.fontSize?Object(h.jsxs)("p",{children:[e.note.slice(0,45),Object(h.jsx)("a",{style:{fontSize:"".concat(e.fontSize,"px")},children:"..."})]}):e.note)}),Object(h.jsx)("p",{className:"date",children:e.date})]},e.noteId)}))}),Object(h.jsx)(C,{})]})]})}var J=n(33),U=(n(62),n.p+"static/media/gIcon.f1089448.svg");n.p;function Y(){var e=Object(c.useState)(""),t=Object(d.a)(e,2),n=(t[0],t[1]),o=Object(c.useState)(!1),s=Object(d.a)(o,2),a=s[0],r=s[1],u=Object(D.g)(),j=p().logIn;b.onAuthStateChanged((function(e){e&&u.push("/Notes")}));var f=function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n(""),r(!0),e.next=5,j();case 5:b.onAuthStateChanged((function(e){e&&u.push("/Notes")})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),n("Failed to Log in");case 11:r(!1);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"loginCon",children:[Object(h.jsx)("div",{className:"bgImg"}),Object(h.jsx)("div",{className:"navPreview",children:Object(h.jsx)("h1",{children:"Notes"})}),Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"Log In"}),Object(h.jsx)("p",{}),Object(h.jsxs)("button",{disabled:a,onClick:f,children:[Object(h.jsx)("img",{src:U}),"Continue with Google"]})]})]})}var R=n(24),X=n(34);function V(e){var t=e.component,n=Object(X.a)(e,["component"]),c=p().currentUser;return Object(h.jsx)(D.b,Object(R.a)(Object(R.a)({},n),{},{render:function(e){return c?Object(h.jsx)(t,Object(R.a)({},e)):Object(h.jsx)(D.a,{to:"/Notes/login"})}}))}var G=function(){return Object(h.jsx)(v,{children:Object(h.jsx)(N,{children:Object(h.jsx)(J.a,{children:Object(h.jsxs)(D.d,{children:[Object(h.jsx)(V,{exact:!0,path:"/Notes",component:P}),Object(h.jsx)(D.b,{path:"/Notes/login",component:Y})]})})})})};a.a.render(Object(h.jsx)(o.a.StrictMode,{children:Object(h.jsx)(G,{})}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.a4ab0a0e.chunk.js.map