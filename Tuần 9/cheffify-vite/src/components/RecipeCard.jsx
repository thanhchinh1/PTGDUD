import { useState } from 'react';
import { Bookmark, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
export default function RecipeCard({recipe,wide=false}){const [saved,setSaved]=useState(false);const nav=useNavigate();return <article className={wide?'recipe-card wide':'recipe-card'}><img onClick={()=>nav('/recipe/strawberry-shortcake')} src={recipe.image}/><div className="card-body"><h3 onClick={()=>nav('/recipe/strawberry-shortcake')}>{recipe.title}</h3><button className={saved?'bookmark active':'bookmark'} onClick={()=>setSaved(!saved)} title="Toggle bookmark"><Bookmark size={20}/></button><span><Clock size={13}/> {recipe.time}</span>{recipe.desc&&<p>{recipe.desc}</p>}</div></article>}
