import { DynamicModule, Global, Inject, Module } from "@nestjs/common";
import { ModuleRef } from "@nestjs/core";
import { Pool } from "pg";

import { PG_MODULE_OPTIONS } from "./pg.constants";
import { IPgModuleOptions, IPgOptions } from "./pg.interfaces";
import { getPoolToken } from "./pg.utils";

@Global()
@Module({})
export class PgModule {
  constructor(
    @Inject(PG_MODULE_OPTIONS)
    private readonly options: IPgModuleOptions,
    private readonly moduleRef: ModuleRef
  ) {}

  static forRoot(options: IPgModuleOptions): DynamicModule {
    const pgOptions = {
      provide: PG_MODULE_OPTIONS,
      useValue: options,
    };
    const poolProvider = {
      provide: getPoolToken(options),
      useFactory: async () => this.createPoolFactory(options),
    };

    return {
      module: PgModule,
      providers: [poolProvider, pgOptions],
      exports: [poolProvider],
    };
  }

  private static createPoolFactory(options: IPgOptions) {
    return new Pool(options);
  }
}
