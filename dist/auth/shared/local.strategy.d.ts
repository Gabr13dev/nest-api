import { Strategy } from "passport-local";
import { AuthService } from "./auth.service";
declare const LocalStrategy_base: new (...args: any[]) => Strategy;
export declare class LocalStrategy extends LocalStrategy_base {
    private authService;
    constructor(authService: AuthService);
    validate(email_user: string, password_user: string): Promise<{
        id_user: number;
        fullname_user: string;
        email_user: string;
    }>;
}
export {};
