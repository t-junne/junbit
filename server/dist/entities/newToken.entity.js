"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenEntity = void 0;
const typeorm_1 = require("typeorm");
exports.TokenEntity = new typeorm_1.EntitySchema({
    name: 'token',
    columns: {
        id: {
            type: Number,
            primary: true,
            generated: true,
        },
        candleDateTimeUtc: {
            type: String,
            length: 20,
        },
        candleDateTimeKst: {
            type: String,
            length: 20,
        },
        openingPrice: {
            type: Number,
        },
        highPrice: {
            type: Number,
        },
        lowPrice: {
            type: Number,
        },
        tradePrice: {
            type: Number,
        },
        timestamp: {
            type: String,
            length: 20,
        },
        candleAccTradePrice: {
            type: Number,
        },
        candleAccTradeVolume: {
            type: Number,
        },
        unit: {
            type: Number,
        }
    }
});
//# sourceMappingURL=newToken.entity.js.map