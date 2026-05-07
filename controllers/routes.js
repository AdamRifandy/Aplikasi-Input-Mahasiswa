import { Router } from "express";
import addMahasiswa from "addMahasiswa.js";
import editMahasiswa from "editMahasiswa.js";

const route = Router();
route.post("/mahasiswa/add", addMahasiswa);
route.put("/mahasiswa/edit/:id", editMahasiswa);

export default route;
