"use strict";
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
exports.CustomTokenRepository = void 0;
exports.CustomTokenRepository = {
    getTokenCandle(marketName, date) {
        return __awaiter(this, void 0, void 0, function* () {
            this.metadata.tablePath = marketName;
            try {
                const result = yield this.createQueryBuilder()
                    .select('*')
                    .from(marketName, marketName)
                    .where(`${marketName}.id = :id`, { id: 1 })
                    .getRawOne();
                return result;
            }
            catch (e) {
                return e.message;
            }
        });
    },
};
//# sourceMappingURL=token.repository.js.map