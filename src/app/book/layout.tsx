import {Suspense} from 'react';

export default function BookLayout({children}:{children:React.ReactNode}){
  return <Suspense fallback={<main className="content"><div className="panel">Preparing your experience…</div></main>}>{children}</Suspense>
}
