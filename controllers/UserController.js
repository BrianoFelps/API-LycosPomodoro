import * as UserModel from '../models/Users.js'

export const getUsers = async (_, res) =>{
    try{
        const users = await UserModel.getUsers();
        res.status(200).json(users);
    } catch (error){
        console.error(`Erro ao obter todos os usuários: ${error}`);
        res.status(500).json({ error: 'Erro ao obter os usuários' })
    }
}