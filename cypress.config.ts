import { defineConfig } from "cypress";
import dotenv from "dotenv";

dotenv.config();

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      config.env.VITE_APP_API_KEY = process.env.VITE_APP_API_KEY;
      return config;
    },
  },
});
