import { Controller, Get, Post } from '@nestjs/common';

@Controller('user')
export class UserController {
  constructor() {}

  @Get()
  getUsers() {
    return 'This action returns all users';
  }

  @Post()
  createUser() {
    return 'This action creates a new user';
  }
}
