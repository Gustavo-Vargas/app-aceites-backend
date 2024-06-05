import express from "express";
import productController from "../controllers/productController";
import { jwtCheck, jwtParse } from "../middleware/auth";
import { validateuserRequest } from "../middleware/validation";

const router = express.Router();

// Rutas para Productos

// Ruta para obtener un producto
router.get("/", productController.getProduct);

// Ruta para crear producto
router.post("/", jwtCheck, productController.createProduct);

// RUta para actualizar producto
router.put(
	"/",
	jwtCheck,
	jwtParse,
	validateuserRequest,
	productController.updateProduct
);

// Ruta para eliminar producto
router.delete(
	"/",
	jwtCheck,
	jwtParse,
	productController.deleteProduct
);

export default router;
