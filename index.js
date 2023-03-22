const express = require("express");
const app=express();
const indexRouters = require("./routers/index.routers");
app.use("/",indexRouters);
console.log("hi,server is running")
const {sequelize,Book}=require("./models/book.model")
sequelize.sync().then(() => {
    console.log('Book table created successfully!');
 }).catch((error) => {
    console.error('Unable to create table : ', error);
 });

const cors = require("cors");

const db = require("./models/admin");
const tutorialRoutes = require("./routers/index.routers");

var corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use("/api/tutorials", tutorialRoutes);

db.sequelize
  .sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to CRUD Application!" });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port http://127.0.01:${PORT} .`);
});
 