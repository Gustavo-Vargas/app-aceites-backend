import express from "express";
import pedidoController from "../controllers/pedidosController";
import { jwtCheck, jwtParse } from "../middleware/auth";
import { validateuserRequest } from "../middleware/validation";

const router = express.Router();

// Ruta para obtener un pedido
router.get("/", pedidoController.getPedido);

// Ruta para crear pedido
router.post("/", jwtCheck, pedidoController.createPedido);

// RUta para actualizar pedido
router.put(
	"/",
	jwtCheck,
	jwtParse,
	validateuserRequest,
	pedidoController.updatePedido
);

// Ruta para eliminar pedido
router.delete("/", jwtCheck, jwtParse, pedidoController.deletePedido);

export default router;
