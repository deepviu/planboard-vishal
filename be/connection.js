const sqlConfig = {
  user: "dbuserPlanboard",
  password: "planB0@rd1",
  database: "dbPlanboard",
  server: "208.91.199.99",
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },
  options: {
    encrypt: true, // for azure
    trustServerCertificate: true, // change to true for local dev / self-signed certs
  },
};

module.exports = sqlConfig;