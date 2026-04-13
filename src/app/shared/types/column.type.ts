export interface Column<T, K extends keyof T = keyof T> {
  key: K;
  label: string;
  format?: (value: T[K]) => string;
}