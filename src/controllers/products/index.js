import * as getAll from './GetAll.js'
import * as getById from './GetById.js'
import * as deleteById from './Delete.js'
import * as updateById from './Update.js'
import * as create from './Create.js'

export const ProductController = {
    ...getAll,
    ...create,
    ...deleteById,
    ...getById,
    ...updateById
}