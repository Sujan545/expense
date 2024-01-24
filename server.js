const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const colors = require("colors");
const connectDb = require("./config/connectDb");
const userRoute = require("./routes/userRoute");
//config dot env file
dotenv.config();

//database call
connectDb();

//rest object
const app = express();

//middlware
app.use(morgan("dev"));
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" }));

app.use(express.urlencoded({ extended: true }));

//routes
//users route
app.use("/api/users", require("./routes/userRoute"));

//transecton route
app.use("/api/transections", require("./routes/transectionRoute"));
//port
const PORT = process.env.PORT || 8080;

//listen server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
