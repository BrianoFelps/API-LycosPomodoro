import express from 'express';
import cors from 'cors';
import userRoutes from './routes/Paths.js';

const app = express();

app.use(express.json());

app.use(cors());

app.use("/pom", userRoutes);

const port = process.env.PORT || 8080

app.listen(port, () => {
    console.log(`Server rodando na porta ${port}`);
})