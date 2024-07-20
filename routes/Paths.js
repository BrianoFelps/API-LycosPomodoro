// Definir rotas
import express from 'express';
import { getUsers } from '../controllers/UserController.js';

const router = express.Router();

// Requisição feita ao tentar acessar a rota
// router.get("/", () => {console.log("Rota de usuários acionada.")});
router.get("/", getUsers);
// Rota dentro da /pom


export default router;
