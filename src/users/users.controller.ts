import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getUsers(): any {
    return this.usersService.getAllUsers();
  }

  @Get(':id')
  getUsersById(@Param('id') id: string): any {
    return this.usersService.getSingleUser(id);
  }

  @Post('create')
  createUser(@Body() body: CreateUserDto): any {
    return this.usersService.createUser(body);
  }
}
