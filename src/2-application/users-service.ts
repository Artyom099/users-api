import {ObjectId} from 'mongodb'
import {UsersRepository} from '../3-repositories/users-repository'
import {UserDBType} from '../3-repositories/types'


export class UsersService {
    constructor(protected usersRepository: UsersRepository) {}
    // transaction script pattern
    async getUsers(term: string): Promise<UserDBType[]> {
        return this.usersRepository.getUsers(term)
    }
    async getUser(id: ObjectId): Promise<UserDBType | null> {
        return this.usersRepository.getUser(id)
    }
    async createUser(userName: string, bio: string): Promise<UserDBType> {
        let user = new UserDBType(
            new ObjectId(),
            userName,
            bio,
            new Date(),
            [
                {
                    _id: new ObjectId(),
                    src: 'http://blabla.com',
                    addedAt: new Date()
                }
            ]
        )
        return this.usersRepository.createUser(user)
    }
    async updateUser(id: ObjectId, userName: string, bio: string): Promise<boolean> {
        return this.usersRepository.updateUser(id, userName, bio)
    }
    async deleteUser(id: ObjectId): Promise<boolean> {
        return this.usersRepository.deleteUser(id)
    }
}