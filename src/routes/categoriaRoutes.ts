import express from "express";
import categoriaController from "../controllers/categoriaController";
import { jwtCheck, jwtParse } from "../middleware/auth";
import { validateuserRequest } from "../middleware/validation";

const router = express.Router();

// Rutas para Productos

// Ruta para obtener un producto
router.get("/", categoriaController.getCategory);

// Ruta para crear producto
router.post("/", jwtCheck, categoriaController.createCategory);

// RUta para actualizar producto
router.put(
	"/",
	jwtCheck,
	jwtParse,
	validateuserRequest,
	categoriaController.updateCategory
);

// Ruta para eliminar producto
router.delete(
	"/",
	jwtCheck,
	jwtParse,
	categoriaController.deleteCategory
);

export default router;
