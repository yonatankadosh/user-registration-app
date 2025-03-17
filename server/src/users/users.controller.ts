import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('api/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createUser(@Body() body: { name: string; email: string; age: number }) {
    return this.usersService.createUser(body.name, body.email, body.age);
  }

  @Get()
  async getAllUsers() {
    return this.usersService.getAllUsers();
  }
}
