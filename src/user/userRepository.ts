import { v4 as uuidv4 } from 'uuid';
import { User } from './types/user.type';
import { readFileSync } from 'fs';

export class UserRepository {
  private user: User[];
  constructor() {
    const data = this.checkUserDataFiles();
  }

  private async checkUserDataFiles() {
    const files = readFileSync('../../../data/users.json', 'utf-8');
    console.log(files);
  }
}
