import { UserService } from './shared/user.service';
import { User } from './model/user.entity';
export declare class UsersController {
    private userService;
    constructor(userService: UserService);
    getAll(): Promise<User[]>;
    getById(id: number): Promise<User>;
    create(user: User): Promise<User>;
    update(id: number, user: User): Promise<import("typeorm").UpdateResult>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
