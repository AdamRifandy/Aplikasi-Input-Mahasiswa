import express from "express";
import cors from "cors";
import morgan from "morgan";
import route from "../controllers/routes.js";

const app = express();
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use(express.static("views"));
app.use("/assets", express.static("assets"));
app.use("/mahasiswa", route)

const PORT = 1945;
app.listen(PORT, () => {
  console.log(`Running application on port: ${PORT}`);
});
