import { Injectable } from '@nestjs/common';
import * as fs from "fs";
import * as path from 'path' 
import { User } from '@/types/user.type';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UserService {
    private users: User[];
    constructor() {
        this.users = JSON.parse(fs.readFileSync(path.join(__dirname, '..', '..', 'data', 'users.json'), 'utf8'));
        
    }
  getUsers(): User[] {
    return this.users;
  }

  getUser(id: string): User {
    const user = this.users.find((user) => user.id === id);
    return user;
  }
}
