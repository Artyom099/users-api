import {UsersService} from "../2-application/users-service";
import {Request, Response} from "express";
import {ObjectId} from "mongodb";


export class UsersController {
    constructor(protected usersService: UsersService) {}
    async getUsers(req: Request, res: Response) {
        const users = await this.usersService.getUsers(req.query.term as string)
        res.send(users)
    }
    async getUser(req: Request<{id: string}>, res: Response) {
        let user = await this.usersService.getUser(new ObjectId(req.params.id))
        if (user) {
            res.send(user)
        } else {
            res.send(404)
        }
    }
    async createUser(req: Request<{},{},{userName: string, bio: string}>, res: Response) {
        const user = await this.usersService.createUser(req.body.userName, req.body.bio)
        res.status(201).send(user)
    }
    async updateUser(req: Request<{id: string},{userName: string, bio: string}>, res: Response) {
        const isUpdated = await this.usersService.updateUser(new ObjectId(req.params.id), req.body.userName, req.body.bio)
        if (isUpdated) {
            res.send(204)
        } else {
            res.send(404)
        }
    }
    async deleteUser(req: Request<{id: string}>, res: Response) {
        const isDeleted = await this.usersService.deleteUser(new ObjectId(req.params.id))
        if (isDeleted) {
            res.send(204)
        } else {
            res.send(404)
        }
    }
}