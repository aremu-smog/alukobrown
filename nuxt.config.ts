// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },
  css: ["normalize.css", "~/assets/scss/main.scss"],
  app: {
    head: {
      title: "Aluko Brown — Product Designer",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "I'm a Product Designer based in Lagos, Nigeria, with over 5 years experience designing tasteful experiences for brands, products & services and a background in graphic & brand design. I currently work on the Product team at Quidax and teach UX design at Stutern.",
        },
        { property: "og:title", content: "Aluko Brown — Product Designer" },
        {
          property: "og:description",
          content:
            "I'm a Product Designer based in Lagos, Nigeria, with over 5 years experience designing tasteful experiences for brands, products & services.",
        },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary" },
        { name: "twitter:creator", content: "Aluko Brown" },
        {
          name: "twitter:title",
          content: "Aluko Brown — Product Designer",
        },
        {
          name: "twitter:description",
          content:
            "I'm a Product Designer based in Lagos, Nigeria, with over 5 years experience designing tasteful experiences for brands, products & services.",
        },
      ],
      link: [{ rel: "icon", type: "image/png", href: "/images/gatsby-icon.png" }],
    },
  },
  runtimeConfig: {
    public: {
      contentfulSpaceId: process.env.CONTENTFUL_SPACE_ID || "",
      contentfulAccessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
    },
  },
})
