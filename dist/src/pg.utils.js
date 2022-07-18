"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InjectPool = exports.getPoolToken = exports.getPoolName = void 0;
const common_1 = require("@nestjs/common");
const pg_constants_1 = require("./pg.constants");
function getPoolName(options) {
    return options && options.name ? options.name : pg_constants_1.DEFAULT_PGPOOL_NAME;
}
exports.getPoolName = getPoolName;
function getPoolToken(options = pg_constants_1.DEFAULT_PGPOOL_NAME) {
    const name = typeof options === "string" ? options : getPoolName(options);
    return `${name}PgPool`;
}
exports.getPoolToken = getPoolToken;
const InjectPool = (options) => (0, common_1.Inject)(getPoolToken(options));
exports.InjectPool = InjectPool;
