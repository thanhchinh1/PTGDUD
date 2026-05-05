import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Search, ChefHat } from 'lucide-react';

export default function Header(){
  const nav=useNavigate();
  const doSearch=(e)=>{ if(e.key==='Enter') nav(e.target.value.trim()?'/salad':'/no-results'); };
  return <header className="header page-width">
    <Link to="/home" className="brand"><ChefHat/> Cheffify</Link>
    <label className="search"><Search size={16}/><input onKeyDown={doSearch} placeholder="What would you like to cook?" /></label>
    <nav><NavLink to="/home">What to cook</NavLink><NavLink to="/salad">Recipes</NavLink><a>Ingredients</a><a>Occasions</a><a>About Us</a></nav>
    <Link className="soft-btn" to="/recipe-box">Your Recipe Box</Link>
    <Link className="ghost" to="/login">Login</Link><Link className="primary small" to="/subscribe">Subscribe</Link>
  </header>
}
