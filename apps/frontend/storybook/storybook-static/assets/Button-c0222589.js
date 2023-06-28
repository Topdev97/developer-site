const r=({primary:o=!1,size:c="medium",backgroundColor:e,label:s,onClick:n})=>{const t=document.createElement("button");t.type="button",t.innerText=s,n&&t.addEventListener("click",n);const u=o?"button--primary":"button--secondary";return t.className=["button",`button--${c}`,u].join(" "),e&&(t.style.backgroundColor=e),t};export{r as c};
//# sourceMappingURL=Button-c0222589.js.map
