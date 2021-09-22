import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../model/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
      @InjectRepository(User) private readonly repo: Repository<User>
      
      ) { }

  public async getAll() {
    return await this.repo.find();
  }

  public async getById(id: number){
      return await this.repo.findOneOrFail(id);
  }

  public async delete(id: number){
    return await this.repo.delete(id);
  }

  public async update(id: number, user: User){
    return await this.repo.update(id, user);
  }

  public async create(user: User){
    return await this.repo.save(user);
  }
}
