const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

app.use(express.json());
app.use(
	cors({
		origin: ["http://localhost:3000"],
		methods: ["GET", "POST"],
		credentials: true,
	})
);

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
