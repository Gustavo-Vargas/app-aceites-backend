import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    categoria: { type: mongoose.Schema.Types.ObjectId, ref: "Categoria" },
	nombre: { type: String, required: true },
	descripcion: { type: String, required: true },
	origen: { type: String, required: true },
	precio: { type: String, required: true },
	imageUrl: { type: String, required: true },
});

export default mongoose.model("Product", productSchema);
