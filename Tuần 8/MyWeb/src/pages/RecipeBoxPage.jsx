import { useEffect, useMemo, useState } from "react";
import { profile, recipes } from "../data/mockData";
import RecipeCard from "../components/RecipeCard";
import {
  getSavedRecipes,
  getUser,
  openLoginModal,
  requireAuth,
} from "../utils/appStorage";

export default function RecipeBoxPage() {
  const [savedIds, setSavedIds] = useState(getSavedRecipes());

  useEffect(() => {
    const syncSaved = () => setSavedIds(getSavedRecipes());

    window.addEventListener("chefify-storage-changed", syncSaved);
    window.addEventListener("storage", syncSaved);

    return () => {
      window.removeEventListener("chefify-storage-changed", syncSaved);
      window.removeEventListener("storage", syncSaved);
    };
  }, []);

  const user = getUser();

  const savedRecipes = useMemo(() => {
    return recipes.filter((recipe) => savedIds.includes(recipe.id));
  }, [savedIds]);

  const handleShare = async () => {
    const authUser = requireAuth("chia sẻ Recipe Box");
    if (!authUser) return;

    try {
      await navigator.clipboard.writeText(window.location.href);
      alert("Đã copy link Recipe Box");
    } catch {
      alert("Không copy được link trên trình duyệt này");
    }
  };

  if (!user) {
    return (
      <div className="empty-state">
        <h3>Bạn cần đăng nhập để xem Recipe Box</h3>
        <p>Đây là khu vực cá nhân, hãy đăng nhập trước.</p>
        <button className="btn btn-primary" onClick={openLoginModal}>
          Login now
        </button>
      </div>
    );
  }

  return (
    <div>
      <section className="profile-box">
        <img
          src={profile.avatar}
          alt={profile.name}
          className="profile-avatar"
        />

        <div>
          <h1>{profile.name}&apos;s Recipe Box</h1>
          <p>{profile.bio}</p>

          <div className="profile-actions">
            <span>{profile.subscribers}</span>
            <button className="btn btn-primary" onClick={handleShare}>
              Share
            </button>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Saved Recipes</h2>

        {savedRecipes.length === 0 ? (
          <div className="empty-state">
            <h3>Bạn chưa lưu recipe nào</h3>
            <p>Hãy vào trang chi tiết món ăn và bấm “Save this recipe”.</p>
          </div>
        ) : (
          <div className="recipe-grid">
            {savedRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
