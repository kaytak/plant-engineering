"use strict";(self.webpackChunkengineering_com=self.webpackChunkengineering_com||[]).push([[163],{163:(B,w,f)=>{f.r(w),f.d(w,{default:()=>N});var y=f(861);const A=function(){var v=(0,y.Z)(function*(t){let o;const n=t.configObj.pref("lang");try{o=yield function(r){switch(r){case"./locale/en.js":return Promise.resolve().then(function(){return C});case"./locale/fr.js":return Promise.resolve().then(function(){return x});case"./locale/zh-CN.js":return Promise.resolve().then(function(){return M});default:return new Promise(function(l,c){("function"==typeof queueMicrotask?queueMicrotask:setTimeout)(c.bind(null,new Error("Unknown variable dynamic import: "+r)))})}}("./locale/".concat(n,".js"))}catch(b){console.warn("Missing translation (".concat(n,") for ").concat("grid"," - using 'en'")),o=yield Promise.resolve().then(function(){return C})}t.i18next.addResourceBundle(n,"grid",o.default)});return function(o){return v.apply(this,arguments)}}();var N={name:"grid",init(){var v=this;return(0,y.Z)(function*(){const t=v;yield A(t);const{svgCanvas:o}=t,{$id:n,$click:b,NS:r}=o,l=n("svgcanvas").ownerDocument,{assignAttributes:c}=o,d=document.createElement("canvas"),P=n("canvasBackground"),U=o.getTypeMap(),V=[.01,.1,1,10,100,1e3];let a=t.configObj.curConfig.showGrid||!1;d.style.display="none",t.$svgEditor.appendChild(d);const G=l.createElementNS(r.SVG,"svg");c(G,{id:"canvasGrid",width:"100%",height:"100%",x:0,y:0,overflow:"visible",display:"none"}),P.appendChild(G);const k=l.createElementNS(r.SVG,"defs"),_=l.createElementNS(r.SVG,"pattern");c(_,{id:"gridpattern",patternUnits:"userSpaceOnUse",x:0,y:0,width:100,height:100});const s=l.createElementNS(r.SVG,"image");c(s,{x:0,y:0,width:100,height:100}),_.append(s),k.append(_),n("canvasGrid").appendChild(k);const T=l.createElementNS(r.SVG,"rect");c(T,{width:"100%",height:"100%",x:0,y:0,"stroke-width":0,stroke:"none",fill:"url(#gridpattern)",style:"pointer-events: none; display:visible;"}),n("canvasGrid").appendChild(T);const E=u=>{const h=U[t.configObj.curConfig.baseUnit]*u,z=100/h;let j=1;V.some(g=>(j=g,z<=g));const i=j*h;d.width=i,d.height=i;const e=d.getContext("2d"),p=.5,D=i/10;e.globalAlpha=.2,e.strokeStyle=t.configObj.curConfig.gridColor;for(let g=1;g<10;g++){const m=Math.round(D*g)+.5,O=0;e.moveTo(m,i),e.lineTo(m,O),e.moveTo(i,m),e.lineTo(O,m)}e.stroke(),e.beginPath(),e.globalAlpha=.5,e.moveTo(p,i),e.lineTo(p,0),e.moveTo(i,p),e.lineTo(0,p),e.stroke();const R=d.toDataURL("image/png");s.setAttribute("width",i),s.setAttribute("height",i),s.parentNode.setAttribute("width",i),s.parentNode.setAttribute("height",i),o.setHref(s,R)},S=()=>{a&&E(o.getZoom()),n("canvasGrid").style.display=a?"block":"none",n("view_grid").pressed=a};return{name:t.i18next.t("".concat("grid",":name")),zoomChanged(u){a&&E(u)},callback(){const u=document.createElement("template"),h="".concat("grid",":buttons.0.title");u.innerHTML='\n          <se-button id="view_grid" title="'.concat(h,'" src="grid.svg"></se-button>\n        '),n("editor_panel").append(u.content.cloneNode(!0)),b(n("view_grid"),()=>{t.configObj.curConfig.showGrid=a=!a,S()}),a&&S()}}})()}},C=Object.freeze({__proto__:null,default:{name:"View Grid",buttons:[{title:"Show/Hide Grid"}]}}),x=Object.freeze({__proto__:null,default:{name:"Grille",buttons:[{title:"Afficher/Cacher Grille"}]}}),M=Object.freeze({__proto__:null,default:{name:"\u7f51\u683c\u89c6\u56fe",buttons:[{title:"\u663e\u793a/\u9690\u85cf\u7f51\u683c"}]}})}}]);