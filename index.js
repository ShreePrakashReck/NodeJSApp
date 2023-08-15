const express = require("express");
const dbConnect = require("./config/database");
const cookieParser = require("cookie-parser");
const UserRouters = require("./routes/UserRoutes");
const cors = require("cors");

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

const PORT = 4000;

app.use("/api/v1", UserRouters);
app.use("/", (req, res) => {
  res.send({ message: "All is Hello Well " });
});

dbConnect();
app.listen(PORT, () => {
  console.log(`App is Listening on ${PORT}`);
});
