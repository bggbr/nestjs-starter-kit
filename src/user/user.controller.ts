import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { User } from "@/types/user.type";
import { UserService } from './user.service';
import { CreateUserDto } from './dto/user.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  getUsers(): User[] {
    return this.userService.getUsers();
  }

  @Get(':id')
  getUser(@Param('id') id: string): User {
    return this.userService.getUserById(id);
  }

  @Post()
  createUser(@Body() createUserDto:CreateUserDto): User {
    return this.userService.createUser(createUserDto);
  }

  
}
