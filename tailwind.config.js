/** @type {import('tailwindcss').Config} */

module.exports = {
    darkMode: ['class'],
    content: [
        './pages/**/*.{js, jsx}',
        './components/**/*.{js, jsx}',
        './app/**/*.{js, jsx}',
        './src/**/*.{js, jsx}',
    ],
    prefix: "",
    theme: {
        container: {
            center: true,
            padding: '15px',
        },
        screens: {
            sm: '640px',
            md: '768px',
            lg: '960px',
            xl: '1200px',
        },
        fontFamily: {
            primary: ['Poppins', 'sans-serif'],
        },
        extend:{
            colors: {
                primary: 'oklch(37.9% 0.146 265.522)',
                accent: {
                    DEFAULT: undefined,
                    hover: undefined,
                }
            },
            keyframes: {
                "accordion-down" : {
                    from: { height: 0 },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up" : {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: 0 },
                },
            },
            animation: {
                "accordion-down" : "accordion-down 0.2s ease-out",
                "accordion-up" : "accordion-up 0.2s ease-out",
            },
        },
    },
    plugins: [require("tailwindcss-animate")]
}