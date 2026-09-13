import{a as L,i as a,S as b}from"./assets/vendor-BrrjnyPr.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();const $="57567938-a750dc86e3e74b59c9f6f987b",w=15;async function f(s,e){return L.get("https://pixabay.com/api/",{params:{key:$,q:s,page:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:w}}).then(t=>t.data).catch(t=>{throw a.error({position:"topRight",title:`${t}`,message:`${t.message}`}),t})}const m=document.querySelector(".gallery"),g=document.querySelector(".loader"),u=document.querySelector(".load-more-btn"),S=new b(".gallery a",{captionsData:"alt",captionDelay:250});async function h(s){m.insertAdjacentHTML("beforeend",s.map(({webformatURL:e,largeImageURL:t,tags:r,likes:i,views:o,comments:c,downloads:v})=>`<li class="gallery-item">
        <a class="gallery-link" href="${t}">
      <img class = "gallery-image" src="${e}" alt="${r}" />
      </a>
      <div class="image-info">
  <div>
    <p class="info-title">Likes</p>
    <p class="info-value">${i}</p>
  </div>

  <div>
    <p class="info-title">Views</p>
    <p class="info-value">${o}</p>
  </div>

  <div>
    <p class="info-title">Comments</p>
    <p class="info-value">${c}</p>
  </div>

  <div>
    <p class="info-title">Downloads</p>
    <p class="info-value">${v}</p>
  </div>
</div>
    </li>`).join("")),S.refresh()}async function p(){m.innerHTML=""}async function P(){g.classList.add("is-visible")}async function q(){g.classList.remove("is-visible")}async function M(){u.classList.add("is-visible")}async function y(){u.classList.remove("is-visible")}let n=1,l=0,d="";const R=document.querySelector(".form");R.addEventListener("submit",B);function B(s){s.preventDefault(),y(),p();const e=s.target.elements["search-text"].value.trim();if(e==="")return a.error({position:"topRight",message:"Please enter the word to search!"});e!==d&&(n=1,d=e,p()),P(),f(e,n).then(t=>{if(t.hits.length===0)return a.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});h(t.hits),l=Math.ceil(t.totalHits/15),n<l&&M()}).catch(t=>{a.error({position:"topRight",title:`${t}`,message:`${t.message}`})}).finally(()=>{q()})}u.addEventListener("click",O);async function O(s){try{n++;const e=await f(d,n);h(e.hits),n>=l&&(y(),a.show({position:"topRight",title:"The end",message:`We're sorry, but you've reached the end of search results.
`}));const r=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({left:0,top:r,behavior:"smooth"})}catch(e){a.error({position:"topRight",title:`${e}`,message:`${e.message}`})}}
//# sourceMappingURL=index.js.map
