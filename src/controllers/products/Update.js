import { StatusCodes } from "http-status-codes"
import { products, setProducts } from '../index.js'

export const update = (req, res) => {
    const reqProduct = req.body
    const id = req.params.id

    if (reqProduct.nome.length < 3) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            mensagem: 'O nome deve ter pelo menos 3 caracteres',
        })
    } else if (reqProduct.nome.length > 100) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            mensagem: 'O nome deve ter no máximo 100 caracteres',
        })
    }

    if (reqProduct.preco < 0 || !Number(reqProduct.preco)) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            mensagem: 'O preço deve ser maior que 0',
        })
    }

    const product = products.find(u => u.id === id)

    if (!product) {
        return res.status(StatusCodes.NOT_FOUND).json({
            mensagem: 'Produto não encontrado'
        })
    } else {
        const newProducts = products.filter(p => p.id != id)

        reqProduct.id = id

        newProducts.push(reqProduct)

        setProducts(newProducts)

        return res.status(StatusCodes.OK).json({
            mensagem: 'Produto atualizado com sucesso'
        })
    }
}