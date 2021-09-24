import { AuthController } from './auth.controller';
import { AuthService } from './shared/auth.service';

import { Module } from '@nestjs/common';
import { UsersModule } from 'src/users/users.module';

@Module({
    imports: [UsersModule],
    controllers: [AuthController,],
    providers: [AuthService,],
    exports: [AuthService]
})
export class AuthModule { }
