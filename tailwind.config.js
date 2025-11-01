/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],theme: {
    extend: {
      colors: {
        // 🎨 Brand Colors
        primary: {
          DEFAULT: "#FFD700", // Yellowish button color
          hover: "#E6C200",   // Slightly darker yellow on hover
        },
        text: {
          heading: "#1A1A1A",   // Blackish headings
          body: "#333333",      // Main text color
          muted: "#555555",     // Secondary / light text
        },
        bg: {
          light: "#FAFAFA",     // Light gray background
          white: "#FFFFFF",     // Navbar / Topbar background
          alt: "#F5F5F5",       // Alternate section background
        },
      },
    },
  },
  plugins: [],
};
