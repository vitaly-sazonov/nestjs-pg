import { Inject } from "@nestjs/common";
import { IPgModuleOptions } from "./pg.interfaces";
import { DEFAULT_PGPOOL_NAME } from "./pg.constants";

export function getPoolName(options: IPgModuleOptions): string {
  return options && options.name ? options.name : DEFAULT_PGPOOL_NAME;
}

export function getPoolToken(
  options: IPgModuleOptions | string = DEFAULT_PGPOOL_NAME
): string {
  const name = typeof options === "string" ? options : getPoolName(options);

  return `${name}PgPool`;
}

export const InjectPool = (
  options?: IPgModuleOptions | string
): ParameterDecorator => Inject(getPoolToken(options));
