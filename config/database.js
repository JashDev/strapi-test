const path = require("path");

module.exports = ({ env }) => ({
  connection: {
    client: "mysql",
    connection: {
      // filename: path.join(
      //   __dirname,
      //   "..",
      //   env("DATABASE_FILENAME", ".tmp/data.db")
      // ),
      host: env("DATABASE_HOST", "52.2.253.131"),
      port: env("DATABASE_PORT", "3306"),
      user: env("DATABASE_USER", "root"),
      password: env("DATABASE_PASSWORD", "n89RvRYAkS5n"),
      database: env("DATABASE_NAME", "strapi-test"),
    },
    useNullAsDefault: true,
    debug: true,
  },
});
