// DataTable.tsx
import React, { useState, useRef } from 'react';
import useClickOutsideTable from './useClickOutsideTable';

type Column = {
  key: string;
  label: string;
};

type DataItem = {
  [key: string]: string | number | boolean | Date;
};

type DataTableProps = {
  data: DataItem[];
  columns: Column[];
};

const DataTable: React.FC<DataTableProps> = ({ data, columns }) => {
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: 'asc' | 'desc' } | null>(null);

  const sortedData = React.useMemo(() => {
    if (sortConfig !== null) {
      return [...data].sort((a, b) => {
        const aValue = a[sortConfig.key];
        const bValue = b[sortConfig.key];

        if (aValue < bValue) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (aValue > bValue) {
          return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }
    return data;
  }, [data, sortConfig]);

  const requestSort = (key: string) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig?.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const renderCellContent = (value: string | number | boolean | Date) => {
    if (value instanceof Date) {
      return value.toLocaleDateString();
    }
    return value.toString();
  };

  const tableRef = useRef<HTMLTableElement>(null);

  const handleClickOutside = () => {
    console.log('Clicked outside the table');
  };

  useClickOutsideTable(tableRef, handleClickOutside);

  return (
    <table ref={tableRef}>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.key} onClick={() => requestSort(column.key)}>
              {column.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sortedData.map((item, index) => (
          <tr key={index}>
            {columns.map((column) => (
              <td key={column.key}>{renderCellContent(item[column.key])}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;