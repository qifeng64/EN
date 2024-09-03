import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "EN",
    description: "EN-Learning",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: "Home", link: "/" },
            { text: "Examples", link: "/markdown-examples" },
        ],

        sidebar: [
            {
                text: "Examples",
                items: [
                    { text: "Markdown Examples", link: "/markdown-examples" },
                    { text: "Runtime API Examples", link: "/api-examples" },
                ],
            },
        ],

        socialLinks: [{ icon: "github", link: "https://github.com/vuejs/vitepress" }],
    },
    vite: {
        // dev mode: auto open browser
        server: {
            open: true,
        },
        // build mode: auto clear outDir
        build: {
            emptyOutDir: true,
        },
    },
    outDir: "../dist",

    // github
    base: "/EN/Grammar-club",
});
