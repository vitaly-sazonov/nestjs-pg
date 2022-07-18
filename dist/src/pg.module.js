"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PgModule = void 0;
var common_1 = require("@nestjs/common");
var pg_core_1 = require("./pg.core");
var PgModule = /** @class */ (function () {
    function PgModule() {
    }
    PgModule_1 = PgModule;
    PgModule.forRoot = function (options) {
        return {
            module: PgModule_1,
            imports: [pg_core_1.PgCoreModule.forRoot(options)]
        };
    };
    var PgModule_1;
    PgModule = PgModule_1 = __decorate([
        (0, common_1.Module)({})
    ], PgModule);
    return PgModule;
}());
exports.PgModule = PgModule;