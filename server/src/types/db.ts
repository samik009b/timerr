export interface IDatabaseConnector {
  connect(): Promise<void>;
}
