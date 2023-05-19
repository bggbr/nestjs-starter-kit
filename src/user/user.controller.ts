import { Controller, Get, Param } from '@nestjs/common';
import { User } from "@/types/user.type";
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  getUsers(): User[] {
    return this.userService.getUsers();
  }

  @Get(':id')
  getUser(@Param('id') id: string): User {
    return this.userService.getUser(id);
  }

  
}
