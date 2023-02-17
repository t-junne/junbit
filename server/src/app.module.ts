import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AppController } from './app.controller'
import { TokenController } from './token/index.controller'
import { AppService } from './app.service'
import { DatabaseModule } from './config/database/database.module'
import { TokenModule } from './token/index.module'
import { TokenService } from './token/index.service'


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),
    DatabaseModule,
    TokenModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
