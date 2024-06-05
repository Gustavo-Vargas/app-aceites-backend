import { Request, Response } from "express";
import Product from "../models/productModel";

// Función para obtener los datos de un producto
const getPedido = async (req: Request, res: Response) => {
	try {
		const pedido = await Product.findById(req.body._id);
		if (!pedido)
			return res.status(404).json({ message: "Pedido no encontrado" });

		res.json(pedido);
	} catch (error) {
		console.log(error);
		res
			.status(500)
			.json({ message: "Error al obtener los datos del producto " });
	}
}; // FIn de getRestaurante

// Función para crear un producto
const createPedido = async (req: Request, res: Response) => {
	try {
		const existingPedido = await Product.findOne({
			numPedido: req.body.numPedido,
		});

		if (existingPedido) {
			return res.status(409).json({ message: "El Numero de Pedido ya existe" });
		}

		const newProduct = new Product(req.body);
		await newProduct.save();

		res.status(201).json(newProduct.toObject());
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Error al crear Pedido" });
	}
};

// Función para crear un producto
const updatePedido = async (req: Request, res: Response) => {
	try {
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Error al actualizar el producto" });
	}
};

// Función para crear un producto
const deletePedido = async (req: Request, res: Response) => {
	try {
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Error al actualizar el producto" });
	}
};

export default {
	getPedido,
	createPedido,
	updatePedido,
	deletePedido,
};
