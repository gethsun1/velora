'use client';

import {useEffect,useState} from 'react';

function getNairobiGreeting(){
 const hour=Number(new Intl.DateTimeFormat('en-KE',{hour:'2-digit',hourCycle:'h23',timeZone:'Africa/Nairobi'}).format(new Date()));
 if(hour<12)return 'Good morning';
 if(hour<18)return 'Good afternoon';
 return 'Good evening';
}

export function TimeGreeting(){
 const [greeting,setGreeting]=useState(getNairobiGreeting);
 useEffect(()=>{
  const timer=window.setInterval(()=>setGreeting(getNairobiGreeting()),60_000);
  return()=>window.clearInterval(timer);
 },[]);
 return <h1>{greeting}, Mr. Rono.</h1>
}
