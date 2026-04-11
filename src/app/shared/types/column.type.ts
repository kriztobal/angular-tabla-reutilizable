export interface Column<T> {
  key: keyof T;
  label: string;
  format?: (value: T[keyof T]) => string;
}