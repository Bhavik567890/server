import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import productRoutes from "./routes/productroutes";

import errorHandler from "./middlewares/errorHandler";

dotenv.config();

const app = express();
app.use(express.json());
app.use(errorHandler);

app.use(cors());

// Routes
app.use("/api/products", productRoutes);

export default app;
