import { Injectable, UnauthorizedException } from "@nestjs/common";
import { Strategy } from "passport-local";
import { PassportStrategy } from "@nestjs/passport";
import { AuthService } from "./auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){

constructor(
    private authService: AuthService
) {
    super({
        usernameField: 'email_user',
        passwordField: 'password_user',
    });
}

async validate(email_user: string, password_user: string){
    const user = this.authService.validateUser(email_user, password_user);
    if(!user){
        throw new UnauthorizedException();
    }
    return user;
}


}