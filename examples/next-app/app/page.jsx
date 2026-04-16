export default function Page() {
  const label = process.env.NEXT_PUBLIC_SITE_LABEL || "next-local";

  return (
    <main className="shell">
      <p className="eyebrow">Next.js Example</p>
      <h1>Framework deployments need clear runtime expectations.</h1>
      <p>
        Public environment label: <strong>{label}</strong>
      </p>
    </main>
  );
}
