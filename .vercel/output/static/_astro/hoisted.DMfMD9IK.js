import"./hoisted.CACaiFYX.js";document.addEventListener("click",t=>{if(t.target instanceof HTMLElement&&t.target.tagName==="PRE"){const e=window.getSelection();if(e){const o=document.createRange();o.selectNodeContents(t.target),e.removeAllRanges(),e.addRange(o),document.execCommand("copy"),e.removeAllRanges()}const n=document.getElementById("copy-alert");n&&(n.style.display="block",setTimeout(()=>{n.style.display="none"},1e3))}});
