"use client";
import { useState, useRef, useEffect } from "react";
const categories = ["Models", "VFX", "Builds", "Scripting", "GFX", "UIs"];
const projects = [{title:"Medieval Fortress & Terrain Map",category:"Builds",images:["/portfolio/medieval-fortress-1.png","/portfolio/medieval-fortress-2.png","/portfolio/medieval-fortress-3.png","/portfolio/medieval-fortress-4.png"]},{title:"Twisted Lime",category:"Builds",images:["/portfolio/TwistedLime1.png","/portfolio/TwistedLime2.png","/portfolio/TwistedLime3.png","/portfolio/TwistedLime4.png"]}];
export default function Portfolio(){
 const [category,setCategory]=useState("Builds");
 const [indices,setIndices]=useState<Record<string,number>>({});
 const [expanded,setExpanded]=useState<string|null>(null);
 const touch=useRef<number|null>(null);
 const activeTitle=useRef<string|null>(null);
 const visible=projects.filter(p=>p.category===category);
 useEffect(()=>{
  const onKeyDown=(event:KeyboardEvent)=>{
   if(event.key==="Escape"&&expanded){setExpanded(null);return;}
   if(event.key!=="ArrowLeft"&&event.key!=="ArrowRight")return;
   const target=event.target as HTMLElement|null;
   if(target && (target.isContentEditable || ["INPUT","TEXTAREA","SELECT"].includes(target.tagName)))return;
   const activeProject=expanded?projects.find(p=>p.title===expanded):(projects.find(p=>p.category===category&&p.title===activeTitle.current)||projects.find(p=>p.category===category));
   if(!activeProject)return;
   event.preventDefault();
   const delta=event.key==="ArrowRight"?1:-1;
   setIndices(prev=>({...prev,[activeProject.title]:((prev[activeProject.title]||0)+delta+activeProject.images.length)%activeProject.images.length}));
  };
  window.addEventListener("keydown",onKeyDown);
  return ()=>window.removeEventListener("keydown",onKeyDown);
 },[category,expanded]);

 const move=(title:string,total:number,delta:number)=>setIndices(prev=>({...prev,[title]:((prev[title]||0)+delta+total)%total}));
 return <main>
  <header className="nav shell"><a className="brand" href="/"><img className="brandLogo" src="/TransparentLogoRS.png" alt=""/><span>RYUKUMA STUDIOS</span></a><nav className="navLinks"><a href="/">Home</a><a href="/portfolio" aria-current="page">Portfolio</a><a href="/contact">Contact Us</a><a href="/terms">Terms & Refunds</a></nav></header>
  <section className="portfolioPage shell"><div className="portfolioIntro"><h1>My Past Work</h1><p>A collection of projects and creative work by Ryukuma Studios.</p></div>
  <div className="portfolioTabs" role="tablist" aria-label="Portfolio categories">{categories.map(c=><button key={c} type="button" role="tab" aria-selected={category===c} className={category===c?"selected":""} onClick={()=>setCategory(c)}>{c}</button>)}</div>
  {visible.length?<div className="portfolioGrid">{visible.map(p=>{const i=indices[p.title]||0;return <article className="portfolioCard" key={p.title} onPointerEnter={()=>{activeTitle.current=p.title;}} onFocusCapture={()=>{activeTitle.current=p.title;}} onPointerDown={()=>{activeTitle.current=p.title;}}><div className="portfolioImage" onTouchStart={e=>touch.current=e.touches[0].clientX} onTouchEnd={e=>{if(touch.current!==null){const dx=e.changedTouches[0].clientX-touch.current;if(Math.abs(dx)>45)move(p.title,p.images.length,dx<0?1:-1);touch.current=null;}}}><button className="portfolioOpen" onClick={()=>setExpanded(p.title)} aria-label="Enlarge image"><img src={p.images[i]} alt={p.title+" — view "+(i+1)} /></button><button className="portfolioArrow left" onClick={()=>move(p.title,p.images.length,-1)} aria-label="Previous image">‹</button><button className="portfolioArrow right" onClick={()=>move(p.title,p.images.length,1)} aria-label="Next image">›</button><span className="portfolioCount">{i+1} / {p.images.length}</span></div><div className="portfolioCardBody"><h2>{p.title}</h2></div></article>})}</div>:<p className="portfolioEmpty">More projects coming soon.</p>}
  </section>
  {expanded&&(()=>{const p=projects.find(p=>p.title===expanded)!;const i=indices[p.title]||0;return <div className="portfolioLightbox" role="dialog" aria-modal="true" aria-label={p.title} onClick={()=>setExpanded(null)}><button className="portfolioClose" onClick={()=>setExpanded(null)} aria-label="Close">×</button><button className="portfolioArrow left" onClick={e=>{e.stopPropagation();move(p.title,p.images.length,-1)}} aria-label="Previous image">‹</button><img src={p.images[i]} alt={p.title+" — view "+(i+1)} onClick={e=>e.stopPropagation()}/><button className="portfolioArrow right" onClick={e=>{e.stopPropagation();move(p.title,p.images.length,1)}} aria-label="Next image">›</button><span className="portfolioCount">{i+1} / {p.images.length}</span></div>})()}
  <footer className="footer shell"><div className="brand footerBrand"><img className="brandLogo" src="/RyukumaFavicon.png" alt=""/><span>RYUKUMA STUDIOS</span></div><p>© 2026 Ryukuma Studios</p></footer>
 </main>
}