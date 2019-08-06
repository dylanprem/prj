const express = require("express");
const app = express();

const mongoose = require("mongoose");
require("dotenv").config();

// DB connection
mongoose.connect(`${process.env.MONGO_URI}`, { useNewUrlParser: true }, () => {
  console.log("MongoDB Database Connected");
});

//Init Middleware
app.use(express.json({ extended: false }));

// Define routes
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/get", require("./routes/api/get"));
app.use("/api/post", require("./routes/api/post"));
app.use("/api/put", require("./routes/api/put"));
app.use("/api/delete", require("./routes/api/delete"));

app.get("/", (req, res) => res.send("API Running"));
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
