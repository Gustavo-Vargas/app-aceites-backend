import { Request, Response } from "express";
import Categoria from "../models/categoriaModel";

const createCategory = async (req: Request, res: Response) => {
	try {
		const { nombre } = req.body;
		
		const existingCategoria = await Categoria.findOne({ nombre });

		if (existingCategoria) return res.status(200).json({ message: "La Categoria ya existe" });

		const newCategory = new Categoria(req.body);
		await newCategory.save();

		res.status(201).json(newCategory.toObject());
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Error al crear usuario" });
	}
};

const updateCategory = async (req: Request, res: Response) => {
	try {
		const { nombre } = req.body;
		const categoria = await Categoria.findById({nombre});

		if (!categoria)
			return res.status(404).json({ message: "Categoria no encontrado" });
		categoria.nombre = nombre;

		await categoria.save();
		res.send(categoria);
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Error al actualizar usuario" });
	}
};

const deleteCategory = async (req: Request, res: Response) => {
	try {
		
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Error al actualizar usuario" });
	}
};

const getCategory = async (req: Request, res: Response) => {
	try {
		const currentCategory = await Categoria.findOne({ nombre: req.body.nombre });

		if (!currentCategory)
			return res.status(404).json({ message: "Categoria no encontrada" });

		res.json(currentCategory);
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Error al obtener el usuario" });
	}
};

export default {
	createCategory,
	updateCategory,
	getCategory,
    deleteCategory,
};
