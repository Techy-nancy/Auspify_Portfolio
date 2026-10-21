import { useState } from "react";
import { profile } from "../data";
import { usePageTitle } from "../usePageTitle";

const empty = { name: "", email: "", message: "" };

function validate(values) {
  const errors = {};
  if (values.name.trim().length < 2) errors.name = "Enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Enter a valid email address.";
  }
  if (values.message.trim().length < 10) {
    errors.message = "Write a message of at least 10 characters.";
  }
  return errors;
}

export default function Contact() {
  usePageTitle("Contact");
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState({});
  const [sentName, setSentName] = useState("");

  function update(event) {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
  }

  function submit(event) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
    setSentName(values.name.trim());
    setValues(empty);
  }

  return (
    <div className="page contact-page">
      <header className="page-head">
        <p className="eyebrow">Contact</p>
        <h1>Send a message</h1>
        <p className="lead">
          Leave your name, a real email, and a short note about a project, a class, or a role.
        </p>
        {profile.email ? (
          <p className="lead">
            Or write directly to <a href={`mailto:${profile.email}`}>{profile.email}</a>.
          </p>
        ) : null}
      </header>

      {sentName ? (
        <div className="success" role="status">
          <h2>Thank you, {sentName}.</h2>
          <p>Your message has been received.</p>
          <button type="button" className="btn btn-ghost" onClick={() => setSentName("")}>
            Send another
          </button>
        </div>
      ) : (
        <form className="contact-form" onSubmit={submit} noValidate>
          <label>
            Name
            <input
              name="name"
              type="text"
              autoComplete="name"
              value={values.name}
              onChange={update}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {errors.name ? (
              <span id="name-error" className="field-error">
                {errors.name}
              </span>
            ) : null}
          </label>

          <label>
            Email
            <input
              name="email"
              type="email"
              autoComplete="email"
              value={values.email}
              onChange={update}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email ? (
              <span id="email-error" className="field-error">
                {errors.email}
              </span>
            ) : null}
          </label>

          <label>
            Message
            <textarea
              name="message"
              rows={6}
              value={values.message}
              onChange={update}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "message-error" : undefined}
            />
            {errors.message ? (
              <span id="message-error" className="field-error">
                {errors.message}
              </span>
            ) : null}
          </label>

          <button type="submit" className="btn btn-primary">
            Send message
          </button>
        </form>
      )}
    </div>
  );
}
