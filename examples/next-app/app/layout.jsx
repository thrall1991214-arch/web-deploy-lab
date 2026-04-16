import "./styles.css";

export const metadata = {
  title: "Next.js Deployment Example",
  description: "A minimal Next.js app for web-deploy-lab.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
