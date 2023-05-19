import { Injectable } from "@nestjs/common";
import * as path from "path";
import * as fs from "fs";
import { v4 as uuidv4 } from 'uuid';
import { User } from "@/types/user.type";

@Injectable()
export class UserRepository {
    private readonly filePath: string;
    private users: User[]
    constructor() {
        try {
            this.filePath = path.join(__dirname, "..", "..", "data", "users.json");
            this.users = JSON.parse(this.filePath);
        } catch (error) {
            console.log(error);
        }
    }

    getUsers(): User[] {
        return this.users;
    }

    getUserById(id: string): User {
        return this.users.find((user) => user.id === id);
    }

    addUser(newUser: User): User {
        const newUserWithId = { ...newUser, id: this.generateId() };
        this.users.push(newUserWithId);
        fs.writeFileSync(this.filePath, JSON.stringify(newUserWithId));
        return newUserWithId;
    }

    private generateId(): string {
        return uuidv4();
    }
}