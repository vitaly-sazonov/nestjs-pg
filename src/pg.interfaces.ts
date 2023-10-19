export interface IPgOptions {
  connectionString?: string;
  user?: string;
  host?: string;
  database?: string;
  password?: string;
  port?: number;
}

export interface IPgPool {
  query<T, K>(query: string, bindings?: T): Promise<K>;
}

export interface IPgModuleOptions extends IPgOptions {
  /**
   * Connection pool name
   */
  name?: string;
}
