import "./globals.css";
import Navbar from "../components/common/Navbar";
import Topbar from "../components/common/Topbar";
import Hero from "../components/common/HeroSection";

export const metadata = {
  title: "RevoticAi",
  description: "AI-driven software development and automation solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        {/* Top Bar and Navbar */}
        <Topbar />
        <Navbar />

        {/* Hero Section */}
        <Hero />

        {/* Page Content */}
        <main className="pt-[120px]">{children}</main>
      </body>
    </html>
  );
}
