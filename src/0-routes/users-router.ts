import{Router} from 'express'
import {ioc} from "../composition-root";
import {UsersController} from "../1-controllers/users-controller";


const usersController = ioc.getInstance<UsersController>(UsersController)

export const usersRouter = Router({})

usersRouter.post('/', usersController.createUser.bind(usersController))
usersRouter.put('/:id', usersController.updateUser.bind(usersController))
usersRouter.get('/', usersController.getUsers.bind(usersController))
usersRouter.get('/:id', usersController.getUser.bind(usersController))
usersRouter.delete('/:id', usersController.deleteUser.bind(usersController))