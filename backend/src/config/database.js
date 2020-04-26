module.exports = {
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'tcc-dev',
  dialect: 'postgres',
  define: {
    timestamps: true,
    underscored: true,
  },
};
