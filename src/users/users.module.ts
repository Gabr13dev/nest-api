import { UserService } from './shared/user.service';
import { UsersController } from './users.controller';
import { Module } from '@nestjs/common';

import { User } from './model/user.entity'
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    controllers: [UsersController],
    providers: [UserService],
    exports: [UserService]
})

export class UsersModule {}
