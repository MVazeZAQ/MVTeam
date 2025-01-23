import{j as a}from"./jsx-runtime-QvZ8i92b.js";import{c as t,p as x}from"./animation-CmKoZPRv.js";import"./index-uubelm5h.js";const e=[1,3,5],P=[t("PropagateLoader",`25% {transform: translateX(-${e[0]}rem) scale(0.75)}
    50% {transform: translateX(-${e[1]}rem) scale(0.6)}
    75% {transform: translateX(-${e[2]}rem) scale(0.5)}
    95% {transform: translateX(0rem) scale(1)}`,"propogate-0"),t("PropagateLoader",`25% {transform: translateX(-${e[0]}rem) scale(0.75)}
    50% {transform: translateX(-${e[1]}rem) scale(0.6)}
    75% {transform: translateX(-${e[1]}rem) scale(0.6)}
    95% {transform: translateX(0rem) scale(1)}`,"propogate-1"),t("PropagateLoader",`25% {transform: translateX(-${e[0]}rem) scale(0.75)}
    75% {transform: translateX(-${e[0]}rem) scale(0.75)}
    95% {transform: translateX(0rem) scale(1)}`,"propogate-2"),t("PropagateLoader",`25% {transform: translateX(${e[0]}rem) scale(0.75)}
    75% {transform: translateX(${e[0]}rem) scale(0.75)}
    95% {transform: translateX(0rem) scale(1)}`,"propogate-3"),t("PropagateLoader",`25% {transform: translateX(${e[0]}rem) scale(0.75)}
    50% {transform: translateX(${e[1]}rem) scale(0.6)}
    75% {transform: translateX(${e[1]}rem) scale(0.6)}
    95% {transform: translateX(0rem) scale(1)}`,"propogate-4"),t("PropagateLoader",`25% {transform: translateX(${e[0]}rem) scale(0.75)}
    50% {transform: translateX(${e[1]}rem) scale(0.6)}
    75% {transform: translateX(${e[2]}rem) scale(0.5)}
    95% {transform: translateX(0rem) scale(1)}`,"propogate-5")];function l({loading:m=!0,color:d="#000000",speedMultiplier:u=1,cssOverride:f={},size:g=15,...$}){const{value:n,unit:o}=x(g),y={display:"inherit",position:"relative",...f},r=X=>({position:"absolute",fontSize:`${n/3}${o}`,width:`${n}${o}`,height:`${n}${o}`,background:d,borderRadius:"50%",animation:`${P[X]} ${1.5/u}s infinite`,animationFillMode:"forwards"});return m?a.jsxs("span",{style:y,...$,children:[a.jsx("span",{style:r(0)}),a.jsx("span",{style:r(1)}),a.jsx("span",{style:r(2)}),a.jsx("span",{style:r(3)}),a.jsx("span",{style:r(4)}),a.jsx("span",{style:r(5)})]}):null}try{l.displayName="PropagateLoader",l.__docgenInfo={description:"",displayName:"PropagateLoader",props:{size:{defaultValue:{value:"15"},description:"",name:"size",required:!1,type:{name:"LengthType"}},color:{defaultValue:{value:"#000000"},description:"",name:"color",required:!1,type:{name:"string"}},loading:{defaultValue:{value:"true"},description:"",name:"loading",required:!1,type:{name:"boolean"}},cssOverride:{defaultValue:{value:"{}"},description:"",name:"cssOverride",required:!1,type:{name:"CSSProperties"}},speedMultiplier:{defaultValue:{value:"1"},description:"",name:"speedMultiplier",required:!1,type:{name:"number"}}}}}catch{}const _={component:l,argTypes:{size:{description:"Can be number or string. When number, unit is assumed as px. When string, a unit is expected to be passed in",control:{type:"number"}}}},s={};var i,p,c;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(c=(p=s.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const j=["Primary"];export{s as Primary,j as __namedExportsOrder,_ as default};
