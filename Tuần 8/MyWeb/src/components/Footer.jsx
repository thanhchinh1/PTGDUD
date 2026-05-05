import { useState } from "react";
import { addNewsletterEmail } from "../utils/appStorage";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSend = (e) => {
    e.preventDefault();

    const normalized = email.trim().toLowerCase();
    if (!normalized) {
      alert("Vui lòng nhập email newsletter");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(normalized)) {
      alert("Email chưa đúng định dạng");
      return;
    }

    const result = addNewsletterEmail(normalized);

    if (result === "exists") {
      alert("Email này đã đăng ký newsletter rồi");
      return;
    }

    alert("Đăng ký newsletter thành công");
    setEmail("");
  };

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h4>About Us</h4>
          <p>
            Welcome to our website, a wonderful place to explore and learn how
            to cook like a pro.
          </p>

          <form className="footer-subscribe" onSubmit={handleSend}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="btn btn-primary" type="submit">
              Send
            </button>
          </form>
        </div>

        <div>
          <h4>Learn More</h4>
          <a href="#">Our Cooks</a>
          <a href="#">See Our Features</a>
          <a href="#">FAQ</a>
        </div>

        <div>
          <h4>Recipes</h4>
          <a href="#">Pasta</a>
          <a href="#">Dinner</a>
          <a href="#">Healthy</a>
          <a href="#">Vegetarian</a>
        </div>
      </div>
    </footer>
  );
}
