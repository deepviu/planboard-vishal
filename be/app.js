// var config = require('./connection');
// const sql = require("mssql");


// const check = async () => {
//   try {
//     // make sure that any items are correctly URL encoded in the connection string
//     await sql.connect(config);
//     const result = await sql.query`Insert Into rules values ('00', 'false', 'in processing', 'coming');`;
//     console.dir(JSON.stringify(result.recordsets));
//   } catch (err) {
//     // ... error checks
//     console.log(err);
//   }
// };

// check();

const express = require("express");
const app = express();

const port = normalizaPort(process.env.PORT || '5500');


function normalizaPort(val) {
    const port = parseInt(val, 10);
    if (isNaN(port)) {
        return val;
    }
    if (port >= 0) {
        return port;
    }
    return false;
}


app.listen(port, function () {
    console.log(`app listening on http://localhost:${port}`)
});

const planBoard = require('./routes/planboard.route');
app.use('/planBoard', planBoard);
module.exports = app;