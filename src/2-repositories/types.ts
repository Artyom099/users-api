import {ObjectId, WithId} from 'mongodb'

export class UserDBType {
    constructor(
        public _id: ObjectId,
        public userName: string,
        public bio: string,
        public addedAt: Date,
        public avatars: AvatarDBType[],
    ) {}
}

export type AvatarDBType = WithId<{
    src: string
    addedAt: Date
}>
