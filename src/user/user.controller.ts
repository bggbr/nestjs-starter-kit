import { Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  getUsers() {
    this.userService.getHello();
    return 'This action returns all users';
  }

  @Post()
  createUser() {
    return 'This action creates a new user';
  }
}
