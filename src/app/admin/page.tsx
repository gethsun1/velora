import Link from 'next/link';
import {Logo,Status} from '@/components/Site';
import {orders} from '@/lib/data';

const menu=['Overview','Orders','Dispatch','Customers','Inventory','Packages','Flavours','Service zones','Staff','Payments','Analytics','Audit log','Settings'];

export default function Admin(){
 return <main className="admin">
  <div className="adminTop"><Logo/><span style={{fontSize:12}}>Super Administrator · Demo</span></div>
  <div className="adminLayout">
   <aside className="sidebar">{menu.map((x,i)=><Link key={x} className={i===0?'active':''} href={i===0?'/admin':'/admin#'+x.toLowerCase()}>{x}</Link>)}</aside>
   <section className="adminMain">
    <div style={{display:'flex',justifyContent:'space-between'}}><div><div className="eyebrow">FRIDAY, 17 JULY</div><h1>Good evening, Mr. Rono.</h1></div><button className="button">+ New booking</button></div>
    <div className="kpis">{[['Revenue today','KSh 86,400','↑ 18.4%'],['Active experiences','8','3 collections due'],['New bookings','12','4 awaiting review'],['Available setups','18 / 32','56% availability']].map(x=><article className="kpi" key={x[0]}><small>{x[0]}</small><b>{x[1]}</b><span className="up">{x[2]}</span></article>)}</div>
    <div className="adminGrid">
     <article className="card"><h3>Revenue this week</h3><small>KSh 384,200 · +12.8% vs last week</small><div className="bars">{[38,56,44,75,62,91,70].map((x,i)=><i key={i} style={{height:x+'%'}}/>)}</div></article>
     <article className="card"><h3>Today’s operations</h3>{[['Awaiting confirmation','4'],['Preparing','3'],['Out for delivery','2'],['Experiences active','8'],['Collections due','5']].map(x=><div className="line" key={x[0]}><span>{x[0]}</span><b>{x[1]}</b></div>)}</article>
    </div>
    <article className="card" style={{marginTop:16}}><div style={{display:'flex',justifyContent:'space-between'}}><h3>Live bookings</h3><a href="#orders">View all →</a></div><div className="tableWrap"><table className="table"><thead><tr><th>Reference</th><th>Customer</th><th>Experience</th><th>Zone / arrival</th><th>Total</th><th>Status</th></tr></thead><tbody>{orders.map(x=><tr key={x.ref}><td><b>{x.ref}</b></td><td>{x.customer}</td><td>{x.experience}</td><td>{x.zone}<br/><small>{x.time}</small></td><td>{x.total}</td><td><Status>{x.status}</Status></td></tr>)}</tbody></table></div></article>
   </section>
  </div>
 </main>
}
