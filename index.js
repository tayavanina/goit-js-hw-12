import{a as $,S,i as l}from"./assets/vendor-BrrjnyPr.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();const P="57567938-a750dc86e3e74b59c9f6f987b",q=15;async function p(s,e){return(await $.get("https://pixabay.com/api/",{params:{key:P,q:s,page:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:q}})).data}const m=document.querySelector(".gallery"),g=document.querySelector(".loader"),u=document.querySelector(".load-more-btn"),M=new S(".gallery a",{captionsData:"alt",captionDelay:250});function h(s){m.insertAdjacentHTML("beforeend",s.map(({webformatURL:e,largeImageURL:r,tags:i,likes:t,views:o,comments:n,downloads:w})=>`<li class="gallery-item">
        <a class="gallery-link" href="${r}">
      <img class = "gallery-image" src="${e}" alt="${i}" />
      </a>
      <div class="image-info">
  <div>
    <p class="info-title">Likes</p>
    <p class="info-value">${t}</p>
  </div>

  <div>
    <p class="info-title">Views</p>
    <p class="info-value">${o}</p>
  </div>

  <div>
    <p class="info-title">Comments</p>
    <p class="info-value">${n}</p>
  </div>

  <div>
    <p class="info-title">Downloads</p>
    <p class="info-value">${w}</p>
  </div>
</div>
    </li>`).join("")),M.refresh()}function f(){m.innerHTML=""}function y(){g.classList.add("is-visible")}function v(){g.classList.remove("is-visible")}function L(){u.classList.add("is-visible")}function b(){u.classList.remove("is-visible")}let a=1,c=0,d="";const B=document.querySelector(".form");B.addEventListener("submit",O);async function O(s){s.preventDefault(),b(),f();const e=s.target.elements["search-text"].value.trim();if(e==="")return l.error({position:"topRight",message:"Please enter the word to search!"});e!==d&&(a=1,d=e,f()),y();const r=await p(e,a);try{if(r.hits.length===0)return l.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});h(r.hits),c=Math.ceil(r.totalHits/15),a<c&&L()}catch(i){l.error({position:"topRight",title:`${i}`,message:`${i.message}`})}finally{v()}}u.addEventListener("click",R);async function R(s){try{b(),a++,y();const e=await p(d,a);if(h(e.hits),a>=c)return l.show({position:"topRight",title:"The end",message:`We're sorry, but you've reached the end of search results.
`});L();const i=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({left:0,top:i*2,behavior:"smooth"})}catch(e){l.error({position:"topRight",title:`${e}`,message:`${e.message}`})}finally{v()}}
//# sourceMappingURL=index.js.map
