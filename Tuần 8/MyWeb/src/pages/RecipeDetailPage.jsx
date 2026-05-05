import { useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";
import { comments, recipes } from "../data/mockData";
import RecipeCard from "../components/RecipeCard";
import {
  isRecipeSaved,
  toggleSavedRecipe,
  requireAuth,
} from "../utils/appStorage";

export default function RecipeDetailPage() {
  const { slug } = useParams();
  const [, forceRender] = useReducer((x) => x + 1, 0);

  const recipe = recipes.find((item) => item.slug === slug);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [slug]);

  if (!recipe) {
    return <h2>Recipe not found</h2>;
  }

  const saved = isRecipeSaved(recipe.id);

  const handleSaveRecipe = () => {
    const user = requireAuth("lưu recipe");
    if (!user) return;

    const nextSaved = toggleSavedRecipe(recipe.id);
    forceRender();
    alert(nextSaved ? "Đã lưu recipe" : "Đã bỏ lưu recipe");
  };

  const related = recipes.filter((item) => item.slug !== slug).slice(0, 4);

  return (
    <div className="detail-page">
      <div className="detail-layout">
        <aside className="ingredients-card">
          <h1>{recipe.title}</h1>
          <p>{recipe.description}</p>

          <h3>Ingredients</h3>
          <ul>
            {recipe.ingredients.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <button
            className="btn btn-primary full-width"
            onClick={handleSaveRecipe}
          >
            {saved ? "Remove from saved" : "Save this recipe"}
          </button>
        </aside>

        <section>
          {recipe.steps.map((step) => (
            <div key={step.title} className="step-block">
              <img src={step.image} alt={step.title} />
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </div>
          ))}
        </section>
      </div>

      <section className="section">
        <h2>Comments</h2>
        <div className="comment-list">
          {comments.map((comment) => (
            <div className="comment-item" key={comment.id}>
              <img src={comment.avatar} alt={comment.name} />
              <div>
                <strong>{comment.name}</strong>
                <p>{comment.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Your Recently Viewed</h2>
        <div className="recipe-grid">
          {related.map((item) => (
            <RecipeCard key={item.id} recipe={item} />
          ))}
        </div>
      </section>
    </div>
  );
}
