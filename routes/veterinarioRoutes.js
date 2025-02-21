import express from "express";

import {
  registrar,
  perfil,
  confirmar,
  autenticar,
  olvidePassword,
  nuevoPassword,
  comprobarToken,
  actualizarPerfil,
  actualizarPassword,
} from "../controllers/veterinarioController.js";
import checkAuth from "../middleware/authMiddleware.js";

const router = express.Router();

// Area Publica
router.post("/", registrar);
router.get("/confirmar/:token", confirmar);
router.post("/login", autenticar);
router.post("/olvide-password", olvidePassword);
router.get("/olvide-password/:token", comprobarToken);
router.post("/olvide-password/:token", nuevoPassword);

// Area Privada
router.get("/perfil", checkAuth, perfil);
router.put("/perfil/:id", checkAuth, actualizarPerfil)
router.put("/actualizar-password", checkAuth, actualizarPassword)

export default router;
