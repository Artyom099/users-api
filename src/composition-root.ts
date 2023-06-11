import {AdminUsersRepository, UsersRepository} from "./3-repositories/users-repository";
import {UsersService} from "./2-application/users-service";
import {UsersController} from "./1-controllers/users-controller";

const objects: any[] = []

const usersRepository = new UsersRepository()
objects.push(usersRepository)

const adminUsersRepository = new AdminUsersRepository()
objects.push(adminUsersRepository)

const usersService = new UsersService(usersRepository)
objects.push(usersService)

const usersController = new UsersController(usersService)
objects.push(usersController)

export const ioc = {
    getInstance<T>(ClassType: any) {
        const targetInstance = objects.find(o => o instanceof ClassType)
        return targetInstance as T
    }
}