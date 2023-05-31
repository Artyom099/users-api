import {Router} from 'express'
import {usersController} from "../composition-root";


export const usersRouter = Router({})

usersRouter.post('/', usersController.createUser.bind(usersController))
usersRouter.put('/:id', usersController.updateUser.bind(usersController))
usersRouter.get('/', usersController.getUsers.bind(usersController))
usersRouter.get('/:id', usersController.getUser.bind(usersController))
usersRouter.delete('/:id', usersController.deleteUser.bind(usersController))