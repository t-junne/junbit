"use strict";
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TradeVolumeRankService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const tradeVolumeRank1H_entity_1 = require("../../entities/token/tradeVolumeRank1H.entity");
const minuteCandle_service_1 = require("../minuteCandle/minuteCandle.service");
let TradeVolumeRankService = class TradeVolumeRankService {
    constructor(tokenTradeVolumeRankRepsitory, minuteCandleService) {
        this.tokenTradeVolumeRankRepsitory = tokenTradeVolumeRankRepsitory;
        this.minuteCandleService = minuteCandleService;
    }
    create(hours, baseTime) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.minuteCandleService.find(hours, baseTime);
            const sortedDataByDiffRate = data.sort((a, b) => b.volumeDiffRate - a.volumeDiffRate);
            const year = baseTime.getFullYear();
            const month = baseTime.getMonth();
            const date = baseTime.getDate();
            const hour = baseTime.getHours();
            const prevTime = new Date(year, month, date, hour - hours);
            const prevDay = new Date(year, month, date - 1, hour);
            const prevRank = yield this.findRankByDatetime(hours, prevTime);
            const prevDayRank = yield this.findRankByDatetime(hours, prevDay);
            const id = yield this.findByDatetime(hours, baseTime);
            this.tokenTradeVolumeRankRepsitory.metadata.tablePath = `trade_volume_rank_${hours}h`;
            try {
                data.forEach((value) => __awaiter(this, void 0, void 0, function* () {
                    if (id) { }
                    else {
                        const tradeVolumeRank = this.tokenTradeVolumeRankRepsitory.create({
                            diffRateRanking: sortedDataByDiffRate.findIndex(item => item.market === value.market) + 1,
                            prevDiffRateRanking: prevRank ? prevRank.diffRateRanking : undefined,
                            prevDayDiffRateRanking: prevDayRank ? prevDayRank.diffRateRanking : undefined,
                            market: value.market,
                            volumeDiff: value.volumeDiff,
                            volumeDiffRate: value.volumeDiffRate,
                            datetime: baseTime,
                        });
                        yield this.tokenTradeVolumeRankRepsitory.save(tradeVolumeRank);
                    }
                }));
            }
            catch (e) {
                throw Error(e);
            }
        });
    }
    findRankByDatetime(hours, datetime) {
        return __awaiter(this, void 0, void 0, function* () {
            this.tokenTradeVolumeRankRepsitory.metadata.tablePath = `trade_volume_rank_${hours}h`;
            return yield this.tokenTradeVolumeRankRepsitory.findOne({ select: { diffRateRanking: true }, where: { datetime: datetime } });
        });
    }
    findByDatetime(hours, datetime) {
        return __awaiter(this, void 0, void 0, function* () {
            this.tokenTradeVolumeRankRepsitory.metadata.tablePath = `trade_volume_rank_${hours}h`;
            return yield this.tokenTradeVolumeRankRepsitory.findOne({ select: { id: true }, where: { datetime: datetime } });
        });
    }
};
TradeVolumeRankService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(tradeVolumeRank1H_entity_1.TokenTradeVolumeRank)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        minuteCandle_service_1.MinuteCandleService])
], TradeVolumeRankService);
exports.TradeVolumeRankService = TradeVolumeRankService;
//# sourceMappingURL=tradeVolumeRank1H.service.js.map