"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[927],{197:function(n,e,t){t.d(e,{Hg:function(){return u},P0:function(){return p},Qw:function(){return d},qF:function(){return s},yJ:function(){return l}});var r=t(861),a=t(757),c=t.n(a),i=t(388);i.Z.defaults.baseURL="https://api.themoviedb.org/3";var o="aa48b7303a91a9c7df7e1a4ff8af3e68",u=function(){var n=(0,r.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/trending/movie/day?api_key=".concat(o));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/search/movie?api_key=".concat(o,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(e,"?api_key=").concat(o,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(e,"/credits?api_key=").concat(o,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(e,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},927:function(n,e,t){t.r(e),t.d(e,{default:function(){return _}});var r,a,c,i,o,u,s,p=t(439),d=t(689),l=t(197),x=t(791),f=t(766),h=t(444),v=t(87),g=h.ZP.img(r||(r=(0,f.Z)(["\n  border-radius: 2px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n width: 200px;\n height: 300px;\n margin: 20px;\n"]))),w=h.ZP.div(a||(a=(0,f.Z)(["\ndisplay: flex;\n"]))),m=h.ZP.div(c||(c=(0,f.Z)(["\n\n"]))),Z=(0,h.ZP)(v.rU)(i||(i=(0,f.Z)(["\n  max-width: 100px;\n  text-align: center;\n  text-decoration: none;\n  color: white;\n  font-weight: 700;\n  background-color: #f118f5;\n  padding: 10px 20px;\n  border-radius: 20px;\n"]))),b=(0,h.ZP)(v.OL)(o||(o=(0,f.Z)(["\n  max-width: 80px;\n  text-align: center;\n  align-items: center;\n  text-decoration: none;\n  color: white;\n  font-weight: 400;\n  background-color: #f118f5;\n  padding: 5px 8px;\n  border-radius: 20px;\n  margin-left: 20px;\n"]))),j=h.ZP.ul(u||(u=(0,f.Z)(["\nlist-style: none;\n"]))),k=h.ZP.li(s||(s=(0,f.Z)(["\nmargin-top: 30px;\n"]))),y=t(184),_=function(){var n,e,t=(0,x.useState)({}),r=(0,p.Z)(t,2),a=r[0],c=r[1],i=(0,d.UO)().movieId,o=(0,x.useState)([]),u=(0,p.Z)(o,2),s=u[0],f=u[1],h=(0,d.TH)();(0,x.useEffect)((function(){(0,l.P0)(i).then((function(n){c(n);var e=[];n.genres.forEach((function(n){var t=n.name;return e.push(t)})),f(e)})).catch((function(n){return console.log(n)}))}),[i]);var v=new Date(a.release_date),_=null!==(n=null===(e=h.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/";return(0,y.jsxs)("div",{children:[(0,y.jsx)(b,{to:_,children:"\ud83e\udc78 Go back"}),(0,y.jsxs)(w,{children:[(0,y.jsx)(g,{src:"".concat("https://image.tmdb.org/t/p/w500").concat(a.poster_path),alt:a.title,width:"320"}),(0,y.jsxs)(m,{children:[(0,y.jsxs)("h2",{children:[a.title," (",v.getFullYear(),")"]}),(0,y.jsxs)("p",{children:["User score: ",a.vote_count," "]}),(0,y.jsx)("h3",{children:"Overview"}),(0,y.jsx)("p",{children:a.overview}),(0,y.jsx)("h4",{children:"Genres"}),(0,y.jsx)("p",{children:s.join(", ")})]})]}),(0,y.jsxs)(j,{children:[(0,y.jsx)("p",{children:"Additional information"}),(0,y.jsx)(k,{children:(0,y.jsx)(Z,{to:"cast",children:"Cast"})}),(0,y.jsx)(k,{children:(0,y.jsx)(Z,{to:"reviews",children:"Reviews"})})]}),(0,y.jsx)(x.Suspense,{fallback:(0,y.jsx)("h1",{children:"Movie Details to be appeared"}),children:(0,y.jsx)(d.j3,{})})]})}}}]);
//# sourceMappingURL=927.f151c8a5.chunk.js.map