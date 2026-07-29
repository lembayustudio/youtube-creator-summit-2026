import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";

import { schemaTypes } from "./schemaTypes";
import { StudioLogo } from "./components/StudioLogo";
import { structure } from "./structure";

export default defineConfig({
  name: "default",
  title: "NextStage Events CMS",

  projectId: "8cc9nxy7",
  dataset: "production",

  plugins: [
  structureTool({
    structure,
  }),
  visionTool(),
],

  schema: {
    types: schemaTypes,
  },

  studio: {
    components: {
      logo: StudioLogo,
    },
  },
});