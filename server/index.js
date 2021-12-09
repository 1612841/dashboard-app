const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const listRoute = require('./routes/lists');
const cors = require("cors")

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("DB Connection Successful!"))
.catch((err) => console.log(err));

app.use(express.json());
app.use(cors());

app.use("/api/lists", listRoute);

app.listen(8800, () => {
    console.log("Backend server is running!");
});