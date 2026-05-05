import { Link, NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { clearUser, getUser } from "../utils/appStorage";

export default function Navbar({ onOpenLogin }) {
  const [keyword, setKeyword] = useState("");
  const [user, setUserState] = useState(getUser());
  const navigate = useNavigate();

  useEffect(() => {
    const syncUser = () => setUserState(getUser());

    window.addEventListener("chefify-storage-changed", syncUser);
    window.addEventListener("storage", syncUser);

    return () => {
      window.removeEventListener("chefify-storage-changed", syncUser);
      window.removeEventListener("storage", syncUser);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?q=${encodeURIComponent(keyword)}`);
  };

  const handleLogout = () => {
    clearUser();
    alert("Đã đăng xuất");
  };

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="logo">
          Chefify
        </Link>

        <form className="search-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="What would you like to cook?"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </form>

        <nav className="nav-links">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            What to cook
          </NavLink>

          <NavLink
            to="/search"
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            Recipes
          </NavLink>

          <NavLink
            to="/subscribe"
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            Subscribe
          </NavLink>

          <NavLink
            to="/recipe-box"
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            Your Recipe Box
          </NavLink>
        </nav>

        <div className="nav-actions">
          {user ? (
            <>
              <span className="user-chip">{user.email}</span>
              <button className="btn btn-light" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <button className="btn btn-light" onClick={onOpenLogin}>
              Login
            </button>
          )}

          <Link to="/subscribe" className="btn btn-primary">
            Subscribe
          </Link>
        </div>
      </div>
    </header>
  );
}
