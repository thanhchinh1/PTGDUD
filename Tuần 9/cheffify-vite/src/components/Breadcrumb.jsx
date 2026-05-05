import { Link } from 'react-router-dom';
export default function Breadcrumb({items=[]}){return <div className="breadcrumb page-width"><Link to="/home">Home</Link>{items.map((it,i)=><span key={i}>› {it}</span>)}</div>}
