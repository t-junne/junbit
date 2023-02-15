import { Repository } from 'typeorm';
import { Token } from 'src/entities/token.entity';

export interface TokenRepository extends Repository<Token> {
  this: Repository<Token>;
  getTokenCandle(marketTable: string, date: string): Promise<any>;
}

export const CustomTokenRepository: Pick<TokenRepository, any> = {
  async getTokenCandle(
    this: Repository<Token>,
    marketName: string,
    date: string,
  ): Promise<any> {
    this.metadata.tablePath = marketName;

    console.log(this.metadata);
    // try {
    //   const result = await this.createQueryBuilder()
    //     .select('*')
    //     .from(marketName, marketName)
    //     .where(`${marketName}.id = :id`, { id: 1 })
    //     .getRawOne();

    //   return result;
    // } catch (e: any) {
    //   return e.message;
    // }
  },
};
