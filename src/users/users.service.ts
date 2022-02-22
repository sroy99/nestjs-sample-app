import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [];
  getAllUsers(): User[] {
    return this.users;
  }

  getSingleUser(id: string): any {
    const reqdUser = this.users.find((user) => {
      Number(user.id) === Number(id);
    });
    console.log(reqdUser);
    if (reqdUser) {
      return reqdUser;
    } else {
      return 'Could not find the user';
    }
  }

  createUser(body: CreateUserDto): User {
    const newUserId = String(new Date().getTime());
    const newUser = { id: newUserId, ...body };
    this.users.push(newUser);
    return newUser;
  }
}
