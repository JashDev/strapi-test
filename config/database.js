const path = require("path");

module.exports = ({ env }) => ({
  connection: {
    client: "mysql",
    connection: {
      host: env("DATABASE_HOST", "localhost"),
      port: env("DATABASE_PORT", "3306"),
      user: env("DATABASE_USER", "root"),
      password: env("DATABASE_PASSWORD", ""),
      database: env("DATABASE_NAME", "strapi"),
    },
    useNullAsDefault: true,
    debug: true,
  },
});
