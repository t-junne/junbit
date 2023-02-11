"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
exports.default = (0, config_1.registerAs)('database', () => ({
    host: process.env.DB_HOSTNAME || 'junbit.cboubep7j1xj.ap-northeast-1.rds.amazonaws.com',
    port: parseInt(process.env.DB_PORT) || 3306,
    username: process.env.DB_USERNAME || 'admin',
    password: process.env.DB_PASSWORD || 'password',
    db: process.env.DB_DATABASE || 'junbit'
}));
//# sourceMappingURL=configuration.js.map