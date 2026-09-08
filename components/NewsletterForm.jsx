"use client";

import MagneticButton from "./effects/MagneticButton";

function handleSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  alert("Thank you for subscribing!");
}

export default function NewsletterForm() {
  return (
    <form className="card newsletter-form" onSubmit={handleSubmit}>
      <h3>Subscribe to Our Newsletter</h3>
      <p>Get the latest engineering insights and project updates in your inbox.</p>
      <div className="newsletter-row">
        <input className="input" type="email" name="email" placeholder="Enter your email" required />
        <MagneticButton className="btn btn-accent" type="submit">
          Subscribe
        </MagneticButton>
      </div>
    </form>
  );
}
