import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

function App() {
  const label = import.meta.env.VITE_PUBLIC_SITE_LABEL || "react-local";

  return (
    <main className="shell">
      <p className="eyebrow">React Example</p>
      <h1>Deploy the UI, then test the actual route.</h1>
      <p>
        Public environment label: <strong>{label}</strong>
      </p>
    </main>
  );
}

createRoot(document.querySelector("#root")).render(<App />);
