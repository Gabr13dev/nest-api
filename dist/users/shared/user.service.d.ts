import { User } from '../model/user.entity';
import { Repository } from 'typeorm';
export declare class UserService {
    private readonly repo;
    constructor(repo: Repository<User>);
    getAll(): Promise<User[]>;
    getById(id: number): Promise<User>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
    update(id: number, user: User): Promise<import("typeorm").UpdateResult>;
    create(user: User): Promise<User>;
    getByEmail(email: string): Promise<User>;
}
