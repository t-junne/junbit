import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Token } from 'src/entities/token.entity'
import { TokenRepository } from 'src/repositories/token.repository'

@Injectable()
export class TokenService {
  constructor(
    @InjectRepository(Token) private readonly tokenRepository: TokenRepository
  ) {}

  async getToken(marketTable: string, date: string) {
    return await this.tokenRepository.getToken(marketTable, date)

  }
}
