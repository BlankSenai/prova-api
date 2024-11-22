import { users } from "../index.js"
import { StatusCodes } from "http-status-codes"

export const getById = (req, res) => {
    const id = req.params.id

    const user = users.find(u => u.id === id)
    
    if (!user) {
        return res.status(StatusCodes.NOT_FOUND).json({
            mensagem: 'Usuário não encontrado'
        })
    } else {
        return res.status(StatusCodes.OK).json(user)
    }
}