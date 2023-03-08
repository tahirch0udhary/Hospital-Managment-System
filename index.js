const express = require("express");
const app = express();
const port = 3000;
const requireRoute = require("./routers/route");

app.use("/user", requireRoute)

app.listen(port, () => {
    console.log("hi server running");
})

