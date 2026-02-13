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
        y2026: "2026/index.html",

        committee2025: "2025/committee/index.html",
        call2025: "2025/call/index.html",
        registration2025: "2025/registration/index.html",
        guidelines2025: "2025/guidelines/index.html",
        updates2025: "2025/updates/index.html",
        special2025: "2025/special-sessions/index.html",
      },
    },
  },
});
