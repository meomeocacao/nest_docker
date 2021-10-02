import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UserEntity } from '../models/user.entity';
import { UserI } from '../models/user.interface';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  add(user: UserI): Observable<UserEntity> {
    return from(this.userRepository.save(user));
  }

  findAll(): Observable<UserEntity[]> {
    return from(this.userRepository.find());
  }

  findByUsername(username: string): Promise<UserEntity> {
    return this.userRepository.findOne({ username });
  }
  create(createUserDto: CreateUserDto): Promise<UserEntity> {
    return this.userRepository.save(createUserDto);
  }
}
