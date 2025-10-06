// types/table.ts
export interface Column<T> {
  key: keyof T;
  header: string;
  sortable?: boolean;
  render?: (value: T[keyof T], row: T) => React.ReactNode;
  width?: string;
}

export interface TableProps<T> {
  data: T[];
  columns: Column<T>[];
  selectable?: boolean;
  pagination?: boolean;
  searchable?: boolean;
  actions?: boolean;
  pageSize?: number;
  onSelectionChange?: (selectedRows: T[]) => void;
  onAction?: (action: string, row: T) => void;
  actionsRenderer?: (row: T) => React.ReactNode;
}

export interface PaginationState {
  currentPage: number;
  pageSize: number;
  totalPages: number;
}

export type SortDirection = "asc" | "desc" | null;
