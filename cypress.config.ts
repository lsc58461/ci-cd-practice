import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "5e3pvp",
  e2e: {
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 60000,
    chromeWebSecurity: false,
  },
});
