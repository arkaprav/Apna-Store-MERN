const express = require("express");
const contactRoutes = require("./routes/ContactRoutes");
const errorHandler = require("./middleware/errorHandler");
const dbConnect = require("./config/dbConfig");
require("dotenv").config();

dbConnect();

const app = express();

const port = 5000 || process.env.PORT;

app.use(express.json());
app.use("/api/users", contactRoutes);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server Started at Port No. ${port}`);
});