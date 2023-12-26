const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

// app.use(function (request, response, next) {
// 	response.header("Access-Control-Allow-Origin", "*");
// 	response.header(
// 		"Access-Control-Allow-Headers",
// 		"Origin, X-Requested-With, Content-Type, Accept"
// 	);
// 	next();
// });
app.use(
	cors({
		origin: ["https://mobile-ordering-client.vercel.app"],
		methods: ["GET", "POST", "PUT", "DELETE"],
		Headers: "Origin, X-Requested-With, Content-Type,Authorization, Accept",
		credentials: true,
	})
);

app.use(express.json());
app.use("/", (req, res) => {
	return res.send("Hello World");
});

const Route = require("./routes/Route");
app.use("/mobiles", Route);

app.listen(process.env.PORT, () => {
	console.log("Server Started Successfully on", process.env.PORT);
});

const dbConnect = require("./database/db");
dbConnect();
