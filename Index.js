const express = require("express");
const app = express();
const port = 3300;
const requireRoute = require("./Routes/routescont");

app.use("/", requireRoute)

app.listen(port, () => {
    console.log("hi server running");
})