const s={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function c(e){if(typeof e=="number")return{value:e,unit:"px"};let t;const r=(e.match(/^[0-9.]*/)||"").toString();r.includes(".")?t=parseFloat(r):t=parseInt(r,10);const n=(e.match(/[^0-9]*$/)||"").toString();return s[n]?{value:t,unit:n}:(console.warn(`React Spinners: ${e} is not a valid css value. Defaulting to ${t}px.`),{value:t,unit:"px"})}function o(e){const t=c(e);return`${t.value}${t.unit}`}const l=(e,t,r)=>{const n=`react-spinners-${e}-${r}`;if(typeof window>"u"||!window.document)return n;const u=document.createElement("style");document.head.appendChild(u);const a=u.sheet,i=`
    @keyframes ${n} {
      ${t}
    }
  `;return a&&a.insertRule(i,0),n};export{o as a,l as c,c as p};
