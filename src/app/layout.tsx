import type {Metadata} from 'next'; import './globals.css'; import {ScrollEffects} from '@/components/ScrollEffects';
export const metadata:Metadata={title:'Velora Experience — Premium moments, delivered.',description:'Premium shisha delivery, setup and event experiences in Eldoret.'};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en"><body><ScrollEffects/>{children}</body></html>}
