import { Request, Response } from "express";
import Product from "../models/productModel";

// Función para obtener los datos de un producto
const getProduct = async (req: Request, res: Response) => {
	try {
		const product = await Product.findOne({ nombre: req.body.nombre });
		if (!product)
			return res.status(404).json({ message: "Producto no encontrado" });

		res.json(product);
	} catch (error) {
		console.log(error);
		res
			.status(500)
			.json({ message: "Error al obtener los datos del producto " });
	}
}; // FIn de getRestaurante

// Función para crear un producto
const createProduct = async (req: Request, res: Response) => {
	try {
		const existingProduct = await Product.findOne({ nombre: req.body.nombre });

		if (existingProduct) {
			return res.status(409).json({ message: "El Producto ya existe" });
		}

		// Creamos una url de cloudinary para la imagen del restaurante
		const image = req.file as Express.Multer.File;

		// Convertimos el objeto de la imagen a un objeto base 64 para poderlo
		//alamcenar como iamgen en Cloudinary
		const base64Image = Buffer.from(image.buffer).toString("base64");
		const dataUri = "data:" + image.mimetype + ";base64," + base64Image;

		// Subimos la imagen a Cloudinary
		// const uploadResponse = await cloudinary.v2.uploader.upload(dataUri);

		// Creamos el objeto restaurante y lo almacenamos en la base de datos
		const product = new Product(req.body);
		// product.imageUrl = uploadResponse.url;

		await product.save();

		res.status(201).send(product);
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Error al crear producto" });
	}
};

// Función para crear un producto
const updateProduct = async (req: Request, res: Response) => {
	try {
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Error al actualizar el producto" });
	}
};

// Función para crear un producto
const deleteProduct = async (req: Request, res: Response) => {
	try {
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Error al actualizar el producto" });
	}
};


export default {
	getProduct,
	createProduct,
	updateProduct,
    deleteProduct
};
