import { useState } from 'react';
export default function Pagination(){const [p,setP]=useState(1);return <div className="pagination"><button onClick={()=>setP(Math.max(1,p-1))}>‹</button>{[1,2,3,4,'...',10,11].map((x,i)=><button key={i} onClick={()=>typeof x==='number'&&setP(x)} className={p===x?'active':''}>{x}</button>)}<button onClick={()=>setP(Math.min(11,p+1))}>›</button></div>}
