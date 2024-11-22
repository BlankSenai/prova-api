import { products } from "../index.js"
import { StatusCodes } from "http-status-codes"

export const getById = (req, res) => {
    const id = req.params.id

    const product = products.find(u => u.id === id)
    
    if (!product) {
        return res.status(StatusCodes.NOT_FOUND).json({
            mensagem: 'Produto não encontrado'
        })
    } else {
        return res.status(StatusCodes.OK).json(product)
    }
}