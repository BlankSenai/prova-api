import { Router } from 'express'
import { ProductController } from '../controllers/products/index.js'
import { UserController } from '../controllers/users/index.js'

const router = Router()

router.get('/usuario', UserController.getAll)
router.get('/usuario/:id', UserController.getById)
router.post('/usuario', UserController.create)
router.put('/usuario/:id', UserController.update)
router.delete('/usuario/:id', UserController.deleteById)

router.get('/produto', ProductController.getAll)
router.get('/produto/:id', ProductController.getById)
router.post('/produto', ProductController.create)
router.put('/produto/:id', ProductController.update)
router.delete('/produto/:id', ProductController.deleteById)

export default router