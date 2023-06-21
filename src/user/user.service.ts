import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TestUser } from './user.entity';
import { CreateUserDto } from './dto/user.dto';
import { User } from './types/user.type'; // 타입 추가

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(TestUser)
    private userRepository: Repository<TestUser>,
  ) {}

  create(createUserDto: CreateUserDto): Promise<User> {
    const user = new TestUser();
    user.name = createUserDto.name;
    user.email = createUserDto.email;
    user.password = createUserDto.password;

    return this.userRepository.save(user);
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  findByUserId(id: number): Promise<User> {
    return this.userRepository.findOne({ where: { id } });
  }
}
