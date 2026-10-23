import { defineConfig, passthroughImageService } from "astro/config";

export default defineConfig({
  site: "https://tca.com.pk",
  image: {
    service: passthroughImageService(),
  },
});
