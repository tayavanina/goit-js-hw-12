import{a as p,i as n,S as f}from"./assets/vendor-VNi2ooPk.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(e){if(e.ep)return;e.ep=!0;const i=s(e);fetch(e.href,i)}})();const d="57567938-a750dc86e3e74b59c9f6f987b";function m(r){return p.get("https://pixabay.com/api/",{params:{key:d,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>t.data).catch(t=>{throw n.error({position:"topRight",title:`${t}`,message:`${t.message}`}),t})}const l=document.querySelector(".gallery"),c=document.querySelector(".loader"),g=new f(".gallery a",{captionsData:"alt",captionDelay:250});function h(r){l.innerHTML=r.map(({webformatURL:t,largeImageURL:s,tags:a,likes:e,views:i,comments:o,downloads:u})=>`<li class="gallery-item">
        <a class="gallery-link" href="${s}">
      <img class = "gallery-image" src="${t}" alt="${a}" />
      </a>
      <div class="image-info">
  <div>
    <p class="info-title">Likes</p>
    <p class="info-value">${e}</p>
  </div>

  <div>
    <p class="info-title">Views</p>
    <p class="info-value">${i}</p>
  </div>

  <div>
    <p class="info-title">Comments</p>
    <p class="info-value">${o}</p>
  </div>

  <div>
    <p class="info-title">Downloads</p>
    <p class="info-value">${u}</p>
  </div>
</div>
    </li>`).join(""),g.refresh()}function y(){l.innerHTML=""}function v(){c.classList.add("is-visible")}function L(){c.classList.remove("is-visible")}const b=document.querySelector(".form");b.addEventListener("submit",$);function $(r){r.preventDefault(),y();const t=r.target.elements["search-text"].value.trim();if(t==="")return n.error({position:"topRight",message:"Please enter the word to search!"});v(),m(t).then(s=>{if(s.hits.length===0)return n.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});h(s.hits)}).catch(s=>{n.error({position:"topRight",title:`${s}`,message:`${s.message}`})}).finally(()=>{L()})}
//# sourceMappingURL=index.js.map
