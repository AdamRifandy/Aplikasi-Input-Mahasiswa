import { Router } from "express";
import addMahasiswa from "./addMahasiswa.js";
import editMahasiswa from "./editMahasiswa.js";
import deleteMahasiswa from "./deleteMahasiswa.js";

const route = Router();
route.post("/add", addMahasiswa);
route.put("/edit/:id", editMahasiswa);
route.delete("/delete/:id", deleteMahasiswa);

export default route;
