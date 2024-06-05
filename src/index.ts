import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import morgan from "morgan";

// Importamos el archivo de ruta de usuarios
import userRoutes from "./routes/userRoutes";
import productRoutes from "./routes/productRoutes";
import categoriaRoutes from "./routes/categoriaRoutes";
import pedidoRoutes from "./routes/pedidoRoutes";

mongoose.connect(process.env.DB_CONNECTION_STRING as string).then(() => {
	console.log("Base de datos conectada");
});

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.get("/health", async (req: Request, res: Response) => {
	res.send({ message: "¡Servidor OK!" });
});

app.use("/api/user", userRoutes);
app.use("/api/product", productRoutes);
app.use("/api/categoria", categoriaRoutes);
app.use("/api/pedido", pedidoRoutes);

const port = process.env.port || 3000;

app.listen(port, () => {
	console.log("App corriendo en el puerto: 3000");
});
