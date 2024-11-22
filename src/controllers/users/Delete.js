import { StatusCodes } from "http-status-codes"
import { users, setUsers } from "../index.js"

export const deleteById = (req, res) => {
    const id = req.params.id

    const user = users.find(u => u.id === id)

    if (!user) {
        return res.status(StatusCodes.NOT_FOUND).json({
            mensagem: 'Usuário não encontrado'
        })
    } else {
        const newusers = users.filter(u => u.id != id)

        setUsers(newusers)
        
        return res.status(StatusCodes.OK).json({
            mensagem: 'Usuário removido com sucesso'
        })
    }

}