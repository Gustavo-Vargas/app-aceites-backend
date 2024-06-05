import mongoose from "mongoose";

const productItemSchema = new mongoose.Schema({
    product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
	cantidad: {
		type: String,
		required: true,
	},
    priceTotal: {
		type: String,
		required: true,
	},
});

const pedidoSchema = new mongoose.Schema({
	user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    numPedido: { type: String, required: true },
    estado: { type: String, required: true },
    pago: { type: String, required: true },
    productItems: [productItemSchema],
    fehcaEntrega: { type: Date, required: true },
});

export default mongoose.model("Pedido", pedidoSchema);
