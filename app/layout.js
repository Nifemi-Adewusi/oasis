import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import "./globals.css";

export const metadata = {
  title: "Wild Oasis",
  description: "The Wild Oasis WebApp",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
