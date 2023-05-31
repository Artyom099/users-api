import {ObjectId} from 'mongodb'
import {UserDBType} from './types'
import {UserModelClass} from './db'

export class UsersRepository {
    async getUsers(term: string): Promise<UserDBType[]> {
        return UserModelClass.find({term}).lean()
    }
    async getUser(id: ObjectId): Promise<UserDBType | null> {
        return UserModelClass.findOne({_id: id}).lean()
    }
    async createUser(user: UserDBType): Promise<UserDBType> {
        const userInstance = new UserModelClass()

        userInstance._id = user._id
        userInstance.userName = user.userName
        userInstance.bio = user.bio

        await userInstance.save()
        return user;
    }
    async updateUser(id: ObjectId, userName: string, bio: string): Promise<boolean> {
        const userInstance = await UserModelClass.findOne({_id: id})
        if (!userInstance) return false

        userInstance.userName = userName
        userInstance.bio = bio

        await userInstance.save()
        return true
    }
    async deleteUser(id: ObjectId): Promise<boolean> {
        const userInstance = await UserModelClass.findOne({_id: id})
        if (!userInstance) return false

        const result = await UserModelClass.deleteOne({_id: id})
        return result.deletedCount === 1
    }
}