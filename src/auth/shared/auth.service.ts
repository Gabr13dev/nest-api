import { Injectable } from '@nestjs/common';
import { UserService } from 'src/users/shared/user.service';

import * as argon2 from "argon2";

@Injectable()
export class AuthService {

    constructor(
       private userService: UserService
    ) {}

    async validateUser(userEmail: string, userPassword: string){
        const user = await this.userService.getByEmail(userEmail);
        const pass = await (await argon2.hash(userPassword)).replace("$argon2i$v=19$m=4096,t=3,p=1","");
        if(user && user.password_user === pass){
            const {id_user, fullname_user, email_user} = user;
            return {id_user, fullname_user, email_user};
        }

        return null;
    }


}
