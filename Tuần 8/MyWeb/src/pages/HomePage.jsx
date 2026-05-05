import { Link } from "react-router-dom";
import { recipes } from "../data/mockData";
import RecipeCard from "../components/RecipeCard";

export default function HomePage() {
  const summerRecipes = recipes.filter((item) => item.section === "summer");
  const videoRecipes = recipes.filter((item) => item.section === "video");
  const editorRecipes = recipes.filter((item) => item.section === "editor");

  return (
    <div>
      <section className="hero">
        <img
          src="https://images.pexels.com/photos/4920557/pexels-photo-4920557.jpeg?cs=srgb&dl=pexels-gustavo-fring-4920557.jpg&fm=jpg"
          alt="woman cooking in modern kitchen"
        />
        <div className="hero-card">
          <span className="badge">Recipe of the day</span>
          <h1>Salad Caprese</h1>
          <p>
            Classic Italian salad with tomatoes, fresh mozzarella and basil.
          </p>
          <Link to="/recipe/italian-tomato-salad" className="btn btn-primary">
            View now
          </Link>
        </div>
      </section>

      <section className="section">
        <h2>This Summer Recipes</h2>
        <p>We have all your Independence Day sweets covered.</p>
        <div className="recipe-grid">
          {summerRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Recipes With Videos</h2>
        <p>Cooking up culinary creations with step-by-step videos.</p>
        <div className="recipe-grid">
          {videoRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Editor&apos;s Pick</h2>
        <p>Handpicked favorites by our expert editors.</p>
        <div className="recipe-grid">
          {editorRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </section>
    </div>
  );
}
