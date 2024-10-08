import express from "express";

const app = express();

app.get("/", (req, res) => {
	res.status(200).send("HI");
});

app.listen(5000, () => {
	console.log("Server is running on port 5000");
});
const token = "엄";
const um = (req, res, next) => {
	if (token) {
		console.log("um");
		next();
	} else res.status(400).send("no token");
};
const jun = (req, res, next) => {
	console.log("jun");
	next();
};
const sik = (req, res, next) => {
	console.log("sik");
	next();
};

app.get("/junsik", um, jun, sik, (req, res) => {
	console.log("finished");
	res.status(200).send("finished");
});
