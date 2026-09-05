import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import { unified } from "@astrojs/markdown-remark";
import react from "@astrojs/react";

import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

export default defineConfig({
  integrations: [
    react(),

    starlight({
      title: "Métodos Numéricos",

      locales: {
        root: {
          label: "Español",
          lang: "es",
        },
      },

      sidebar: [
        {
          label: "Lecciones",
          items: [
            {
              autogenerate: {
                directory: "lessons",
              },
            },
          ],
        },
      ],

      customCss: [
        "katex/dist/katex.min.css",
      ],
    }),
  ],
    site: "https://learningguides.github.io",
  base: "/metodosnumericos",


  markdown: {
    processor: unified({
      remarkPlugins: [remarkMath],
      rehypePlugins: [
        [
          rehypeKatex,
          {
            strict: false,
            throwOnError: false,
          },
        ],
      ],
    }),
  },
});