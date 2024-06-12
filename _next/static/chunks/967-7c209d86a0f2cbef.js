"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[967],{2580:function(e,l,a){a.d(l,{M:function(){return t}});var i=a(226),r=a(9128);let t=()=>{i.p8.registerPlugin(r.ScrollTrigger);let e=document.querySelectorAll(".mil-up");e.forEach(e=>{i.p8.fromTo(e,{opacity:0,y:50,scale:.98,ease:"sine"},{y:0,opacity:1,scale:1,scrollTrigger:{trigger:e,toggleActions:"play none none reverse"}})});let l=document.querySelectorAll(".mil-scale");l.forEach(e=>{var l=e.getAttribute("data-value-1"),a=e.getAttribute("data-value-2");i.p8.fromTo(e,{ease:"sine",scale:l},{scale:a,scrollTrigger:{trigger:e,scrub:!0,toggleActions:"play none none reverse"}})});let a=document.querySelectorAll(".mil-parallax");a.forEach(e=>{var l=e.getAttribute("data-value-1"),a=e.getAttribute("data-value-2");i.p8.fromTo(e,{ease:"sine",y:l},{y:a,scrollTrigger:{trigger:e,scrub:!0,toggleActions:"play none none reverse"}})});let t=document.querySelectorAll(".mil-skill-prog");t.forEach(e=>{var l=e.getAttribute("data-value-1"),a=e.getAttribute("data-value-2");i.p8.fromTo(e,{width:l,ease:"sine"},{width:a,duration:2,scrollTrigger:{trigger:e,toggleActions:"play none none reverse"}})});let s=document.querySelectorAll(".mil-counter");s.forEach(e=>{var l=e,a={val:0},r=e.dataset.number,t=(r+"").split("."),s=t.length>1?t[1].length:0;i.p8.to(a,{val:r,duration:2,scrollTrigger:{trigger:e,toggleActions:"play none none reverse"},onUpdate:function(){l.innerHTML=a.val.toFixed(s)}})}),i.p8.to(".mil-progress",{height:"100%",ease:"sine",scrollTrigger:{scrub:.3}});let n=document.querySelector(".mil-top-panel");void 0!=n&&window.addEventListener("scroll",e=>{window.scrollY>10?n.classList.add("mil-active"):n.classList.remove("mil-active")})}},1221:function(e,l,a){a.r(l);var i=a(9268),r=a(8852),t=a(8520);let s=e=>{let{subtitleOffset:l}=e;return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(r.J9,{initialValues:{email:"",name:"",tel:"",budget:"",message:""},validate:e=>{let l={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.email)||(l.email="Invalid email address"):l.email="Required",l},onSubmit:(e,l)=>{let{setSubmitting:a}=l,i=document.getElementById("contactForm"),r=document.getElementById("contactFormStatus"),t=new FormData;t.append("name",e.name),t.append("email",e.email),t.append("tel",e.tel),t.append("budget",e.budget),t.append("message",e.message),fetch(i.action,{method:"POST",body:t,headers:{Accept:"application/json"}}).then(e=>{e.ok?(r.innerHTML="<h5>Thanks, your message is sent successfully.</h5>",i.reset()):e.json().then(e=>{Object.hasOwn(e,"errors")?r.innerHTML=e.errors.map(e=>e.message).join(", "):r.innerHTML="<h5>Oops! There was a problem submitting your form</h5>"})}).catch(e=>{r.innerHTML="<h5>Oops! There was a problem submitting your form</h5>"}),a(!1)},children:e=>{let{values:a,errors:r,touched:s,handleChange:n,handleBlur:o,handleSubmit:c,isSubmitting:m}=e;return(0,i.jsxs)("form",{onSubmit:c,id:"contactForm",action:t.Xd.Tb,className:l?"mil-mt-suptitle-offset mil-mb-90 cform":"mil-mb-90 cform",children:[(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:"col-lg-6",children:(0,i.jsxs)("div",{className:"mil-input-frame mil-dark-input mil-up mil-mb-30",children:[(0,i.jsxs)("label",{className:"mil-upper",children:[(0,i.jsx)("span",{children:"Full Name"}),(0,i.jsx)("span",{className:"mil-required",children:"*"})]}),(0,i.jsx)("input",{type:"text",placeholder:"Enter Your Name Here",name:"name",required:"required",onChange:n,onBlur:o,value:a.name})]})}),(0,i.jsx)("div",{className:"col-lg-6",children:(0,i.jsxs)("div",{className:"mil-input-frame mil-dark-input mil-up mil-mb-30",children:[(0,i.jsxs)("label",{className:"mil-upper",children:[(0,i.jsx)("span",{children:"Email address"}),(0,i.jsx)("span",{className:"mil-required",children:"*"})]}),(0,i.jsx)("input",{type:"email",placeholder:"Enter Your Email Here",name:"email",required:"required",onChange:n,onBlur:o,value:a.email})]})}),(0,i.jsx)("div",{className:"col-lg-6",children:(0,i.jsxs)("div",{className:"mil-input-frame mil-dark-input mil-up mil-mb-30",children:[(0,i.jsxs)("label",{className:"mil-upper",children:[(0,i.jsx)("span",{children:"Phone"}),(0,i.jsx)("span",{className:"mil-required",children:"*"})]}),(0,i.jsx)("input",{type:"tel",placeholder:"Enter Your Phone Here",name:"tel",required:"required",onChange:n,onBlur:o,value:a.tel})]})}),(0,i.jsx)("div",{className:"col-lg-6",children:(0,i.jsxs)("div",{className:"mil-input-frame mil-dark-input mil-up mil-mb-30",children:[(0,i.jsxs)("label",{className:"mil-upper",children:[(0,i.jsx)("span",{children:"Budget"}),(0,i.jsx)("span",{className:"mil-required",children:"*"})]}),(0,i.jsx)("input",{type:"text",placeholder:"Enter Your Budget Here",name:"budget",required:"required",onChange:n,onBlur:o,value:a.budget})]})}),(0,i.jsx)("div",{className:"col-lg-12",children:(0,i.jsxs)("div",{className:"mil-input-frame mil-dark-input mil-up mil-mb-30",children:[(0,i.jsxs)("label",{className:"mil-upper",children:[(0,i.jsx)("span",{children:"Message"}),(0,i.jsx)("span",{className:"mil-required",children:"*"})]}),(0,i.jsx)("textarea",{placeholder:"Enter Your Name Here",name:"message",required:"required",onChange:n,onBlur:o,value:a.message})]})}),(0,i.jsx)("div",{className:"col-lg-12",children:(0,i.jsxs)("div",{className:"mil-checbox-frame mil-dark-input mil-up mil-mb-30",children:[(0,i.jsx)("input",{defaultChecked:!0,className:"mil-checkbox",id:"checkbox-1",type:"checkbox",value:"value",namge:"agree",required:!0}),(0,i.jsx)("label",{htmlFor:"checkbox-1",className:"mil-text-sm",children:"Accept the terms and conditions of personal data."})]})}),(0,i.jsx)("div",{className:"col-lg-12",children:(0,i.jsx)("button",{type:"submit",className:"mil-button mil-up",children:"Send Now"})})]}),(0,i.jsx)("div",{className:"form-status alert-success mil-mb-90",id:"contactFormStatus",style:{display:"none"}})]})}})})};l.default=s},8520:function(e){e.exports=JSON.parse('{"Xd":{"Tb":"https://formspree.io/f/your_api_key"},"Fs":{"j":{"B":"/img/logo/logo-light.png","w":"Logo"},"G":[{"label":"Home","link":"/","children":[{"label":"Homepage 1","link":"/"},{"label":"Homepage 2","link":"/home-2"},{"label":"Homepage 3","link":"/home-3"}]},{"label":"Services","link":"/services","children":[{"label":"Services List","link":"/services"},{"label":"Single Service","link":"/services/service-1"}]},{"label":"Projects","link":"/projects","children":[{"label":"Projects Grid","link":"/projects"},{"label":"Single Project","link":"/projects/project-1"}]},{"label":"Blog","link":"/blog","children":[{"label":"Blog list","link":"/blog"},{"label":"Publication","link":"/blog/the-infrastructure-that-powers-the-world"}]},{"label":"Contact Us","link":"/contact","children":0},{"label":"Other","link":"/team","children":[{"label":"About","link":"/about"},{"label":"Team","link":"/team"},{"label":"Team Member","link":"/team/team-01"},{"label":"Coming Soon","link":"/coming-soon"},{"label":"404","link":"/404"}]}]},"Mv":{"jY":{"B":"/img/logo/logo-light.png","w":"Logo"},"JG":"\xa9 2023 Ruizarch. All rights reserved.","GI":[{"label":"About","link":"/about"},{"label":"Services","link":"/services"},{"label":"Projects","link":"/projects"},{"label":"Blog","link":"/blog"},{"label":"Contact","link":"/contact"}]},"xs":[{"link":"https://facebook.com","title":"Facebook"},{"link":"https://twitter.com","title":"Twitter"},{"link":"https://instagram.com","title":"Instagram"},{"link":"https://youtube.com","title":"Youtube"}]}')}}]);