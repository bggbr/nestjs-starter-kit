import { Controller, Post, Get, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { TestUser } from './user.entity';
import { CreateUserDto } from './dto/user.dto';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto): Promise<TestUser> {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll(): Promise<TestUser[]> {
    return this.userService.findAll();
  }
}
