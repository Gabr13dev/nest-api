import { UserService } from 'src/users/shared/user.service';
export declare class AuthService {
    private userService;
    constructor(userService: UserService);
    validateUser(userEmail: string, userPassword: string): Promise<{
        id_user: number;
        fullname_user: string;
        email_user: string;
    }>;
}
