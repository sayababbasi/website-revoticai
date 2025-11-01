import "./globals.css";
import Navbar from "../components/common/Navbar";
import Topbar from "../components/common/Topbar";

export const metadata = {
  title: "RevoticAi",
  description: "AI-driven software development and automation solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <Topbar />
        <Navbar />
        <main className="pt-[120px]">{children}</main>
      </body>
    </html>
  );
}
