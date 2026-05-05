import { Link } from "react-router-dom";

export default function RecipeCard({ recipe }) {
  return (
    <Link to={`/recipe/${recipe.slug}`} className="recipe-card">
      <img src={recipe.image} alt={recipe.title} />
      <div className="recipe-card-body">
        <h3>{recipe.title}</h3>
        <p>{recipe.duration}</p>
      </div>
    </Link>
  );
}
