import { DynamicModule, Module } from "@nestjs/common";
import { PgCoreModule } from "./pg.core";
import { IPgModuleOptions } from "./pg.interfaces";

@Module({})
export class PgModule {
  static forRoot(options: IPgModuleOptions): DynamicModule {
    return {
      module: PgModule,
      imports: [PgCoreModule.forRoot(options)],
    };
  }
}
