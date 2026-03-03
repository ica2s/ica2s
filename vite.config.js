import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/", // IMPORTANT
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        y2025: "2025/index.html",

        committee2025: "2025/committee/index.html",
        call2025: "2025/call/index.html",
        registration2025: "2025/registration/index.html",
        guidelines2025: "2025/guidelines/index.html",
        updates2025: "2025/updates/index.html",
        special2025: "2025/special-sessions/index.html",

        // 2026
        y2026X: "2026X/index.html",
        committee2026X: "2026X/committee/index.html",
        call2026X: "2026X/call/index.html",
        registration2026X: "2026X/registration/index.html",
        guidelines2026X: "2026X/guidelines/index.html",
        updates2026X: "2026X/updates/index.html",
        special2026X: "2026X/special-sessions/index.html",

        // 2026
        y2026: "2026Y/index.html",
        committee2026: "2026/committee/index.html",
        call2026: "2026/call/index.html",
        registration2026: "2026/registration/index.html",
        guidelines2026: "2026/guidelines/index.html",
        updates2026: "2026/updates/index.html",
        special2026: "2026/special-sessions/index.html",
      },
    },
  },
});
