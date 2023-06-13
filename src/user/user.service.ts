import { Injectable } from '@nestjs/common';
import { UserRepository } from './userRepository';

@Injectable()
export class UserService {
  getHello(): string {
    const userRepository = new UserRepository();

    return 'Hello World!';
  }
}
