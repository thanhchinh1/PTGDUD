const USER_KEY = "chefify_user";
const SAVED_KEY = "chefify_saved_recipes";
const SUBSCRIPTION_KEY = "chefify_subscription";
const NEWSLETTER_KEY = "chefify_newsletter";

function readJson(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function emitChange() {
  window.dispatchEvent(new Event("chefify-storage-changed"));
}

export function getUser() {
  return readJson(USER_KEY, null);
}

export function setUser(user) {
  localStorage.setItem(USER_KEY, JSON.stringify(user));
  emitChange();
}

export function clearUser() {
  localStorage.removeItem(USER_KEY);
  emitChange();
}

export function getSavedRecipes() {
  return readJson(SAVED_KEY, []);
}

export function isRecipeSaved(recipeId) {
  return getSavedRecipes().includes(recipeId);
}

export function toggleSavedRecipe(recipeId) {
  const current = getSavedRecipes();
  const exists = current.includes(recipeId);

  const next = exists
    ? current.filter((id) => id !== recipeId)
    : [...current, recipeId];

  localStorage.setItem(SAVED_KEY, JSON.stringify(next));
  emitChange();

  return next.includes(recipeId);
}

export function saveSubscription(plan) {
  const payload = {
    plan,
    subscribedAt: new Date().toISOString(),
  };

  localStorage.setItem(SUBSCRIPTION_KEY, JSON.stringify(payload));
  emitChange();

  return payload;
}

export function getSubscription() {
  return readJson(SUBSCRIPTION_KEY, null);
}

export function addNewsletterEmail(email) {
  const current = readJson(NEWSLETTER_KEY, []);
  const normalized = email.trim().toLowerCase();

  if (!normalized) return false;
  if (current.includes(normalized)) return "exists";

  const next = [...current, normalized];
  localStorage.setItem(NEWSLETTER_KEY, JSON.stringify(next));
  emitChange();

  return true;
}

export function isLoggedIn() {
  return !!getUser();
}

export function openLoginModal() {
  window.dispatchEvent(new Event("chefify-open-login"));
}

export function requireAuth(actionText = "thực hiện thao tác này") {
  const user = getUser();

  if (!user) {
    alert(`Bạn cần đăng nhập để ${actionText}`);
    openLoginModal();
    return null;
  }

  return user;
}
