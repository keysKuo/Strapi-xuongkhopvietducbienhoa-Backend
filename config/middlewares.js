module.exports = [
  "strapi::logger",
  "strapi::errors",
  "strapi::security",
  {
    name: "strapi::cors",
    config: {
      enabled: true,
      headers: "*",
      origin: [
        "https://xuongkhopvietducbienhoa.com",
        "https://xuongkhopbienhoa.com",
        "https://vietducbienhoa.com",
      ], // Thay thế với các domain của bạn
    },
  },
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
