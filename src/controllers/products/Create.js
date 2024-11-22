import { products } from '../index.js'
import { StatusCodes } from 'http-status-codes'

export const create = (req, res) => {
    const product = req.body

    if (product.nome.length < 3) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            mensagem: 'O nome deve ter pelo menos 3 caracteres',
        })
    } else if (product.nome.length > 100) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            mensagem: 'O nome deve ter no máximo 100 caracteres',
        })
    }

    if (product.preco < 0 || !Number(product.preco)) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            mensagem: 'O preço deve ser maior que 0',
        })
    }

    product.id = crypto.randomUUID()

    products.push(product)

    return res.status(StatusCodes.CREATED).json({
        mensagem: 'Produto cadastrado com sucesso',
    })
}