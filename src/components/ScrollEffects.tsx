'use client';

import {useEffect} from 'react';

export function ScrollEffects(){
  useEffect(()=>{
    const heading=document.querySelector<HTMLElement>('.intro>h2');
    if(!heading)return;

    const observer=new IntersectionObserver(([entry])=>{
      if(entry.isIntersecting){
        heading.classList.add('has-entered');
        observer.disconnect();
      }
    },{threshold:.3});

    observer.observe(heading);
    return()=>observer.disconnect();
  },[]);

  return null;
}
