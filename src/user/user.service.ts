import { CreateUserDto } from './dto/user.dto';
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

  getUserById(id: string): User {
    const user = this.users.find((user) => user.id === id);
    return user;
  }

  createUser(createUserDto: CreateUserDto): User {
    const newUser: User = {
      id: this.generateId(),
      name: createUserDto.name,
      email: createUserDto.email,
      phone: createUserDto.phone,
    }
    this.users.push(newUser);
    const newUserList = [...this.users]
    fs.writeFileSync(path.join(__dirname, '..', '..', 'data', 'users.json'), JSON.stringify(newUserList))
    return newUser;
  }

  private generateId(): string {
    return uuidv4();
  }
}
