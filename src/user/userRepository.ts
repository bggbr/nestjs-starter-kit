import { readFile, writeFile } from 'fs/promises';
import { v4 as uuidv4 } from 'uuid';
import { User } from './types/user.type';

export class UserRepository {
  private user: User[];
}
