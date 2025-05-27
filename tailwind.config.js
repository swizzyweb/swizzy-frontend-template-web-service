// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  // This 'content' array is CRUCIAL. It tells Tailwind where to look for
  // all the utility classes you are using in your project.
  content: [
    // This glob pattern is designed to scan all JavaScript, JSX, TypeScript,
    // and TSX files within your 'react' directory and any of its subdirectories.
    // This is where your App.tsx and other React components reside.
    "./react/**/*.{js,jsx,ts,tsx}",
    // If your main index.html file (the template used by HtmlWebpackPlugin)
    // also contains Tailwind classes (e.g., on the <body> tag), include it here.
    "./react/index.html",
  ],
  theme: {
    extend: {
      // Ensure your custom font 'Inter' is defined here if you're using it.
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      // Any other theme extensions (custom colors, spacing, etc.) would go here.
    },
  },
  plugins: [], // Add any Tailwind CSS plugins here if you use them (e.g., @tailwindcss/forms)
};
