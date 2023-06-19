import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TestUser } from './user.entity';
import { CreateUserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(TestUser)
    private userRepository: Repository<TestUser>,
  ) {}

  create(createUserDto: CreateUserDto): Promise<TestUser> {
    const user = new TestUser();
    user.name = createUserDto.name;
    user.email = createUserDto.email;
    user.password = createUserDto.password;

    return this.userRepository.save(user);
  }

  findAll(): Promise<TestUser[]> {
    return this.userRepository.find();
  }
}
