import express from "express";
import cors from "cors";
import morgan from "morgan";

const app = express();
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use(express.static("view"));
app.use("/assets", express.static("assets"));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Running application on port: ${PORT}`);
});
