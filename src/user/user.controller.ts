import {
  Controller,
  Post,
  Get,
  Body,
  Param,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { UserService } from './user.service';
import { TestUser } from './user.entity';
import { CreateUserDto } from './dto/user.dto';
import { User } from './types/user.type';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    try {
      return await this.userService.create(createUserDto);
    } catch (error) {
      throw new InternalServerErrorException('Failed to create user.');
    }
  }

  @Get()
  async findAll(): Promise<User[]> {
    try {
      return await this.userService.findAll();
    } catch (error) {
      throw new InternalServerErrorException('Failed to retrieve users.');
    }
  }

  @Get(':id')
  async findById(@Param('id') id: number): Promise<User> {
    const user = await this.userService.findByUserId(id);
    if (!user) {
      throw new NotFoundException('User not found.');
    }
    return user;
  }
}
