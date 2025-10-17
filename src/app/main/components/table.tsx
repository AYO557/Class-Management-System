import { FormInput } from "@/components/ui/input";
import {
  MoreHorizontal,
  Search,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import React, {
  type ReactNode,
  useState,
  useMemo,
  useRef,
  useEffect,
} from "react";

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

interface CustomTableProps<T extends { _id: string | number }> {
  caption?: string;
  columns: Column<T>[];
  data: T[];
  selectable?: boolean;
  onSelectionChange?: (selectedIds: Array<string | number>) => void;
  actions?: TableAction<T>[];
  showSearch?: boolean;
  onSearch?: (value: string) => void;
  searchPlaceholder?: string;
  pageSize?: number;
  showPagination?: boolean;
}

export default function CustomTable<T extends { _id: string | number }>({
  caption,
  columns,
  data,
  selectable = false,
  onSelectionChange,
  actions,
  showSearch = false,
  onSearch,
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
  const actionDropdownRef = useRef<HTMLDivElement | null>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        actionDropdownRef.current &&
        !actionDropdownRef.current.contains(event.target as Node)
      ) {
        setShowActionsFor(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const totalPages = Math.ceil(data.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const paginatedData = useMemo(
    () => (showPagination ? data.slice(startIndex, endIndex) : data),
    [data, startIndex, endIndex, showPagination]
  );

  const handleSelectAll = (checked: boolean) => {
    const allIds: Set<string | number> = checked
      ? new Set(paginatedData.map((r) => r._id))
      : new Set();
    setSelectedIds(allIds);
    onSelectionChange?.(Array.from(allIds));
  };

  const handleSelectRow = (_id: string | number, checked: boolean) => {
    const newSelected = new Set(selectedIds);
    if (checked) newSelected.add(_id);
    else newSelected.delete(_id);
    setSelectedIds(newSelected);
    onSelectionChange?.(Array.from(newSelected));
  };

  const isAllSelected =
    paginatedData.length > 0 &&
    paginatedData.every((r) => selectedIds.has(r._id));
  const isSomeSelected =
    paginatedData.some((r) => selectedIds.has(r._id)) && !isAllSelected;

  const goToPage = (page: number) =>
    setCurrentPage(Math.max(1, Math.min(page, totalPages)));

  return (
    <div className="mt-10 relative">
      {(caption || showSearch) && (
        <div className="flex items-center justify-between mb-4 px-1">
          {caption && (
            <h2 className="text-xl font-bold text-darkpurple">{caption}</h2>
          )}
          {showSearch && (
            <div>
              <FormInput
                name="search"
                id="search"
                type="search"
                placeholder={searchPlaceholder}
                startAdornment={<Search size={18} />}
                onChange={(e) => onSearch?.(e.target.value)}
              />
            </div>
          )}
        </div>
      )}

      <div className="overflow-x-auto rounded-lg shadow-lg border border-lightgraypurple/30">
        <table className="text-darkpurple border-collapse w-full bg-white relative">
          <thead>
            <tr className="bg-lightgraypurple text-white">
              {selectable && (
                <th className="p-3 px-4 text-left">
                  <input
                    type="checkbox"
                    checked={isAllSelected}
                    ref={(input) => {
                      if (input) input.indeterminate = isSomeSelected;
                    }}
                    onChange={(e) => handleSelectAll(e.target.checked)}
                    className="w-4 h-4 rounded border-2 border-white cursor-pointer accent-secondary"
                  />
                </th>
              )}
              {columns.map((col) => (
                <th
                  key={col.key}
                  className="text-left p-3 px-4 font-semibold text-sm uppercase tracking-wide"
                >
                  {col.title}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {paginatedData.map((record, index) => (
              <tr
                key={record._id}
                className={`border-b border-lightgraypurple/20 hover:bg-lightgraypurple/10 transition-colors ${
                  index % 2 === 0 ? "bg-white" : "bg-lightgraypurple/5"
                }`}
              >
                {selectable && (
                  <td className="p-3 px-4">
                    <input
                      type="checkbox"
                      checked={selectedIds.has(record._id)}
                      onChange={(e) =>
                        handleSelectRow(record._id, e.target.checked)
                      }
                      className="w-4 h-4 rounded border-2 border-lightgraypurple cursor-pointer accent-secondary"
                    />
                  </td>
                )}

                {columns.map((column) => (
                  <td key={column.key} className="p-3 px-4 text-sm relative">
                    {column.key === "action" && actions ? (
                      <div className="relative" ref={actionDropdownRef}>
                        <button
                          onClick={() =>
                            setShowActionsFor(
                              showActionsFor === record._id ? null : record._id
                            )
                          }
                          className="p-1 hover:bg-lightgraypurple/30 rounded transition-colors"
                        >
                          <MoreHorizontal size={20} />
                        </button>

                        {showActionsFor === record._id && (
                          <div
                            className="absolute right-0 z-50 min-w-[150px] bg-white shadow-lg rounded-lg border border-lightgraypurple/30"
                            style={{
                              top:
                                index === paginatedData.length - 1
                                  ? "-100%"
                                  : "100%",
                              marginTop:
                                index === paginatedData.length - 1
                                  ? "-0.5rem"
                                  : "0.25rem",
                            }}
                          >
                            {actions.map((action, idx) => (
                              <button
                                key={idx}
                                onClick={() => {
                                  action.onClick(record);
                                  setShowActionsFor(null);
                                }}
                                className="w-full px-4 py-2 text-left text-darkpurple hover:bg-lightgraypurple/20 flex items-center gap-2 first:rounded-t-lg last:rounded-b-lg transition-colors"
                              >
                                {action.icon}
                                <span className="text-sm">{action.label}</span>
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : column.render ? (
                      column.render(record)
                    ) : (
                      (record[column.dataIndex] as ReactNode)
                    )}
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
