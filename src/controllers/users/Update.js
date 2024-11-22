import { StatusCodes } from "http-status-codes"
import { users, setUsers } from '../index.js'

export const update = (req, res) => {
    const reqUser = req.body
    const id = req.params.id

    if (reqUser.nome.length < 3) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            mensagem: 'O nome deve ter pelo menos 3 caracteres',
        })
    } else if (reqUser.nome.length > 150) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            mensagem: 'O nome deve ter no máximo 150 caracteres',
        })
    }

    if (reqUser.cpf.length != 11 || !Number(reqUser.cpf)) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            mensagem: 'CPF Inválido'
        })
    }

    if (reqUser.email.length < 3) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            mensagem: 'O e-mail deve ter pelo menos 3 caracteres',
        })
    } else if (reqUser.email.length > 100) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            mensagem: 'O e-mail deve ter no máximo 100 caracteres',
        })
    } 
    else {
        const emailArr = reqUser.email.split('')

        const atIndex = emailArr.indexOf('@')
        const dotIndex = emailArr.indexOf('.')

        if (!(atIndex && dotIndex && dotIndex > atIndex)) {
            return res.status(StatusCodes.BAD_REQUEST).json({
                mensagem: 'Formato do e-mail inválido',
            })
        }
    }

    const user = users.find(u => u.id === id)

    if (!user) {
        return res.status(StatusCodes.NOT_FOUND).json({
            mensagem: 'Usuário não encontrado'
        })
    } else {
        const newUsers = users.filter(u => u.id != id)

        reqUser.id = id

        newUsers.push(reqUser)

        setUsers(newUsers)

        return res.status(StatusCodes.OK).json({
            mensagem: 'Usuário atualizado com sucesso'
        })
    }
}