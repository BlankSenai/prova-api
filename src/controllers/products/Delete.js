import { StatusCodes } from "http-status-codes"
import { products, setProducts } from "../index.js"

export const deleteById = (req, res) => {
    const id = req.params.id

    const product = products.find(u => u.id === id)

    if (!product) {
        return res.status(StatusCodes.NOT_FOUND).json({
            mensagem: 'Produto não encontrado'
        })
    } else {
        const newProducts = products.filter(p => p.id != id)

        setProducts(newProducts)
        
        return res.status(StatusCodes.OK).json({
            mensagem: 'Produto removido com sucesso'
        })
    }

}