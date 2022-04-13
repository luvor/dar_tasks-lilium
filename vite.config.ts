import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import Unocss from "unocss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Unocss({
      shortcuts: {
        nav_link:
          "mx-1 decoration-none flex items-center py-1 px-3 rounded-md text-violet-500 hover:bg-violet-400 hover:text-white indent-1",
        btn: "px-2 py-2 border-1 rounded-md font-bold text-violet-500 border-violet-300 bg-white cursor-pointer hover:text-white hover:bg-violet-400",
      },
    }),
  ],
});
