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
var PgCoreModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PgCoreModule = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const pg_1 = require("pg");
const pg_constants_1 = require("./pg.constants");
const pg_utils_1 = require("./pg.utils");
let PgCoreModule = PgCoreModule_1 = class PgCoreModule {
    constructor(options, moduleRef) {
        this.options = options;
        this.moduleRef = moduleRef;
    }
    static forRoot(options) {
        const pgOptions = {
            provide: pg_constants_1.PG_MODULE_OPTIONS,
            useValue: options,
        };
        const poolProvider = {
            provide: (0, pg_utils_1.getPoolToken)(options),
            useFactory: async () => this.createPoolFactory(options),
        };
        return {
            module: PgCoreModule_1,
            providers: [poolProvider, pgOptions],
            exports: [poolProvider],
        };
    }
    static createPoolFactory(options) {
        return new pg_1.Pool(options);
    }
};
PgCoreModule = PgCoreModule_1 = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({}),
    __param(0, (0, common_1.Inject)(pg_constants_1.PG_MODULE_OPTIONS)),
    __metadata("design:paramtypes", [Object, core_1.ModuleRef])
], PgCoreModule);
exports.PgCoreModule = PgCoreModule;
