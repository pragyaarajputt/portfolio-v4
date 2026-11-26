"use client";

import { useState } from "react";

/**
 * mailto: links do nothing on machines without a mail app (common on Windows and for Gmail-in-the-browser users),
 * so the address is always visible and copyable, with a Gmail compose link as the one-click option.
 */
export function EmailActions({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      // Older browsers or blocked clipboard: fall back to a hidden textarea.
      const t = document.createElement("textarea");
      t.value = email;
      t.setAttribute("readonly", "");
      t.style.position = "fixed";
      t.style.opacity = "0";
      document.body.appendChild(t);
      t.select();
      document.execCommand("copy");
      t.remove();
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  const gmail = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`;

  return (
    <>
      <a href={`mailto:${email}`} className="a-email">
        {email}
      </a>
      <span className="a-email-actions">
        <button type="button" onClick={copy} className="m-pill" aria-live="polite">
          {copied ? "Copied ✓" : "Copy email"}
        </button>
        <a href={gmail} target="_blank" rel="noopener noreferrer" className="m-pill m-pill-line">
          Write in Gmail ↗
        </a>
      </span>
    </>
  );
}
