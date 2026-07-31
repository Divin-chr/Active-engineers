"use client";

import MagneticButton from "./effects/MagneticButton";

function handleSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  alert("Thank you! We'll get back to you.");
}

export default function ContactForm() {
  return (
    <form className="card" onSubmit={handleSubmit}>
      <h3>Send a Message</h3>
      <div className="form-row">
        <div>
          <label>
            Name
            <br />
            <input className="input" type="text" required />
          </label>
        </div>
        <div>
          <label>
            Email
            <br />
            <input className="input" type="email" required />
          </label>
        </div>
      </div>
      <div className="form-row">
        <div>
          <label>
            Phone
            <br />
            <input className="input" type="tel" />
          </label>
        </div>
        <div>
          <label>
            Subject
            <br />
            <input className="input" type="text" />
          </label>
        </div>
      </div>
      <div>
        <label>
          Message
          <br />
          <textarea className="input" rows={6} required />
        </label>
      </div>
      <div style={{ marginTop: 12 }}>
        <MagneticButton className="btn btn-accent" type="submit">
          Submit
        </MagneticButton>
      </div>
    </form>
  );
}
