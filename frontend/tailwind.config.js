/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                pvPetrel: "#3c78b4",
                pvBlack: "#000000",
                pvBenthicBlack: "#000014",
                pvBlueDartFrog: "#3c78a0",
                pvKuretakeBlackManga: "#001428",
                pvMississippiRiver: "#3c648c",
            },
        },
    },
    plugins: [],
};
