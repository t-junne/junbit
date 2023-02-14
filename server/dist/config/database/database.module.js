"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
exports.DatabaseModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const config_1 = require("@nestjs/config");
const typeorm_naming_strategies_1 = require("typeorm-naming-strategies");
const mongoose_1 = require("@nestjs/mongoose");
let DatabaseModule = class DatabaseModule {
};
DatabaseModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: (configService) => __awaiter(void 0, void 0, void 0, function* () {
                    return ({
                        type: 'mysql',
                        host: configService.get('MYSQL_HOSTNAME'),
                        port: configService.get('MYSQL_PORT'),
                        username: configService.get('MYSQL_USERNAME'),
                        password: configService.get('MYSQL_PASSWORD'),
                        database: configService.get('MYSQL_DATABASE'),
                        entities: [__dirname + '/../../entities/*{.ts/.js}'],
                        namingStrategy: new typeorm_naming_strategies_1.SnakeNamingStrategy(),
                    });
                }),
            }),
            mongoose_1.MongooseModule.forRootAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: (configService) => __awaiter(void 0, void 0, void 0, function* () {
                    return ({
                        uri: configService.get('MONGODB_URI'),
                        dbName: process.env.NODE_ENV === 'development' ? 'junbit-dev' : 'junbit-prod',
                    });
                }),
            }),
        ],
    })
], DatabaseModule);
exports.DatabaseModule = DatabaseModule;
//# sourceMappingURL=database.module.js.map