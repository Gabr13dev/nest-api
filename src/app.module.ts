import { AuthModule } from './auth/auth.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { configService } from './config/config.service';

import { UsersModule } from './users/users.module';
import { LocalStrategy } from './auth/shared/local.strategy';

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    UsersModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
    LocalStrategy
  ],
})
export class AppModule { }
