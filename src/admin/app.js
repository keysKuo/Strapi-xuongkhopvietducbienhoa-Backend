const config = {
  head: {
    favicon: {
      path: "favicon.png",
      type: "image/png",
    },
  },
  locales: ["en"],
  defaultMode: "light",
  tutorials: false,
  notifications: { release: false },
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
