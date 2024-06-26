/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                hankengrotesk: ["Hanken Grotesk", "sans-serif"],
                "inter": ["Inter", "sans-serif"],
                "outfit": ["Outfit", "sans-serif"],
                "figtree": ["Figtree", "sans-serif"],
                "young_serif": ["Young Serif", "serif"],
            },
        },
    },
    plugins: [],
};
