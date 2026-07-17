import {Header,Footer} from './Site';
export function SubPage({eyebrow,title,copy,children}:{eyebrow:string,title:React.ReactNode,copy:string,children:React.ReactNode}){return <main className="subHeader"><Header/><section className="pageHero"><div className="eyebrow">{eyebrow}</div><h1 className="pageTitle">{title}</h1><p>{copy}</p></section>{children}<Footer/></main>}
