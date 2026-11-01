import "./globals.css";
export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body style={{margin:0, background:"#F8FAFC"}}>{children}</body>
    </html>
  );
}
