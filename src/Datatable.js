import React from 'react';
import { useTable, useGlobalFilter, usePagination } from 'react-table';
import { CSVLink } from 'react-csv';
import "./DataTable.css"

const DataTable = ({ data, columns }) => {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page, // Change 'rows' to 'page'
        prepareRow,
        setGlobalFilter,
        state,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        pageCount,
        gotoPage,
        setPageSize,
      } = useTable(
        {
          columns,
          data,
        },
        useGlobalFilter,
        usePagination // Add this line
      );
      
      
      page.forEach( prepareRow)
  const csvData = page.map(page => page.cells.map(cell => cell.value));

  return (
    <div>
        <input
  type="text"
  placeholder="Search..."
  value={state.globalFilter || ''}
  onChange={e => setGlobalFilter(e.target.value)}
/>
      <table {...getTableProps()} className="table">
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <CSVLink data={csvData} filename="data.csv">
        <button>Export to CSV</button>
      </CSVLink>
      <div className="pagination">
    <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
      {'<<'}
    </button>
    <button onClick={previousPage} disabled={!canPreviousPage}>
      {'<'}
    </button>
    <button onClick={nextPage} disabled={!canNextPage}>
      {'>'}
    </button>
    <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
      {'>>'}
    </button>
    <span>
      Page{' '}
      <strong>
        {state.pageIndex + 1} of {pageOptions.length}
      </strong>{' '}
    </span>
    <span>
      | Go to page:{' '}
      <input
        type="number"
        defaultValue={state.pageIndex + 1}
        onChange={e => {
          const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0;
          gotoPage(pageNumber);
        }}
        style={{ width: '50px' }}
      />
    </span>
    <select
      value={state.pageSize}
      onChange={e => {
        setPageSize(Number(e.target.value));
      }}
    >
      {[10,20,30,50].map(pageSize => (
        <option key={pageSize} value={pageSize}>
          Show {pageSize}
        </option>
      ))}
    </select>
  </div>
</div>





    
    
  );
};

export default DataTable;
