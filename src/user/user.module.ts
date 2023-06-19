import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestUser } from './user.entity';
import { UserService } from './user.service';
import { UserController } from './user.controller';

@Module({
  imports: [TypeOrmModule.forFeature([TestUser])],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
