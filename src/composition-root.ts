import {UsersRepository} from "./3-repositories/users-repository";
import {UsersService} from "./2-application/users-service";
import {UsersController} from "./1-controllers/users-controller";


const usersRepository = new UsersRepository()
const usersService = new UsersService(usersRepository)
export const usersController = new UsersController(usersService)