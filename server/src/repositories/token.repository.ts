import { Repository } from 'typeorm'
import { Token } from "src/entities/token.entity"

export interface TokenRepository extends Repository<Token> {
  this: Repository<Token>
  getToken(marketTable: string, date: string): Promise<any>
}

export const CustomTokenRepository: Pick<TokenRepository, any> = {
  async getToken(this: Repository<Token>, marketName: string,  date: string): Promise<any> {
    this.metadata.tablePath = marketName
    
    try {
      const result = await this
        .createQueryBuilder()
        .select('*')
        .from(marketName, marketName)
        .where(`${marketName}.id = :id`, { id: 1 })
        .getRawOne()

    return { payload: result }
    } catch (e: any) {
      return e.message
    }
  }
}