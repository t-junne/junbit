import { TokenRepository } from 'src/repositories/token.repository';
export declare class TokenService {
    private readonly tokenRepository;
    constructor(tokenRepository: TokenRepository);
    getToken(marketTable: string, date: string): Promise<any>;
}
