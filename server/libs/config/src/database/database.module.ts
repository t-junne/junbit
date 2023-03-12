import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { SnakeNamingStrategy } from 'typeorm-naming-strategies'
import { MongooseModule } from '@nestjs/mongoose'
import { TokenTradeVolumeRank } from '../../../entities/src/token/tradeVolumeRank1H.entity'
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('MYSQL_HOSTNAME'),
        port: configService.get('MYSQL_PORT'),
        username: configService.get('MYSQL_USERNAME'),
        password: configService.get('MYSQL_PASSWORD'),
        database: configService.get('MYSQL_DATABASE'),
        entities: [TokenTradeVolumeRank],
        namingStrategy: new SnakeNamingStrategy(),
        timezone: 'Z',
        synchronize: true,
      }),
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get('MONGODB_URI'),
        dbName:
          process.env.NODE_ENV === 'development' ? 'junbit-dev' : 'junbit-prod',
      }),
    }),
  ],
})
export class DatabaseModule {}
