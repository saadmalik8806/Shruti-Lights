(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[965],{4206:function(e,l,r){Promise.resolve().then(r.t.bind(r,2666,23)),Promise.resolve().then(r.bind(r,2409)),Promise.resolve().then(r.bind(r,7368))},2580:function(e,l,r){"use strict";r.d(l,{M:function(){return s}});var i=r(226),t=r(9128);let s=()=>{i.p8.registerPlugin(t.ScrollTrigger);let e=document.querySelectorAll(".mil-up");e.forEach(e=>{i.p8.fromTo(e,{opacity:0,y:50,scale:.98,ease:"sine"},{y:0,opacity:1,scale:1,scrollTrigger:{trigger:e,toggleActions:"play none none reverse"}})});let l=document.querySelectorAll(".mil-scale");l.forEach(e=>{var l=e.getAttribute("data-value-1"),r=e.getAttribute("data-value-2");i.p8.fromTo(e,{ease:"sine",scale:l},{scale:r,scrollTrigger:{trigger:e,scrub:!0,toggleActions:"play none none reverse"}})});let r=document.querySelectorAll(".mil-parallax");r.forEach(e=>{var l=e.getAttribute("data-value-1"),r=e.getAttribute("data-value-2");i.p8.fromTo(e,{ease:"sine",y:l},{y:r,scrollTrigger:{trigger:e,scrub:!0,toggleActions:"play none none reverse"}})});let s=document.querySelectorAll(".mil-skill-prog");s.forEach(e=>{var l=e.getAttribute("data-value-1"),r=e.getAttribute("data-value-2");i.p8.fromTo(e,{width:l,ease:"sine"},{width:r,duration:2,scrollTrigger:{trigger:e,toggleActions:"play none none reverse"}})});let a=document.querySelectorAll(".mil-counter");a.forEach(e=>{var l=e,r={val:0},t=e.dataset.number,s=(t+"").split("."),a=s.length>1?s[1].length:0;i.p8.to(r,{val:t,duration:2,scrollTrigger:{trigger:e,toggleActions:"play none none reverse"},onUpdate:function(){l.innerHTML=r.val.toFixed(a)}})}),i.p8.to(".mil-progress",{height:"100%",ease:"sine",scrollTrigger:{scrub:.3}});let c=document.querySelector(".mil-top-panel");void 0!=c&&window.addEventListener("scroll",e=>{window.scrollY>10?c.classList.add("mil-active"):c.classList.remove("mil-active")})}},2409:function(e,l,r){"use strict";r.r(l);var i=r(9268),t=r(5846),s=r.n(t),a=r(6008),c=r(6006),n=r(2580);let o=e=>{let l,{pageTitle:r,breadTitle:t,bgImage:o}=e,m=(0,a.usePathname)();if(l=void 0!=t?t:r.replace(/(<([^>]+)>)/gi,""),"Search: %s"==r){let e=(0,a.useSearchParams)(),l=e.get("key");r="Search: "+l}return(0,c.useEffect)(()=>{(0,n.M)()},[]),(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("section",{className:"mil-banner mil-banner-sm",children:[(0,i.jsx)("img",{src:o,className:"mil-bg-img mil-scale","data-value-1":".4","data-value-2":"1.4",alt:"image",style:{objectPosition:"top"}}),(0,i.jsx)("div",{className:"mil-overlay"}),(0,i.jsxs)("div",{className:"container",children:[(0,i.jsx)("div",{className:"mil-background-grid mil-top-space"}),(0,i.jsx)("div",{className:"mil-banner-content mil-center",children:(0,i.jsxs)("div",{className:"mil-mb-90",children:[(0,i.jsx)("h1",{className:"mil-light mil-upper mil-mb-30",dangerouslySetInnerHTML:{__html:r}}),(0,i.jsxs)("ul",{className:"mil-breadcrumbs mil-center",children:[(0,i.jsx)("li",{children:(0,i.jsx)(s(),{href:"/",children:"Home"})}),-1!=m.indexOf("/blog/")&&-1==m.indexOf("/blog/page/")&&(0,i.jsx)("li",{children:(0,i.jsx)(s(),{href:"/blog",children:"Blog"})}),-1!=m.indexOf("/projects/")&&(0,i.jsx)("li",{children:(0,i.jsx)(s(),{href:"/projects",children:"Projects"})}),-1!=m.indexOf("/services/")&&(0,i.jsx)("li",{children:(0,i.jsx)(s(),{href:"/services",children:"Services"})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{dangerouslySetInnerHTML:{__html:l}})})]})]})})]})]})})};l.default=o},7368:function(e,l,r){"use strict";r.r(l);var i=r(9268),t=r(6671),s=r.n(t),a=r(6006),c=r(5846),n=r.n(c);let o=e=>{let{projects:l,categories:r}=e,t=(0,a.useRef)(),[c,o]=(0,a.useState)("*");(0,a.useEffect)(()=>{t.current=new(s())(".mil-portfolio-grid",{itemSelector:".mil-grid-item",percentPosition:!0,masonry:{columnWidth:".grid-sizer"},transitionDuration:"0.5s"})},[]),(0,a.useEffect)(()=>{t.current&&("*"===c?t.current.arrange({filter:"*"}):t.current.arrange({filter:".".concat(c)}))},[c]);let m=(e,l)=>{l.preventDefault(),o(e);let r=document.querySelectorAll(".mil-filter a");r.forEach(l=>{let r=l.getAttribute("data-filter");r==e?l.classList.add("mil-current"):l.classList.remove("mil-current")})};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"mil-filter mil-up mil-mb-90",children:(0,i.jsxs)("div",{className:"mil-filter-links",children:[(0,i.jsx)("a",{href:"#","data-filter":"*",className:"mil-current",onClick:e=>m("*",e),children:"All"}),r.map((e,l)=>(0,i.jsx)("a",{href:"#","data-filter":"".concat(e.slug),onClick:l=>m(e.slug,l),children:e.name},"projects-filter-item-".concat(l)))]})}),(0,i.jsx)("div",{className:"row",children:(0,i.jsx)("div",{className:"col-lg-12",children:(0,i.jsxs)("div",{className:"mil-portfolio-grid mil-up",children:[(0,i.jsx)("div",{className:"grid-sizer"}),l.map((e,l)=>(0,i.jsx)("div",{className:"mil-grid-item ".concat(e.category_slug),children:(0,i.jsxs)(n(),{href:"/projects/".concat(e.id),className:"vertical"==e.orientation?"mil-portfolio-item-2 mil-long-item mil-mb-30":"mil-portfolio-item-2 mil-square-item mil-mb-30",children:[(0,i.jsx)("img",{src:e.image,alt:e.title}),(0,i.jsxs)("div",{className:"mil-project-descr",children:[(0,i.jsx)("h3",{className:"mil-upper mil-mb-30",children:e.title}),(0,i.jsxs)("div",{className:"mil-link mil-upper",children:["Start A Project ",(0,i.jsx)("div",{className:"mil-arrow mil-light",children:(0,i.jsx)("img",{src:"/img/icons/1.svg",alt:"arrow"})})]})]}),(0,i.jsx)("div",{className:"mil-category",children:e.category})]})},"projects-item-".concat(l)))]})})})]})};l.default=o}},function(e){e.O(0,[968,710,77,910,667,139,744],function(){return e(e.s=4206)}),_N_E=e.O()}]);