export const API_URL=process.env.NEXT_PUBLIC_API_URL||'http://localhost:4000/api';
export async function api<T>(path:string,init?:RequestInit):Promise<T>{
 const response=await fetch(`${API_URL}${path}`,{...init,headers:{'Content-Type':'application/json',...(init?.headers||{})}});
 if(!response.ok){const body=await response.json().catch(()=>({message:'Request failed'}));throw new Error(Array.isArray(body.message)?body.message.join(', '):body.message||'Request failed')}
 return response.json() as Promise<T>;
}
