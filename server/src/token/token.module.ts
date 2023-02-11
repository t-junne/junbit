import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Token } from 'src/entities/token.entity'
import { TokenService } from './token.service'
import { TokenController } from './token.controller'
import { tokenProviders } from 'src/providers/token/token.provider'

@Module({
  imports: [TypeOrmModule.forFeature([Token])],
  controllers: [TokenController],
  providers: [
    ...tokenProviders,
    TokenService,
  ],
})
export class TokenModule {}