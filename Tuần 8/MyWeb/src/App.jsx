import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import RecipeDetailPage from "./pages/RecipeDetailPage";
import RecipeBoxPage from "./pages/RecipeBoxPage";
import SubscribePage from "./pages/SubscribePage";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/recipe/:slug" element={<RecipeDetailPage />} />
        <Route path="/recipe-box" element={<RecipeBoxPage />} />
        <Route path="/subscribe" element={<SubscribePage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
