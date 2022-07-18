"use strict";
exports.__esModule = true;
exports.InjectPool = exports.getPoolToken = exports.getPoolName = void 0;
var common_1 = require("@nestjs/common");
var pg_constants_1 = require("./pg.constants");
function getPoolName(options) {
    return options && options.name ? options.name : pg_constants_1.DEFAULT_PGPOOL_NAME;
}
exports.getPoolName = getPoolName;
function getPoolToken(options) {
    if (options === void 0) {
        options = pg_constants_1.DEFAULT_PGPOOL_NAME;
    }
    var name = typeof options === "string" ? options : getPoolName(options);
    return "".concat(name, "PgPool");
}
exports.getPoolToken = getPoolToken;
var InjectPool = function (options) { return (0, common_1.Inject)(getPoolToken(options)); };
exports.InjectPool = InjectPool;
