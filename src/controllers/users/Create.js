import { users } from '../index.js'
import { StatusCodes } from 'http-status-codes'

export const create = (req, res) => {
    const user = req.body

    if (user.nome.length < 3) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            mensagem: 'O nome deve ter pelo menos 3 caracteres',
        })
    } else if (user.nome.length > 150) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            mensagem: 'O nome deve ter no máximo 150 caracteres',
        })
    }

    if (user.cpf.length != 11 || !Number(user.cpf)) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            mensagem: 'CPF Inválido'
        })
    }

    if (user.email.length < 3) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            mensagem: 'O e-mail deve ter pelo menos 3 caracteres',
        })
    } else if (user.email.length > 100) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            mensagem: 'O e-mail deve ter no máximo 100 caracteres',
        })
    } 
    else {
        const emailArr = user.email.split('')

        const atIndex = emailArr.indexOf('@')
        const dotIndex = emailArr.indexOf('.')

        if (!(atIndex && dotIndex && dotIndex > atIndex)) {
            return res.status(StatusCodes.BAD_REQUEST).json({
                mensagem: 'Formato do e-mail inválido',
            })
        }
    }

    user.id = crypto.randomUUID()

    users.push(user)

    return res.status(StatusCodes.CREATED).json({
        mensagem: 'Usuário criado com sucesso',
    })
}