import{a as w,S,i as s}from"./assets/vendor-BrrjnyPr.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();const $="57567938-a750dc86e3e74b59c9f6f987b",q=15;async function d(i,e){return(await w.get("https://pixabay.com/api/",{params:{key:$,q:i,page:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:q}})).data}const u=document.querySelector(".gallery"),p=document.querySelector(".loader"),f=document.querySelector(".load-more-btn"),P=new S(".gallery a",{captionsData:"alt",captionDelay:250});function g(i){u.insertAdjacentHTML("beforeend",i.map(({webformatURL:e,largeImageURL:o,tags:a,likes:t,views:r,comments:l,downloads:L})=>`<li class="gallery-item">
        <a class="gallery-link" href="${o}">
      <img class = "gallery-image" src="${e}" alt="${a}" />
      </a>
      <div class="image-info">
  <div>
    <p class="info-title">Likes</p>
    <p class="info-value">${t}</p>
  </div>

  <div>
    <p class="info-title">Views</p>
    <p class="info-value">${r}</p>
  </div>

  <div>
    <p class="info-title">Comments</p>
    <p class="info-value">${l}</p>
  </div>

  <div>
    <p class="info-title">Downloads</p>
    <p class="info-value">${L}</p>
  </div>
</div>
    </li>`).join("")),P.refresh()}function M(){u.innerHTML=""}function h(){p.classList.add("is-visible")}function m(){p.classList.remove("is-visible")}function y(){f.classList.add("is-visible")}function v(){f.classList.remove("is-visible")}let n=1,c=0,b="";const R=document.querySelector(".form");R.addEventListener("submit",B);async function B(i){i.preventDefault(),v(),M();const e=i.target.elements["search-text"].value.trim();if(e==="")return s.error({position:"topRight",message:"Please enter the word to search!"});n=1,b=e,h();try{const o=await d(e,n);if(o.hits.length===0)return s.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});g(o.hits),c=Math.ceil(o.totalHits/15),n<c?y():s.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."})}catch(o){s.error({position:"topRight",title:`${o}`,message:`${o.message}`})}finally{m()}}const O=document.querySelector(".load-more-btn");O.addEventListener("click",x);async function x(i){try{v(),n++,h();const e=await d(b,n);if(e.hits.length===0)return s.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});g(e.hits);const a=document.querySelector(".gallery-item").getBoundingClientRect().height;if(window.scrollBy({left:0,top:a*2,behavior:"smooth"}),n>=c){s.show({position:"topRight",title:"The end",message:`We're sorry, but you've reached the end of search results.
`});return}y()}catch(e){s.error({position:"topRight",title:`${e}`,message:`${e.message}`})}finally{m()}}
//# sourceMappingURL=index.js.map
