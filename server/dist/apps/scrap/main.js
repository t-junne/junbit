/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),
/* 2 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ScrapModule = void 0;
const common_1 = __webpack_require__(3);
const config_1 = __webpack_require__(4);
const database_module_1 = __webpack_require__(5);
const minuteCandle_module_1 = __webpack_require__(11);
const ticker_module_1 = __webpack_require__(20);
const tradeVolumeRank1H_module_1 = __webpack_require__(23);
const scrap_service_1 = __webpack_require__(25);
const ticker_service_1 = __webpack_require__(21);
const minuteCandle_service_1 = __webpack_require__(12);
const tradeVolumeRank1H_service_1 = __webpack_require__(24);
const upbit_1 = __webpack_require__(15);
const typeorm_1 = __webpack_require__(6);
const tradeVolumeRank1H_entity_1 = __webpack_require__(9);
let ScrapModule = class ScrapModule {
};
ScrapModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: `.env.${process.env.NODE_ENV}`,
            }),
            typeorm_1.TypeOrmModule.forFeature([tradeVolumeRank1H_entity_1.TokenTradeVolumeRank]),
            database_module_1.DatabaseModule,
            minuteCandle_module_1.MinuteCandleModule,
            ticker_module_1.TickerModule,
            tradeVolumeRank1H_module_1.TradeVolumeRankModule,
        ],
        providers: [scrap_service_1.ScrapService, ticker_service_1.TickerService, minuteCandle_service_1.MinuteCandleService, tradeVolumeRank1H_service_1.TradeVolumeRankService, upbit_1.Upbit],
    })
], ScrapModule);
exports.ScrapModule = ScrapModule;


/***/ }),
/* 3 */
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),
/* 4 */
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),
/* 5 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DatabaseModule = void 0;
const common_1 = __webpack_require__(3);
const typeorm_1 = __webpack_require__(6);
const config_1 = __webpack_require__(4);
const typeorm_naming_strategies_1 = __webpack_require__(7);
const mongoose_1 = __webpack_require__(8);
const tradeVolumeRank1H_entity_1 = __webpack_require__(9);
let DatabaseModule = class DatabaseModule {
};
DatabaseModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: async (configService) => ({
                    type: 'mysql',
                    host: configService.get('MYSQL_HOSTNAME'),
                    port: configService.get('MYSQL_PORT'),
                    username: configService.get('MYSQL_USERNAME'),
                    password: configService.get('MYSQL_PASSWORD'),
                    database: configService.get('MYSQL_DATABASE'),
                    entities: [tradeVolumeRank1H_entity_1.TokenTradeVolumeRank],
                    namingStrategy: new typeorm_naming_strategies_1.SnakeNamingStrategy(),
                    timezone: 'Z',
                    synchronize: true,
                }),
            }),
            mongoose_1.MongooseModule.forRootAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: async (configService) => ({
                    uri: configService.get('MONGODB_URI'),
                    dbName: process.env.NODE_ENV === 'development' ? 'junbit-dev' : 'junbit-prod',
                }),
            }),
        ],
    })
], DatabaseModule);
exports.DatabaseModule = DatabaseModule;


/***/ }),
/* 6 */
/***/ ((module) => {

module.exports = require("@nestjs/typeorm");

/***/ }),
/* 7 */
/***/ ((module) => {

module.exports = require("typeorm-naming-strategies");

/***/ }),
/* 8 */
/***/ ((module) => {

module.exports = require("@nestjs/mongoose");

/***/ }),
/* 9 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TokenTradeVolumeRank = void 0;
const typeorm_1 = __webpack_require__(10);
let TokenTradeVolumeRank = class TokenTradeVolumeRank {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], TokenTradeVolumeRank.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('int'),
    __metadata("design:type", Number)
], TokenTradeVolumeRank.prototype, "diffRateRank", void 0);
__decorate([
    (0, typeorm_1.Column)('int'),
    __metadata("design:type", Number)
], TokenTradeVolumeRank.prototype, "prevDiffRateRank", void 0);
__decorate([
    (0, typeorm_1.Column)('int'),
    __metadata("design:type", Number)
], TokenTradeVolumeRank.prototype, "prevDayDiffRateRank", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar'),
    __metadata("design:type", String)
], TokenTradeVolumeRank.prototype, "market", void 0);
__decorate([
    (0, typeorm_1.Column)('double'),
    __metadata("design:type", Number)
], TokenTradeVolumeRank.prototype, "volumeDiff", void 0);
__decorate([
    (0, typeorm_1.Column)('double'),
    __metadata("design:type", Number)
], TokenTradeVolumeRank.prototype, "volumeDiffRate", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime'),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], TokenTradeVolumeRank.prototype, "datetime", void 0);
TokenTradeVolumeRank = __decorate([
    (0, typeorm_1.Entity)()
], TokenTradeVolumeRank);
exports.TokenTradeVolumeRank = TokenTradeVolumeRank;


/***/ }),
/* 10 */
/***/ ((module) => {

module.exports = require("typeorm");

/***/ }),
/* 11 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MinuteCandleModule = void 0;
const common_1 = __webpack_require__(3);
const mongoose_1 = __webpack_require__(8);
const minuteCandle_service_1 = __webpack_require__(12);
const minuteCandle_schema_1 = __webpack_require__(14);
const upbit_1 = __webpack_require__(15);
let MinuteCandleModule = class MinuteCandleModule {
};
MinuteCandleModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: minuteCandle_schema_1.MinuteCandle.name, schema: minuteCandle_schema_1.MinuteCandleSchema },
            ]),
        ],
        providers: [minuteCandle_service_1.MinuteCandleService, upbit_1.Upbit],
        exports: [minuteCandle_service_1.MinuteCandleService, mongoose_1.MongooseModule],
    })
], MinuteCandleModule);
exports.MinuteCandleModule = MinuteCandleModule;


/***/ }),
/* 12 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MinuteCandleService = void 0;
const common_1 = __webpack_require__(3);
const mongoose_1 = __webpack_require__(8);
const mongoose_2 = __webpack_require__(13);
const minuteCandle_schema_1 = __webpack_require__(14);
const upbit_1 = __webpack_require__(15);
const sleep_1 = __webpack_require__(17);
const tokens_1 = __webpack_require__(18);
const datetime_1 = __webpack_require__(19);
let MinuteCandleService = class MinuteCandleService {
    constructor(minuteCandleModel, upbit) {
        this.minuteCandleModel = minuteCandleModel;
        this.upbit = upbit;
    }
    async create(unit, count) {
        console.log(`Saving MinuteCandles`);
        for (let i = 1; i < tokens_1.krwTokens.length + 1; i++) {
            const start = Date.now();
            const responses = await this.upbit.getMinuteCandle(unit, tokens_1.krwTokens[i - 1].market, count);
            console.log(tokens_1.krwTokens[i - 1].kr_name);
            for (let j = responses.length - 1; j > 0; j--) {
                const utcDate = new Date(`${responses[j].candle_date_time_utc}.000Z`);
                const kstDate = new Date(`${responses[j].candle_date_time_kst}.000Z`);
                const matchData = await this.minuteCandleModel.findOne({
                    market: responses[j].market,
                    timestamp: responses[j].timestamp,
                });
                if (matchData) {
                }
                else {
                    const tokenCandle = new this.minuteCandleModel(responses[j]);
                    tokenCandle.candle_date_time_utc = utcDate;
                    tokenCandle.candle_date_time_kst = kstDate;
                    await tokenCandle.save();
                }
            }
            const now = Date.now();
            if (i % 10 == 0 && now - start < 1000) {
                await (0, sleep_1.sleep)(1200 - (now - start));
            }
        }
        console.log('Done');
    }
    async delete(unit) {
        console.log('Deleteing MinuteCandles');
        for (let i = 1; i < tokens_1.krwTokens.length + 1; i++) {
            const start = Date.now();
            const utcDate = await this.upbit.getMinuteCandle(unit, tokens_1.krwTokens[i - 1].market, 1);
            const date = new Date(`${utcDate[0].candle_date_time_utc}.000Z`);
            const newDate = new Date(date.setDate(date.getDate() - 14));
            await this.minuteCandleModel.deleteMany({
                market: tokens_1.krwTokens[i - 1].market,
                candle_date_time_utc: { $lt: newDate },
            });
            const now = Date.now();
            if (i % 10 == 0 && now - start < 1000) {
                await (0, sleep_1.sleep)(1100 - (now - start));
            }
        }
        console.log('Done');
    }
    async find(hours, baseTime, loop = true) {
        if (loop) {
            let array = [];
            for (let value of tokens_1.krwTokens) {
                const exist = await this.minuteCandleModel
                    .findOne({ market: value.market, candle_date_time_utc: baseTime }, { _id: 0, __v: 0 });
                if (!exist) { }
                else {
                    const obj = {};
                    const data = await this.minuteCandleModel
                        .find({ market: value.market, candle_date_time_utc: { $lte: baseTime } }, { _id: 0, __v: 0 })
                        .sort({ candle_date_time_utc: -1 })
                        .limit(hours * 2);
                    const volumeSum = data
                        .slice(0, data.length / 2)
                        .reduce((accumulator, object) => accumulator + object.candle_acc_trade_volume, 0);
                    const prevVolumeSum = data
                        .slice(data.length / 2)
                        .reduce((accumulator, object) => accumulator + object.candle_acc_trade_volume, 0);
                    obj.market = data[0].market;
                    obj.volumeDiff = volumeSum - prevVolumeSum;
                    obj.volumeDiffRate = obj.volumeDiff / prevVolumeSum;
                    obj.datetime = data[0].candle_date_time_utc;
                    array.push(obj);
                }
            }
            return array;
        }
        else {
            const { year, month, date, hour } = (0, datetime_1.convertDatetime)(baseTime);
            const datetimeLimit = new Date(year, month, date, hour - hours * 2);
            const data = await this.minuteCandleModel.find({ candle_date_time_utc: { $lte: baseTime, $gt: datetimeLimit } }, { _id: 0, __v: 0 });
            return data;
        }
    }
};
MinuteCandleService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(minuteCandle_schema_1.MinuteCandle.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object, typeof (_b = typeof upbit_1.Upbit !== "undefined" && upbit_1.Upbit) === "function" ? _b : Object])
], MinuteCandleService);
exports.MinuteCandleService = MinuteCandleService;


/***/ }),
/* 13 */
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),
/* 14 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MinuteCandleSchema = exports.MinuteCandle = void 0;
const mongoose_1 = __webpack_require__(8);
let MinuteCandle = class MinuteCandle {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], MinuteCandle.prototype, "market", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], MinuteCandle.prototype, "candle_date_time_utc", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], MinuteCandle.prototype, "candle_date_time_kst", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], MinuteCandle.prototype, "opening_price", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], MinuteCandle.prototype, "high_price", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], MinuteCandle.prototype, "low_price", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], MinuteCandle.prototype, "trade_price", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], MinuteCandle.prototype, "timestamp", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], MinuteCandle.prototype, "candle_acc_trade_price", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], MinuteCandle.prototype, "candle_acc_trade_volume", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], MinuteCandle.prototype, "unit", void 0);
MinuteCandle = __decorate([
    (0, mongoose_1.Schema)()
], MinuteCandle);
exports.MinuteCandle = MinuteCandle;
exports.MinuteCandleSchema = mongoose_1.SchemaFactory.createForClass(MinuteCandle);


/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Upbit = void 0;
const axios_1 = __webpack_require__(16);
class Upbit {
    constructor() {
        this.baseURL = 'https://api.upbit.com/v1';
        this.options = { method: 'GET', headers: { accept: 'application/json' } };
    }
    async getMinuteCandle(unit, market, count = 10) {
        try {
            const response = await axios_1.default.get(`${this.baseURL}/candles/minutes/${unit}?market=${market}&count=${count}`, this.options);
            return response.data;
        }
        catch (e) {
            throw Error(e);
        }
    }
    async getTicker(markets) {
        try {
            const response = await axios_1.default.get(`${this.baseURL}/ticker?markets=${markets}`, this.options);
            return response.data;
        }
        catch (e) {
            throw Error(e);
        }
    }
}
exports.Upbit = Upbit;


/***/ }),
/* 16 */
/***/ ((module) => {

module.exports = require("axios");

/***/ }),
/* 17 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.sleep = void 0;
const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};
exports.sleep = sleep;


/***/ }),
/* 18 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.markets = exports.krwTokens = void 0;
exports.krwTokens = [
    {
        market: 'KRW-BTC',
        kr_name: '????????????',
        en_name: 'bitcoin',
    },
    {
        market: 'KRW-ETH',
        kr_name: '????????????',
        en_name: 'ethereum',
    },
    {
        market: 'KRW-NEO',
        kr_name: '??????',
        en_name: 'neo',
    },
    {
        market: 'KRW-MTL',
        kr_name: '??????',
        en_name: 'metal',
    },
    {
        market: 'KRW-XRP',
        kr_name: '??????',
        en_name: 'ripple',
    },
    {
        market: 'KRW-ETC',
        kr_name: '?????????????????????',
        en_name: 'ethereum_classic',
    },
    {
        market: 'KRW-OMG',
        kr_name: '????????????',
        en_name: 'omisego',
    },
    {
        market: 'KRW-SNT',
        kr_name: '?????????????????????????????????',
        en_name: 'status_network_token',
    },
    {
        market: 'KRW-WAVES',
        kr_name: '?????????',
        en_name: 'waves',
    },
    {
        market: 'KRW-XEM',
        kr_name: '???',
        en_name: 'nem',
    },
    {
        market: 'KRW-QTUM',
        kr_name: '??????',
        en_name: 'qtum',
    },
    {
        market: 'KRW-LSK',
        kr_name: '?????????',
        en_name: 'lisk',
    },
    {
        market: 'KRW-STEEM',
        kr_name: '??????',
        en_name: 'steem',
    },
    {
        market: 'KRW-XLM',
        kr_name: '???????????????',
        en_name: 'lumen',
    },
    {
        market: 'KRW-ARDR',
        kr_name: '??????',
        en_name: 'ardor',
    },
    {
        market: 'KRW-ARK',
        kr_name: '??????',
        en_name: 'ark',
    },
    {
        market: 'KRW-STORJ',
        kr_name: '????????????',
        en_name: 'storj',
    },
    {
        market: 'KRW-GRS',
        kr_name: '??????????????????',
        en_name: 'groestlcoin',
    },
    {
        market: 'KRW-REP',
        kr_name: '??????',
        en_name: 'augur',
    },
    {
        market: 'KRW-ADA',
        kr_name: '?????????',
        en_name: 'ada',
    },
    {
        market: 'KRW-SBD',
        kr_name: '????????????',
        en_name: 'steemdollars',
    },
    {
        market: 'KRW-POWR',
        kr_name: '????????????',
        en_name: 'power_ledger',
    },
    {
        market: 'KRW-BTG',
        kr_name: '??????????????????',
        en_name: 'bitcoin_gold',
    },
    {
        market: 'KRW-ICX',
        kr_name: '?????????',
        en_name: 'icon',
    },
    {
        market: 'KRW-EOS',
        kr_name: '?????????',
        en_name: 'eos',
    },
    {
        market: 'KRW-TRX',
        kr_name: '??????',
        en_name: 'tron',
    },
    {
        market: 'KRW-SC',
        kr_name: '????????????',
        en_name: 'siacoin',
    },
    {
        market: 'KRW-ONT',
        kr_name: '????????????',
        en_name: 'ontology',
    },
    {
        market: 'KRW-ZIL',
        kr_name: '?????????',
        en_name: 'zilliqa',
    },
    {
        market: 'KRW-POLYX',
        kr_name: '????????????',
        en_name: 'polymesh',
    },
    {
        market: 'KRW-ZRX',
        kr_name: '????????????',
        en_name: '0x_protocol',
    },
    {
        market: 'KRW-LOOM',
        kr_name: '???????????????',
        en_name: 'loom_network',
    },
    {
        market: 'KRW-BCH',
        kr_name: '??????????????????',
        en_name: 'bitcoin_cash',
    },
    {
        market: 'KRW-BAT',
        kr_name: '????????????????????????',
        en_name: 'basic_attention_token',
    },
    {
        market: 'KRW-IOST',
        kr_name: '??????????????????',
        en_name: 'iost',
    },
    {
        market: 'KRW-RFR',
        kr_name: '????????????',
        en_name: 'refereum',
    },
    {
        market: 'KRW-CVC',
        kr_name: '??????',
        en_name: 'civic',
    },
    {
        market: 'KRW-IQ',
        kr_name: '?????????',
        en_name: 'iq_wiki',
    },
    {
        market: 'KRW-IOTA',
        kr_name: '????????????',
        en_name: 'iota',
    },
    {
        market: 'KRW-HIFI',
        kr_name: '????????????',
        en_name: 'hifi_finance',
    },
    {
        market: 'KRW-ONG',
        kr_name: '??????????????????',
        en_name: 'ong',
    },
    {
        market: 'KRW-GAS',
        kr_name: '??????',
        en_name: 'gas',
    },
    {
        market: 'KRW-UPP',
        kr_name: '?????????????????????',
        en_name: 'sentinel_protocol',
    },
    {
        market: 'KRW-ELF',
        kr_name: '??????',
        en_name: 'aelf',
    },
    {
        market: 'KRW-KNC',
        kr_name: '?????????????????????',
        en_name: 'kyber_network',
    },
    {
        market: 'KRW-BSV',
        kr_name: '????????????????????????',
        en_name: 'bitcoin_sv',
    },
    {
        market: 'KRW-THETA',
        kr_name: '????????????',
        en_name: 'theta_token',
    },
    {
        market: 'KRW-QKC',
        kr_name: '????????????',
        en_name: 'quarkchain',
    },
    {
        market: 'KRW-BTT',
        kr_name: '???????????????',
        en_name: 'bittorrent',
    },
    {
        market: 'KRW-MOC',
        kr_name: '????????????',
        en_name: 'moss_coin',
    },
    {
        market: 'KRW-ENJ',
        kr_name: '????????????',
        en_name: 'enjin',
    },
    {
        market: 'KRW-TFUEL',
        kr_name: '????????????',
        en_name: 'theta_fuel',
    },
    {
        market: 'KRW-MANA',
        kr_name: '??????????????????',
        en_name: 'decentraland',
    },
    {
        market: 'KRW-ANKR',
        kr_name: '??????',
        en_name: 'ankr',
    },
    {
        market: 'KRW-AERGO',
        kr_name: '?????????',
        en_name: 'aergo',
    },
    {
        market: 'KRW-ATOM',
        kr_name: '????????????',
        en_name: 'cosmos',
    },
    {
        market: 'KRW-TT',
        kr_name: '????????????',
        en_name: 'thundercore',
    },
    {
        market: 'KRW-CRE',
        kr_name: '??????????????????',
        en_name: 'carry_protocol',
    },
    {
        market: 'KRW-MBL',
        kr_name: '????????????',
        en_name: 'moviebloc',
    },
    {
        market: 'KRW-WAXP',
        kr_name: '??????',
        en_name: 'wax',
    },
    {
        market: 'KRW-HBAR',
        kr_name: '?????????',
        en_name: 'hedera',
    },
    {
        market: 'KRW-MED',
        kr_name: '????????????',
        en_name: 'medibloc',
    },
    {
        market: 'KRW-MLK',
        kr_name: '??????',
        en_name: 'mil_k',
    },
    {
        market: 'KRW-STPT',
        kr_name: '????????????',
        en_name: 'standard_tokenization_protocol',
    },
    {
        market: 'KRW-ORBS',
        kr_name: '?????????',
        en_name: 'orbs',
    },
    {
        market: 'KRW-VET',
        kr_name: '?????????',
        en_name: 'vechain',
    },
    {
        market: 'KRW-CHZ',
        kr_name: '?????????',
        en_name: 'chiliz',
    },
    {
        market: 'KRW-STMX',
        kr_name: '????????????',
        en_name: 'stormx',
    },
    {
        market: 'KRW-DKA',
        kr_name: '????????????',
        en_name: 'dkargo',
    },
    {
        market: 'KRW-HIVE',
        kr_name: '?????????',
        en_name: 'hive',
    },
    {
        market: 'KRW-KAVA',
        kr_name: '??????',
        en_name: 'kava',
    },
    {
        market: 'KRW-AHT',
        kr_name: '????????????',
        en_name: 'ahatoken',
    },
    {
        market: 'KRW-LINK',
        kr_name: '????????????',
        en_name: 'chainlink',
    },
    {
        market: 'KRW-XTZ',
        kr_name: '?????????',
        en_name: 'tezos',
    },
    {
        market: 'KRW-BORA',
        kr_name: '??????',
        en_name: 'bora',
    },
    {
        market: 'KRW-JST',
        kr_name: '?????????',
        en_name: 'just',
    },
    {
        market: 'KRW-CRO',
        kr_name: '????????????',
        en_name: 'cronos',
    },
    {
        market: 'KRW-TON',
        kr_name: '???',
        en_name: 'ton',
    },
    {
        market: 'KRW-SXP',
        kr_name: '??????',
        en_name: 'sxp',
    },
    {
        market: 'KRW-HUNT',
        kr_name: '??????',
        en_name: 'hunt',
    },
    {
        market: 'KRW-PLA',
        kr_name: '????????????',
        en_name: 'playdapp',
    },
    {
        market: 'KRW-DOT',
        kr_name: '?????????',
        en_name: 'polkadot',
    },
    {
        market: 'KRW-SRM',
        kr_name: '??????',
        en_name: 'serum',
    },
    {
        market: 'KRW-MVL',
        kr_name: '??????',
        en_name: 'mvl',
    },
    {
        market: 'KRW-STRAX',
        kr_name: '???????????????',
        en_name: 'stratis',
    },
    {
        market: 'KRW-AQT',
        kr_name: '????????????',
        en_name: 'alpha_quark_token',
    },
    {
        market: 'KRW-GLM',
        kr_name: '??????',
        en_name: 'golem',
    },
    {
        market: 'KRW-SSX',
        kr_name: '??????',
        en_name: 'somesing',
    },
    {
        market: 'KRW-META',
        kr_name: '????????????',
        en_name: 'metadium',
    },
    {
        market: 'KRW-FCT2',
        kr_name: '???????????????',
        en_name: 'firmachain',
    },
    {
        market: 'KRW-CBK',
        kr_name: '????????????',
        en_name: 'cobak_token',
    },
    {
        market: 'KRW-SAND',
        kr_name: '????????????',
        en_name: 'the_sandbox',
    },
    {
        market: 'KRW-HUM',
        kr_name: '??????????????????',
        en_name: 'humanscape',
    },
    {
        market: 'KRW-DOGE',
        kr_name: '????????????',
        en_name: 'dogecoin',
    },
    {
        market: 'KRW-STRK',
        kr_name: '???????????????',
        en_name: 'strike',
    },
    {
        market: 'KRW-PUNDIX',
        kr_name: '????????????',
        en_name: 'pundi_x',
    },
    {
        market: 'KRW-FLOW',
        kr_name: '?????????',
        en_name: 'flow',
    },
    {
        market: 'KRW-DAWN',
        kr_name: '???????????????',
        en_name: 'dawn_protocol',
    },
    {
        market: 'KRW-AXS',
        kr_name: '??????????????????',
        en_name: 'axie_infinity',
    },
    {
        market: 'KRW-STX',
        kr_name: '?????????',
        en_name: 'stacks',
    },
    {
        market: 'KRW-XEC',
        kr_name: '?????????',
        en_name: 'ecash',
    },
    {
        market: 'KRW-SOL',
        kr_name: '?????????',
        en_name: 'solana',
    },
    {
        market: 'KRW-MATIC',
        kr_name: '?????????',
        en_name: 'polygon',
    },
    {
        market: 'KRW-NU',
        kr_name: '????????????',
        en_name: 'nucypher',
    },
    {
        market: 'KRW-AAVE',
        kr_name: '?????????',
        en_name: 'aave',
    },
    {
        market: 'KRW-1INCH',
        kr_name: '1??????????????????',
        en_name: '1inch_network',
    },
    {
        market: 'KRW-ALGO',
        kr_name: '????????????',
        en_name: 'algorand',
    },
    {
        market: 'KRW-NEAR',
        kr_name: '??????????????????',
        en_name: 'near_protocol',
    },
    {
        market: 'KRW-AVAX',
        kr_name: '????????????',
        en_name: 'avalanche',
    },
    {
        market: 'KRW-T',
        kr_name: '???????????????',
        en_name: 'threshold',
    },
    {
        market: 'KRW-CELO',
        kr_name: '??????',
        en_name: 'celo',
    },
    {
        market: 'KRW-GMT',
        kr_name: '?????????',
        en_name: 'stepn',
    },
    {
        market: 'KRW-APT',
        kr_name: '?????????',
        en_name: 'aptos',
    },
    {
        market: 'KRW-SHIB',
        kr_name: '????????????',
        en_name: 'shiba_inu',
    },
];
exports.markets = [
    'KRW-BTC',
    'KRW-ETH',
    'KRW-NEO',
    'KRW-MTL',
    'KRW-XRP',
    'KRW-ETC',
    'KRW-OMG',
    'KRW-SNT',
    'KRW-WAVES',
    'KRW-XEM',
    'KRW-QTUM',
    'KRW-LSK',
    'KRW-STEEM',
    'KRW-XLM',
    'KRW-ARDR',
    'KRW-ARK',
    'KRW-STORJ',
    'KRW-GRS',
    'KRW-REP',
    'KRW-ADA',
    'KRW-SBD',
    'KRW-POWR',
    'KRW-BTG',
    'KRW-ICX',
    'KRW-EOS',
    'KRW-TRX',
    'KRW-SC',
    'KRW-ONT',
    'KRW-ZIL',
    'KRW-POLYX',
    'KRW-ZRX',
    'KRW-LOOM',
    'KRW-BCH',
    'KRW-BAT',
    'KRW-IOST',
    'KRW-RFR',
    'KRW-CVC',
    'KRW-IQ',
    'KRW-IOTA',
    'KRW-HIFI',
    'KRW-ONG',
    'KRW-GAS',
    'KRW-UPP',
    'KRW-ELF',
    'KRW-KNC',
    'KRW-BSV',
    'KRW-THETA',
    'KRW-QKC',
    'KRW-BTT',
    'KRW-MOC',
    'KRW-ENJ',
    'KRW-TFUEL',
    'KRW-MANA',
    'KRW-ANKR',
    'KRW-AERGO',
    'KRW-ATOM',
    'KRW-TT',
    'KRW-CRE',
    'KRW-MBL',
    'KRW-WAXP',
    'KRW-HBAR',
    'KRW-MED',
    'KRW-MLK',
    'KRW-STPT',
    'KRW-ORBS',
    'KRW-VET',
    'KRW-CHZ',
    'KRW-STMX',
    'KRW-DKA',
    'KRW-HIVE',
    'KRW-KAVA',
    'KRW-AHT',
    'KRW-LINK',
    'KRW-XTZ',
    'KRW-BORA',
    'KRW-JST',
    'KRW-CRO',
    'KRW-TON',
    'KRW-SXP',
    'KRW-HUNT',
    'KRW-PLA',
    'KRW-DOT',
    'KRW-SRM',
    'KRW-MVL',
    'KRW-STRAX',
    'KRW-AQT',
    'KRW-GLM',
    'KRW-SSX',
    'KRW-META',
    'KRW-FCT2',
    'KRW-CBK',
    'KRW-SAND',
    'KRW-HUM',
    'KRW-DOGE',
    'KRW-STRK',
    'KRW-PUNDIX',
    'KRW-FLOW',
    'KRW-DAWN',
    'KRW-AXS',
    'KRW-STX',
    'KRW-XEC',
    'KRW-SOL',
    'KRW-MATIC',
    'KRW-NU',
    'KRW-AAVE',
    'KRW-1INCH',
    'KRW-ALGO',
    'KRW-NEAR',
    'KRW-AVAX',
    'KRW-T',
    'KRW-CELO',
    'KRW-GMT',
    'KRW-APT',
    'KRW-SHIB',
];


/***/ }),
/* 19 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.convertDatetime = void 0;
const convertDatetime = (datetime) => {
    const year = datetime.getFullYear();
    const month = datetime.getMonth();
    const date = datetime.getDate();
    const hour = datetime.getHours();
    return {
        year,
        month,
        date,
        hour,
    };
};
exports.convertDatetime = convertDatetime;


/***/ }),
/* 20 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TickerModule = void 0;
const common_1 = __webpack_require__(3);
const mongoose_1 = __webpack_require__(8);
const ticker_service_1 = __webpack_require__(21);
const ticker_schema_1 = __webpack_require__(22);
const upbit_1 = __webpack_require__(15);
let TickerModule = class TickerModule {
};
TickerModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: ticker_schema_1.Ticker.name, schema: ticker_schema_1.TickerSchema }]),
        ],
        providers: [ticker_service_1.TickerService, upbit_1.Upbit],
        exports: [ticker_service_1.TickerService, mongoose_1.MongooseModule],
    })
], TickerModule);
exports.TickerModule = TickerModule;


/***/ }),
/* 21 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TickerService = void 0;
const common_1 = __webpack_require__(3);
const mongoose_1 = __webpack_require__(8);
const mongoose_2 = __webpack_require__(13);
const ticker_schema_1 = __webpack_require__(22);
const upbit_1 = __webpack_require__(15);
const tokens_1 = __webpack_require__(18);
let TickerService = class TickerService {
    constructor(tickerModel, upbit) {
        this.tickerModel = tickerModel;
        this.upbit = upbit;
    }
    async create() {
        const responses = await this.upbit.getTicker(tokens_1.markets.toString());
        const date = new Date();
        const currentTime = new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours());
        console.log('Saving Tickers...');
        for (let item of responses) {
            const ticker = new this.tickerModel();
            ticker.market = item.market;
            ticker.acc_trade_price_24h = item.acc_trade_price_24h;
            ticker.acc_trade_volume_24h = item.acc_trade_volume_24h;
            ticker.created_at = currentTime;
            await ticker.save();
        }
        console.log('Done');
    }
    async delete() {
        const time = new Date('2023-02-14T07:00:00.000+00:00');
        console.log(time);
        const result = await this.tickerModel.find({ created_at: time });
        console.log(result);
    }
    async find() { }
};
TickerService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(ticker_schema_1.Ticker.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object, typeof (_b = typeof upbit_1.Upbit !== "undefined" && upbit_1.Upbit) === "function" ? _b : Object])
], TickerService);
exports.TickerService = TickerService;


/***/ }),
/* 22 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TickerSchema = exports.Ticker = void 0;
const mongoose_1 = __webpack_require__(8);
let Ticker = class Ticker {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Ticker.prototype, "market", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Ticker.prototype, "acc_trade_price_24h", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Ticker.prototype, "acc_trade_volume_24h", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], Ticker.prototype, "created_at", void 0);
Ticker = __decorate([
    (0, mongoose_1.Schema)()
], Ticker);
exports.Ticker = Ticker;
exports.TickerSchema = mongoose_1.SchemaFactory.createForClass(Ticker);


/***/ }),
/* 23 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TradeVolumeRankModule = void 0;
const common_1 = __webpack_require__(3);
const typeorm_1 = __webpack_require__(6);
const mongoose_1 = __webpack_require__(8);
const minuteCandle_module_1 = __webpack_require__(11);
const tradeVolumeRank1H_entity_1 = __webpack_require__(9);
const minuteCandle_schema_1 = __webpack_require__(14);
const tradeVolumeRank1H_service_1 = __webpack_require__(24);
const minuteCandle_service_1 = __webpack_require__(12);
const upbit_1 = __webpack_require__(15);
let TradeVolumeRankModule = class TradeVolumeRankModule {
};
TradeVolumeRankModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([tradeVolumeRank1H_entity_1.TokenTradeVolumeRank]),
            mongoose_1.MongooseModule.forFeature([
                { name: minuteCandle_schema_1.MinuteCandle.name, schema: minuteCandle_schema_1.MinuteCandleSchema },
            ]),
            minuteCandle_module_1.MinuteCandleModule,
        ],
        providers: [tradeVolumeRank1H_service_1.TradeVolumeRankService, minuteCandle_service_1.MinuteCandleService, upbit_1.Upbit],
    })
], TradeVolumeRankModule);
exports.TradeVolumeRankModule = TradeVolumeRankModule;


/***/ }),
/* 24 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TradeVolumeRankService = void 0;
const common_1 = __webpack_require__(3);
const typeorm_1 = __webpack_require__(6);
const typeorm_2 = __webpack_require__(10);
const tradeVolumeRank1H_entity_1 = __webpack_require__(9);
const minuteCandle_service_1 = __webpack_require__(12);
const datetime_1 = __webpack_require__(19);
let TradeVolumeRankService = class TradeVolumeRankService {
    constructor(tokenTradeVolumeRankRepsitory, minuteCandleService) {
        this.tokenTradeVolumeRankRepsitory = tokenTradeVolumeRankRepsitory;
        this.minuteCandleService = minuteCandleService;
    }
    async create(hours, baseTime) {
        const data = await this.minuteCandleService.find(hours, baseTime);
        if (data.length === 0) {
            return;
        }
        const sortedDataByDiffRate = data.sort((a, b) => b.volumeDiffRate - a.volumeDiffRate);
        console.log(sortedDataByDiffRate.at(-1));
        const { year, month, date, hour } = (0, datetime_1.convertDatetime)(baseTime);
        const newBasetime = new Date(year, month, date, hour);
        const prevTime = new Date(year, month, date, hour - hours);
        const prevDay = new Date(year, month, date, hour - 24);
        this.tokenTradeVolumeRankRepsitory.metadata.tablePath = `trade_volume_rank_${hours}h`;
        try {
            data.forEach(async (value) => {
                const id = await this.findIdByDatetime(value.market, hours, newBasetime);
                if (id) {
                }
                else {
                    const prevRank = await this.findRankByDatetime(value.market, hours, prevTime);
                    const prevDayRank = await this.findRankByDatetime(value.market, hours, prevDay);
                    const tradeVolumeRank = this.tokenTradeVolumeRankRepsitory.create({
                        diffRateRank: sortedDataByDiffRate.findIndex((item) => item.market === value.market) + 1,
                        prevDiffRateRank: prevRank ? prevRank.diffRateRank : undefined,
                        prevDayDiffRateRank: prevDayRank
                            ? prevDayRank.diffRateRank
                            : undefined,
                        market: value.market,
                        volumeDiff: value.volumeDiff,
                        volumeDiffRate: value.volumeDiffRate,
                        datetime: newBasetime,
                    });
                    await this.tokenTradeVolumeRankRepsitory.save(tradeVolumeRank);
                }
            });
        }
        catch (e) {
            throw Error(e);
        }
    }
    async delete(hours, datetime) {
        const { year, month, date, hour } = (0, datetime_1.convertDatetime)(datetime);
        const baseTime = new Date(year, month, date - 14, hour);
        this.tokenTradeVolumeRankRepsitory.metadata.tablePath = `trade_volume_rank_${hours}h`;
        await this.tokenTradeVolumeRankRepsitory.createQueryBuilder()
            .delete()
            .from(`trade_volume_rank_${hours}h`)
            .where('datetime < :datetime', { datetime: baseTime })
            .execute();
    }
    ;
    async findRankByDatetime(market, hours, datetime) {
        this.tokenTradeVolumeRankRepsitory.metadata.tablePath = `trade_volume_rank_${hours}h`;
        return await this.tokenTradeVolumeRankRepsitory.findOne({
            select: { diffRateRank: true },
            where: { market: market, datetime: datetime },
        });
    }
    async findIdByDatetime(market, hours, datetime) {
        this.tokenTradeVolumeRankRepsitory.metadata.tablePath = `trade_volume_rank_${hours}h`;
        return await this.tokenTradeVolumeRankRepsitory.findOne({
            select: { id: true },
            where: { market: market, datetime: datetime },
        });
    }
};
TradeVolumeRankService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(tradeVolumeRank1H_entity_1.TokenTradeVolumeRank)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof minuteCandle_service_1.MinuteCandleService !== "undefined" && minuteCandle_service_1.MinuteCandleService) === "function" ? _b : Object])
], TradeVolumeRankService);
exports.TradeVolumeRankService = TradeVolumeRankService;


/***/ }),
/* 25 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ScrapService = void 0;
const common_1 = __webpack_require__(3);
const minuteCandle_service_1 = __webpack_require__(12);
const tradeVolumeRank1H_service_1 = __webpack_require__(24);
const ticker_service_1 = __webpack_require__(21);
let ScrapService = class ScrapService {
    constructor(tickerService, minuteCandleService, tradeVolumeRankService) {
        this.tickerService = tickerService;
        this.minuteCandleService = minuteCandleService;
        this.tradeVolumeRankService = tradeVolumeRankService;
    }
    async onApplicationBootstrap() {
        console.log('start');
        for (let i = 0; i < 1; i++) {
            const baseTime = new Date(2023, 2, 12, i + 14 + 9);
            console.log(baseTime);
            await this.tradeVolumeRankService.create(1, baseTime);
            await this.tradeVolumeRankService.create(2, baseTime);
            await this.tradeVolumeRankService.create(4, baseTime);
            await this.tradeVolumeRankService.create(8, baseTime);
            await this.tradeVolumeRankService.create(12, baseTime);
        }
        console.log('done');
    }
};
ScrapService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof ticker_service_1.TickerService !== "undefined" && ticker_service_1.TickerService) === "function" ? _a : Object, typeof (_b = typeof minuteCandle_service_1.MinuteCandleService !== "undefined" && minuteCandle_service_1.MinuteCandleService) === "function" ? _b : Object, typeof (_c = typeof tradeVolumeRank1H_service_1.TradeVolumeRankService !== "undefined" && tradeVolumeRank1H_service_1.TradeVolumeRankService) === "function" ? _c : Object])
], ScrapService);
exports.ScrapService = ScrapService;


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(1);
const scrap_module_1 = __webpack_require__(2);
async function bootstrap() {
    const app = await core_1.NestFactory.create(scrap_module_1.ScrapModule);
    await app.listen(process.env.SCRAP_SERVER_PORT);
}
bootstrap();

})();

/******/ })()
;