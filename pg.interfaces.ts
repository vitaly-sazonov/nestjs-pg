export interface IPgOptions {
  connectionString?: string;
  user?: string;
  host?: string;
  database?: string;
  password?: string;
  port?: number;
}

export interface IPgModuleOptions extends IPgOptions {
  /**
   * Connection pool name
   */
  name?: string;
}
