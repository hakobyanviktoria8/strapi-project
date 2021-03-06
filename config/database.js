module.exports = ({env}) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'sqlite',
        filename: env('DATABASE_FILENAME', '.tmp/data.db'),
        // client: env("DB_CLIENT", 'postgres'),
        // host: env("DB_HOST", '127.0.0.1'),
        // username: env("DB_USERNAME", 'postgres'),
        // password: env("DB_PASSWORD", 'viki2021'),
        // database: env("DB_DATABASE", 'postgres'),
        // port: env("DB_PORT", '5432'),
        // schema: "public",
      },
      options: {
        useNullAsDefault: true,
      },
    },
  },
});
