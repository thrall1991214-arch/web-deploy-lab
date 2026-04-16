import "./style.css";

const label = import.meta.env.VITE_PUBLIC_SITE_LABEL || "vite-local";

document.querySelector("#app").innerHTML = `
  <section class="shell">
    <p class="eyebrow">Vite Example</p>
    <h1>Build once, verify the output directory.</h1>
    <p>Public environment label: <strong>${label}</strong></p>
  </section>
`;
