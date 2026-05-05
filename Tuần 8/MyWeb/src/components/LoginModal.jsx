import { useState } from "react";
import { setUser } from "../utils/appStorage";

export default function LoginModal({ open, onClose }) {
  const [email, setEmail] = useState("");

  if (!open) return null;

  const handleEmailLogin = () => {
    const normalized = email.trim().toLowerCase();

    if (!normalized) {
      alert("Vui lòng nhập email");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(normalized)) {
      alert("Email chưa đúng định dạng");
      return;
    }

    setUser({
      email: normalized,
      provider: "email",
      name: normalized.split("@")[0],
    });

    alert("Đăng nhập thành công");
    setEmail("");
    onClose();
  };

  const handleSocialLogin = (provider) => {
    setUser({
      email: `${provider.toLowerCase()}user@chefify.dev`,
      provider,
      name: `${provider} User`,
    });

    alert(`Đăng nhập bằng ${provider} thành công`);
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ×
        </button>

        <div className="modal-layout">
          <img
            src="https://images.pexels.com/photos/12674044/pexels-photo-12674044.jpeg?cs=srgb&dl=pexels-shvetsa-12674044.jpg&fm=jpg"
            alt="cooking visual"
            className="modal-image"
          />

          <div className="modal-content">
            <h2>Login</h2>
            <p>Enter your email to log in.</p>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button
              className="btn btn-primary full-width"
              onClick={handleEmailLogin}
            >
              Continue
            </button>

            <div className="modal-divider">OR</div>

            <button
              className="btn btn-light full-width"
              onClick={() => handleSocialLogin("Google")}
            >
              Continue with Google
            </button>

            <button
              className="btn btn-light full-width"
              onClick={() => handleSocialLogin("Facebook")}
            >
              Continue with Facebook
            </button>

            <button
              className="btn btn-light full-width"
              onClick={() => handleSocialLogin("Apple")}
            >
              Continue with Apple
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
