import { useState } from "react";
import { requireAuth, saveSubscription } from "../utils/appStorage";

export default function SubscribePage() {
  const [plan, setPlan] = useState("monthly");

  const handleSubscribe = () => {
    const user = requireAuth("đăng ký gói");
    if (!user) return;

    const label = plan === "monthly" ? "$2/month" : "$20/year";
    saveSubscription(plan);
    alert(`Đăng ký gói ${label} thành công`);
  };

  return (
    <div>
      <section className="subscribe-hero">
        <div>
          <p className="overline">
            This recipe is exclusively available to subscribers
          </p>
          <h1>Join now to access effortless, hassle-free recipes</h1>
          <ul>
            <li>20,000+ recipes to suit all tastes</li>
            <li>Filter for diets, cook times and more</li>
            <li>Personal recipe box for favorites</li>
          </ul>
          <h3>0.25 USD / Week</h3>
          <button className="btn btn-primary" onClick={handleSubscribe}>
            Subscribe Now
          </button>
        </div>

        <img
          src="https://images.pexels.com/photos/6127326/pexels-photo-6127326.jpeg?cs=srgb&dl=pexels-rachel-claire-6127326.jpg&fm=jpg"
          alt="premium dining"
        />
      </section>

      <section className="section center">
        <h2>Subscribe to Chefify Cooking only</h2>

        <div className="plans">
          <label className="plan-card">
            <input
              type="radio"
              name="plan"
              checked={plan === "monthly"}
              onChange={() => setPlan("monthly")}
            />
            <span>$2/month</span>
          </label>

          <label className="plan-card">
            <input
              type="radio"
              name="plan"
              checked={plan === "yearly"}
              onChange={() => setPlan("yearly")}
            />
            <span>$20/year</span>
          </label>
        </div>

        <button className="btn btn-primary" onClick={handleSubscribe}>
          Subscribe Now
        </button>
      </section>
    </div>
  );
}
