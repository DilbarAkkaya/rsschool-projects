(()=>{"use strict";var e={887:(e,t,o)=>{o.r(t)},53:function(e,t,o){var n=this&&this.__createBinding||(Object.create?function(e,t,o,n){void 0===n&&(n=o),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[o]}})}:function(e,t,o,n){void 0===n&&(n=o),e[n]=t[o]}),s=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),l=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)"default"!==o&&Object.prototype.hasOwnProperty.call(e,o)&&n(t,e,o);return s(t,e),t};Promise.resolve().then((()=>l(o(887)))),(()=>{const e=document.querySelector(".hamburger-menu"),t=document.querySelector(".navigation"),o=document.querySelectorAll(".navigation__item"),n=document.querySelectorAll(".title1");e.addEventListener("click",(()=>{t.classList.toggle("nav-active"),n.forEach((e=>{e.classList.toggle("opas")})),o.forEach(((e,t)=>{e.style.animation?e.style.animation="":e.style.animation=e.style.animation=`navLinkFade 0.5s ease forwards ${t/7+.4}s`})),e.classList.toggle("toggle")}))})();const r=document.querySelector(".explorer-slider__input"),i=document.querySelector(".img2"),a=document.querySelector(".drag-line");r.oninput=()=>{let e=r.value;a.style.left=e+"%",i.style.width=e+"%"},mapboxgl.accessToken="pk.eyJ1IjoiZGlsYmFyYWtrYXlhIiwiYSI6ImNrdWkwbGY4cTA1a28ycnJ2cXJpcG9jNDYifQ.YzTdMn1qu1-rGPBmN0DCAg";const c=new mapboxgl.Map({container:"map",style:"mapbox://styles/mapbox/light-v10",center:[2.3364002,48.8609],zoom:15.5}),d=new mapboxgl.Popup({offset:25}),u=new mapboxgl.Popup({offset:25,closeOnClick:!0,closeButton:!0}).setText("Sarcofage de Abou Roach"),v=new mapboxgl.Popup({offset:25,closeOnClick:!0,closeButton:!0}).setText("Louvre museum"),m=new mapboxgl.Popup({offset:25,closeOnClick:!0,closeButton:!0}).setText("Arc de triomphe du carrousel"),p=(new mapboxgl.Marker({color:"black"}).setLngLat([2.3364002,48.8609]).setPopup(v).addTo(c),new mapboxgl.Marker({color:"grey"}).setLngLat([2.33655,48.862435]).setPopup(d).addTo(c),new mapboxgl.Marker({color:"grey"}).setLngLat([2.33275,48.8619]).setPopup(m).addTo(c),new mapboxgl.Marker({color:"grey"}).setLngLat([2.33325,48.860245]).setPopup(d).addTo(c),new mapboxgl.Marker({color:"grey"}).setLngLat([2.339695,48.86065]).setPopup(u).addTo(c),document.getElementById("btn-prev")),L=document.getElementById("btn-next"),f=document.querySelectorAll(".slide"),g=document.querySelectorAll(".slide-carousel__pagination"),y=document.querySelectorAll(".slide-number");let b=0;const _=e=>{for(let e of y)e.classList.remove("activ");y[e].classList.add("activ")},w=e=>{for(let e of f)e.classList.remove("activ");f[e].classList.add("activ")},h=e=>{for(let e of g)e.classList.remove("activ");g[e].classList.add("activ")};g.forEach(((e,t)=>{e.addEventListener("click",(()=>{b=t,w(b),h(b),_(b)}))})),L.addEventListener("click",(()=>{b==f.length-1?(b=0,w(b),h(b),_(b)):(b++,w(b),h(b),_(b))})),p.addEventListener("click",(()=>{0==b?(b=f.length-1,w(b),h(b),_(b)):(b--,w(b),h(b),_(b))}));const S=document.querySelector(".video__wrapper-video"),k=S.querySelector(".viewer"),E=S.querySelector(".play__button"),q=document.querySelector(".video__controls"),x=q.querySelector(".video__controls-time"),P=q.querySelector(".volume"),T=q.querySelector(".video__volume"),C=q.querySelector(".volume-off"),A=q.querySelector(".little__play"),M=q.querySelector(".little__pause"),O=q.querySelectorAll(".ranges"),Y=q.querySelector(".video__full"),B=q.querySelector(".video__fulloff"),j=document.querySelector(".full");function I(){k.paused?k.play():k.pause()}function $(){k[this.name]=this.value}function F(e){const t=e.offsetX/x.offsetWidth*k.duration;k.currentTime=t}function V(){k.muted=!k.muted,k.muted?(T.classList.add("none"),C.classList.remove("none"),P.value="0"):(k.muted=!1,P.value=100*k.volume,T.classList.remove("none"),C.classList.add("none"))}document.querySelectorAll(".scroll-items"),k.addEventListener("click",(()=>{k.paused?(k.play(),A.classList.add("none"),E.classList.add("none"),M.classList.remove("none")):(k.pause(),E.classList.remove("none"),A.classList.remove("none"),M.classList.add("none"))})),x.addEventListener("input",(function(){const e=this.value;x.style.background=x.style.background=`linear-gradient(to right, #710707 0%, #710707 ${e}%, #C4C4C4 ${e}%, #C4C4C4 100%)`})),k.addEventListener("timeupdate",(function(){const e=k.currentTime/k.duration*100;x.value=e,x.style.background=`linear-gradient(to right, #710707 0%, #710707 ${e}%, #C4C4C4 ${e}%, #C4C4C4 100%)`})),O.forEach((e=>e.addEventListener("oninput",$))),O.forEach((e=>e.addEventListener("mousemove",$))),P.addEventListener("input",(function(e){P.style.background=`linear-gradient(to right, rgba(131, 7, 7, 1) ${this.value}%, rgba(196, 196, 196, 1) ${this.value}%)`,k.volume=P.value/100,P.value<=0?(C.classList.remove("none"),T.classList.add("none")):(C.classList.add("none"),T.classList.remove("none"))}),!1),T.addEventListener("click",V),C.addEventListener("click",V);let D=!1;x.addEventListener("click",F),x.addEventListener("mousemove",(e=>D&&F(e))),x.addEventListener("mousedown",(()=>D=!0)),x.addEventListener("mouseup",(()=>D=!1)),A.addEventListener("click",(()=>{I(),A.classList.add("none"),M.classList.remove("none"),E.classList.add("none")})),M.addEventListener("click",(()=>{I(),A.classList.remove("none"),M.classList.add("none"),E.classList.remove("none")})),E.addEventListener("click",(()=>{k.play()?(E.classList.add("none"),A.classList.add("none"),M.classList.remove("none")):(E.classList.remove("none"),A.classList.remove("none"),M.classList.add("none"))})),new Swiper(".video__slider-youtube",{direction:"horizontal",loop:!0,simulateTouch:!0,touchRatio:1,touchAngle:45,grabCursor:!0,keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},mousewheel:{invert:!0},slidesPerView:3,breakpoints:{320:{slidesPerView:1,spaceBetween:20},420:{slidesPerView:2,spaceBetween:20},1024:{slidesPerView:3}},freeMode:!0,speed:800,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},scrollbar:{el:".swiper-scrollbar"}}),B.addEventListener("click",(()=>{j.requestFullscreen&&(j.requestFullscreen(),S.classList.remove("video__wrapper-video"),S.classList.add("video__wrapper-fullscreen"),k.classList.remove("video__video"),k.classList.add("video__video-fullscreen"),E.classList.remove("play__button"),E.classList.add("play__button-fullscreen"),B.classList.add("none"),Y.classList.remove("none"))})),Y.addEventListener("click",(()=>{document.exitFullscreen&&(document.exitFullscreen(),B.classList.remove("none"),Y.classList.add("none"))}));const G=document.querySelectorAll(".art__box-content-img");window.addEventListener("scroll",function(e,t=20,o=!0){var n;return function(){var s=this,l=arguments,r=function(){n=null,o||e.apply(s,l)},i=o&&!n;clearTimeout(n),n=setTimeout(r,t),i&&e.apply(s,l)}}((function(e){G.forEach((e=>{const t=window.scrollY+window.innerHeight-e.height/2,o=e.offsetTop+window.scrollY+2*e.height,n=t>e.getBoundingClientRect().top+window.scrollY,s=window.scrollY<o;n&&s?e.classList.add("scroll-item"):e.classList.remove("scroll-item")}))})))}},t={};function o(n){var s=t[n];if(void 0!==s)return s.exports;var l=t[n]={exports:{}};return e[n].call(l.exports,l,l.exports,o),l.exports}o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o(53)})();