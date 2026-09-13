import{a as w,S,i as s}from"./assets/vendor-BrrjnyPr.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();const $="57567938-a750dc86e3e74b59c9f6f987b",P=15;async function p(i,e){return(await w.get("https://pixabay.com/api/",{params:{key:$,q:i,page:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:P}})).data}const f=document.querySelector(".gallery"),g=document.querySelector(".loader"),u=document.querySelector(".load-more-btn"),q=new S(".gallery a",{captionsData:"alt",captionDelay:250});function h(i){f.insertAdjacentHTML("beforeend",i.map(({webformatURL:e,largeImageURL:o,tags:a,likes:t,views:r,comments:l,downloads:b})=>`<li class="gallery-item">
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
    <p class="info-value">${b}</p>
  </div>
</div>
    </li>`).join("")),q.refresh()}function M(){f.innerHTML=""}function m(){g.classList.add("is-visible")}function y(){g.classList.remove("is-visible")}function v(){u.classList.add("is-visible")}function L(){u.classList.remove("is-visible")}let n=1,c=0,d="";const R=document.querySelector(".form");R.addEventListener("submit",B);async function B(i){i.preventDefault(),L(),M();const e=i.target.elements["search-text"].value.trim();if(e==="")return s.error({position:"topRight",message:"Please enter the word to search!"});e!==d&&(n=1,d=e),m();try{const o=await p(e,n);if(o.hits.length===0)return s.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});h(o.hits),c=Math.ceil(o.totalHits/15),n<c?v():s.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."})}catch(o){s.error({position:"topRight",title:`${o}`,message:`${o.message}`})}finally{y()}}u.addEventListener("click",O);async function O(i){try{L(),n++,m();const e=await p(d,n);if(e.hits.length===0)return s.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});h(e.hits),n>=c&&s.show({position:"topRight",title:"The end",message:`We're sorry, but you've reached the end of search results.
`}),v();const a=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({left:0,top:a*2,behavior:"smooth"})}catch(e){s.error({position:"topRight",title:`${e}`,message:`${e.message}`})}finally{y()}}
//# sourceMappingURL=index.js.map
