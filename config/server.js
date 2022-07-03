module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 3000),
  app: {
    keys: env.array("APP_KEYS"),
  },
  url: env("SERVER_URL", ""),
  proxy: true,
});
