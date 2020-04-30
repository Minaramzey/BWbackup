// Update with your config settings.
require('dotenv').config()

module.exports = {

  development: {
    client: 'sqlite3',
    connection: { filename: './data/auth.db3' },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
    },
    seeds: { directory: './data/seeds' },
    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys = ON", done);
      }
    }
  },


  testing: {
    client: "sqlite3",
    connection: {
      filename: "./data/auth.db3",
    },
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
  },

  production: {
    client: 'pg',
    connection: `${process.env.DATABASE_URL}`,
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  }
};
