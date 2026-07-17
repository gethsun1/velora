'use client';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
export function Logo(){return <Link href="/" className="logo"><span>V</span> VELORA</Link>}
export function Header(){const p=usePathname(); return <><div className="announce">Now delivering premium experiences across selected Eldoret zones <b>Explore service area →</b></div><header><Logo/><nav><Link href="/experiences">Experiences</Link><Link href="/flavours">Flavours</Link><a href="/#how">How it works</a><Link href="/track">Track order</Link></nav><div className="navActions"><Link href="/login">Sign in</Link><Link className="button small" href="/book">Book now</Link></div><Link className="mobileBook" href="/book">Book</Link></header></>}
export function Footer(){return <footer><div><Logo/><p>Premium moments, delivered across Eldoret.</p></div><div><b>Experience</b><Link href="/experiences">Packages</Link><Link href="/flavours">Flavours</Link><Link href="/track">Track booking</Link></div><div><b>Support</b><a href="tel:+254700000000">+254 700 000 000</a><span>Daily · 10 AM — 2 AM</span><span>18+ responsible use only</span></div></footer>}
export function Status({children}:{children:React.ReactNode}){return <span className={'status '+String(children).toLowerCase().replaceAll(' ','-')}>{children}</span>}
