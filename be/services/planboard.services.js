var config = require("../connection");
const sql = require("mssql");

// exports.getPlan = async () => {
//   try {
//     await sql.connect(config);
//     const result = await sql.query`select * from rules`;
//     console.dir(JSON.stringify(result.recordsets));
//     return {
//       data: JSON.stringify(result.recordsets),
//       status: "success",
//     };
//   } catch (err) {
//     console.log(err);
//     return {
//       error: err.message,
//       status: "error",
//     };
//   }
// };


// exports.createPlan = async () => {
//   try {
//     await sql.connect(config);
//     const result = await sql.query`INSERT INTO rules VALUES ('99','ture','in pending','clear');`;
//     console.dir(JSON.stringify(result.recordsets));
//     return {
//       data: JSON.stringify(result.recordsets),
//       status: "success",
//     };
//   } catch (err) {
//     console.log(err);
//     return {
//       error: err.message,
//       status: "error",
//     };
//   }
// };

async function getPlan() {
  try {
    let pool =  await sql.connect(config);
    let res = await pool.request().query('select * from rules');
    return res.recordsets;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getPlan: getPlan,
};