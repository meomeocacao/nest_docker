import { Body, Controller, Get, Post } from '@nestjs/common';
import { Observable } from 'rxjs';
import { runInThisContext } from 'vm';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UserI } from '../models/user.interface';
import { UserService } from '../service/user.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  createAcc(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }
}
