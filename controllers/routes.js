import { Router } from "express";
import addMahasiswa from "addMahasiswa.js";
import editMahasiswa from "editMahasiswa.js";

const route = Router();
route.post("/add", addMahasiswa);
route.put("/edit/:id", editMahasiswa);

export default route;
