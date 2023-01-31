export class Upbit {
  options = {method: 'GET', headers: {accept: 'application/json'}};

  getAllMarkets(): any {
    const response = fetch('https://api.upbit.com/v1/market/all?isDetails=false', this.options);
    return response.then(res => res.json())
  }

  minutesCandle(unit: number, market: string, count=10): any {
    const response = fetch(`https://api.upbit.com/v1/candles/minutes/${unit}?market=${market}&count=${count}`, this.options);
    return response.then(res => res.json())
  }

  daysCandle() {

  }
}