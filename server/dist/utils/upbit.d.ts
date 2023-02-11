export declare class Upbit {
    baseURL: string;
    options: {
        method: string;
        headers: {
            accept: string;
        };
    };
    getAllMarkets(): any;
    getMinutesCandles(unit: number, market: string, count?: number): any;
    getDaysCandles(market: string, count?: number): any;
    getTickers(markets: string): any;
}
