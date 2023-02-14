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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenTradeVolumeRank = void 0;
const typeorm_1 = require("typeorm");
let TokenTradeVolumeRank = class TokenTradeVolumeRank {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], TokenTradeVolumeRank.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TokenTradeVolumeRank.prototype, "candleDateTimeUtc", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TokenTradeVolumeRank.prototype, "candleDateTimeKst", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], TokenTradeVolumeRank.prototype, "openingPrice", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], TokenTradeVolumeRank.prototype, "highPrice", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], TokenTradeVolumeRank.prototype, "lowPrice", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], TokenTradeVolumeRank.prototype, "tradePrice", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TokenTradeVolumeRank.prototype, "timestamp", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], TokenTradeVolumeRank.prototype, "candleAccTradePrice", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], TokenTradeVolumeRank.prototype, "candleAccTradeVolume", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], TokenTradeVolumeRank.prototype, "unit", void 0);
TokenTradeVolumeRank = __decorate([
    (0, typeorm_1.Entity)()
], TokenTradeVolumeRank);
exports.TokenTradeVolumeRank = TokenTradeVolumeRank;
//# sourceMappingURL=tokenTradeVolumeRank.entity.js.map