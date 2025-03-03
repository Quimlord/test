import{a as m,S as h,i as f}from"./assets/vendor-KnZd4sWe.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const i of e.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function r(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function o(t){if(t.ep)return;t.ep=!0;const e=r(t);fetch(t.href,e)}})();function p(s){const a={params:{key:"49142387-370a201ec94f73d63c9116370",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}};return m.get("https://pixabay.com/api/",a)}const d=document.querySelector(".gallery"),n=document.querySelector(".loader-box");function g(s){const a=s.map(({webformatURL:r,largeImageURL:o,tags:t,likes:e,views:i,comments:l,downloads:u})=>`
          <li class="gallery-item">
            <a class="gallery-link" href="${o}">
              <figure class="thumb-container">
                <img
                  class="thumb-image"
                  src="${r}"
                  data-source="${o}"
                  alt="${t}"
                />

                <figcaption class="thumb-data">
                  <dl class="thumb-data-list">
                    <div class="thumb-data-item">
                      <dt class="thumb-data-title">Likes</dt>
                      <dd class="thumb-data-data">${e}</dd>
                    </div>
                    <div class="thumb-data-item">
                      <dt class="thumb-data-title">Views</dt>
                      <dd class="thumb-data-data">${i}</dd>
                    </div>
                    <div class="thumb-data-item">
                      <dt class="thumb-data-title">Comments</dt>
                      <dd class="thumb-data-data">${l}</dd>
                    </div>
                    <div class="thumb-data-item">
                      <dt class="thumb-data-title">Downloads</dt>
                      <dd class="thumb-data-data">${u}</dd>
                    </div>
                  </dl>
                </figcaption>
              </figure>
            </a>
          </li>
        `).join("");d.innerHTML=a,y.refresh(),v()}const y=new h(".gallery a",{captionsData:"alt",captionDelay:250});function b(){d.classList.add("hidden"),n.classList.remove("hidden")}function v(){d.classList.remove("hidden"),n.classList.add("hidden")}function L(){f.error({position:"topRight",title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040"})}const S=document.querySelector("form"),c=document.querySelector("#search-text");S.addEventListener("submit",$);function $(s){s.preventDefault();const a=c.value;a&&(c.value="",b(),p(a).then(r=>q(r.data.hits)).catch(r=>console.log(r)))}function q(s){s.length||L(),g(s)}
//# sourceMappingURL=index.js.map
