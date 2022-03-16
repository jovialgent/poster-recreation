import{S as H,i as A,s as E,e as v,a as _,b as k,n as b,d as y,c as ye,f as x,g as X,h as l,j as T,o as xe,k as be,t as J,l as z,m as I,p as P,q as R,r as C,u as G}from"./vendor.e88a7166.js";const $e=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))e(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const p of o.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&e(p)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function e(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}};$e();function ie(n,t,s){const e=n.slice();return e[9]=t[s],e}function _e(n,t,s){const e=n.slice();return e[12]=t[s],e[14]=s,e}function pe(n){let t,s;return{c(){t=v("div"),_(t,"class","poster__circle svelte-1tjscwc"),_(t,"style",s=n[4](n[14]))},m(e,r){k(e,t,r)},p:b,d(e){e&&y(t)}}}function Le(n){let t;return{c(){t=v("span"),_(t,"class","poster__content__letter poster__content__letter__divider svelte-1tjscwc")},m(s,e){k(s,t,e)},p:b,d(s){s&&y(t)}}}function Te(n){let t,s=n[9]+"",e;return{c(){t=v("span"),e=J(s),_(t,"class","poster__content__letter poster__content__letter__content svelte-1tjscwc")},m(r,o){k(r,t,o),l(t,e)},p:b,d(r){r&&y(t)}}}function ve(n){let t;function s(o,p){return o[9]!==" "?Te:Le}let r=s(n)(n);return{c(){r.c(),t=ye()},m(o,p){r.m(o,p),k(o,t,p)},p(o,p){r.p(o,p)},d(o){r.d(o),o&&y(t)}}}function Me(n){let t,s,e,r,o,p,h,g=n[2],i=[];for(let a=0;a<g.length;a+=1)i[a]=pe(_e(n,g,a));let f=n[3],w=[];for(let a=0;a<f.length;a+=1)w[a]=ve(ie(n,f,a));return{c(){t=v("div"),s=v("section"),e=v("section");for(let a=0;a<i.length;a+=1)i[a].c();r=x(),o=v("h1");for(let a=0;a<w.length;a+=1)w[a].c();p=x(),h=v("p"),h.innerHTML=`This is inspired by a poster I found on designspiration. You can see the
        original <a class="poster__content__link svelte-1tjscwc" target="_blank" href="https://www.designspiration.com/save/2446036870567/">here</a>.`,_(o,"class","poster__content__title svelte-1tjscwc"),X(o,"top",n[1],!1),_(h,"class","poster__content__description svelte-1tjscwc"),_(e,"class","poster__container--content svelte-1tjscwc"),_(s,"class","poster__container--wrapper svelte-1tjscwc"),_(t,"class","poster svelte-1tjscwc")},m(a,m){k(a,t,m),l(t,s),l(s,e);for(let c=0;c<i.length;c+=1)i[c].m(e,null);l(e,r),l(e,o);for(let c=0;c<w.length;c+=1)w[c].m(o,null);n[5](o),l(e,p),l(e,h)},p(a,[m]){if(m&16){g=a[2];let c;for(c=0;c<g.length;c+=1){const u=_e(a,g,c);i[c]?i[c].p(u,m):(i[c]=pe(u),i[c].c(),i[c].m(e,r))}for(;c<i.length;c+=1)i[c].d(1);i.length=g.length}if(m&8){f=a[3];let c;for(c=0;c<f.length;c+=1){const u=ie(a,f,c);w[c]?w[c].p(u,m):(w[c]=ve(u),w[c].c(),w[c].m(o,null))}for(;c<w.length;c+=1)w[c].d(1);w.length=f.length}m&2&&X(o,"top",a[1],!1)},i:b,o:b,d(a){a&&y(t),T(i,a),T(w,a),n[5](null)}}}const ue=30;function He(n,t,s){let e=[...new Array(12)];const o=18*ue-ue,p=new URLSearchParams(window.location.search),h=p.has("title")?p.get("title"):"EXAMPLE";let g,i;const f=a=>{const m=o-a*40;return`width: ${m}px; height:${m}px; left:calc(50% - ${m/2}px); top:calc(50% - ${m/2}px);`};xe(()=>{s(1,i=`calc(50% - ${g.clientHeight/2}px)`)});function w(a){be[a?"unshift":"push"](()=>{g=a,s(0,g)})}return[g,i,e,h,f,w]}class Ae extends H{constructor(t){super();A(this,t,He,Me,E,{})}}function Ee(n,t,s){const e=n.slice();return e[1]=t[s],e[3]=s,e}function Ie(n){let t,s;return{c(){t=v("div"),t.innerHTML=`<div class="poster__shape__isolate svelte-1mftbk3"><div class="poster__shape__noise svelte-1mftbk3"></div> 
            <div class="poster__shape__overlay svelte-1mftbk3"></div></div>`,_(t,"class","poster__shape svelte-1mftbk3"),_(t,"id",s="poster-shape-"+(n[3]+1))},m(e,r){k(e,t,r)},d(e){e&&y(t)}}}function Pe(n){let t,s,e,r,o,p,h,g=n[0],i=[];for(let f=0;f<g.length;f+=1)i[f]=Ie(Ee(n,g,f));return{c(){t=v("div"),s=v("div"),e=v("div");for(let f=0;f<i.length;f+=1)i[f].c();r=x(),o=v("div"),o.innerHTML=`<p class="poster__text poster__text--name svelte-1mftbk3">George Petersen</p> 
        <p class="poster__text poster__text--name svelte-1mftbk3">Copy Poster</p> 
        <p class="poster__text poster__text--name svelte-1mftbk3"><a class="poster__text poster__text--name__link svelte-1mftbk3" href=" https://www.designspiration.com/save/534386732452/">ORIGINAL POSTER</a></p>`,p=x(),h=v("div"),h.innerHTML=`<div class="poster__container--info--main svelte-1mftbk3"><p class="poster__text poster__text--info svelte-1mftbk3">Liv\xEA</p> 
          <p class="poster__text poster__text--info svelte-1mftbk3">L\xE5\xFCgh</p> 
          <p class="poster__text poster__text--info svelte-1mftbk3">(L\xF4ve)<super class="poster__text poster__text--info--super svelte-1mftbk3">100</super></p></div> 
        <div class="poster__container--info--secondary"></div>`,_(o,"class","poster__container--names svelte-1mftbk3"),_(h,"class","poster__container--info svelte-1mftbk3"),_(e,"class","poster__container--content svelte-1mftbk3"),_(s,"class","poster__container--wrapper svelte-1mftbk3"),_(t,"class","poster svelte-1mftbk3")},m(f,w){k(f,t,w),l(t,s),l(s,e);for(let a=0;a<i.length;a+=1)i[a].m(e,null);l(e,r),l(e,o),l(e,p),l(e,h)},p:b,i:b,o:b,d(f){f&&y(t),T(i,f)}}}function Re(n){return[[...new Array(13)]]}class Ce extends H{constructor(t){super();A(this,t,Re,Pe,E,{})}}function Ge(n){let t;return{c(){t=v("div"),t.innerHTML=`<section class="poster__container--wrapper svelte-1ow4wco"><section class="poster__container--image--red-crosse svelte-1ow4wco"></section> 
    <section class="poster__container--image--gunyon svelte-1ow4wco"></section> 
    <section class="poster__container--image--britomart svelte-1ow4wco"></section> 
    <section class="poster__container--image--friendship svelte-1ow4wco"></section> 
    <section class="poster__container--image--justice svelte-1ow4wco"></section> 
    <section class="poster__container--image--courtesy svelte-1ow4wco"></section> 
    <section class="poster__container--overlay svelte-1ow4wco"></section> 
    <section class="poster__container--bg svelte-1ow4wco"></section> 
    <section class="poster__container--title svelte-1ow4wco"><h1 class="text--title--header svelte-1ow4wco">The Faerie Queene</h1> 
      <h2 class="text--title--subheader svelte-1ow4wco">Edmund Spenser</h2> 
      <p class="text--title svelte-1ow4wco"></p></section> 
    <section class="poster__container poster__container--knights svelte-1ow4wco"><section class="poster__container--pop svelte-1ow4wco"><h1 class="text--info text--info--header svelte-1ow4wco">Original Poster</h1> 
        <h2 class="text--info text--info--subheader svelte-1ow4wco"><a href="https://www.behance.net/gallery/97124351/Poster-Collection/modules/560843111" target="_blank" class="text--info text--info--link svelte-1ow4wco">Link</a></h2> 
        <p class="text--info svelte-1ow4wco"></p></section></section> 
    <section class="poster__container poster__container--red-crosse  svelte-1ow4wco"><section class="poster__container--pop svelte-1ow4wco"><h1 class="text--info text--info--header svelte-1ow4wco">Red Crosse Knight</h1> 
        <h2 class="text--info text--info--subheader svelte-1ow4wco">Knight of Holiness</h2> 
        <p class="text--info svelte-1ow4wco">Basically, Riverdale with a dragon and a lion.</p></section></section> 
    <section class="poster__container poster__container--gunyon svelte-1ow4wco"><section class="poster__container--pop svelte-1ow4wco"><h1 class="text--info text--info--header svelte-1ow4wco">Gunyon</h1> 
        <h2 class="text--info text--info--subheader svelte-1ow4wco">Knight of Temperance</h2> 
        <p class="text--info svelte-1ow4wco">King Arthur comes in and kills a bunch of zombies. (And I guess Gunyon
          does stuff too.)</p></section></section> 
    <section class="poster__container poster__container--britomart  svelte-1ow4wco"><section class="poster__container--pop svelte-1ow4wco"><h1 class="text--info text--info--header svelte-1ow4wco">Britomart</h1> 
        <h2 class="text--info text--info--subheader svelte-1ow4wco">Knight of Chastity</h2> 
        <p class="text--info svelte-1ow4wco">Britomart proves to be the most capable knight in all of the books and
          Merlin shows up to tell her to marry a boring dude with a robot.</p></section></section> 
    <section class="poster__container poster__container--friendship  svelte-1ow4wco"><section class="poster__container--pop svelte-1ow4wco"><h1 class="text--info text--info--header svelte-1ow4wco">Cambell and Telamond</h1> 
        <h2 class="text--info text--info--subheader svelte-1ow4wco">Knights of Friendship</h2> 
        <p class="text--info svelte-1ow4wco">Britomart meets her future husband with a robot, but should realize
          she needs to get with Amoret who is way cooler. (Britomart X Amoret
          For Life)</p></section></section> 
    <section class="poster__container poster__container--artegall  svelte-1ow4wco"><section class="poster__container--pop svelte-1ow4wco"><h1 class="text--info text--info--header svelte-1ow4wco">Aretgall</h1> 
        <h2 class="text--info text--info--subheader svelte-1ow4wco">Knight of Justice</h2> 
        <p class="text--info svelte-1ow4wco">Britomart&#39;s future husband with a robot goes to a thinly veiled
          metaphor for Ireland and kills everyone. (Seriously, Spenser hates
          Ireland)</p></section></section> 
    <section class="poster__container poster__container--calidore  svelte-1ow4wco"><section class="poster__container--pop svelte-1ow4wco"><h1 class="text--info text--info--header svelte-1ow4wco">Calidore</h1> 
        <h2 class="text--info text--info--subheader svelte-1ow4wco">Knight of Courtesy</h2> 
        <p class="text--info svelte-1ow4wco">I haven&#39;t read this one yet, but any page I go to mentions planets; so
          I am just imagining Space Knights fighting Space Demons.</p></section></section></section>`,_(t,"class","poster svelte-1ow4wco")},m(s,e){k(s,t,e)},p:b,i:b,o:b,d(s){s&&y(t)}}}class Oe extends H{constructor(t){super();A(this,t,null,Ge,E,{})}}function Se(n){let t,s,e,r,o,p,h,g,i,f,w,a,m,c,u,$,d,L,Q,O,V,S,Z,j,ee,K,te,q,se,F,ne,M,oe,le,B,re,N,ae,D,ce,Y,W;return{c(){t=v("div"),s=v("section"),e=v("section"),r=v("div"),o=x(),p=v("div"),p.innerHTML='<p class="metro__text svelte-1n7rkp6">George Petersen</p>',h=x(),g=v("div"),g.innerHTML='<p class="metro__text metro__text--equation svelte-1n7rkp6">F \xB1 0</p>',i=x(),f=v("div"),f.innerHTML='<h3 class="metro__text metro__text--headline svelte-1n7rkp6">Farmers</h3>',w=x(),a=v("div"),a.innerHTML='<p class="metro__text svelte-1n7rkp6">Rustic / <br/> Rustique</p>',m=x(),c=v("div"),c.innerHTML=`<p class="metro__text svelte-1n7rkp6"><span class="metro__text--strong svelte-1n7rkp6">Old McDonalds</span>
          had a farm. <br/> E I E I O</p>`,u=x(),$=v("div"),$.innerHTML=`<p class="metro__text svelte-1n7rkp6"><span class="metro__text--strong svelte-1n7rkp6">On this farm</span>
          he had an alpaca. <br/> E I E I O</p>`,d=x(),L=v("div"),L.innerHTML=`<h3 class="metro__text metro__text--headline svelte-1n7rkp6">Alpaca</h3> 
        <p class="metro__text svelte-1n7rkp6">They are floofy and cute</p> 
        <p class="metro__text svelte-1n7rkp6"><span class="metro__text--strong svelte-1n7rkp6">SHAGGY HAIR</span>and
          <span class="metro__text--strong svelte-1n7rkp6">LARGE TEETH</span></p>`,Q=x(),O=v("div"),O.innerHTML=`<h3 class="metro__text metro__text--headline svelte-1n7rkp6">Alpaca</h3> 
        <p class="metro__text svelte-1n7rkp6">They are floofy and cute</p> 
        <p class="metro__text svelte-1n7rkp6"><span class="metro__text--strong svelte-1n7rkp6">SHAGGY HAIR</span>and
          <span class="metro__text--strong svelte-1n7rkp6">LARGE TEETH</span></p>`,V=x(),S=v("div"),S.innerHTML='<h3 class="metro__text metro__text--headline svelte-1n7rkp6">PET ME!!</h3>',Z=x(),j=v("div"),j.innerHTML=`<p class="metro__text svelte-1n7rkp6">Come on get your hand in there</p> 
        <p class="metro__text svelte-1n7rkp6"><span class="metro__text--strong svelte-1n7rkp6">DO IT NOW</span></p>`,ee=x(),K=v("p"),K.textContent=":",te=x(),q=v("p"),q.textContent="\u201C",se=x(),F=v("p"),F.textContent="\u201D",ne=x(),M=v("h1"),oe=v("span"),le=x(),B=v("div"),B.innerHTML='<p class="metro__text metro__text--punctuation metro__text--period svelte-1n7rkp6">.</p>',re=x(),N=v("div"),N.innerHTML='<p class="metro__text metro__text--punctuation metro__text--semicolon svelte-1n7rkp6">;</p>',ae=x(),D=v("div"),D.innerHTML='<a class="metro__text metro__text--link svelte-1n7rkp6" href="https://www.designspiration.com/save/55725025182/" target="_blank">ORIGINAL / POSTER</a>',ce=x(),Y=v("div"),W=v("p"),W.textContent=`${n[2]}`,_(r,"class","poster__container--image svelte-1n7rkp6"),_(p,"class","poster__container--small-type svelte-1n7rkp6"),_(g,"class","poster__container--equation svelte-1n7rkp6"),_(f,"class","poster__container--text-top svelte-1n7rkp6"),_(a,"class","poster__container--type-words svelte-1n7rkp6"),_(c,"class","poster__container--text-top-1 svelte-1n7rkp6"),_($,"class","poster__container--text-top-2 svelte-1n7rkp6"),_(L,"class","poster__container--image-text svelte-1n7rkp6"),_(O,"class","poster__container--image-text svelte-1n7rkp6"),_(S,"class","poster__container--image-text-bottom svelte-1n7rkp6"),_(j,"class","poster__container--image-text-bottom-text svelte-1n7rkp6"),_(K,"class","metro__text metro__text--colon svelte-1n7rkp6"),_(q,"class","metro__text metro__text--left-quote svelte-1n7rkp6"),_(F,"class","metro__text metro__text--right-quote svelte-1n7rkp6"),X(M,"--metro-title","'"+n[1]+"'"),_(M,"class","metro__text metro__title svelte-1n7rkp6"),_(B,"class","poster__container--period svelte-1n7rkp6"),_(N,"class","poster__container--semicolon svelte-1n7rkp6"),_(D,"class","poster__container--poster-link svelte-1n7rkp6"),_(W,"class","metro__text svelte-1n7rkp6"),_(Y,"class","poster__container--year svelte-1n7rkp6"),_(e,"class","poster__container--content svelte-1n7rkp6"),_(s,"class","poster__container--wrapper svelte-1n7rkp6"),_(t,"class","poster svelte-1n7rkp6")},m(U,ke){k(U,t,ke),l(t,s),l(s,e),l(e,r),l(e,o),l(e,p),l(e,h),l(e,g),l(e,i),l(e,f),l(e,w),l(e,a),l(e,m),l(e,c),l(e,u),l(e,$),l(e,d),l(e,L),l(e,Q),l(e,O),l(e,V),l(e,S),l(e,Z),l(e,j),l(e,ee),l(e,K),l(e,te),l(e,q),l(e,se),l(e,F),l(e,ne),l(e,M),l(M,oe),n[3](M),l(e,le),l(e,B),l(e,re),l(e,N),l(e,ae),l(e,D),l(e,ce),l(e,Y),l(Y,W)},p:b,i:b,o:b,d(U){U&&y(t),n[3](null)}}}function je(n,t,s){const e=new URLSearchParams(window.location.search);let r,o=e.has("title")?e.get("title"):"Rural",p=new Date().getFullYear();xe(()=>{s(0,r.innerHTML=`<span class="metro__title__label">${o}</span>`,r)});function h(g){be[g?"unshift":"push"](()=>{r=g,s(0,r)})}return[r,o,p,h]}class Ke extends H{constructor(t){super();A(this,t,je,Se,E,{})}}function he(n,t,s){const e=n.slice();return e[3]=t[s],e[5]=s,e}function fe(n,t,s){const e=n.slice();return e[6]=t[s],e[8]=s,e}function de(n,t,s){const e=n.slice();return e[9]=t[s],e[5]=s,e}function qe(n,t,s){const e=n.slice();return e[11]=t[s],e[5]=s,e}function Fe(n){let t,s;return{c(){t=v("div"),_(t,"class","strasbourg__shape__column svelte-8yv8tc"),_(t,"id",s="strasbourg-shape-column-"+n[5]),z(t,"strasbourg__shape__column--even",n[5]%2===0),z(t,"strasbourg__shape__column--odd",n[5]%2===1)},m(e,r){k(e,t,r)},p:b,d(e){e&&y(t)}}}function me(n){let t,s=n[9]+"",e,r,o;return{c(){t=v("span"),e=J(s),r=x(),_(t,"id",o="strasbourg-text-letter-"+n[9]+"-"+n[5]),_(t,"class","strasbourg__text__letter svelte-8yv8tc"),z(t,"strasbourg__text--dark",n[5]%2===0),z(t,"strasbourg__text--light",n[5]%2===1)},m(p,h){k(p,t,h),l(t,e),l(t,r)},p:b,d(p){p&&y(t)}}}function ge(n){let t,s=n[6]+"",e,r;return{c(){t=v("span"),e=J(s),_(t,"id",r="strasbourg-text-letter-line-"+(n[5]+2)+"-"+n[8]),_(t,"class","strasbourg__text__letter svelte-8yv8tc")},m(o,p){k(o,t,p),l(t,e)},p:b,d(o){o&&y(t)}}}function we(n){let t,s,e,r,o=n[3],p=[];for(let h=0;h<o.length;h+=1)p[h]=ge(fe(n,o,h));return{c(){t=v("section"),s=v("p");for(let h=0;h<p.length;h+=1)p[h].c();_(s,"class",e="strasbourg__text strasbourg__text__line-"+(n[5]+2)+" svelte-8yv8tc"),_(t,"class",r="strasbourg__container strasbourg__container--line-"+(n[5]+2)+" svelte-8yv8tc")},m(h,g){k(h,t,g),l(t,s);for(let i=0;i<p.length;i+=1)p[i].m(s,null)},p(h,g){if(g&4){o=h[3];let i;for(i=0;i<o.length;i+=1){const f=fe(h,o,i);p[i]?p[i].p(f,g):(p[i]=ge(f),p[i].c(),p[i].m(s,null))}for(;i<p.length;i+=1)p[i].d(1);p.length=o.length}},d(h){h&&y(t),T(p,h)}}}function Be(n){let t,s,e,r,o,p,h,g,i=n[0],f=[];for(let u=0;u<i.length;u+=1)f[u]=Fe(qe(n,i,u));let w=n[1],a=[];for(let u=0;u<w.length;u+=1)a[u]=me(de(n,w,u));let m=n[2],c=[];for(let u=0;u<m.length;u+=1)c[u]=we(he(n,m,u));return{c(){t=v("div"),s=v("section");for(let u=0;u<f.length;u+=1)f[u].c();e=x(),r=v("section"),o=v("p");for(let u=0;u<a.length;u+=1)a[u].c();p=x();for(let u=0;u<c.length;u+=1)c[u].c();h=x(),g=v("section"),g.innerHTML='<a class="strasbourg__text strasbourg__text--link svelte-8yv8tc" target="_blank" href="https://www.designspiration.com/save/135459255201/">Original Poster</a>',_(o,"class","strasbourg__text strasbourg__text__title svelte-8yv8tc"),_(r,"class","strasbourg__container strasbourg__container--header svelte-8yv8tc"),_(g,"class","strasbourg__container strasbourg__container--original-poster svelte-8yv8tc"),_(s,"class","poster__container--wrapper svelte-8yv8tc"),_(t,"class","poster svelte-8yv8tc")},m(u,$){k(u,t,$),l(t,s);for(let d=0;d<f.length;d+=1)f[d].m(s,null);l(s,e),l(s,r),l(r,o);for(let d=0;d<a.length;d+=1)a[d].m(o,null);l(s,p);for(let d=0;d<c.length;d+=1)c[d].m(s,null);l(s,h),l(s,g)},p(u,[$]){if($&2){w=u[1];let d;for(d=0;d<w.length;d+=1){const L=de(u,w,d);a[d]?a[d].p(L,$):(a[d]=me(L),a[d].c(),a[d].m(o,null))}for(;d<a.length;d+=1)a[d].d(1);a.length=w.length}if($&4){m=u[2];let d;for(d=0;d<m.length;d+=1){const L=he(u,m,d);c[d]?c[d].p(L,$):(c[d]=we(L),c[d].c(),c[d].m(s,h))}for(;d<c.length;d+=1)c[d].d(1);c.length=m.length}},i:b,o:b,d(u){u&&y(t),T(f,u),T(a,u),T(c,u)}}}let Ne="roadtrip";function De(n){let t=[...new Array(8)],s=[...Ne],e=[[..."reconnec"],[..."ts-"],[..."resort"],[..."02.-05. "],[...` 06.${new Date().getFullYear()}`],[..."trails"],[..."  sand"]];return[t,s,e]}class Ye extends H{constructor(t){super();A(this,t,De,Be,E,{})}}function We(n){let t,s,e,r,o,p,h,g,i,f,w,a;return e=new Ae({}),o=new Ce({}),h=new Ke({}),i=new Ye({}),w=new Oe({}),{c(){t=v("main"),s=v("div"),I(e.$$.fragment),r=x(),I(o.$$.fragment),p=x(),I(h.$$.fragment),g=x(),I(i.$$.fragment),f=x(),I(w.$$.fragment),_(s,"class","app svelte-1lnj63q")},m(m,c){k(m,t,c),l(t,s),P(e,s,null),l(s,r),P(o,s,null),l(s,p),P(h,s,null),l(s,g),P(i,s,null),l(s,f),P(w,s,null),a=!0},p:b,i(m){a||(R(e.$$.fragment,m),R(o.$$.fragment,m),R(h.$$.fragment,m),R(i.$$.fragment,m),R(w.$$.fragment,m),a=!0)},o(m){C(e.$$.fragment,m),C(o.$$.fragment,m),C(h.$$.fragment,m),C(i.$$.fragment,m),C(w.$$.fragment,m),a=!1},d(m){m&&y(t),G(e),G(o),G(h),G(i),G(w)}}}class ze extends H{constructor(t){super();A(this,t,null,We,E,{})}}new ze({target:document.getElementById("app")});