import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from './shared/user.service';

import { User } from './model/user.entity'

@Controller('users')
export class UsersController {
  constructor(
      private userService: UserService) 
      {}

  @Get()
  async getAll() {
    return await this.userService.getAll();
  }

  @Get(':id')
  async getById(@Param('id')id: number) : Promise<User> {
    return await this.userService.getById(id);
  }

  @Post()
  async create(@Body() user: User) : Promise<User> {
    return await this.userService.create(user);
  }

  @Put(':id')
  async update(@Param('id')id: number, @Body() user: User){
    return await this.userService.update(id, user);
  }

  @Delete(':id')
  async delete(@Param('id')id: number){
    return await this.userService.delete(id);
  }



}
