import"./hoisted.CACaiFYX.js";let i=0;const l="IS A DEVELOPER",m=60;function a(){const t=document.getElementById("label");t&&i<l.length&&(t.innerHTML+=l.charAt(i),i++,setTimeout(a,m))}document.addEventListener("DOMContentLoaded",()=>{setTimeout(()=>{a()},0)});const s=document.querySelectorAll("#accordion-flush-heading");s.forEach(t=>{const o=t.querySelector("[data-accordion-icon]");t.addEventListener("click",()=>{o?.classList.toggle("rotate-180"),t.classList.toggle("active");const e=t.nextElementSibling;t.classList.contains("active")?e.style.maxHeight=e.scrollHeight+"px":e.style.maxHeight="0",s.forEach(n=>{if(n!==t){n.classList.remove("active");const c=n.querySelector("[data-accordion-icon]");c?.classList.contains("rotate-180")&&c?.classList.toggle("rotate-180"),n.nextElementSibling.style.maxHeight="0"}})})});document.addEventListener("DOMContentLoaded",function(){const t=document.querySelector(".copy");t&&t.addEventListener("click",o=>{o.preventDefault();const e=document.getElementById("emailDisplay"),n=e?.textContent;e&&(e.textContent="I'm in your clipboard now!",e.style.color="#21C55E",setTimeout(()=>{e.textContent=n||""},3e3)),navigator.clipboard.writeText(n||"")})});
