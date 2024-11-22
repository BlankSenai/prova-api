import { users } from '../index.js'
import { StatusCodes } from 'http-status-codes'

export const getAll = (req, res) => {
    res.status(StatusCodes.OK).json(users) 
}