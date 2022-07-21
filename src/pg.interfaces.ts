export interface IPgOptions {
  connectionString?: string;
  user?: string;
  host?: string;
  database?: string;
  password?: string;
  port?: number;
}

export type IPgPool = {
  readonly query: (query: string, bindings: any[]) => Promise<{ rows: any[] }>;
};

export interface IPgModuleOptions extends IPgOptions {
  /**
   * Connection pool name
   */
  name?: string;
}
