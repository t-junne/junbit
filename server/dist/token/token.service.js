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
exports.TokenService = void 0;
const common_1 = require("@nestjs/common");
const minuteCandle_service_1 = require("./minuteCandle/minuteCandle.service");
const ticker_service_1 = require("./ticker/ticker.service");
const interval_1 = require("../utils/interval");
let TokenService = class TokenService {
    constructor(minuteCandleService, tickerService) {
        this.minuteCandleService = minuteCandleService;
        this.tickerService = tickerService;
    }
    onApplicationBootstrap() {
        (0, interval_1.makeInterval)(() => __awaiter(this, void 0, void 0, function* () {
            yield this.tickerService.create();
            yield this.minuteCandleService.create(60, 25);
            yield this.minuteCandleService.delete(60);
        }));
    }
};
TokenService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [minuteCandle_service_1.MinuteCandleService,
        ticker_service_1.TickerService])
], TokenService);
exports.TokenService = TokenService;
//# sourceMappingURL=token.service.js.map