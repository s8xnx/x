"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1834],{78795:(e,r,l)=>{l.d(r,{O:()=>n});var i=l(95155),t=l(12115),s=l(90284);let o=(e,r)=>{let l=new Set;for(;l.size<r;){let r=Math.floor(Math.random()*e.length);l.add(r)}return Array.from(l)};function n(e){let{title:r,color:l}=e,n=(0,s.q)(),a=r.length>6,f=o(r,a?2:1),c=a?800*Math.random()+100:600*Math.random()+100,[d,u]=(0,t.useState)({});return((0,t.useEffect)(()=>{let e=setInterval(()=>{u(e=>{let r={...e};return f.forEach(e=>{r[e]=Math.random()>.5?1:.3}),r})},c);return()=>clearInterval(e)},[c,f]),n)?(0,i.jsx)("div",{style:{textShadow:"\n        0 0 3px ".concat(l,",\n        0 0 8px ").concat(l,",\n        0 0 12px ").concat(l,"\n        ")},children:r.split("").map((e,r)=>{if(f.includes(r)){var l;return(0,i.jsx)("span",{style:{opacity:null!==(l=d[r])&&void 0!==l?l:1},children:e},r)}return e})}):(0,i.jsx)("div",{children:r})}},22026:(e,r,l)=>{l.d(r,{$:()=>s});var i=l(95155),t=l(58671);l(12115);let s=e=>{let{text:r,color:l,variant:s}=e,o=r.split("");return(0,i.jsx)("div",{className:(0,t.cn)("flex flex-wrap",s),children:o.map((e,r)=>(0,i.jsx)("span",{style:{"--i":r+1,color:l},children:" "===e?(0,i.jsx)("span",{children:"\xa0"}):e},r))})}},95607:(e,r,l)=>{l.d(r,{DisplayName:()=>h});var i=l(95155),t=l(5565),s=l(55798),o=l.n(s),n=l(58671),a=l(78795),f=l(22026),c=l(12115);let d=e=>{let{text:r,color:l}=e,t=(0,c.useRef)(null);return(0,c.useEffect)(()=>{let e=t.current;return(()=>{if(!t.current)return;let e=t.current,r=e.getBoundingClientRect().width,l=parseFloat(getComputedStyle(e).fontSize),i=Math.max(Math.floor(r/(2*l)),20),s=document.createDocumentFragment();e.querySelectorAll(".flame").forEach(e=>e.remove());for(let e=0;e<i;e++){let e=document.createElement("div");e.className="flame";let i=.3*l*Math.random()+.2*l,t=i>.4*l?"15px":"8px";Object.assign(e.style,{width:"".concat(i,"px"),height:"".concat(1.2*i,"px"),borderRadius:"50%",backgroundImage:"radial-gradient(gold 20%, orangered)",position:"absolute",bottom:"0",filter:"blur(".concat(t,")"),left:"".concat(Math.random()*r,"px"),animationDelay:"".concat(1.5*Math.random(),"s")}),s.appendChild(e)}e.appendChild(s)})(),()=>{e&&e.querySelectorAll(".flame").forEach(e=>e.remove())}},[]),(0,i.jsx)("div",{className:"relative w-fit",ref:t,children:(0,i.jsx)("span",{style:{color:l},children:r})})};var u=l(9246);let x=e=>{let r=n.HQ.find(r=>e.includes(r.value)&&r.value.includes("sparkles"));return r?r.value.split("-")[0]:"white"};function h(e){var r,l,s,c,u,h,_,g,m,B,j;let{title:y,userId:F,options:v,className:I}=e;if(!y)return null;let G=(null==v?void 0:null===(r=v.effects)||void 0===r?void 0:r.includes("shimmer"))&&(0,n.Ci)((null==v?void 0:v.color)||"#000000"),k=(null==v?void 0:null===(l=v.effects)||void 0===l?void 0:l.includes("shine"))&&(0,n.Yd)((null==v?void 0:v.color)||"#000000"),S=["glitch-effect","shake-effect","rainbow-effect","shine-effect"].filter(e=>{var r;return null==v?void 0:null===(r=v.effects)||void 0===r?void 0:r.includes(e.split("-")[0])}),w=(0,n.yB)(S);return(0,i.jsxs)(p,{userId:F,children:[(null==v?void 0:null===(s=v.effects)||void 0===s?void 0:s.includes("cherry-blossoms"))&&(0,i.jsx)(t.default,{src:"/effects/cherry-blossoms.gif",alt:"cherry blossoms",unoptimized:!0,width:"0",height:"0",sizes:"100vw",className:"absolute h-full w-full object-cover"}),(null==v?void 0:null===(c=v.effects)||void 0===c?void 0:c.some(e=>e.includes("sparkles")))&&(0,i.jsx)(t.default,{src:"/effects/".concat(x(null==v?void 0:v.effects),".gif"),alt:"sparkle",unoptimized:!0,width:"0",height:"0",sizes:"100vw",className:"absolute h-full w-full object-cover"}),(0,i.jsx)("h2",{className:(0,n.cn)("relative w-fit text-wrap break-all bg-transparent text-[28px] font-medium tracking-wider",I,w),style:{color:null==v?void 0:v.color,textShadow:(null==v?void 0:null===(u=v.effects)||void 0===u?void 0:u.includes("sparkles"))?"0 0 10px ".concat(v.color):void 0,fontFamily:(0,n.af)(null==v?void 0:v.font),filter:(null==v?void 0:null===(h=v.effects)||void 0===h?void 0:h.includes("glow"))?"drop-shadow(0 0 0.5rem ".concat(null==v?void 0:v.color,")"):void 0,...G,...k},"data-text":y,children:(null==v?void 0:null===(_=v.effects)||void 0===_?void 0:_.includes("typewriter"))?(0,i.jsx)(o(),{options:{strings:y,autoStart:!0,loop:!0}}):(null==v?void 0:null===(g=v.effects)||void 0===g?void 0:g.includes("flicker"))?(0,i.jsx)(a.O,{title:y,color:null==v?void 0:v.color}):(null==v?void 0:null===(m=v.effects)||void 0===m?void 0:m.includes("flip"))?(0,i.jsx)(f.$,{text:y,color:(null==v?void 0:v.color)||"#FFFFFF",variant:"flip"}):(null==v?void 0:null===(B=v.effects)||void 0===B?void 0:B.includes("loading"))?(0,i.jsx)(f.$,{text:y,color:(null==v?void 0:v.color)||"#FFFFFF",variant:"loading"}):(null==v?void 0:null===(j=v.effects)||void 0===j?void 0:j.includes("flames"))?(0,i.jsx)(d,{text:y,color:(null==v?void 0:v.color)||"#FFFFFF"}):y})]})}function p(e){let{children:r,userId:l}=e;return l?(0,i.jsx)(u.m,{content:"UID ".concat(l.toString()),children:(0,i.jsx)("div",{className:"relative",children:r})}):(0,i.jsx)("div",{className:"relative w-fit",children:r})}},35144:(e,r,l)=>{l.d(r,{AuroraSpotlight:()=>o});var i=l(95155);l(12115);var t=l(58671),s=l(88749);let o=function(){let{gradientFirst:e="radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(210, 100%, 85%, .08) 0, hsla(210, 100%, 55%, .02) 50%, hsla(210, 100%, 45%, 0) 80%)",gradientSecond:r="radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 85%, .06) 0, hsla(210, 100%, 55%, .02) 80%, transparent 100%)",gradientThird:l="radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 85%, .04) 0, hsla(210, 100%, 45%, .02) 80%, transparent 100%)",translateY:o=-350,width:n=560,height:a=1380,smallWidth:f=240,duration:c=7,xOffset:d=100,hue:u=0,className:x}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,i.jsxs)(s.P.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:1.5},className:(0,t.cn)("pointer-events-none absolute inset-0 h-full w-full overflow-hidden",x),style:{filter:"hue-rotate(".concat(u,"deg)")},children:[(0,i.jsxs)(s.P.div,{animate:{x:[0,d,0]},transition:{duration:c,repeat:1/0,repeatType:"reverse",ease:"easeInOut"},className:"pointer-events-none absolute left-0 top-0 z-40 h-screen w-screen",children:[(0,i.jsx)("div",{style:{transform:"translateY(".concat(o,"px) rotate(-45deg)"),background:e,width:"".concat(n,"px"),height:"".concat(a,"px")},className:"absolute left-0 top-0"}),(0,i.jsx)("div",{style:{transform:"rotate(-45deg) translate(5%, -50%)",background:r,width:"".concat(f,"px"),height:"".concat(a,"px")},className:"absolute left-0 top-0 origin-top-left"}),(0,i.jsx)("div",{style:{transform:"rotate(-45deg) translate(-180%, -70%)",background:l,width:"".concat(f,"px"),height:"".concat(a,"px")},className:"absolute left-0 top-0 origin-top-left"})]}),(0,i.jsxs)(s.P.div,{animate:{x:[0,-d,0]},transition:{duration:c,repeat:1/0,repeatType:"reverse",ease:"easeInOut"},className:"pointer-events-none absolute right-0 top-0 z-40 h-screen w-screen",children:[(0,i.jsx)("div",{style:{transform:"translateY(".concat(o,"px) rotate(45deg)"),background:e,width:"".concat(n,"px"),height:"".concat(a,"px")},className:"absolute right-0 top-0"}),(0,i.jsx)("div",{style:{transform:"rotate(45deg) translate(-5%, -50%)",background:r,width:"".concat(f,"px"),height:"".concat(a,"px")},className:"absolute right-0 top-0 origin-top-right"}),(0,i.jsx)("div",{style:{transform:"rotate(45deg) translate(180%, -70%)",background:l,width:"".concat(f,"px"),height:"".concat(a,"px")},className:"origin-top-rightl absolute right-0 top-0"})]})]})}},49408:(e,r,l)=>{l.d(r,{Q:()=>s});var i=l(95155),t=l(58671);function s(e){let{className:r,hue:l}=e;return(0,i.jsx)("div",{className:(0,t.cn)("pointer-events-none absolute left-1/2 top-[-35px] -translate-x-1/2 animate-fade-in-slower",r),children:(0,i.jsxs)("svg",{viewBox:"0 0 1512 554",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"h-[554px] w-[1512px]",style:{filter:"hue-rotate(".concat(null!=l?l:320,"deg)")},children:[(0,i.jsx)("g",{filter:"url(#filter0_f_1696_1715)",children:(0,i.jsx)("ellipse",{cx:"1.49665",cy:"1.4137",rx:"1.49665",ry:"1.4137",transform:"matrix(1 0 0 -1 1345.37 339.287)",fill:"#4B676C"})}),(0,i.jsx)("g",{filter:"url(#filter1_f_1696_1715)",children:(0,i.jsx)("ellipse",{cx:"1.49664",cy:"1.4137",rx:"1.49664",ry:"1.4137",transform:"matrix(1 0 0 -1 1255.57 216.768)",fill:"#4B676C"})}),(0,i.jsx)("g",{opacity:"0.25",filter:"url(#filter2_f_1696_1715)",children:(0,i.jsx)("ellipse",{cx:"1.49664",cy:"1.4137",rx:"1.49664",ry:"1.4137",transform:"matrix(1 0 0 -1 1227.64 169.645)",fill:"#4B676C"})}),(0,i.jsx)("g",{opacity:"0.25",filter:"url(#filter3_f_1696_1715)",children:(0,i.jsx)("ellipse",{cx:"1.49664",cy:"1.4137",rx:"1.49664",ry:"1.4137",transform:"matrix(1 0 0 -1 1113.89 185.666)",fill:"#4B676C"})}),(0,i.jsx)("g",{opacity:"0.25",filter:"url(#filter4_f_1696_1715)",children:(0,i.jsx)("ellipse",{cx:"1.49664",cy:"1.4137",rx:"1.49664",ry:"1.4137",transform:"matrix(1 0 0 -1 1118.88 313.842)",fill:"#4B676C"})}),(0,i.jsx)("g",{filter:"url(#filter5_f_1696_1715)",children:(0,i.jsx)("ellipse",{cx:"1.49664",cy:"1.4137",rx:"1.49664",ry:"1.4137",transform:"matrix(1 0 0 -1 1066 344)",fill:"#4B676C"})}),(0,i.jsx)("g",{filter:"url(#filter6_f_1696_1715)",children:(0,i.jsx)("ellipse",{cx:"1.49664",cy:"1.4137",rx:"1.49664",ry:"1.4137",transform:"matrix(1 0 0 -1 1095.93 249.754)",fill:"#B2CCD5"})}),(0,i.jsx)("g",{filter:"url(#filter7_f_1696_1715)",children:(0,i.jsx)("ellipse",{cx:"0.748322",cy:"0.706848",rx:"0.748322",ry:"0.706848",transform:"matrix(1 0 0 -1 1200.7 318.553)",fill:"#4B676C"})}),(0,i.jsx)("g",{opacity:"0.5",filter:"url(#filter8_f_1696_1715)",children:(0,i.jsx)("ellipse",{cx:"1.49664",cy:"1.4137",rx:"1.49664",ry:"1.4137",transform:"matrix(1 0 0 -1 1421.2 165.873)",fill:"#4B676C"})}),(0,i.jsx)("g",{opacity:"0.5",filter:"url(#filter9_f_1696_1715)",children:(0,i.jsx)("ellipse",{cx:"1.49664",cy:"1.4137",rx:"1.49664",ry:"1.4137",transform:"matrix(1 0 0 -1 1349.36 210.17)",fill:"#4B676C"})}),(0,i.jsx)("g",{opacity:"0.25",filter:"url(#filter10_f_1696_1715)",children:(0,i.jsx)("ellipse",{cx:"1.5",cy:"1.4137",rx:"1.5",ry:"1.4137",transform:"matrix(-1 0 0 1 694 111.562)",fill:"#4B676C"})}),(0,i.jsx)("g",{filter:"url(#filter11_f_1696_1715)",children:(0,i.jsx)("ellipse",{cx:"1.5",cy:"1.4137",rx:"1.5",ry:"1.4137",transform:"matrix(-1 0 0 1 634 92.7129)",fill:"#4B676C"})}),(0,i.jsx)("g",{filter:"url(#filter12_f_1696_1715)",children:(0,i.jsx)("ellipse",{cx:"1.5",cy:"1.4137",rx:"1.5",ry:"1.4137",transform:"matrix(-1 0 0 1 724 215.232)",fill:"#4B676C"})}),(0,i.jsx)("g",{opacity:"0.25",filter:"url(#filter13_f_1696_1715)",children:(0,i.jsx)("ellipse",{cx:"1.5",cy:"1.4137",rx:"1.5",ry:"1.4137",transform:"matrix(-1 0 0 1 752 262.355)",fill:"#4B676C"})}),(0,i.jsx)("g",{opacity:"0.25",filter:"url(#filter14_f_1696_1715)",children:(0,i.jsx)("ellipse",{cx:"1.5",cy:"1.4137",rx:"1.5",ry:"1.4137",transform:"matrix(-1 0 0 1 866 246.334)",fill:"#4B676C"})}),(0,i.jsx)("g",{opacity:"0.25",filter:"url(#filter15_f_1696_1715)",children:(0,i.jsx)("ellipse",{cx:"1.5",cy:"1.4137",rx:"1.5",ry:"1.4137",transform:"matrix(-1 0 0 1 861 118.158)",fill:"#4B676C"})}),(0,i.jsx)("g",{filter:"url(#filter16_f_1696_1715)",children:(0,i.jsx)("ellipse",{cx:"1.5",cy:"1.4137",rx:"1.5",ry:"1.4137",transform:"matrix(-1 0 0 1 914 88)",fill:"#4B676C"})}),(0,i.jsx)("g",{filter:"url(#filter17_f_1696_1715)",children:(0,i.jsx)("ellipse",{cx:"1.5",cy:"1.4137",rx:"1.5",ry:"1.4137",transform:"matrix(-1 0 0 1 884 182.246)",fill:"#B2CCD5",fillOpacity:"0.5"})}),(0,i.jsx)("g",{filter:"url(#filter18_f_1696_1715)",children:(0,i.jsx)("ellipse",{cx:"0.75",cy:"0.706848",rx:"0.75",ry:"0.706848",transform:"matrix(-1 0 0 1 779 113.447)",fill:"#4B676C"})}),(0,i.jsx)("g",{filter:"url(#filter19_f_1696_1715)",children:(0,i.jsx)("ellipse",{cx:"0.75",cy:"0.706848",rx:"0.75",ry:"0.706848",transform:"matrix(-1 0 0 1 807 238.795)",fill:"#4B676C"})}),(0,i.jsx)("g",{opacity:"0.5",filter:"url(#filter20_f_1696_1715)",children:(0,i.jsx)("ellipse",{cx:"1.5",cy:"1.4137",rx:"1.5",ry:"1.4137",transform:"matrix(-1 0 0 1 558 266.127)",fill:"#4B676C"})}),(0,i.jsx)("g",{opacity:"0.5",filter:"url(#filter21_f_1696_1715)",children:(0,i.jsx)("ellipse",{cx:"1.5",cy:"1.4137",rx:"1.5",ry:"1.4137",transform:"matrix(-1 0 0 1 630 221.83)",fill:"#4B676C"})}),(0,i.jsx)("g",{filter:"url(#filter22_f_1696_1715)",children:(0,i.jsx)("ellipse",{cx:"1.49843",cy:"1.41325",rx:"1.49843",ry:"1.41325",transform:"matrix(-1 0 0 1 195.294 165.711)",fill:"#4B676C"})}),(0,i.jsx)("g",{filter:"url(#filter23_f_1696_1715)",children:(0,i.jsx)("ellipse",{cx:"1.49842",cy:"1.41325",rx:"1.49842",ry:"1.41325",transform:"matrix(-1 0 0 1 285.2 288.193)",fill:"#4B676C"})}),(0,i.jsx)("g",{opacity:"0.25",filter:"url(#filter24_f_1696_1715)",children:(0,i.jsx)("ellipse",{cx:"1.49842",cy:"1.41325",rx:"1.49842",ry:"1.41325",transform:"matrix(-1 0 0 1 313.17 335.301)",fill:"#4B676C"})}),(0,i.jsx)("g",{opacity:"0.25",filter:"url(#filter25_f_1696_1715)",children:(0,i.jsx)("ellipse",{cx:"1.49842",cy:"1.41325",rx:"1.49842",ry:"1.41325",transform:"matrix(-1 0 0 1 427.051 319.285)",fill:"#4B676C"})}),(0,i.jsx)("g",{opacity:"0.25",filter:"url(#filter26_f_1696_1715)",children:(0,i.jsx)("ellipse",{cx:"1.49842",cy:"1.41325",rx:"1.49842",ry:"1.41325",transform:"matrix(-1 0 0 1 422.056 191.148)",fill:"#4B676C"})}),(0,i.jsx)("g",{filter:"url(#filter27_f_1696_1715)",children:(0,i.jsx)("ellipse",{cx:"1.49842",cy:"1.41325",rx:"1.49842",ry:"1.41325",transform:"matrix(-1 0 0 1 475 161)",fill:"#4B676C"})}),(0,i.jsx)("g",{filter:"url(#filter28_f_1696_1715)",children:(0,i.jsx)("ellipse",{cx:"1.49842",cy:"1.41325",rx:"1.49842",ry:"1.41325",transform:"matrix(-1 0 0 1 445.031 255.217)",fill:"#B2CCD5"})}),(0,i.jsx)("g",{filter:"url(#filter29_f_1696_1715)",children:(0,i.jsx)("ellipse",{cx:"0.749207",cy:"0.706626",rx:"0.749207",ry:"0.706626",transform:"matrix(-1 0 0 1 340.142 186.439)",fill:"#4B676C"})}),(0,i.jsx)("g",{opacity:"0.25",filter:"url(#filter30_f_1696_1715)",children:(0,i.jsx)("ellipse",{cx:"0.749207",cy:"0.706627",rx:"0.749207",ry:"0.706627",transform:"matrix(-1 0 0 1 1.49841 398.426)",fill:"#4B676C"})}),(0,i.jsx)("g",{filter:"url(#filter31_f_1696_1715)",children:(0,i.jsx)("ellipse",{cx:"1.49843",cy:"1.41325",rx:"1.49843",ry:"1.41325",transform:"matrix(-1 0 0 1 31.4668 502.064)",fill:"#4B676C"})}),(0,i.jsx)("g",{opacity:"0.5",filter:"url(#filter32_f_1696_1715)",children:(0,i.jsx)("ellipse",{cx:"1.49841",cy:"1.41325",rx:"1.49841",ry:"1.41325",transform:"matrix(-1 0 0 1 119.374 339.07)",fill:"#4B676C"})}),(0,i.jsx)("g",{opacity:"0.5",filter:"url(#filter33_f_1696_1715)",children:(0,i.jsx)("ellipse",{cx:"1.49843",cy:"1.41325",rx:"1.49843",ry:"1.41325",transform:"matrix(-1 0 0 1 191.299 294.787)",fill:"#4B676C"})}),(0,i.jsx)("g",{opacity:"0.25",filter:"url(#filter34_f_1696_1715)",children:(0,i.jsx)("ellipse",{cx:"1.49843",cy:"1.41325",rx:"1.49843",ry:"1.41325",transform:"matrix(-1 0 0 1 59.4375 549.174)",fill:"#4B676C"})}),(0,i.jsxs)("defs",{children:[(0,i.jsxs)("filter",{id:"filter0_f_1696_1715",x:"1343.37",y:"334.459",width:"6.99341",height:"6.82812",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[(0,i.jsx)("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),(0,i.jsx)("feBlend",{mode:"normal",in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),(0,i.jsx)("feGaussianBlur",{stdDeviation:"1",result:"effect1_foregroundBlur_1696_1715"})]}),(0,i.jsxs)("filter",{id:"filter1_f_1696_1715",x:"1253.57",y:"211.939",width:"6.99341",height:"6.82812",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[(0,i.jsx)("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),(0,i.jsx)("feBlend",{mode:"normal",in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),(0,i.jsx)("feGaussianBlur",{stdDeviation:"1",result:"effect1_foregroundBlur_1696_1715"})]}),(0,i.jsxs)("filter",{id:"filter2_f_1696_1715",x:"1225.64",y:"164.816",width:"6.99316",height:"6.82812",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[(0,i.jsx)("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),(0,i.jsx)("feBlend",{mode:"normal",in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),(0,i.jsx)("feGaussianBlur",{stdDeviation:"1",result:"effect1_foregroundBlur_1696_1715"})]}),(0,i.jsxs)("filter",{id:"filter3_f_1696_1715",x:"1111.89",y:"180.838",width:"6.99316",height:"6.82812",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[(0,i.jsx)("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),(0,i.jsx)("feBlend",{mode:"normal",in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),(0,i.jsx)("feGaussianBlur",{stdDeviation:"1",result:"effect1_foregroundBlur_1696_1715"})]}),(0,i.jsxs)("filter",{id:"filter4_f_1696_1715",x:"1116.88",y:"309.014",width:"6.99316",height:"6.82812",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[(0,i.jsx)("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),(0,i.jsx)("feBlend",{mode:"normal",in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),(0,i.jsx)("feGaussianBlur",{stdDeviation:"1",result:"effect1_foregroundBlur_1696_1715"})]}),(0,i.jsxs)("filter",{id:"filter5_f_1696_1715",x:"1064",y:"339.172",width:"6.99316",height:"6.82812",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[(0,i.jsx)("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),(0,i.jsx)("feBlend",{mode:"normal",in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),(0,i.jsx)("feGaussianBlur",{stdDeviation:"1",result:"effect1_foregroundBlur_1696_1715"})]}),(0,i.jsxs)("filter",{id:"filter6_f_1696_1715",x:"1093.93",y:"244.926",width:"6.99341",height:"6.82812",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[(0,i.jsx)("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),(0,i.jsx)("feBlend",{mode:"normal",in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),(0,i.jsx)("feGaussianBlur",{stdDeviation:"1",result:"effect1_foregroundBlur_1696_1715"})]}),(0,i.jsxs)("filter",{id:"filter7_f_1696_1715",x:"1198.7",y:"315.139",width:"5.49658",height:"5.41406",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[(0,i.jsx)("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),(0,i.jsx)("feBlend",{mode:"normal",in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),(0,i.jsx)("feGaussianBlur",{stdDeviation:"1",result:"effect1_foregroundBlur_1696_1715"})]}),(0,i.jsxs)("filter",{id:"filter8_f_1696_1715",x:"1419.2",y:"161.045",width:"6.99316",height:"6.82812",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[(0,i.jsx)("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),(0,i.jsx)("feBlend",{mode:"normal",in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),(0,i.jsx)("feGaussianBlur",{stdDeviation:"1",result:"effect1_foregroundBlur_1696_1715"})]}),(0,i.jsxs)("filter",{id:"filter9_f_1696_1715",x:"1347.36",y:"205.342",width:"6.99316",height:"6.82812",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[(0,i.jsx)("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),(0,i.jsx)("feBlend",{mode:"normal",in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),(0,i.jsx)("feGaussianBlur",{stdDeviation:"1",result:"effect1_foregroundBlur_1696_1715"})]}),(0,i.jsxs)("filter",{id:"filter10_f_1696_1715",x:"689",y:"109.562",width:"7",height:"6.82812",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[(0,i.jsx)("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),(0,i.jsx)("feBlend",{mode:"normal",in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),(0,i.jsx)("feGaussianBlur",{stdDeviation:"1",result:"effect1_foregroundBlur_1696_1715"})]}),(0,i.jsxs)("filter",{id:"filter11_f_1696_1715",x:"629",y:"90.7129",width:"7",height:"6.82812",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[(0,i.jsx)("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),(0,i.jsx)("feBlend",{mode:"normal",in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),(0,i.jsx)("feGaussianBlur",{stdDeviation:"1",result:"effect1_foregroundBlur_1696_1715"})]}),(0,i.jsxs)("filter",{id:"filter12_f_1696_1715",x:"719",y:"213.232",width:"7",height:"6.82812",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[(0,i.jsx)("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),(0,i.jsx)("feBlend",{mode:"normal",in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),(0,i.jsx)("feGaussianBlur",{stdDeviation:"1",result:"effect1_foregroundBlur_1696_1715"})]}),(0,i.jsxs)("filter",{id:"filter13_f_1696_1715",x:"747",y:"260.355",width:"7",height:"6.82812",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[(0,i.jsx)("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),(0,i.jsx)("feBlend",{mode:"normal",in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),(0,i.jsx)("feGaussianBlur",{stdDeviation:"1",result:"effect1_foregroundBlur_1696_1715"})]}),(0,i.jsxs)("filter",{id:"filter14_f_1696_1715",x:"861",y:"244.334",width:"7",height:"6.82812",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[(0,i.jsx)("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),(0,i.jsx)("feBlend",{mode:"normal",in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),(0,i.jsx)("feGaussianBlur",{stdDeviation:"1",result:"effect1_foregroundBlur_1696_1715"})]}),(0,i.jsxs)("filter",{id:"filter15_f_1696_1715",x:"856",y:"116.158",width:"7",height:"6.82812",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[(0,i.jsx)("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),(0,i.jsx)("feBlend",{mode:"normal",in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),(0,i.jsx)("feGaussianBlur",{stdDeviation:"1",result:"effect1_foregroundBlur_1696_1715"})]}),(0,i.jsxs)("filter",{id:"filter16_f_1696_1715",x:"909",y:"86",width:"7",height:"6.82812",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[(0,i.jsx)("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),(0,i.jsx)("feBlend",{mode:"normal",in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),(0,i.jsx)("feGaussianBlur",{stdDeviation:"1",result:"effect1_foregroundBlur_1696_1715"})]}),(0,i.jsxs)("filter",{id:"filter17_f_1696_1715",x:"879",y:"180.246",width:"7",height:"6.82812",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[(0,i.jsx)("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),(0,i.jsx)("feBlend",{mode:"normal",in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),(0,i.jsx)("feGaussianBlur",{stdDeviation:"1",result:"effect1_foregroundBlur_1696_1715"})]}),(0,i.jsxs)("filter",{id:"filter18_f_1696_1715",x:"775.5",y:"111.447",width:"5.5",height:"5.41406",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[(0,i.jsx)("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),(0,i.jsx)("feBlend",{mode:"normal",in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),(0,i.jsx)("feGaussianBlur",{stdDeviation:"1",result:"effect1_foregroundBlur_1696_1715"})]}),(0,i.jsxs)("filter",{id:"filter19_f_1696_1715",x:"803.5",y:"236.795",width:"5.5",height:"5.41406",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[(0,i.jsx)("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),(0,i.jsx)("feBlend",{mode:"normal",in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),(0,i.jsx)("feGaussianBlur",{stdDeviation:"1",result:"effect1_foregroundBlur_1696_1715"})]}),(0,i.jsxs)("filter",{id:"filter20_f_1696_1715",x:"553",y:"264.127",width:"7",height:"6.82812",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[(0,i.jsx)("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),(0,i.jsx)("feBlend",{mode:"normal",in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),(0,i.jsx)("feGaussianBlur",{stdDeviation:"1",result:"effect1_foregroundBlur_1696_1715"})]}),(0,i.jsxs)("filter",{id:"filter21_f_1696_1715",x:"625",y:"219.83",width:"7",height:"6.82812",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[(0,i.jsx)("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),(0,i.jsx)("feBlend",{mode:"normal",in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),(0,i.jsx)("feGaussianBlur",{stdDeviation:"1",result:"effect1_foregroundBlur_1696_1715"})]}),(0,i.jsxs)("filter",{id:"filter22_f_1696_1715",x:"190.298",y:"163.711",width:"6.99683",height:"6.82617",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[(0,i.jsx)("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),(0,i.jsx)("feBlend",{mode:"normal",in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),(0,i.jsx)("feGaussianBlur",{stdDeviation:"1",result:"effect1_foregroundBlur_1696_1715"})]}),(0,i.jsxs)("filter",{id:"filter23_f_1696_1715",x:"280.203",y:"286.193",width:"6.99683",height:"6.82617",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[(0,i.jsx)("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),(0,i.jsx)("feBlend",{mode:"normal",in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),(0,i.jsx)("feGaussianBlur",{stdDeviation:"1",result:"effect1_foregroundBlur_1696_1715"})]}),(0,i.jsxs)("filter",{id:"filter24_f_1696_1715",x:"308.174",y:"333.301",width:"6.99683",height:"6.82617",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[(0,i.jsx)("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),(0,i.jsx)("feBlend",{mode:"normal",in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),(0,i.jsx)("feGaussianBlur",{stdDeviation:"1",result:"effect1_foregroundBlur_1696_1715"})]}),(0,i.jsxs)("filter",{id:"filter25_f_1696_1715",x:"422.054",y:"317.285",width:"6.99683",height:"6.82617",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[(0,i.jsx)("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),(0,i.jsx)("feBlend",{mode:"normal",in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),(0,i.jsx)("feGaussianBlur",{stdDeviation:"1",result:"effect1_foregroundBlur_1696_1715"})]}),(0,i.jsxs)("filter",{id:"filter26_f_1696_1715",x:"417.059",y:"189.148",width:"6.99683",height:"6.82617",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[(0,i.jsx)("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),(0,i.jsx)("feBlend",{mode:"normal",in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),(0,i.jsx)("feGaussianBlur",{stdDeviation:"1",result:"effect1_foregroundBlur_1696_1715"})]}),(0,i.jsxs)("filter",{id:"filter27_f_1696_1715",x:"470.003",y:"159",width:"6.99683",height:"6.82617",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[(0,i.jsx)("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),(0,i.jsx)("feBlend",{mode:"normal",in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),(0,i.jsx)("feGaussianBlur",{stdDeviation:"1",result:"effect1_foregroundBlur_1696_1715"})]}),(0,i.jsxs)("filter",{id:"filter28_f_1696_1715",x:"440.035",y:"253.217",width:"6.99683",height:"6.82617",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[(0,i.jsx)("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),(0,i.jsx)("feBlend",{mode:"normal",in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),(0,i.jsx)("feGaussianBlur",{stdDeviation:"1",result:"effect1_foregroundBlur_1696_1715"})]}),(0,i.jsxs)("filter",{id:"filter29_f_1696_1715",x:"336.644",y:"184.439",width:"5.49829",height:"5.41406",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[(0,i.jsx)("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),(0,i.jsx)("feBlend",{mode:"normal",in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),(0,i.jsx)("feGaussianBlur",{stdDeviation:"1",result:"effect1_foregroundBlur_1696_1715"})]}),(0,i.jsxs)("filter",{id:"filter30_f_1696_1715",x:"-2",y:"396.426",width:"5.49841",height:"5.41406",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[(0,i.jsx)("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),(0,i.jsx)("feBlend",{mode:"normal",in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),(0,i.jsx)("feGaussianBlur",{stdDeviation:"1",result:"effect1_foregroundBlur_1696_1715"})]}),(0,i.jsxs)("filter",{id:"filter31_f_1696_1715",x:"26.47",y:"500.064",width:"6.99683",height:"6.82617",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[(0,i.jsx)("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),(0,i.jsx)("feBlend",{mode:"normal",in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),(0,i.jsx)("feGaussianBlur",{stdDeviation:"1",result:"effect1_foregroundBlur_1696_1715"})]}),(0,i.jsxs)("filter",{id:"filter32_f_1696_1715",x:"114.377",y:"337.07",width:"6.99683",height:"6.82617",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[(0,i.jsx)("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),(0,i.jsx)("feBlend",{mode:"normal",in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),(0,i.jsx)("feGaussianBlur",{stdDeviation:"1",result:"effect1_foregroundBlur_1696_1715"})]}),(0,i.jsxs)("filter",{id:"filter33_f_1696_1715",x:"186.302",y:"292.787",width:"6.99683",height:"6.82617",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[(0,i.jsx)("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),(0,i.jsx)("feBlend",{mode:"normal",in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),(0,i.jsx)("feGaussianBlur",{stdDeviation:"1",result:"effect1_foregroundBlur_1696_1715"})]}),(0,i.jsxs)("filter",{id:"filter34_f_1696_1715",x:"54.4407",y:"547.174",width:"6.99683",height:"6.82617",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[(0,i.jsx)("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),(0,i.jsx)("feBlend",{mode:"normal",in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),(0,i.jsx)("feGaussianBlur",{stdDeviation:"1",result:"effect1_foregroundBlur_1696_1715"})]})]})]})})}},90284:(e,r,l)=>{l.d(r,{q:()=>t});var i=l(12115);let t=()=>{let[e,r]=i.useState(!1);return i.useEffect(()=>{r(!0)},[]),e}},66984:(e,r,l)=>{l.d(r,{$0:()=>s,QD:()=>n,gQ:()=>o,qW:()=>t});var i=l(58671);function t(e){return i.P4.find(r=>r.id===e)}let s=(e,r)=>{let l=t(r);return(null==l?void 0:l.baseURL)?"".concat(l.baseURL.replace("{source}",e)):e};function o(e){return/^[a-zA-Z0-9.-]+$/.test(e)}let n=e=>{let r=t(e);return(null==r?void 0:r.id)!==11&&(null==r||!r.baseURL)}}}]);