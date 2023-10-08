const express = require("express");
const bodyParser = require("body-parser");
const { connectDB } = require("./db/dbconnection")
const config = require("./config/config");
const routes = require("./routes/v1");
const app = express();
const http = require("http");
const cors = require("cors")
const path = require("path")

/* -------------------- Allow form data from the body -------------------- */

app.use(bodyParser.urlencoded({ extended: false }));

/* ---------------------- Allow json data from the body --------------------- */

app.use(bodyParser.json());

/* --------- Allow the helps to get resources from external servers --------- */

app.use(cors());
app.options("*", cors());

/* ---------------------------- File Path Create ---------------------------- */

app.use(express.static(path.join(__dirname, `./public`)));

/* --------------------------- Database connection -------------------------- */

connectDB();

/* ---------------------------- Route connection ---------------------------- */

app.use("/v1", routes);

/* --------- Whenever route not connect that time through the error --------- */

app.use((req, res, next) => {
    next(new Error("Route not found!"));
});

/* ---------------------- Create Server by the Express ---------------------- */

const server = http.createServer(app);

server.listen(config.port, () => {
    console.log("server listning port number " + config.port);
});