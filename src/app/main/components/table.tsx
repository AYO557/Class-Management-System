import {
  MoreHorizontal,
  Search,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { type ReactNode, useState, useMemo } from "react";

export interface Column<T> {
  title: string;
  dataIndex: keyof T;
  key: string;
  render?: (record: T) => ReactNode;
  searchable?: boolean;
}

export interface TableAction<T> {
  label: string;
  onClick: (record: T) => void;
  icon?: ReactNode;
}

interface CustomTableProps<T extends { id: string | number }> {
  caption?: string;
  columns: Column<T>[];
  data: T[];
  selectable?: boolean;
  onSelectionChange?: (selectedIds: Array<string | number>) => void;
  actions?: TableAction<T>[];
  showSearch?: boolean;
  onSearchClick?: () => void;
  searchPlaceholder?: string;
  pageSize?: number;
  showPagination?: boolean;
}

export default function CustomTable<T extends { id: string | number }>({
  caption,
  columns,
  data,
  selectable = false,
  onSelectionChange,
  actions,
  showSearch = false,
  onSearchClick,
  searchPlaceholder = "Search...",
  pageSize = 10,
  showPagination = false,
}: CustomTableProps<T>) {
  const [selectedIds, setSelectedIds] = useState<Set<string | number>>(
    new Set()
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [showActionsFor, setShowActionsFor] = useState<string | number | null>(
    null
  );

  const totalPages = Math.ceil(data.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const paginatedData = useMemo(() => {
    return showPagination ? data.slice(startIndex, endIndex) : data;
  }, [data, startIndex, endIndex, showPagination]);

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      const allIds = new Set(paginatedData.map((record) => record.id));
      setSelectedIds(allIds);
      onSelectionChange?.(Array.from(allIds));
    } else {
      setSelectedIds(new Set());
      onSelectionChange?.([]);
    }
  };

  const handleSelectRow = (id: string | number, checked: boolean) => {
    const newSelectedIds = new Set(selectedIds);
    if (checked) {
      newSelectedIds.add(id);
    } else {
      newSelectedIds.delete(id);
    }
    setSelectedIds(newSelectedIds);
    onSelectionChange?.(Array.from(newSelectedIds));
  };

  const isAllSelected =
    paginatedData.length > 0 &&
    paginatedData.every((record) => selectedIds.has(record.id));

  const isSomeSelected =
    paginatedData.some((record) => selectedIds.has(record.id)) &&
    !isAllSelected;

  const renderCell = (record: T, column: Column<T>): ReactNode => {
    if (column.key === "action") {
      return (
        <div className="relative">
          <button
            onClick={() =>
              setShowActionsFor(showActionsFor === record.id ? null : record.id)
            }
            className="p-1 hover:bg-lightgraypurple/30 rounded transition-colors"
          >
            <MoreHorizontal size={20} className="cursor-pointer" />
          </button>

          {showActionsFor === record.id && actions && actions.length > 0 && (
            <div className="absolute right-0 mt-1 bg-white shadow-lg rounded-lg border border-lightgraypurple/30 z-10 min-w-[150px]">
              {actions.map((action, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    action.onClick(record);
                    setShowActionsFor(null);
                  }}
                  className="w-full px-4 py-2 text-left text-darkpurple hover:bg-lightgraypurple/20 first:rounded-t-lg last:rounded-b-lg flex items-center gap-2 transition-colors"
                >
                  {action.icon}
                  <span className="text-sm">{action.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      );
    }

    const value = record[column.dataIndex];
    return typeof value === "object"
      ? JSON.stringify(value)
      : (value as ReactNode);
  };

  const goToPage = (page: number) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)));
  };

  return (
    <div className="mt-10">
      {(caption || showSearch) && (
        <div className="flex items-center justify-between mb-4"> 
          {caption && (
            <h2 className="text-xl font-bold text-darkpurple">{caption}</h2>
          )}
          {showSearch && (
            <button
              onClick={onSearchClick}
              className="flex items-center gap-2 px-4 py-2 bg-lightgraypurple hover:bg-quaternary text-white rounded-lg transition-colors"
            >
              <Search size={18} />
              <span className="text-sm">{searchPlaceholder}</span>
            </button>
          )}
        </div>
      )}

      <div className="overflow-x-auto rounded-lg shadow-lg border border-lightgraypurple/30">
        <table className="text-darkpurple border-collapse w-full bg-white">
          <thead>
            <tr className="bg-lightgraypurple text-white">
              {selectable && (
                <th className="text-left p-3 px-4">
                  <input
                    type="checkbox"
                    checked={isAllSelected}
                    ref={(input) => {
                      if (input) {
                        input.indeterminate = isSomeSelected;
                      }
                    }}
                    onChange={(e) => handleSelectAll(e.target.checked)}
                    className="w-4 h-4 rounded border-2 border-white cursor-pointer accent-secondary"
                  />
                </th>
              )}
              {columns.map((column) => (
                <th
                  key={column.key}
                  className="text-left p-3 px-4 font-semibold text-sm uppercase tracking-wide"
                >
                  {column.title}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {paginatedData.map((record, index) => (
              <tr
                key={record.id}
                className={`border-b border-lightgraypurple/20 hover:bg-lightgraypurple/10 transition-colors ${
                  index % 2 === 0 ? "bg-white" : "bg-lightgraypurple/5"
                }`}
              >
                {selectable && (
                  <td className="p-3 px-4">
                    <input
                      type="checkbox"
                      checked={selectedIds.has(record.id)}
                      onChange={(e) =>
                        handleSelectRow(record.id, e.target.checked)
                      }
                      className="w-4 h-4 rounded border-2 border-lightgraypurple cursor-pointer accent-secondary"
                    />
                  </td>
                )}
                {columns.map((column) => (
                  <td key={column.key} className="p-3 px-4 text-sm">
                    {column.render
                      ? column.render(record)
                      : renderCell(record, column)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showPagination && totalPages > 1 && (
        <div className="flex items-center justify-between mt-4 px-4">
          <div className="text-sm text-gray-600">
            Showing {startIndex + 1} to {Math.min(endIndex, data.length)} of{" "}
            {data.length} entries
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-2 rounded-lg bg-lightgraypurple hover:bg-quaternary disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft size={18} className="text-white" />
            </button>

            <div className="flex items-center gap-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => {
                  if (
                    page === 1 ||
                    page === totalPages ||
                    (page >= currentPage - 1 && page <= currentPage + 1)
                  ) {
                    return (
                      <button
                        key={page}
                        onClick={() => goToPage(page)}
                        className={`px-3 py-1 rounded-lg text-sm transition-colors ${
                          currentPage === page
                            ? "bg-secondary text-white font-semibold"
                            : "bg-lightgraypurple/30 text-darkpurple hover:bg-lightgraypurple/50"
                        }`}
                      >
                        {page}
                      </button>
                    );
                  }
                  if (page === currentPage - 2 || page === currentPage + 2) {
                    return (
                      <span key={page} className="px-2 text-gray-400">
                        ...
                      </span>
                    );
                  }
                  return null;
                }
              )}
            </div>

            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-2 rounded-lg bg-lightgraypurple hover:bg-quaternary disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronRight size={18} className="text-white" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
