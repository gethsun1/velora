'use client';

import Link from 'next/link';
import {useEffect,useState} from 'react';

const links=[['Experiences','/experiences'],['Flavours','/flavours'],['How it works','/#how'],['Track order','/track']] as const;

export function Logo(){return <Link href="/" className="logo" aria-label="Velora home"><span>V</span> VELORA</Link>}

export function Header(){
 const [open,setOpen]=useState(false);
 useEffect(()=>{document.body.style.overflow=open?'hidden':'';return()=>{document.body.style.overflow=''}},[open]);
 return <>
  <div className="announce">Now delivering premium experiences across selected Eldoret zones <b>Explore service area →</b></div>
  <header>
   <Logo/>
   <nav>{links.map(([label,href])=><Link key={label} href={href}>{label}</Link>)}</nav>
   <div className="navActions"><Link href="/login">Sign in</Link><Link className="button small" href="/book">Book now</Link></div>
   <button className={'menuToggle '+(open?'open':'')} aria-label={open?'Close navigation':'Open navigation'} aria-expanded={open} onClick={()=>setOpen(!open)}><span/><span/><span/></button>
  </header>
  <div className={'mobileMenu '+(open?'open':'')} aria-hidden={!open}>
   <div className="mobileMenuInner">{links.map(([label,href],i)=><Link onClick={()=>setOpen(false)} key={label} href={href}><small>0{i+1}</small>{label}<span>→</span></Link>)}<Link onClick={()=>setOpen(false)} href="/login"><small>05</small>Sign in<span>→</span></Link><Link onClick={()=>setOpen(false)} className="button" href="/book">Book an experience <span>→</span></Link><p>Currently serving Eldoret Urban · Daily, 10 AM — 2 AM</p></div>
  </div>
 </>
}

export function Footer(){return <footer><div><Logo/><p>Premium moments, delivered across Eldoret.</p></div><div><b>Experience</b><Link href="/experiences">Packages</Link><Link href="/flavours">Flavours</Link><Link href="/track">Track booking</Link></div><div><b>Support</b><a href="tel:+254700000000">+254 700 000 000</a><span>Daily · 10 AM — 2 AM</span><span>18+ responsible use only</span></div></footer>}

export function Status({children}:{children:React.ReactNode}){return <span className={'status '+String(children).toLowerCase().replaceAll(' ','-')}>{children}</span>}
