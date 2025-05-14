import{a as u,S as f,i as a}from"./assets/vendor-DxEWe7lX.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const m="50252354-e48f782526adef10354766461",y="https://pixabay.com/api/",h=async o=>(await u.get(y,{params:{key:m,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data;let i;const l=document.querySelector(".gallery"),d=document.querySelector(".loader"),g=o=>{const s=o.map(t=>`
    <li class="gallery-item">
      <a href="${t.largeImageURL}">
        <img src="${t.webformatURL}" alt="${t.tags}" />
      </a>
      <div class="info">
        <p>Likes <span>${t.likes}</span></p>
        <p>Views <span>${t.views}</span></p>
        <p>Comments <span>${t.comments}</span></p>
        <p>Downloads <span>${t.downloads}</span></p>
      </div>
    </li>`).join("");l.insertAdjacentHTML("beforeend",s),i?i.refresh():i=new f(".gallery a")},L=()=>{l.innerHTML=""},w=()=>{d.classList.remove("hidden")},b=()=>{d.classList.add("hidden")},p=document.querySelector(".form"),v=p.elements["search-text"];p.addEventListener("submit",async o=>{o.preventDefault();const s=v.value.trim();if(!s){a.warning({title:"Warning",message:"Enter a search query!"});return}L(),w();try{const t=await h(s);t.hits.length?g(t.hits):a.info({title:"Oops",message:"Sorry, there are no images matching your search query. Please try again!"})}catch{a.error({title:"Error",message:"Something went wrong. Try again later."})}finally{b()}});
//# sourceMappingURL=index.js.map
