import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  api: {
    projectId: "8cc9nxy7",
    dataset: "production",
  },

  deployment: {
    appId: "jsyw3ux4phmdj5srvmumavcx",
    autoUpdates: true,
  },
});