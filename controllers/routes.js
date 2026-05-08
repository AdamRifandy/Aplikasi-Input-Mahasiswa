import { Router } from "express";
import addMahasiswa from "./addMahasiswa.js";
import editMahasiswa from "./editMahasiswa.js";
import deleteMahasiswa from "./deleteMahasiswa.js";
import getMahasiswa from "./getMahasiswa.js";
import allMahasiswa from "./allMahasiswa.js";

const route = Router();
route.post("/add", addMahasiswa);
route.put("/edit/:id", editMahasiswa);
route.delete("/delete/:id", deleteMahasiswa);
route.post("/get/:id", getMahasiswa);
route.get("/all", allMahasiswa);

export default route;
