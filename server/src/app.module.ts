import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { SnakeNamingStrategy } from 'typeorm-naming-strategies'
import configuration from './config/configuration'
import { TokenModule } from './token/token.module'
import { Token } from './entities/token.entity'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './.env',
      load: [configuration]
    }),
    TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: async (configService: ConfigService) => ({
      type: 'mysql',
      host: configService.get('database.host'),
      port: configService.get('database.port'),
      username: configService.get('database.username'),
      password: configService.get('database.password'),
      database: configService.get('database.db'),
      entities: [Token],
      namingStrategy: new SnakeNamingStrategy
    }),
  }),
  TokenModule,
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
