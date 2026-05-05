import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { recipes } from "../data/mockData";
import FilterSidebar from "../components/FilterSidebar";
import RecipeCard from "../components/RecipeCard";
import Pagination from "../components/Pagination";

export default function SearchPage() {
  const [searchParams] = useSearchParams();
  const keyword = (searchParams.get("q") || "").toLowerCase();
  const [filters, setFilters] = useState({ types: [], minRating: 0 });
  const [page, setPage] = useState(1);

  const filteredRecipes = useMemo(() => {
    return recipes.filter((recipe) => {
      const matchKeyword =
        !keyword ||
        recipe.title.toLowerCase().includes(keyword) ||
        recipe.category.toLowerCase().includes(keyword);

      const matchType =
        filters.types.length === 0 || filters.types.includes(recipe.type);

      const matchRating =
        filters.minRating === 0 || recipe.rating >= filters.minRating;

      return matchKeyword && matchType && matchRating;
    });
  }, [keyword, filters]);

  const perPage = 6;
  const totalPages = Math.max(1, Math.ceil(filteredRecipes.length / perPage));
  const currentRecipes = filteredRecipes.slice(
    (page - 1) * perPage,
    page * perPage,
  );

  return (
    <div className="content-with-sidebar">
      <FilterSidebar filters={filters} setFilters={setFilters} />

      <section>
        {filteredRecipes.length === 0 ? (
          <div className="empty-state">
            <h2>Sorry, no results were found for “{keyword}”</h2>
            <p>Try another keyword or remove some filters.</p>
          </div>
        ) : (
          <>
            <div className="page-header">
              <h2>
                {keyword
                  ? `${keyword} (${filteredRecipes.length})`
                  : `Recipes (${filteredRecipes.length})`}
              </h2>
            </div>

            <div className="recipe-grid">
              {currentRecipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>

            <Pagination
              page={page}
              totalPages={totalPages}
              onChange={setPage}
            />
          </>
        )}
      </section>
    </div>
  );
}
