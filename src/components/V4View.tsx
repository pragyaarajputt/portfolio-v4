/* eslint-disable @next/next/no-img-element, @typescript-eslint/no-explicit-any, react/no-unescaped-entities */
// Generated from the v4 design mockup by convert.js, then edited by hand.
import React from "react";
import { css } from "@/lib/css";

export function V4View({ v }: { v: any }) {
  return (
    <>

<div style={{"fontFamily":"var(--font-archivo), system-ui, sans-serif","color":"#141414","background":"#FFFFFF","width":"100%","overflow":"hidden"}}>

{/* HERO BAND */}
<header style={{"position":"relative","backgroundColor":"#2C63FE","padding":"28px 24px 0","boxSizing":"border-box","display":"flex","flexDirection":"column","alignItems":"center"}}>
  <nav aria-label="Primary" style={{"width":"100%","maxWidth":"1040px","minHeight":"64px","boxSizing":"border-box","padding":"10px 10px 10px 28px","borderRadius":"999px","background":"rgba(255,255,255,0.86)","display":"flex","flexWrap":"wrap","alignItems":"center","justifyContent":"space-between","gap":"12px","boxShadow":"0 10px 30px rgba(20,30,10,0.18)"}}>
    <a href="#top" aria-label="Pragya Rajput, home" style={{"fontFamily":"var(--font-hand), cursive","fontSize":"22px","color":"#2E5C3A","textDecoration":"none","lineHeight":"1"}}>pr</a>
    <div style={{"display":"flex","flexWrap":"wrap","alignItems":"center","gap":"6px 26px","fontSize":"15px","fontWeight":"500"}}>
      <a href="#work" style={{"textDecoration":"none"}}>Work</a>
      <a href="#think" style={{"textDecoration":"none"}}>How I think</a>
      <a href="#toolkit" style={{"textDecoration":"none"}}>Toolkit</a>
      <a href="#hood" style={{"textDecoration":"none"}}>Under the hood</a>
      <a href="#experience" style={{"textDecoration":"none"}}>Experience</a>
    </div>
    <a href="#contact" className="v4-pill" style={{"minHeight":"44px","display":"inline-flex","alignItems":"center","gap":"8px","padding":"0 20px","borderRadius":"999px","background":"#E0B9E2","color":"#141414","textDecoration":"none","fontWeight":"600","fontSize":"15px"}}>Let’s chat
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
    </a>
  </nav>

  <div id="top" style={{"width":"100%","maxWidth":"1180px","display":"flex","flexDirection":"column","alignItems":"center","justifyContent":"center","textAlign":"center","padding":"72px 0 36px","gap":"18px"}}>
    <div style={{"display":"flex","flexWrap":"wrap","alignItems":"center","justifyContent":"center","gap":"16px 28px"}}>
      <div className="v4-sticker" style={{"transform":"rotate(-5deg)","width":"150px","padding":"8px 8px 10px","background":"#FFFFFF","borderRadius":"14px","boxShadow":"0 14px 30px rgba(10,20,80,0.3)","boxSizing":"border-box"}}>
        <img src="/assets/7f5461a6edd87a550a196d23591e9003.jpg" alt="Pixel-art illustration of Pragya coding at a desk" style={{"display":"block","width":"100%","height":"160px","objectFit":"cover","objectPosition":"50% 55%","borderRadius":"8px"}} />
      </div>
      <div style={{"display":"flex","flexWrap":"wrap","alignItems":"center","justifyContent":"center","gap":"10px 16px"}}>
        <span style={{"fontFamily":"var(--font-hand), cursive","fontSize":"clamp(34px, 4.4vw, 60px)","color":"#FFFFFF","lineHeight":"1.5"}}>pragya rajput</span>
        <span style={{"display":"inline-flex","alignItems":"center","minHeight":"34px","padding":"0 14px","borderRadius":"8px","background":"#E0B9E2","color":"#141414","fontSize":"15px","fontWeight":"600"}}>Full-stack developer</span>
      </div>
    </div>
    <h1 style={{"margin":"0","fontSize":"clamp(56px, 8.2vw, 124px)","lineHeight":"0.95","letterSpacing":"-0.045em","fontWeight":"500","color":"#FFFFFF","maxWidth":"1100px"}}>I build the product, not just the page.</h1>
    <p style={{"margin":"18px 0 0","maxWidth":"640px","fontSize":"19px","lineHeight":"1.55","color":"#FFFFFF"}}>About a year and a half of building real applications: React and Next.js interfaces, Node and Express APIs, the databases and auth underneath — and AI where it actually helps. I built PostDrip AI end to end, on my own.</p>
    <div style={{"display":"flex","flexWrap":"wrap","justifyContent":"center","gap":"12px","marginTop":"18px"}}>
      <a href="#work" className="v4-pill" style={{"minHeight":"48px","display":"inline-flex","alignItems":"center","padding":"0 24px","borderRadius":"999px","background":"#ECFF18","color":"#141414","textDecoration":"none","fontWeight":"600"}}>Explore projects</a>
      <a href={v.links.resume} target="_blank" rel="noopener noreferrer" className="v4-pill" style={{"minHeight":"48px","display":"inline-flex","alignItems":"center","padding":"0 24px","borderRadius":"999px","background":"#FFFFFF","color":"#141414","textDecoration":"none","fontWeight":"600"}}>Résumé (PDF) ↓</a>
      <a href={v.links.github} target="_blank" rel="noopener noreferrer" className="v4-pill" style={{"minHeight":"48px","display":"inline-flex","alignItems":"center","padding":"0 22px","borderRadius":"999px","border":"1.5px solid rgba(255,255,255,0.7)","color":"#FFFFFF","textDecoration":"none","fontWeight":"500"}}>GitHub ↗</a>
      <a href={v.links.linkedin} target="_blank" rel="noopener noreferrer" className="v4-pill" style={{"minHeight":"48px","display":"inline-flex","alignItems":"center","padding":"0 22px","borderRadius":"999px","border":"1.5px solid rgba(255,255,255,0.7)","color":"#FFFFFF","textDecoration":"none","fontWeight":"500"}}>LinkedIn ↗</a>
    </div>
    <p style={{"margin":"14px 0 0","fontSize":"14px","color":"#FFFFFF","fontFamily":"var(--font-jetbrains), monospace"}}>Open to full-time roles · New Delhi, India · IST</p>
  </div>

  <div className={v.heroCls}>
    <img src="/assets/cbea3cb445b92595d9f8e76fd9b68d23.jpg" alt="Halftone hands typing AI prompts on a keyboard under a search bar" style={{"display":"block","width":"100%","height":"auto"}} />
    <img className="v4-hand v4-hand-l" src="/assets/cbea3cb445b92595d9f8e76fd9b68d23.jpg" alt="" aria-hidden="true" style={{"position":"absolute","inset":"0","width":"100%","height":"100%","clipPath":"inset(43.5% 52.4% 0 26.5%)"}} />
    <img className="v4-hand v4-hand-r" src="/assets/cbea3cb445b92595d9f8e76fd9b68d23.jpg" alt="" aria-hidden="true" style={{"position":"absolute","inset":"0","width":"100%","height":"100%","clipPath":"inset(43.5% 26.6% 0 52.3%)"}} />
    <span className="v4-key" aria-hidden="true" style={{"position":"absolute","left":"39.6%","top":"50.6%","width":"2.6%","height":"4%","borderRadius":"3px","background":"#ECFF18","animationDelay":"0ms"}}></span>
    <span className="v4-key" aria-hidden="true" style={{"position":"absolute","left":"58.8%","top":"47.4%","width":"2.6%","height":"4%","borderRadius":"3px","background":"#ECFF18","animationDelay":"150ms"}}></span>
    <span className="v4-key" aria-hidden="true" style={{"position":"absolute","left":"47.6%","top":"58.2%","width":"2.6%","height":"4%","borderRadius":"3px","background":"#ECFF18","animationDelay":"300ms"}}></span>
    <span className="v4-key" aria-hidden="true" style={{"position":"absolute","left":"33%","top":"46.4%","width":"2.6%","height":"4%","borderRadius":"3px","background":"#ECFF18","animationDelay":"450ms"}}></span>
    <div aria-hidden="true" style={{"position":"absolute","left":"21.2%","top":"20.9%","width":"53%","height":"7.6%","background":"#FFFFFF","display":"flex","alignItems":"center","overflow":"hidden","whiteSpace":"nowrap","fontFamily":"var(--font-archivo), system-ui, sans-serif","fontSize":"2.5cqw","color":"#141414"}}>{v.promptText}<span className="v4-caret" style={{"color":"#2C63FE","marginLeft":"1px"}}>▍</span></div>
  </div>
</header>

{/* COLLAGE STRIP */}
<section className="v4-grid" aria-label="Snapshot" style={{"padding":"72px 24px 40px"}}>
  <div style={{"maxWidth":"1200px","margin":"0 auto","display":"flex","flexWrap":"wrap","justifyContent":"center","alignItems":"flex-start","gap":"40px"}}>
    <div style={{"width":"380px","maxWidth":"100%","display":"flex","flexDirection":"column","gap":"28px","marginTop":"30px"}}>
      <div className="v4-sticker" style={{"transform":"rotate(-1.5deg)","background":"#1E0730","color":"#FFF9E8","borderRadius":"6px","fontFamily":"var(--font-geist-mono), var(--font-jetbrains), monospace","fontSize":"13px","lineHeight":"1.8","boxShadow":"0 24px 60px -24px rgba(42,11,63,0.55)"}}>
        <div style={{"display":"flex","alignItems":"center","gap":"7px","padding":"10px 14px","borderBottom":"1px solid rgba(255,249,232,0.2)","fontSize":"11px","letterSpacing":"0.1em","textTransform":"uppercase","color":"#F0E2EC"}}>
          <span style={{"width":"10px","height":"10px","borderRadius":"99px","background":"#FF6159"}}></span><span style={{"width":"10px","height":"10px","borderRadius":"99px","background":"#FFBD2E"}}></span><span style={{"width":"10px","height":"10px","borderRadius":"99px","background":"#28C941"}}></span>
          <span style={{"marginLeft":"8px"}}>pragya@portfolio — zsh</span>
        </div>
        <div style={{"padding":"16px","display":"flex","flexDirection":"column","gap":"2px"}}>
          <span><span style={{"color":"#FFF7B0"}}>~</span> <span style={{"color":"#EAB7E3"}}>$</span> whoami</span>
          <span style={{"display":"grid","gridTemplateColumns":"90px minmax(0, 1fr)"}}><span style={{"color":"#EAB7E3"}}>name</span><span>Pragya Rajput</span></span>
          <span style={{"display":"grid","gridTemplateColumns":"90px minmax(0, 1fr)"}}><span style={{"color":"#EAB7E3"}}>role</span><span>full-stack developer</span></span>
          <span style={{"display":"grid","gridTemplateColumns":"90px minmax(0, 1fr)"}}><span style={{"color":"#EAB7E3"}}>flagship</span><span style={{"color":"#FFF7B0"}}>PostDrip AI</span></span>
          <span style={{"marginTop":"8px"}}><span style={{"color":"#FFF7B0"}}>~</span> <span style={{"color":"#EAB7E3"}}>$</span> stack --by-layer</span>
          <span style={{"color":"#F0E2EC"}}>→ interface · server · data · auth · ai</span>
          <span style={{"marginTop":"8px"}}><span style={{"color":"#FFF7B0"}}>~</span> <span style={{"color":"#EAB7E3"}}>$</span> <span className="v4-caret" style={{"color":"#FFF7B0"}}>▍</span></span>
        </div>
      </div>
      <div style={{"display":"flex","alignItems":"flex-start","gap":"16px"}}>
    <div className="v4-sticker" style={{"transform":"rotate(-4deg)","width":"220px","flex":"none","background":"#FFFFFF","borderRadius":"16px","padding":"18px","boxShadow":"0 14px 36px rgba(0,0,0,0.14)","display":"flex","flexDirection":"column","gap":"10px"}}>
      <div style={{"fontFamily":"var(--font-jetbrains), monospace","fontSize":"12px","color":"#2E5C3A"}}>POST /api/posts/schedule</div>
      <div style={{"display":"flex","alignItems":"center","gap":"8px"}}><span style={{"padding":"3px 8px","borderRadius":"6px","background":"#ECFF18","fontFamily":"var(--font-jetbrains), monospace","fontSize":"12px","fontWeight":"500"}}>201</span><span style={{"fontSize":"14px"}}>“status”: “scheduled”</span></div>
      <div style={{"fontFamily":"var(--font-jetbrains), monospace","fontSize":"11px","color":"#5C5C5C"}}>Illustrative — the pattern, not production source</div>
    </div>
        <img className="v4-sticker" src="/assets/4b9091c38107caa04833fe6e45223aad.jpg" alt="Terminal folder icon reading hello, world" style={{"transform":"rotate(6deg)","width":"150px","height":"auto","mixBlendMode":"multiply","marginTop":"-10px"}} />
      </div>
    </div>
    <div style={{"position":"relative","width":"320px","maxWidth":"100%"}}>
      <div style={{"width":"320px","maxWidth":"100%","height":"360px","borderRadius":"6px","background":"#E9EFE3","boxShadow":"0 18px 40px rgba(0,0,0,0.16)","overflow":"hidden","display":"flex","alignItems":"flex-end","justifyContent":"center"}}><img src="/pragya-cutout.webp" alt="Pragya Rajput" style={{"width":"100%","height":"100%","objectFit":"cover","objectPosition":"center top"}} /></div>
      <img src="/assets/ac7ecbb9ddf3b708f3cc72774a1d5807.jpg" alt="" aria-hidden="true" style={{"position":"absolute","top":"-52px","right":"30px","width":"130px","height":"130px","objectFit":"cover","transform":"rotate(10deg)","mixBlendMode":"multiply"}} />
    </div>
    <div style={{"width":"360px","maxWidth":"100%","display":"flex","flexDirection":"column","gap":"26px","marginTop":"60px"}}>
      <div className="v4-sticker" style={{"transform":"rotate(1.5deg)","background":"radial-gradient(120% 100% at 100% 0%, #3D0B6E 0%, rgba(61,11,110,0) 65%), radial-gradient(100% 90% at 0% 100%, #93518F 0%, rgba(147,81,143,0) 70%), #2A0B3F","color":"#FFF9E8","borderRadius":"6px","boxShadow":"0 24px 60px -24px rgba(42,11,63,0.55)","fontFamily":"var(--font-geist-mono), var(--font-jetbrains), monospace","fontSize":"13px","lineHeight":"1.7"}}>
        <div style={{"display":"flex","justifyContent":"space-between","padding":"10px 16px","borderBottom":"1px solid rgba(255,249,232,0.2)","color":"#F0E2EC","fontSize":"11px","letterSpacing":"0.08em","textTransform":"uppercase"}}><span>pragya.ts</span><span>TS</span></div>
        <div style={{"padding":"14px 16px","whiteSpace":"pre"}}>const <span style={{"color":"#EAB7E3"}}>pragya</span> = {'{'}{"\n  "}role: <span style={{"color":"#F0E2EC"}}>"full-stack developer"</span>,{"\n  "}stack: [<span style={{"color":"#F0E2EC"}}>"react"</span>, <span style={{"color":"#F0E2EC"}}>"next"</span>, <span style={{"color":"#F0E2EC"}}>"node"</span>],{"\n  "}flagship: <span style={{"color":"#FFF7B0"}}>"PostDrip AI"</span>,{"\n"}{'}'};<span className="v4-caret" style={{"color":"#FFF7B0"}}>▍</span></div>
      </div>
      <div style={{"display":"flex","alignItems":"center","gap":"18px"}}>
    <div className="v4-sticker" style={{"transform":"rotate(3deg)","width":"220px","flex":"none","background":"#F2D64B","borderRadius":"18px","padding":"18px 20px","boxShadow":"0 14px 36px rgba(0,0,0,0.14)","display":"flex","flexDirection":"column","gap":"8px"}}>
      <div style={{"fontSize":"12px","fontWeight":"600","letterSpacing":"0.08em","textTransform":"uppercase"}}>Now building</div>
      <div style={{"fontSize":"26px","fontWeight":"600","letterSpacing":"-0.02em"}}>PostDrip AI</div>
      <div style={{"height":"6px","borderRadius":"99px","background":"rgba(20,20,20,0.15)"}}><div style={{"width":"68%","height":"6px","borderRadius":"99px","background":"#141414"}}></div></div>
      <div style={{"fontSize":"13px"}}>AI social scheduling · Live</div>
    </div>
        <img className="v4-sticker" src="/assets/cadd351f2fcba8a5d013c003f6ccf265.jpg" alt="" aria-hidden="true" style={{"transform":"rotate(-8deg)","width":"110px","height":"110px","borderRadius":"18px","objectFit":"cover","boxShadow":"0 12px 28px rgba(0,0,0,0.16)"}} />
      </div>
    </div>
  </div>
</section>

{/* ABOUT */}
<section className="v4-grid" aria-labelledby="about-h" style={{"padding":"80px 24px 140px"}}>
  <div style={{"maxWidth":"1180px","margin":"0 auto","display":"flex","flexWrap":"wrap","gap":"48px 80px","alignItems":"flex-start"}}>
    <h2 id="about-h" style={{"flex":"1 1 420px","margin":"0","fontSize":"clamp(64px, 9vw, 132px)","lineHeight":"0.92","letterSpacing":"-0.05em","fontWeight":"500"}}>a little about me</h2>
    <div style={{"flex":"1 1 420px","display":"flex","flexDirection":"column","gap":"18px","fontSize":"18px","lineHeight":"1.6","paddingTop":"12px"}}>
      <p style={{"margin":"0"}}>I started on the frontend, building a React interface for a fire detection platform at Tejo Tech. At CETIZION Verifica I moved across the whole stack, and the work I’m proudest of removed a chore from someone’s month: payslips HR used to build by hand, proposals that used to be put together and emailed one at a time.</p>
      <p style={{"margin":"0"}}>PostDrip AI is where that shows best: one product I took from an empty repo to a live app, with a background publishing worker and 240 backend tests.</p>
      <p style={{"margin":"8px 0 0","fontFamily":"var(--font-hand), cursive","fontSize":"20px","lineHeight":"1.7","color":"#2E5C3A"}}>i build the product, not just the page.</p>
    </div>
  </div>
  <div style={{"maxWidth":"1180px","margin":"72px auto 0","display":"grid","gridTemplateColumns":"repeat(5, minmax(0, 1fr))","borderTop":"1.5px solid #141414"}}>
    <div style={{"padding":"18px 16px 0 0","display":"flex","flexDirection":"column","gap":"6px"}}><span style={{"fontSize":"13px","color":"#5C5C5C"}}>Role</span><span style={{"fontSize":"20px","fontWeight":"600"}}>Full-stack developer</span></div>
    <div style={{"padding":"18px 16px 0 0","display":"flex","flexDirection":"column","gap":"6px"}}><span style={{"fontSize":"13px","color":"#5C5C5C"}}>Experience</span><span style={{"fontSize":"20px","fontWeight":"600"}}>~1.5 years</span></div>
    <div style={{"padding":"18px 16px 0 0","display":"flex","flexDirection":"column","gap":"6px"}}><span style={{"fontSize":"13px","color":"#5C5C5C"}}>Core stack</span><span style={{"fontSize":"20px","fontWeight":"600"}}>Next.js · Node · PostgreSQL</span></div>
    <div style={{"padding":"18px 16px 0 0","display":"flex","flexDirection":"column","gap":"6px"}}><span style={{"fontSize":"13px","color":"#5C5C5C"}}>Flagship</span><span style={{"fontSize":"20px","fontWeight":"600"}}>PostDrip AI</span></div>
    <div style={{"padding":"18px 16px 0 0","display":"flex","flexDirection":"column","gap":"6px"}}><span style={{"fontSize":"13px","color":"#5C5C5C"}}>Education</span><span style={{"fontSize":"20px","fontWeight":"600"}}>B.Tech, CSE</span></div>
  </div>
</section>

{/* PROJECTS BAND */}
<section id="work" className="v4-grain" aria-labelledby="work-h" style={{"backgroundColor":"#4FA8DE","padding":"110px 24px 120px"}}>
  <div style={{"maxWidth":"1180px","margin":"0 auto","display":"flex","flexDirection":"column","alignItems":"center","gap":"56px"}}>
    <div style={{"textAlign":"center","display":"flex","flexDirection":"column","alignItems":"center"}}>
      <h2 id="work-h" style={{"margin":"0","fontSize":"clamp(80px, 12vw, 176px)","lineHeight":"0.85","letterSpacing":"-0.055em","fontWeight":"500","color":"#141414"}}>projects</h2>
      <span style={{"fontFamily":"var(--font-hand), cursive","fontSize":"clamp(22px, 2.6vw, 34px)","color":"#FFFFFF","marginTop":"4px","transform":"rotate(-3deg)"}}>things i’ve actually shipped</span>
    </div>

    <div style={{"width":"100%","maxWidth":"980px","background":"#FFFFFF","borderRadius":"22px","boxShadow":"0 30px 70px rgba(10,40,70,0.28)","overflow":"hidden"}}>
      <div style={{"height":"44px","display":"flex","alignItems":"center","gap":"8px","padding":"0 18px","borderBottom":"1px solid #ECECEC"}}>
        <span style={{"width":"12px","height":"12px","borderRadius":"99px","background":"#FF6159"}}></span>
        <span style={{"width":"12px","height":"12px","borderRadius":"99px","background":"#FFBD2E"}}></span>
        <span style={{"width":"12px","height":"12px","borderRadius":"99px","background":"#28C941"}}></span>
        <span style={{"marginLeft":"14px","fontFamily":"var(--font-jetbrains), monospace","fontSize":"12px","color":"#5C5C5C"}}>{v.proj.url}</span>
      </div>
      {v.proj.isFlagship && (<>
        <div style={{"position":"relative","display":"grid","gridTemplateColumns":"180px minmax(0, 1fr)","minHeight":"420px","background":"#FAFAF7"}}>
          <nav aria-label="PostDrip AI prototype" style={{"borderRight":"1px solid #ECECEC","padding":"16px 12px","display":"flex","flexDirection":"column","gap":"4px","background":"#FFFFFF"}}>
            <div style={{"height":"40px","display":"flex","alignItems":"center","padding":"0 8px","fontSize":"18px","fontWeight":"700","letterSpacing":"-0.02em"}}>PostDrip<span style={{"color":"#2C63FE"}}>.</span></div>
            <div style={{"height":"12px"}}></div>
            {v.nav.map((n: any, nIndex: number) => (<React.Fragment key={nIndex}>
              <button type="button" aria-pressed={n.sel} onClick={n.go} style={css(n.style)}>{n.label}</button>
            </React.Fragment>))}
            <button type="button" onClick={v.togglePause} style={{"marginTop":"auto","minHeight":"36px","borderRadius":"999px","border":"1px solid #CFCFCF","background":"#FFFFFF","color":"#141414","font":"inherit","fontSize":"12px","cursor":"pointer"}}>{v.pauseLabel}</button>
          </nav>
          <img className="v4-cursor" src="/assets/06504d54914a2a6251820a4828b20295.jpg" alt="" aria-hidden="true" style={css(v.cursorStyle)} />
          <div style={{"padding":"20px 24px","display":"flex","flexDirection":"column","gap":"16px","minWidth":"0"}}>
            <div style={{"display":"flex","alignItems":"center","justifyContent":"space-between","gap":"12px"}}>
              <span style={{"fontSize":"20px","fontWeight":"600","letterSpacing":"-0.02em"}}>{v.screenTitle}</span>
              <span style={{"fontFamily":"var(--font-jetbrains), monospace","fontSize":"11px","color":"#5C5C5C"}}>Prototype mockup · not a screenshot</span>
            </div>
            {v.scCal && (<>
        <div className="v4-screen" style={{"display":"grid","gridTemplateColumns":"repeat(5, minmax(0, 1fr))","gap":"10px"}}>
          <div style={{"display":"flex","flexDirection":"column","gap":"8px"}}><span style={{"fontSize":"12px","fontWeight":"600","color":"#5C5C5C"}}>MON</span><span style={{"padding":"10px","borderRadius":"10px","background":"#E0B9E2","fontSize":"13px"}}>09:00 · Post</span></div>
          <div style={{"display":"flex","flexDirection":"column","gap":"8px"}}><span style={{"fontSize":"12px","fontWeight":"600","color":"#5C5C5C"}}>TUE</span><span style={{"padding":"10px","borderRadius":"10px","background":"#ECFF18","fontSize":"13px"}}>13:30 · Post</span></div>
          <div style={{"display":"flex","flexDirection":"column","gap":"8px"}}><span style={{"fontSize":"12px","fontWeight":"600","color":"#5C5C5C"}}>WED</span><span style={{"padding":"10px","borderRadius":"10px","border":"1.5px dashed #2E5C3A","fontSize":"13px","color":"#2E5C3A"}}>AI draft · review</span><span style={{"padding":"10px","borderRadius":"10px","background":"#E0B9E2","fontSize":"13px"}}>18:00 · Post</span></div>
          <div style={{"display":"flex","flexDirection":"column","gap":"8px"}}><span style={{"fontSize":"12px","fontWeight":"600","color":"#5C5C5C"}}>THU</span></div>
          <div style={{"display":"flex","flexDirection":"column","gap":"8px"}}><span style={{"fontSize":"12px","fontWeight":"600","color":"#5C5C5C"}}>FRI</span><span style={{"padding":"10px","borderRadius":"10px","background":"#ECFF18","fontSize":"13px"}}>10:15 · Post</span></div>
        </div>
            </>)}
            {v.scComp && (<>
              <div className="v4-screen" style={{"display":"grid","gridTemplateColumns":"minmax(0, 1.5fr) minmax(0, 1fr)","gap":"16px"}}>
                <div style={{"background":"#FFFFFF","border":"1px solid #E4E4E4","borderRadius":"14px","padding":"16px","display":"flex","flexDirection":"column","gap":"12px"}}>
                  <span style={{"fontSize":"12px","fontWeight":"600","color":"#5C5C5C"}}>Caption</span>
                  <p style={{"margin":"0","minHeight":"96px","fontSize":"15px","lineHeight":"1.55"}}>{v.draftShown}<span className="v4-caret" style={{"color":"#2C63FE"}}>▍</span></p>
                  <div style={{"display":"flex","gap":"10px","alignItems":"center"}}><span style={css(v.genStyle)}>Generate draft</span><span style={{"fontSize":"12px","color":"#5C5C5C"}}>{v.genNote}</span></div>
                </div>
                <div style={{"display":"flex","flexDirection":"column","gap":"10px"}}>
                  <span style={{"fontSize":"12px","fontWeight":"600","color":"#5C5C5C"}}>Post to</span>
                  <div style={{"display":"flex","flexWrap":"wrap","gap":"6px"}}><span style={{"padding":"6px 12px","borderRadius":"999px","background":"#E0B9E2","fontSize":"13px"}}>Instagram</span><span style={{"padding":"6px 12px","borderRadius":"999px","border":"1px solid #CFCFCF","fontSize":"13px"}}>LinkedIn</span></div>
                  <span style={{"fontSize":"12px","fontWeight":"600","color":"#5C5C5C","marginTop":"6px"}}>When</span>
                  <span style={{"padding":"10px 12px","borderRadius":"10px","background":"#FFFFFF","border":"1px solid #E4E4E4","fontSize":"14px"}}>Fri · 09:00</span>
                  <span style={{"marginTop":"6px","minHeight":"40px","display":"inline-flex","alignItems":"center","justifyContent":"center","borderRadius":"999px","background":"#141414","color":"#FFFFFF","fontSize":"14px","fontWeight":"600"}}>Schedule</span>
                </div>
              </div>
            </>)}
            {v.scQueue && (<>
              <div className="v4-screen" style={{"display":"flex","flexDirection":"column","background":"#FFFFFF","border":"1px solid #E4E4E4","borderRadius":"14px","fontSize":"14px"}}>
                <div style={{"display":"grid","gridTemplateColumns":"110px minmax(0, 1fr) 120px","gap":"12px","alignItems":"center","padding":"14px 16px","borderBottom":"1px solid #EFEFEF"}}><span style={{"fontFamily":"var(--font-jetbrains), monospace","fontSize":"12px"}}>Fri · 09:00</span><span>Instagram · Spring menu announcement</span><span style={{"justifySelf":"end","padding":"4px 10px","borderRadius":"999px","background":"#ECFF18","fontSize":"12px","fontWeight":"600"}}>Scheduled</span></div>
                <div style={{"display":"grid","gridTemplateColumns":"110px minmax(0, 1fr) 120px","gap":"12px","alignItems":"center","padding":"14px 16px","borderBottom":"1px solid #EFEFEF"}}><span style={{"fontFamily":"var(--font-jetbrains), monospace","fontSize":"12px"}}>Tue · 13:30</span><span>LinkedIn · Behind the scenes</span><span style={{"justifySelf":"end","padding":"4px 10px","borderRadius":"999px","background":"#ECFF18","fontSize":"12px","fontWeight":"600"}}>Scheduled</span></div>
                <div style={{"display":"grid","gridTemplateColumns":"110px minmax(0, 1fr) 120px","gap":"12px","alignItems":"center","padding":"14px 16px","borderBottom":"1px solid #EFEFEF"}}><span style={{"fontFamily":"var(--font-jetbrains), monospace","fontSize":"12px"}}>Sun · 18:00</span><span>LinkedIn · AI draft</span><span style={{"justifySelf":"end","padding":"3px 10px","borderRadius":"999px","border":"1.5px dashed #2E5C3A","color":"#2E5C3A","fontSize":"12px","fontWeight":"600"}}>Needs review</span></div>
                <div style={{"display":"grid","gridTemplateColumns":"110px minmax(0, 1fr) 120px","gap":"12px","alignItems":"center","padding":"14px 16px"}}><span style={{"fontFamily":"var(--font-jetbrains), monospace","fontSize":"12px"}}>Mon · 09:00</span><span>Instagram · Weekly tip</span><span style={{"justifySelf":"end","padding":"4px 10px","borderRadius":"999px","background":"#E0B9E2","fontSize":"12px","fontWeight":"600"}}>Published</span></div>
              </div>
            </>)}
            {v.scAcc && (<>
              <div className="v4-screen" style={{"display":"flex","flexDirection":"column","gap":"12px"}}>
                <div style={{"display":"flex","alignItems":"center","justifyContent":"space-between","gap":"12px","padding":"16px","background":"#FFFFFF","border":"1px solid #E4E4E4","borderRadius":"14px"}}><span style={{"display":"flex","flexDirection":"column","gap":"2px"}}><strong>Instagram</strong><span style={{"fontSize":"13px","color":"#5C5C5C"}}>Connected via OAuth 2.0</span></span><span style={{"padding":"5px 12px","borderRadius":"999px","background":"#DDEFD3","color":"#2E5C3A","fontSize":"12px","fontWeight":"600"}}>Connected</span></div>
                <div style={{"display":"flex","alignItems":"center","justifyContent":"space-between","gap":"12px","padding":"16px","background":"#FFFFFF","border":"1px solid #E4E4E4","borderRadius":"14px"}}><span style={{"display":"flex","flexDirection":"column","gap":"2px"}}><strong>LinkedIn</strong><span style={{"fontSize":"13px","color":"#5C5C5C"}}>Not connected</span></span><span style={{"minHeight":"36px","display":"inline-flex","alignItems":"center","padding":"0 16px","borderRadius":"999px","background":"#E0B9E2","fontSize":"13px","fontWeight":"600"}}>Connect</span></div>
                <div style={{"padding":"14px 16px","borderRadius":"14px","border":"1.5px dashed #CFCFCF","fontSize":"13px","color":"#444444"}}>Role: Editor · can draft and schedule · role checked on every request</div>
              </div>
            </>)}
          </div>
        </div>
      </>)}
      {v.proj.isBtc && (<v.BtcScreen />)}
      {v.proj.isOther && (<>
        <div style={{"aspectRatio":"16 / 7","background":"#F1F4F7","display":"flex","flexDirection":"column","alignItems":"center","justifyContent":"center","gap":"10px","padding":"24px","textAlign":"center","fontFamily":"var(--font-jetbrains), monospace","fontSize":"13px","color":"#3D5A73"}}><span style={{"fontSize":"40px"}} aria-hidden="true">🔒</span><span>Internal tool · {v.proj.stack}</span><span>Screens are private, so there’s no preview here.</span></div>
      </>)}
      <div style={{"display":"flex","flexWrap":"wrap","alignItems":"baseline","gap":"8px 32px","padding":"20px 26px 24px","borderTop":"1px solid #ECECEC"}}>
        <span style={{"flex":"1 1 240px","fontSize":"26px","fontWeight":"600","letterSpacing":"-0.02em"}}>{v.proj.name}</span>
        <span style={{"fontSize":"15px"}}>{v.proj.role}</span>
        <span style={{"fontSize":"15px","color":"#444444"}}>{v.proj.stack}</span>
        <span style={{"fontSize":"15px","color":"#444444"}}>{v.proj.year}</span>
      </div>
      <div style={{"padding":"0 26px 26px","display":"flex","flexWrap":"wrap","gap":"18px 40px","alignItems":"flex-end"}}>
        <p style={{"flex":"1 1 420px","margin":"0","fontSize":"16px","lineHeight":"1.6","color":"#2B2B2B"}}>{v.proj.blurb}</p>
        <div style={{"display":"flex","gap":"10px"}}>
          {v.proj.code && (<a href={v.proj.code} target="_blank" rel="noopener noreferrer" className="v4-pill" style={{"minHeight":"44px","display":"inline-flex","alignItems":"center","padding":"0 18px","borderRadius":"999px","background":"#141414","color":"#FFFFFF","textDecoration":"none","fontWeight":"600","fontSize":"14px"}}>Source code ↗</a>)}
          {v.proj.live && (<a href={v.proj.live} target="_blank" rel="noopener noreferrer" className="v4-pill" style={{"minHeight":"44px","display":"inline-flex","alignItems":"center","padding":"0 18px","borderRadius":"999px","border":"1.5px solid #141414","textDecoration":"none","fontWeight":"600","fontSize":"14px"}}>Live ↗</a>)}{v.proj.note && (<span style={{"fontSize":"14px","color":"#5C5C5C"}}>{v.proj.note}</span>)}
        </div>
      </div>
    </div>

    <div role="group" aria-label="Choose a project" style={{"display":"flex","alignItems":"flex-end","gap":"14px","padding":"12px 16px","borderRadius":"24px","background":"rgba(255,255,255,0.45)","boxShadow":"0 10px 30px rgba(10,40,70,0.18)"}}>
      {v.dock.map((d: any, dIndex: number) => (<React.Fragment key={dIndex}>
        <div style={{"display":"flex","flexDirection":"column","alignItems":"center","gap":"6px"}}>
          <button type="button" className="v4-dock" aria-pressed={d.sel} aria-label={d.name} onClick={d.pick} style={css(d.style)}>{d.mark}</button>
          <span style={css(d.dot)}></span>
        </div>
      </React.Fragment>))}
    </div>

    <div style={{"width":"100%","maxWidth":"980px","borderTop":"1.5px solid #141414"}}>
      {v.dock.map((d: any, dIndex: number) => (<React.Fragment key={dIndex}>
        <button type="button" className="v4-row" onClick={d.pick} style={{"width":"100%","minHeight":"64px","display":"grid","gridTemplateColumns":"2fr 1.4fr 1.6fr 0.6fr","alignItems":"center","gap":"16px","padding":"0 10px","border":"0","borderBottom":"1.5px solid #141414","background":"transparent","font":"inherit","color":"#141414","textAlign":"left","cursor":"pointer"}}>
          <span style={{"fontSize":"20px","fontWeight":"600"}}>{d.name}</span>
          <span style={{"fontSize":"15px"}}>{d.role}</span>
          <span style={{"fontSize":"15px"}}>{d.stack}</span>
          <span style={{"fontSize":"15px","textAlign":"right"}}>{d.year}</span>
        </button>
      </React.Fragment>))}
    </div>
  </div>
</section>

{/* HOW I THINK */}
<section id="think" className="v4-grid" aria-labelledby="think-h" style={{"padding":"130px 24px 120px"}}>
  <div style={{"maxWidth":"1180px","margin":"0 auto"}}>
    <div style={{"display":"flex","flexWrap":"wrap","alignItems":"flex-end","justifyContent":"space-between","gap":"24px"}}>
      <div style={{"display":"flex","flexDirection":"column"}}>
        <h2 id="think-h" style={{"margin":"0","fontSize":"clamp(64px, 9vw, 132px)","lineHeight":"0.9","letterSpacing":"-0.05em","fontWeight":"500"}}>how i think</h2>
        <span style={{"fontFamily":"var(--font-hand), cursive","fontSize":"22px","color":"#2E5C3A","marginTop":"10px"}}>problem first, then the whole stack</span>
      </div>
      <p style={{"margin":"0","maxWidth":"380px","fontSize":"16px","lineHeight":"1.6","color":"#2B2B2B"}}>Four habits I try to bring to every feature.</p>
    </div>
    <div style={{"marginTop":"64px","display":"grid","gridTemplateColumns":"repeat(4, minmax(0, 1fr))","gap":"22px"}}>
      <div className="v4-sticker" style={{"transform":"rotate(-2deg)","background":"#E0B9E2","borderRadius":"20px","padding":"26px 22px","minHeight":"260px","display":"flex","flexDirection":"column","gap":"14px"}}>
        <span style={{"fontFamily":"var(--font-jetbrains), monospace","fontSize":"13px"}}>01</span>
        <h3 style={{"margin":"0","fontSize":"26px","lineHeight":"1.05","letterSpacing":"-0.02em","fontWeight":"600"}}>Problem before schema</h3>
        <p style={{"margin":"0","fontSize":"15px","lineHeight":"1.55"}}>Before I open an editor I want to know who’s stuck and why. Plenty of good code is good code for the wrong problem.</p>
      </div>
      <div className="v4-sticker" style={{"transform":"rotate(1.5deg)","background":"#ECFF18","borderRadius":"20px","padding":"26px 22px","minHeight":"260px","display":"flex","flexDirection":"column","gap":"14px"}}>
        <span style={{"fontFamily":"var(--font-jetbrains), monospace","fontSize":"13px"}}>02</span>
        <h3 style={{"margin":"0","fontSize":"26px","lineHeight":"1.05","letterSpacing":"-0.02em","fontWeight":"600"}}>The whole product</h3>
        <p style={{"margin":"0","fontSize":"15px","lineHeight":"1.55"}}>A button is a promise the API has to keep. I design the screen, the request, the state and the error case together.</p>
      </div>
      <div className="v4-sticker" style={{"transform":"rotate(-1deg)","background":"#BFE3F7","borderRadius":"20px","padding":"26px 22px","minHeight":"260px","display":"flex","flexDirection":"column","gap":"14px"}}>
        <span style={{"fontFamily":"var(--font-jetbrains), monospace","fontSize":"13px"}}>03</span>
        <h3 style={{"margin":"0","fontSize":"26px","lineHeight":"1.05","letterSpacing":"-0.02em","fontWeight":"600"}}>Built to be changed</h3>
        <p style={{"margin":"0","fontSize":"15px","lineHeight":"1.55"}}>Small modules, typed boundaries, boring names. The next person to read my code is usually me, three weeks later.</p>
      </div>
      <div className="v4-sticker" style={{"transform":"rotate(2deg)","background":"#FBE1EA","borderRadius":"20px","padding":"26px 22px","minHeight":"260px","display":"flex","flexDirection":"column","gap":"14px"}}>
        <span style={{"fontFamily":"var(--font-jetbrains), monospace","fontSize":"13px"}}>04</span>
        <h3 style={{"margin":"0","fontSize":"26px","lineHeight":"1.05","letterSpacing":"-0.02em","fontWeight":"600"}}>Finished, not just working</h3>
        <p style={{"margin":"0","fontSize":"15px","lineHeight":"1.55"}}>Loading states, clear errors, keyboard focus. A feature is done when it feels done to the person using it.</p>
      </div>
    </div>
    <div style={{"marginTop":"56px","display":"grid","gridTemplateColumns":"repeat(4, minmax(0, 1fr))","gap":"22px","borderTop":"1.5px solid #141414","paddingTop":"22px","fontSize":"15px","lineHeight":"1.55"}}>
      <p style={{"margin":"0"}}><strong>APIs</strong> — shaped from the screen backwards: what does this view need, in one request?</p>
      <p style={{"margin":"0"}}><strong>State</strong> — server data stays on the server; forms are checked with the same Zod schemas the API uses.</p>
      <p style={{"margin":"0"}}><strong>Components</strong> — built once, with props for the variations that exist, not every hypothetical.</p>
      <p style={{"margin":"0"}}><strong>Quality</strong> — small commits, readable Git history, and code review I’d want to receive.</p>
    </div>
  </div>
</section>

{/* TOOLKIT */}
<section id="toolkit" className="v4-grain" aria-labelledby="tool-h" style={{"backgroundColor":"#2E5C3A","color":"#FFFFFF","padding":"120px 24px"}}>
  <div style={{"maxWidth":"1180px","margin":"0 auto"}}>
    <div style={{"display":"flex","flexDirection":"column"}}>
      <h2 id="tool-h" style={{"margin":"0","fontSize":"clamp(64px, 9vw, 132px)","lineHeight":"0.9","letterSpacing":"-0.05em","fontWeight":"500"}}>toolkit</h2>
      <span style={{"fontFamily":"var(--font-hand), cursive","fontSize":"22px","color":"#ECFF18","marginTop":"10px"}}>grouped the way i actually work</span>
    </div>
    <div style={{"marginTop":"56px","display":"grid","gridTemplateColumns":"repeat(3, minmax(0, 1fr))","gap":"40px 32px"}}>
      <div style={{"display":"flex","flexDirection":"column","gap":"14px"}}><h3 style={{"margin":"0","fontSize":"15px","fontWeight":"600","letterSpacing":"0.08em","textTransform":"uppercase","color":"#F2F5CF"}}>Frontend</h3><div style={{"display":"flex","flexWrap":"wrap","gap":"8px"}}><span style={{"padding":"8px 14px","borderRadius":"999px","background":"#FFFFFF","color":"#141414","fontSize":"15px"}}>React.js</span><span style={{"padding":"8px 14px","borderRadius":"999px","background":"#FFFFFF","color":"#141414","fontSize":"15px"}}>Next.js</span><span style={{"padding":"8px 14px","borderRadius":"999px","background":"#FFFFFF","color":"#141414","fontSize":"15px"}}>TypeScript</span><span style={{"padding":"8px 14px","borderRadius":"999px","background":"#FFFFFF","color":"#141414","fontSize":"15px"}}>JavaScript</span><span style={{"padding":"8px 14px","borderRadius":"999px","background":"#FFFFFF","color":"#141414","fontSize":"15px"}}>HTML · CSS</span><span style={{"padding":"8px 14px","borderRadius":"999px","background":"#FFFFFF","color":"#141414","fontSize":"15px"}}>Tailwind CSS</span><span style={{"padding":"8px 14px","borderRadius":"999px","background":"#FFFFFF","color":"#141414","fontSize":"15px"}}>React Native</span></div></div>
      <div style={{"display":"flex","flexDirection":"column","gap":"14px"}}><h3 style={{"margin":"0","fontSize":"15px","fontWeight":"600","letterSpacing":"0.08em","textTransform":"uppercase","color":"#F2F5CF"}}>Backend</h3><div style={{"display":"flex","flexWrap":"wrap","gap":"8px"}}><span style={{"padding":"8px 14px","borderRadius":"999px","background":"#FFFFFF","color":"#141414","fontSize":"15px"}}>Node.js</span><span style={{"padding":"8px 14px","borderRadius":"999px","background":"#FFFFFF","color":"#141414","fontSize":"15px"}}>Express.js</span><span style={{"padding":"8px 14px","borderRadius":"999px","background":"#FFFFFF","color":"#141414","fontSize":"15px"}}>Python · FastAPI</span><span style={{"padding":"8px 14px","borderRadius":"999px","background":"#FFFFFF","color":"#141414","fontSize":"15px"}}>REST APIs</span></div></div>
      <div style={{"display":"flex","flexDirection":"column","gap":"14px"}}><h3 style={{"margin":"0","fontSize":"15px","fontWeight":"600","letterSpacing":"0.08em","textTransform":"uppercase","color":"#F2F5CF"}}>Databases</h3><div style={{"display":"flex","flexWrap":"wrap","gap":"8px"}}><span style={{"padding":"8px 14px","borderRadius":"999px","background":"#FFFFFF","color":"#141414","fontSize":"15px"}}>PostgreSQL</span><span style={{"padding":"8px 14px","borderRadius":"999px","background":"#FFFFFF","color":"#141414","fontSize":"15px"}}>MySQL</span><span style={{"padding":"8px 14px","borderRadius":"999px","background":"#FFFFFF","color":"#141414","fontSize":"15px"}}>MongoDB</span></div></div>
      <div style={{"display":"flex","flexDirection":"column","gap":"14px"}}><h3 style={{"margin":"0","fontSize":"15px","fontWeight":"600","letterSpacing":"0.08em","textTransform":"uppercase","color":"#F2F5CF"}}>Auth &amp; integrations</h3><div style={{"display":"flex","flexWrap":"wrap","gap":"8px"}}><span style={{"padding":"8px 14px","borderRadius":"999px","background":"#E0B9E2","color":"#141414","fontSize":"15px"}}>JWT</span><span style={{"padding":"8px 14px","borderRadius":"999px","background":"#E0B9E2","color":"#141414","fontSize":"15px"}}>OAuth 2.0</span><span style={{"padding":"8px 14px","borderRadius":"999px","background":"#E0B9E2","color":"#141414","fontSize":"15px"}}>RBAC</span></div></div>
      <div style={{"display":"flex","flexDirection":"column","gap":"14px"}}><h3 style={{"margin":"0","fontSize":"15px","fontWeight":"600","letterSpacing":"0.08em","textTransform":"uppercase","color":"#F2F5CF"}}>AI &amp; automation</h3><div style={{"display":"flex","flexWrap":"wrap","gap":"8px"}}><span style={{"padding":"8px 14px","borderRadius":"999px","background":"#ECFF18","color":"#141414","fontSize":"15px"}}>LLM APIs (Claude, Gemini)</span><span style={{"padding":"8px 14px","borderRadius":"999px","background":"#ECFF18","color":"#141414","fontSize":"15px"}}>Workflows</span><span style={{"padding":"8px 14px","borderRadius":"999px","background":"#ECFF18","color":"#141414","fontSize":"15px"}}>Scheduled jobs</span></div></div>
      <div style={{"display":"flex","flexDirection":"column","gap":"14px"}}><h3 style={{"margin":"0","fontSize":"15px","fontWeight":"600","letterSpacing":"0.08em","textTransform":"uppercase","color":"#F2F5CF"}}>Developer tools</h3><div style={{"display":"flex","flexWrap":"wrap","gap":"8px"}}><span style={{"padding":"8px 14px","borderRadius":"999px","background":"#FFFFFF","color":"#141414","fontSize":"15px"}}>Git · GitHub</span><span style={{"padding":"8px 14px","borderRadius":"999px","background":"#FFFFFF","color":"#141414","fontSize":"15px"}}>Docker</span><span style={{"padding":"8px 14px","borderRadius":"999px","background":"#FFFFFF","color":"#141414","fontSize":"15px"}}>Vercel</span><span style={{"padding":"8px 14px","borderRadius":"999px","background":"#FFFFFF","color":"#141414","fontSize":"15px"}}>Vitest · pytest</span></div></div>
    </div>
  </div>
</section>

{/* UNDER THE HOOD */}
<section id="hood" className="v4-grain" aria-labelledby="hood-h" style={{"backgroundColor":"#141414","color":"#F1EEE7","padding":"130px 24px 120px"}}>
  <div style={{"maxWidth":"1180px","margin":"0 auto"}}>
    <div style={{"display":"flex","flexWrap":"wrap","justifyContent":"space-between","alignItems":"flex-end","gap":"32px"}}>
      <div style={{"display":"flex","flexDirection":"column","gap":"6px"}}>
        <h2 id="hood-h" style={{"margin":"0","fontSize":"clamp(64px, 9vw, 132px)","lineHeight":"0.9","letterSpacing":"-0.05em","fontWeight":"500","color":"#FFFFFF"}}>under the hood</h2>
        <span style={{"fontFamily":"var(--font-hand), cursive","fontSize":"22px","lineHeight":"1.7","color":"#ECFF18"}}>what happens after you click schedule</span>
      </div>
      <div style={{"display":"flex","flexDirection":"column","gap":"10px","maxWidth":"40ch"}}>
        <p style={{"margin":"0","fontSize":"17px","lineHeight":"1.65","color":"#92949B"}}>The PostDrip AI request, step by step. Select any step to see what that part does and why it’s built that way.</p>
        <span style={{"alignSelf":"flex-start","padding":"4px 8px","borderRadius":"6px","border":"1px dashed #F2D64B","fontFamily":"var(--font-jetbrains), monospace","fontSize":"11px","color":"#F2D64B"}}>Checked against the PostDrip source</span>
      </div>
    </div>

    <div style={{"marginTop":"48px","display":"flex","flexWrap":"wrap","gap":"24px","alignItems":"flex-start"}}>
      <div style={{"flex":"0 1 862px","minWidth":"0","overflowX":"auto","borderRadius":"10px","border":"1px solid #2A2D33","background":"rgba(16,17,19,0.6)"}}>
        <div role="group" aria-label="Flowchart: what happens after you click Schedule" style={{"position":"relative","width":"860px","height":"920px"}}>
          {/* lanes */}
          <div style={{"position":"absolute","left":"215px","top":"0","width":"215px","height":"920px","background":"rgba(241,238,231,0.025)","borderLeft":"1px solid #22252A","borderRight":"1px solid #22252A"}}></div>
          <div style={{"position":"absolute","left":"645px","top":"0","width":"215px","height":"920px","background":"rgba(241,238,231,0.025)","borderLeft":"1px solid #22252A"}}></div>
          <div style={{"position":"absolute","left":"16px","top":"20px","fontFamily":"var(--font-jetbrains), monospace","fontSize":"11px","color":"#7C7F86"}}>client</div>
          <div style={{"position":"absolute","left":"231px","top":"20px","fontFamily":"var(--font-jetbrains), monospace","fontSize":"11px","color":"#7C7F86"}}>server</div>
          <div style={{"position":"absolute","left":"446px","top":"20px","fontFamily":"var(--font-jetbrains), monospace","fontSize":"11px","color":"#7C7F86"}}>services &amp; data</div>
          <div style={{"position":"absolute","left":"661px","top":"20px","fontFamily":"var(--font-jetbrains), monospace","fontSize":"11px","color":"#7C7F86"}}>external</div>

          {/* arrows */}
          <svg aria-hidden="true" width="475" height="8" viewBox="0 0 475 8" preserveAspectRatio="none" style={{"position":"absolute","left":"193px","top":"92px","width":"475px","height":"8px","overflow":"visible","fill":"none","stroke":"#F2D64B","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round","strokeDasharray":"6 6"}}><defs><marker id="dc-arrow-head-filled-1" orient="auto" markerWidth="5" markerHeight="5" refX="2" refY="2" overflow="visible"><path d="M0 0 L4 2 L0 4 Z" fill="#F2D64B" stroke="none" style={{"stroke":"none","fill":"context-stroke"}} /></marker></defs><path d="M 475 4 L 4 4" markerEnd="url(#dc-arrow-head-filled-1)" /></svg>
          <svg aria-hidden="true" width="8" height="80" viewBox="0 0 8 80" preserveAspectRatio="none" style={{"position":"absolute","left":"104px","top":"128px","width":"8px","height":"80px","overflow":"visible","fill":"none","stroke":"#7C7F86","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"}}><path d="M 4 0 L 4 80" /></svg>
          <svg aria-hidden="true" width="129" height="8" viewBox="0 0 129 8" preserveAspectRatio="none" style={{"position":"absolute","left":"108px","top":"204px","width":"129px","height":"8px","overflow":"visible","fill":"none","stroke":"#7C7F86","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"}}><defs><marker id="dc-arrow-head-filled-2" orient="auto" markerWidth="5" markerHeight="5" refX="2" refY="2" overflow="visible"><path d="M0 0 L4 2 L0 4 Z" fill="#7C7F86" stroke="none" style={{"stroke":"none","fill":"context-stroke"}} /></marker></defs><path d="M 0 4 L 125 4" markerEnd="url(#dc-arrow-head-filled-2)" /></svg>
          <svg aria-hidden="true" width="8" height="55" viewBox="0 0 8 55" preserveAspectRatio="none" style={{"position":"absolute","left":"318px","top":"240px","width":"8px","height":"55px","overflow":"visible","fill":"none","stroke":"#7C7F86","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"}}><defs><marker id="dc-arrow-head-filled-3" orient="auto" markerWidth="5" markerHeight="5" refX="2" refY="2" overflow="visible"><path d="M0 0 L4 2 L0 4 Z" fill="#7C7F86" stroke="none" style={{"stroke":"none","fill":"context-stroke"}} /></marker></defs><path d="M 4 0 L 4 51" markerEnd="url(#dc-arrow-head-filled-3)" /></svg>
          <svg aria-hidden="true" width="69" height="8" viewBox="0 0 69 8" preserveAspectRatio="none" style={{"position":"absolute","left":"169px","top":"340px","width":"69px","height":"8px","overflow":"visible","fill":"none","stroke":"#F6A6C1","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"}}><defs><marker id="dc-arrow-head-filled-4" orient="auto" markerWidth="5" markerHeight="5" refX="2" refY="2" overflow="visible"><path d="M0 0 L4 2 L0 4 Z" fill="#F6A6C1" stroke="none" style={{"stroke":"none","fill":"context-stroke"}} /></marker></defs><path d="M 69 4 L 4 4" markerEnd="url(#dc-arrow-head-filled-4)" /></svg>
          <svg aria-hidden="true" width="51" height="8" viewBox="0 0 51 8" preserveAspectRatio="none" style={{"position":"absolute","left":"406px","top":"340px","width":"51px","height":"8px","overflow":"visible","fill":"none","stroke":"#ECFF18","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"}}><defs><marker id="dc-arrow-head-filled-5" orient="auto" markerWidth="5" markerHeight="5" refX="2" refY="2" overflow="visible"><path d="M0 0 L4 2 L0 4 Z" fill="#ECFF18" stroke="none" style={{"stroke":"none","fill":"context-stroke"}} /></marker></defs><path d="M 0 4 L 47 4" markerEnd="url(#dc-arrow-head-filled-5)" /></svg>
          <svg aria-hidden="true" width="8" height="55" viewBox="0 0 8 55" preserveAspectRatio="none" style={{"position":"absolute","left":"534px","top":"376px","width":"8px","height":"55px","overflow":"visible","fill":"none","stroke":"#7C7F86","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"}}><defs><marker id="dc-arrow-head-filled-6" orient="auto" markerWidth="5" markerHeight="5" refX="2" refY="2" overflow="visible"><path d="M0 0 L4 2 L0 4 Z" fill="#7C7F86" stroke="none" style={{"stroke":"none","fill":"context-stroke"}} /></marker></defs><path d="M 4 0 L 4 51" markerEnd="url(#dc-arrow-head-filled-6)" /></svg>
          <svg aria-hidden="true" width="289" height="8" viewBox="0 0 289 8" preserveAspectRatio="none" style={{"position":"absolute","left":"169px","top":"460px","width":"289px","height":"8px","overflow":"visible","fill":"none","stroke":"#ECFF18","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"}}><defs><marker id="dc-arrow-head-filled-7" orient="auto" markerWidth="5" markerHeight="5" refX="2" refY="2" overflow="visible"><path d="M0 0 L4 2 L0 4 Z" fill="#ECFF18" stroke="none" style={{"stroke":"none","fill":"context-stroke"}} /></marker></defs><path d="M 289 4 L 4 4" markerEnd="url(#dc-arrow-head-filled-7)" /></svg>
          <svg aria-hidden="true" width="8" height="55" viewBox="0 0 8 55" preserveAspectRatio="none" style={{"position":"absolute","left":"534px","top":"496px","width":"8px","height":"55px","overflow":"visible","fill":"none","stroke":"#7C7F86","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round","strokeDasharray":"6 6"}}><defs><marker id="dc-arrow-head-filled-8" orient="auto" markerWidth="5" markerHeight="5" refX="2" refY="2" overflow="visible"><path d="M0 0 L4 2 L0 4 Z" fill="#7C7F86" stroke="none" style={{"stroke":"none","fill":"context-stroke"}} /></marker></defs><path d="M 4 0 L 4 51" markerEnd="url(#dc-arrow-head-filled-8)" /></svg>
          <svg aria-hidden="true" width="49" height="8" viewBox="0 0 49 8" preserveAspectRatio="none" style={{"position":"absolute","left":"618px","top":"580px","width":"49px","height":"8px","overflow":"visible","fill":"none","stroke":"#7C7F86","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"}}><defs><marker id="dc-arrow-head-filled-9" orient="auto" markerWidth="5" markerHeight="5" refX="2" refY="2" overflow="visible"><path d="M0 0 L4 2 L0 4 Z" fill="#7C7F86" stroke="none" style={{"stroke":"none","fill":"context-stroke"}} /></marker></defs><path d="M 0 4 L 45 4" markerEnd="url(#dc-arrow-head-filled-9)" /></svg>
          <svg aria-hidden="true" width="8" height="59" viewBox="0 0 8 59" preserveAspectRatio="none" style={{"position":"absolute","left":"748px","top":"616px","width":"8px","height":"59px","overflow":"visible","fill":"none","stroke":"#7C7F86","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"}}><defs><marker id="dc-arrow-head-filled-10" orient="auto" markerWidth="5" markerHeight="5" refX="2" refY="2" overflow="visible"><path d="M0 0 L4 2 L0 4 Z" fill="#7C7F86" stroke="none" style={{"stroke":"none","fill":"context-stroke"}} /></marker></defs><path d="M 4 0 L 4 55" markerEnd="url(#dc-arrow-head-filled-10)" /></svg>
          <svg aria-hidden="true" width="49" height="8" viewBox="0 0 49 8" preserveAspectRatio="none" style={{"position":"absolute","left":"619px","top":"720px","width":"49px","height":"8px","overflow":"visible","fill":"none","stroke":"#ECFF18","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"}}><defs><marker id="dc-arrow-head-filled-11" orient="auto" markerWidth="5" markerHeight="5" refX="2" refY="2" overflow="visible"><path d="M0 0 L4 2 L0 4 Z" fill="#ECFF18" stroke="none" style={{"stroke":"none","fill":"context-stroke"}} /></marker></defs><path d="M 49 4 L 4 4" markerEnd="url(#dc-arrow-head-filled-11)" /></svg>
          <svg aria-hidden="true" width="8" height="55" viewBox="0 0 8 55" preserveAspectRatio="none" style={{"position":"absolute","left":"748px","top":"772px","width":"8px","height":"55px","overflow":"visible","fill":"none","stroke":"#F6A6C1","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"}}><defs><marker id="dc-arrow-head-filled-12" orient="auto" markerWidth="5" markerHeight="5" refX="2" refY="2" overflow="visible"><path d="M0 0 L4 2 L0 4 Z" fill="#F6A6C1" stroke="none" style={{"stroke":"none","fill":"context-stroke"}} /></marker></defs><path d="M 4 0 L 4 51" markerEnd="url(#dc-arrow-head-filled-12)" /></svg>
          <svg aria-hidden="true" width="268" height="8" viewBox="0 0 268 8" preserveAspectRatio="none" style={{"position":"absolute","left":"400px","top":"856px","width":"268px","height":"8px","overflow":"visible","fill":"none","stroke":"#F6A6C1","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round","strokeDasharray":"6 6"}}><path d="M 0 4 L 268 4" /></svg>
          <svg aria-hidden="true" width="8" height="276" viewBox="0 0 8 276" preserveAspectRatio="none" style={{"position":"absolute","left":"396px","top":"584px","width":"8px","height":"276px","overflow":"visible","fill":"none","stroke":"#F6A6C1","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round","strokeDasharray":"6 6"}}><path d="M 4 0 L 4 276" /></svg>
          <svg aria-hidden="true" width="57" height="8" viewBox="0 0 57 8" preserveAspectRatio="none" style={{"position":"absolute","left":"400px","top":"580px","width":"57px","height":"8px","overflow":"visible","fill":"none","stroke":"#F6A6C1","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"}}><defs><marker id="dc-arrow-head-filled-13" orient="auto" markerWidth="5" markerHeight="5" refX="2" refY="2" overflow="visible"><path d="M0 0 L4 2 L0 4 Z" fill="#F6A6C1" stroke="none" style={{"stroke":"none","fill":"context-stroke"}} /></marker></defs><path d="M 0 4 L 53 4" markerEnd="url(#dc-arrow-head-filled-13)" /></svg>

          {/* cards */}
          <button type="button" className={`v4f-card ${v.fsel.client}`} aria-pressed={v.fpress.client} onClick={v.fpick.client} style={{"position":"absolute","left":"24px","top":"64px","width":"168px","height":"64px","boxSizing":"border-box","padding":"8px 10px","display":"flex","alignItems":"center","justifyContent":"center","textAlign":"center","background":"#1E1E1E","border":"1px solid #3A3A3A","borderRadius":"14px","color":"#F1EEE7","font":"inherit","fontSize":"14px","lineHeight":"1.35","cursor":"pointer"}}><span><b style={{"fontWeight":"600"}}>Click Schedule</b><br /><span style={{"fontFamily":"var(--font-jetbrains), monospace","fontSize":"11px","color":"#92949B"}}>Next.js · React</span></span></button>
          <button type="button" className={`v4f-card ${v.fsel.ai}`} aria-pressed={v.fpress.ai} onClick={v.fpick.ai} style={{"position":"absolute","left":"668px","top":"64px","width":"168px","height":"64px","boxSizing":"border-box","padding":"8px 10px","display":"flex","alignItems":"center","justifyContent":"center","textAlign":"center","background":"#1E1E1E","border":"1px dashed #F2D64B","borderRadius":"14px","color":"#F2D64B","font":"inherit","fontSize":"14px","lineHeight":"1.35","cursor":"pointer"}}><span><b style={{"fontWeight":"600"}}>AI draft · optional</b><br /><span style={{"fontFamily":"var(--font-jetbrains), monospace","fontSize":"11px","color":"#92949B"}}>Claude · Gemini</span></span></button>
          <button type="button" className={`v4f-card ${v.fsel.api}`} aria-pressed={v.fpress.api} onClick={v.fpick.api} style={{"position":"absolute","left":"238px","top":"176px","width":"168px","height":"64px","boxSizing":"border-box","padding":"8px 10px","display":"flex","alignItems":"center","justifyContent":"center","textAlign":"center","background":"#1E1E1E","border":"1px solid #3A3A3A","borderRadius":"14px","color":"#F1EEE7","font":"inherit","fontSize":"13px","lineHeight":"1.35","cursor":"pointer"}}><span><b style={{"fontFamily":"var(--font-jetbrains), monospace","fontWeight":"500"}}>POST /posts/schedule</b><br /><span style={{"fontFamily":"var(--font-jetbrains), monospace","fontSize":"11px","color":"#92949B"}}>Express · REST</span></span></button>
          <button type="button" className={`v4f-card v4f-dia ${v.fsel.auth}`} aria-pressed={v.fpress.auth} onClick={v.fpick.auth} style={{"position":"absolute","left":"238px","top":"296px","width":"168px","height":"96px","boxSizing":"border-box","padding":"8px 28px","display":"flex","alignItems":"center","justifyContent":"center","textAlign":"center","background":"#3B2F45","border":"0","clipPath":"polygon(50% 0, 100% 50%, 50% 100%, 0 50%)","color":"#F1EEE7","font":"inherit","fontSize":"13px","lineHeight":"1.3","cursor":"pointer"}}><span>JWT valid +<br />role allowed?</span></button>
          <button type="button" className={`v4f-card ${v.fsel.auth}`} aria-pressed={v.fpress.auth} onClick={v.fpick.auth} style={{"position":"absolute","left":"24px","top":"312px","width":"144px","height":"64px","boxSizing":"border-box","padding":"8px 10px","display":"flex","alignItems":"center","justifyContent":"center","textAlign":"center","background":"rgba(246,166,193,0.10)","border":"1px solid #F6A6C1","borderRadius":"14px","color":"#F6A6C1","font":"inherit","fontSize":"14px","lineHeight":"1.35","cursor":"pointer"}}><span><b style={{"fontWeight":"600"}}>403 · Forbidden</b><br /><span style={{"fontFamily":"var(--font-jetbrains), monospace","fontSize":"11px","color":"#92949B"}}>shown to user</span></span></button>
          <button type="button" className={`v4f-card ${v.fsel.db}`} aria-pressed={v.fpress.db} onClick={v.fpick.db} style={{"position":"absolute","left":"458px","top":"312px","width":"160px","height":"64px","boxSizing":"border-box","padding":"8px 10px","display":"flex","alignItems":"center","justifyContent":"center","textAlign":"center","background":"#1E1E1E","border":"1px solid #3A3A3A","borderRadius":"14px","color":"#F1EEE7","font":"inherit","fontSize":"14px","lineHeight":"1.35","cursor":"pointer"}}><span><b style={{"fontWeight":"600"}}>Validate &amp; store</b><br /><span style={{"fontFamily":"var(--font-jetbrains), monospace","fontSize":"11px","color":"#92949B"}}>PostgreSQL · scheduled</span></span></button>
          <button type="button" className={`v4f-card ${v.fsel.queue}`} aria-pressed={v.fpress.queue} onClick={v.fpick.queue} style={{"position":"absolute","left":"458px","top":"432px","width":"160px","height":"64px","boxSizing":"border-box","padding":"8px 10px","display":"flex","alignItems":"center","justifyContent":"center","textAlign":"center","background":"#1E1E1E","border":"1px solid #3A3A3A","borderRadius":"14px","color":"#F1EEE7","font":"inherit","fontSize":"14px","lineHeight":"1.35","cursor":"pointer"}}><span><b style={{"fontWeight":"600"}}>Enqueue delayed job</b><br /><span style={{"fontFamily":"var(--font-jetbrains), monospace","fontSize":"11px","color":"#92949B"}}>runs at publishAt</span></span></button>
          <button type="button" className={`v4f-card ${v.fsel.client}`} aria-pressed={v.fpress.client} onClick={v.fpick.client} style={{"position":"absolute","left":"24px","top":"432px","width":"144px","height":"64px","boxSizing":"border-box","padding":"8px 10px","display":"flex","alignItems":"center","justifyContent":"center","textAlign":"center","background":"#ECFF18","border":"1px solid #ECFF18","borderRadius":"14px","color":"#141414","font":"inherit","fontSize":"14px","lineHeight":"1.35","cursor":"pointer"}}><span><b style={{"fontWeight":"600"}}>201 · Scheduled</b><br /><span style={{"fontFamily":"var(--font-jetbrains), monospace","fontSize":"11px","color":"#3A3A3A"}}>on the calendar</span></span></button>
          <button type="button" className={`v4f-card ${v.fsel.queue}`} aria-pressed={v.fpress.queue} onClick={v.fpick.queue} style={{"position":"absolute","left":"458px","top":"552px","width":"160px","height":"64px","boxSizing":"border-box","padding":"8px 10px","display":"flex","alignItems":"center","justifyContent":"center","textAlign":"center","background":"#1E1E1E","border":"1px solid #3A3A3A","borderRadius":"14px","color":"#F1EEE7","font":"inherit","fontSize":"14px","lineHeight":"1.35","cursor":"pointer"}}><span><b style={{"fontWeight":"600"}}>Worker picks job</b><br /><span style={{"fontFamily":"var(--font-jetbrains), monospace","fontSize":"11px","color":"#92949B"}}>at publishAt</span></span></button>
          <button type="button" className={`v4f-card ${v.fsel.social}`} aria-pressed={v.fpress.social} onClick={v.fpick.social} style={{"position":"absolute","left":"668px","top":"552px","width":"168px","height":"64px","boxSizing":"border-box","padding":"8px 10px","display":"flex","alignItems":"center","justifyContent":"center","textAlign":"center","background":"#1E1E1E","border":"1px solid #3A3A3A","borderRadius":"14px","color":"#F1EEE7","font":"inherit","fontSize":"14px","lineHeight":"1.35","cursor":"pointer"}}><span><b style={{"fontWeight":"600"}}>Publish via API</b><br /><span style={{"fontFamily":"var(--font-jetbrains), monospace","fontSize":"11px","color":"#92949B"}}>5 platform adapters</span></span></button>
          <button type="button" className={`v4f-card v4f-dia ${v.fsel.social}`} aria-pressed={v.fpress.social} onClick={v.fpick.social} style={{"position":"absolute","left":"668px","top":"676px","width":"168px","height":"96px","boxSizing":"border-box","padding":"8px 28px","display":"flex","alignItems":"center","justifyContent":"center","textAlign":"center","background":"#3B2F45","border":"0","clipPath":"polygon(50% 0, 100% 50%, 50% 100%, 0 50%)","color":"#F1EEE7","font":"inherit","fontSize":"13px","lineHeight":"1.3","cursor":"pointer"}}><span>Published<br />OK?</span></button>
          <button type="button" className={`v4f-card ${v.fsel.db}`} aria-pressed={v.fpress.db} onClick={v.fpick.db} style={{"position":"absolute","left":"458px","top":"692px","width":"160px","height":"64px","boxSizing":"border-box","padding":"8px 10px","display":"flex","alignItems":"center","justifyContent":"center","textAlign":"center","background":"#ECFF18","border":"1px solid #ECFF18","borderRadius":"14px","color":"#141414","font":"inherit","fontSize":"14px","lineHeight":"1.35","cursor":"pointer"}}><span><b style={{"fontWeight":"600"}}>Mark Published</b><br /><span style={{"fontFamily":"var(--font-jetbrains), monospace","fontSize":"11px","color":"#3A3A3A"}}>status · PostgreSQL</span></span></button>
          <button type="button" className={`v4f-card ${v.fsel.queue}`} aria-pressed={v.fpress.queue} onClick={v.fpick.queue} style={{"position":"absolute","left":"668px","top":"828px","width":"168px","height":"64px","boxSizing":"border-box","padding":"8px 10px","display":"flex","alignItems":"center","justifyContent":"center","textAlign":"center","background":"rgba(246,166,193,0.10)","border":"1px solid #F6A6C1","borderRadius":"14px","color":"#F6A6C1","font":"inherit","fontSize":"14px","lineHeight":"1.35","cursor":"pointer"}}><span><b style={{"fontWeight":"600"}}>Retry with backoff</b><br /><span style={{"fontFamily":"var(--font-jetbrains), monospace","fontSize":"11px","color":"#92949B"}}>30s · 2m · 8m · 30m</span></span></button>

          {/* labels */}
          <div style={{"position":"absolute","left":"378px","top":"68px","width":"104px","textAlign":"center","fontFamily":"var(--font-jetbrains), monospace","fontSize":"12px","lineHeight":"16px","color":"#F2D64B"}}>optional draft</div>
          <div style={{"position":"absolute","left":"191px","top":"316px","width":"24px","textAlign":"center","fontFamily":"var(--font-jetbrains), monospace","fontSize":"12px","lineHeight":"16px","color":"#F6A6C1"}}>no</div>
          <div style={{"position":"absolute","left":"418px","top":"316px","width":"28px","textAlign":"center","fontFamily":"var(--font-jetbrains), monospace","fontSize":"12px","lineHeight":"16px","color":"#ECFF18"}}>yes</div>
          <div style={{"position":"absolute","left":"269px","top":"436px","width":"88px","textAlign":"center","fontFamily":"var(--font-jetbrains), monospace","fontSize":"12px","lineHeight":"16px","color":"#ECFF18"}}>201 Created</div>
          <div style={{"position":"absolute","left":"550px","top":"515px","width":"84px","fontFamily":"var(--font-jetbrains), monospace","fontSize":"12px","lineHeight":"16px","color":"#7C7F86"}}>time passes</div>
          <div style={{"position":"absolute","left":"629px","top":"696px","width":"28px","textAlign":"center","fontFamily":"var(--font-jetbrains), monospace","fontSize":"12px","lineHeight":"16px","color":"#ECFF18"}}>yes</div>
          <div style={{"position":"absolute","left":"764px","top":"791px","width":"24px","fontFamily":"var(--font-jetbrains), monospace","fontSize":"12px","lineHeight":"16px","color":"#F6A6C1"}}>no</div>
          <div style={{"position":"absolute","left":"412px","top":"714px","width":"44px","fontFamily":"var(--font-jetbrains), monospace","fontSize":"12px","lineHeight":"16px","color":"#F6A6C1"}}>retry</div>
        </div>
      </div>

      <aside aria-live="polite" style={{"flex":"1 1 280px","minWidth":"0","borderRadius":"10px","border":"1px solid #2A2D33","background":"#1E1E1E","padding":"28px","display":"flex","flexDirection":"column","gap":"18px"}}>
        <span style={{"fontFamily":"var(--font-jetbrains), monospace","fontSize":"11px","letterSpacing":"0.08em","textTransform":"uppercase","color":"#E0B9E2"}}>Selected · {v.fnode.label}</span>
        <strong style={{"fontWeight":"600","fontSize":"26px","lineHeight":"1.15","letterSpacing":"-0.02em"}}>{v.fnode.title}</strong>
        <div style={{"display":"flex","flexDirection":"column","gap":"6px"}}><span style={{"fontFamily":"var(--font-jetbrains), monospace","fontSize":"11px","color":"#92949B"}}>WHAT IT DOES</span><p style={{"margin":"0","fontSize":"15px","lineHeight":"1.6","color":"#C9C6BE"}}>{v.fnode.does}</p></div>
        <div style={{"display":"flex","flexDirection":"column","gap":"6px"}}><span style={{"fontFamily":"var(--font-jetbrains), monospace","fontSize":"11px","color":"#92949B"}}>WHY THIS WAY</span><p style={{"margin":"0","fontSize":"15px","lineHeight":"1.6","color":"#C9C6BE"}}>{v.fnode.why}</p></div>
        <span style={{"fontFamily":"var(--font-jetbrains), monospace","fontSize":"12px","color":"#7C7F86"}}>{v.fnode.tech}</span>
        <div style={{"marginTop":"8px","paddingTop":"16px","borderTop":"1px solid #2A2D33","display":"flex","flexDirection":"column","gap":"8px","fontSize":"13px","color":"#92949B"}}>
          <span style={{"display":"flex","alignItems":"center","gap":"10px"}}><span style={{"width":"22px","height":"2px","background":"#7C7F86"}}></span>main path</span>
          <span style={{"display":"flex","alignItems":"center","gap":"10px"}}><span style={{"width":"22px","height":"2px","background":"#ECFF18"}}></span>success</span>
          <span style={{"display":"flex","alignItems":"center","gap":"10px"}}><span style={{"width":"22px","height":"2px","background":"#F6A6C1"}}></span>rejected or retried</span>
          <span style={{"display":"flex","alignItems":"center","gap":"10px"}}><span style={{"width":"22px","height":"0","borderTop":"2px dashed #F2D64B"}}></span>optional AI step</span>
        </div>
      </aside>
    </div>
  </div>
</section>

{/* EXPERIENCE */}
<section id="experience" className="v4-grid" aria-labelledby="exp-h" style={{"padding":"40px 24px 120px"}}>
  <div style={{"maxWidth":"1180px","margin":"0 auto"}}>
    <div style={{"display":"flex","flexWrap":"wrap","alignItems":"flex-end","justifyContent":"space-between","gap":"24px"}}>
      <div style={{"display":"flex","flexDirection":"column"}}>
        <h2 id="exp-h" style={{"margin":"0","fontSize":"clamp(64px, 9vw, 132px)","lineHeight":"0.9","letterSpacing":"-0.05em","fontWeight":"500"}}>experience</h2>
        <span style={{"fontFamily":"var(--font-hand), cursive","fontSize":"22px","color":"#2E5C3A","marginTop":"10px"}}>where i’ve been building</span>
      </div>
      <a href={v.links.resume} target="_blank" rel="noopener noreferrer" className="v4-pill" style={{"minHeight":"44px","display":"inline-flex","alignItems":"center","padding":"0 20px","borderRadius":"999px","background":"#E0B9E2","textDecoration":"none","fontWeight":"600"}}>Full résumé (PDF) ↓</a>
    </div>
    <div style={{"marginTop":"48px","borderTop":"1.5px solid #141414"}}>
      <div className="v4-row" style={{"display":"grid","gridTemplateColumns":"1fr 1.6fr 1.6fr","gap":"24px","padding":"28px 10px","borderBottom":"1.5px solid #141414"}}>
        <div style={{"display":"flex","flexDirection":"column","gap":"4px"}}><span style={{"fontWeight":"600"}}>May 2025 — Now</span><span style={{"fontSize":"14px","color":"#5C5C5C"}}>Full-time · New Delhi</span></div>
        <div style={{"display":"flex","flexDirection":"column","gap":"4px"}}><span style={{"fontSize":"24px","fontWeight":"600","letterSpacing":"-0.02em"}}>Jr. Software Developer</span><span>CETIZION Verifica</span></div>
        <div style={{"display":"flex","flexDirection":"column","gap":"8px","fontSize":"15px","lineHeight":"1.55"}}><span>Internal business products, end to end: data model, API and the screens people use daily</span><span>Payslip automation that cut manual HR effort by 80%; PlanetPulse Minutes, an AI meeting-minutes service</span><span style={{"fontFamily":"var(--font-jetbrains), monospace","fontSize":"12px","color":"#2E5C3A"}}>React · Next.js · Node.js · MongoDB · Python · FastAPI</span></div>
      </div>
      <div className="v4-row" style={{"display":"grid","gridTemplateColumns":"1fr 1.6fr 1.6fr","gap":"24px","padding":"28px 10px","borderBottom":"1.5px solid #141414"}}>
        <div style={{"display":"flex","flexDirection":"column","gap":"4px"}}><span style={{"fontWeight":"600"}}>Jan 2025 — Mar 2025</span><span style={{"fontSize":"14px","color":"#5C5C5C"}}>Internship</span></div>
        <div style={{"display":"flex","flexDirection":"column","gap":"4px"}}><span style={{"fontSize":"24px","fontWeight":"600","letterSpacing":"-0.02em"}}>Web Developer Intern</span><span>Tejo Tech Group</span></div>
        <div style={{"display":"flex","flexDirection":"column","gap":"8px","fontSize":"15px","lineHeight":"1.55"}}><span>A responsive React interface for Flaresens, a fire detection platform</span><span>Improved page load time by 20% with reusable components</span><span style={{"fontFamily":"var(--font-jetbrains), monospace","fontSize":"12px","color":"#2E5C3A"}}>React · Tailwind CSS</span></div>
      </div>
      <div className="v4-row" style={{"display":"grid","gridTemplateColumns":"1fr 1.6fr 1.6fr","gap":"24px","padding":"28px 10px","borderBottom":"1.5px solid #141414"}}>
        <div style={{"display":"flex","flexDirection":"column","gap":"4px"}}><span style={{"fontWeight":"600"}}>2021 — 2025</span><span style={{"fontSize":"14px","color":"#5C5C5C"}}>Education</span></div>
        <div style={{"display":"flex","flexDirection":"column","gap":"4px"}}><span style={{"fontSize":"24px","fontWeight":"600","letterSpacing":"-0.02em"}}>B.Tech, Computer Science &amp; Engineering</span><span>Manav Rachna University</span></div>
        <div></div>
      </div>
    </div>

    <div style={{"marginTop":"96px","display":"flex","flexDirection":"column"}}>
      <h3 style={{"margin":"0","fontSize":"clamp(40px, 5vw, 72px)","lineHeight":"0.95","letterSpacing":"-0.045em","fontWeight":"500"}}>currently exploring</h3>
      <span style={{"fontSize":"15px","color":"#444444","marginTop":"10px"}}>What I’m learning right now.</span>
    </div>
    <div style={{"marginTop":"32px","display":"grid","gridTemplateColumns":"repeat(4, minmax(0, 1fr))","gap":"18px"}}>
      <div className="v4-sticker" style={{"transform":"rotate(-1.5deg)","background":"#FFF6B8","padding":"20px","minHeight":"170px","boxShadow":"0 8px 20px rgba(0,0,0,0.1)","display":"flex","flexDirection":"column","gap":"10px"}}><span style={{"fontFamily":"var(--font-jetbrains), monospace","fontSize":"12px","color":"#2E5C3A"}}>explore/llm-applications</span><span style={{"fontSize":"15px","lineHeight":"1.5"}}>Structured outputs, prompt design and evaluating responses.</span></div>
      <div className="v4-sticker" style={{"transform":"rotate(1deg)","background":"#FFF6B8","padding":"20px","minHeight":"170px","boxShadow":"0 8px 20px rgba(0,0,0,0.1)","display":"flex","flexDirection":"column","gap":"10px"}}><span style={{"fontFamily":"var(--font-jetbrains), monospace","fontSize":"12px","color":"#2E5C3A"}}>explore/rag</span><span style={{"fontSize":"15px","lineHeight":"1.5"}}>Retrieval, embeddings and vector search: what I’m studying next.</span></div>
      <div className="v4-sticker" style={{"transform":"rotate(-0.5deg)","background":"#FFF6B8","padding":"20px","minHeight":"170px","boxShadow":"0 8px 20px rgba(0,0,0,0.1)","display":"flex","flexDirection":"column","gap":"10px"}}><span style={{"fontFamily":"var(--font-jetbrains), monospace","fontSize":"12px","color":"#2E5C3A"}}>explore/realtime</span><span style={{"fontSize":"15px","lineHeight":"1.5"}}>WebSockets and streaming data, starting with the BTC live chart.</span></div>
      <div className="v4-sticker" style={{"transform":"rotate(1.5deg)","background":"#FFF6B8","padding":"20px","minHeight":"170px","boxShadow":"0 8px 20px rgba(0,0,0,0.1)","display":"flex","flexDirection":"column","gap":"10px"}}><span style={{"fontFamily":"var(--font-jetbrains), monospace","fontSize":"12px","color":"#2E5C3A"}}>explore/backend-architecture</span><span style={{"fontSize":"15px","lineHeight":"1.5"}}>Queues, background workers and designing SaaS systems to scale.</span></div>
    </div>
  </div>
</section>

{/* CONTACT */}
<section id="contact" aria-labelledby="contact-h" style={{"background":"#FBE1EA","padding":"130px 24px 150px","position":"relative","overflow":"hidden"}}>
  <div style={{"maxWidth":"1180px","margin":"0 auto","display":"flex","flexDirection":"column","alignItems":"center","textAlign":"center"}}>
    <h2 id="contact-h" style={{"margin":"0","fontSize":"clamp(88px, 13vw, 190px)","lineHeight":"0.85","letterSpacing":"-0.06em","fontWeight":"500"}}>let’s talk</h2>
    <span style={{"fontFamily":"var(--font-hand), cursive","fontSize":"clamp(20px, 2.4vw, 30px)","color":"#2E5C3A","marginTop":"18px","lineHeight":"1.7"}}>bring the problem. i’ll bring the full stack.</span>
    <p style={{"margin":"20px 0 0","maxWidth":"520px","fontSize":"17px","lineHeight":"1.6"}}>Open to full-time roles. Email is the fastest way to reach me.</p>
    <a href={`mailto:${v.links.email}`} className="v4-pill" style={{"marginTop":"40px","transform":"rotate(-4deg)","minHeight":"64px","display":"inline-flex","alignItems":"center","padding":"0 34px","borderRadius":"999px","background":"#F2D64B","color":"#141414","textDecoration":"none","fontSize":"clamp(22px, 2.4vw, 32px)","fontWeight":"600","letterSpacing":"-0.02em","boxShadow":"0 12px 30px rgba(120,60,80,0.18)"}}>{v.links.email}</a>
    <div style={{"marginTop":"44px","display":"flex","flexWrap":"wrap","justifyContent":"center","gap":"12px"}}>
      <a href={v.links.linkedin} target="_blank" rel="noopener noreferrer" className="v4-pill" style={{"minHeight":"48px","display":"inline-flex","alignItems":"center","padding":"0 22px","borderRadius":"999px","background":"#141414","color":"#FFFFFF","textDecoration":"none","fontWeight":"600"}}>LinkedIn ↗</a>
      <a href={v.links.github} target="_blank" rel="noopener noreferrer" className="v4-pill" style={{"minHeight":"48px","display":"inline-flex","alignItems":"center","padding":"0 22px","borderRadius":"999px","background":"#141414","color":"#FFFFFF","textDecoration":"none","fontWeight":"600"}}>GitHub ↗</a>
      <a href={v.links.resume} target="_blank" rel="noopener noreferrer" className="v4-pill" style={{"minHeight":"48px","display":"inline-flex","alignItems":"center","padding":"0 22px","borderRadius":"999px","background":"#E0B9E2","color":"#141414","textDecoration":"none","fontWeight":"600"}}>Résumé (PDF) ↓</a>
    </div>
  </div>
</section>

{/* FOOTER */}
<footer className="v4-grain" style={{"position":"relative","backgroundColor":"#3F6B33","minHeight":"360px","padding":"60px 24px 40px","boxSizing":"border-box","display":"flex","flexDirection":"column","alignItems":"center","justifyContent":"flex-end","gap":"16px","textAlign":"center"}}>
  
  <span style={{"fontFamily":"var(--font-hand), cursive","fontSize":"24px","color":"#ECFF18","lineHeight":"1.7"}}>thanks for scrolling all the way down.</span>
  <span style={{"fontSize":"14px","color":"#F2F5CF"}}>© 2026 Pragya Rajput · built with Next.js</span>
</footer>

</div>

    </>
  );
}
