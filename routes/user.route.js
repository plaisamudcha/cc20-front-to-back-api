import express from 'express'
import { usersController } from '../controllers/user.controller.js'
import { authMiddleware } from '../middlewares/auth.middleware.js'

const userRouter = express.Router()

userRouter.get('/users',authMiddleware.check,usersController.listUsers)
userRouter.get('/user',usersController.getUser)
userRouter.post('/user',usersController.postUser)
userRouter.patch('/user/role/:id',usersController.updateUser)
userRouter.delete('/user/:id',usersController.deleteUser)

export default userRouter