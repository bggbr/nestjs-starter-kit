import { UserRepository } from './user.repository';
import { CreateUserDto } from './dto/user.dto';
import { Injectable } from '@nestjs/common';
import { User } from '@/types/user.type';

@Injectable()
export class UserService {
  constructor(private userRepository:UserRepository) {}

  getUsers(): User[] {
    return this.userRepository.getUsers();
  }

  getUserById(id: string): User {
    return this.userRepository.getUserById(id);
  }

  createUser(createUserDto: CreateUserDto): User {
    const newUser: User = {
      id: '',
      name: createUserDto.name,
      email: createUserDto.email,
      phone: createUserDto.phone,
    }
    return this.userRepository.addUser(newUser);
  }
}
