import { DataSource } from 'typeorm'
import { Token } from 'src/entities/token.entity'
import { CustomTokenRepository } from 'src/repositories/token.repository'
import { getDataSourceToken, getRepositoryToken } from '@nestjs/typeorm'

export const minuteCandleProviders = [
  {
    provide: getRepositoryToken(Token),
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(Token).extend(CustomTokenRepository),
    inject: [getDataSourceToken()],
  },
]
