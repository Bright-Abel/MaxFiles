import { useState } from 'react';
import clsx from 'clsx';

import Pagination from './Pagination';
import { FirstTableDataProps } from '../types';

interface TableProps {
  data: FirstTableDataProps[];
  rowsPerPage: number;
}

const SecondTable: React.FC<TableProps> = ({ data, rowsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const rows = rowsPerPage;
  const totalPages = Math.ceil(data.length / rows);

  return (
    <div className="bg-white border border-solid border-borders rounded-md py-2 px-1 overflow-auto">
      <h2 className="text-lg font-semibold mb-4">Recently viewed</h2>

      {/* Table */}
      <table className="w-full table-auto border-collapse">
        <thead className="">
          <tr className=" bg-[#F8F8FA] text-left">
            <th className="border border-solid text-borders font-normal w-[35%] border-borders px-4 pt-1">
              Name
            </th>
            <th className="border border-solid  text-borders font-normal border-borders px-4 pt-1 ">
              Workflow
            </th>
            <th className="border border-solid text-borders font-normal border-borders px-4 pt-1 ">
              Stage
            </th>
            <th className="border border-solid whitespace-nowrap text-borders font-normal border-borders px-4 pt-1 ">
              Uploaded at
            </th>
            <th className="border border-solid  text-borders font-normal border-borders px-4 pt-1 ">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {data
            .slice((currentPage - 1) * rows, currentPage * rows)
            .map((item, index) => (
              <tr key={item.id} className={clsx(index % 2 === 0 && 'bg-index')}>
                <td className="border-t border-l text-sm border-b border-0 border-solid capitalize border-borders py-1 px-4 ">
                  {item.name}
                </td>
                <td className="border-t text-sm border-b border-0 border-solid capitalize border-borders py-1 px-4 ">
                  {item.workflow}
                </td>
                <td className="border-t  text-sm border-b border-0 border-solid capitalize border-borders py-1 px-4 ">
                  {item.stage}
                </td>
                <td className="border-t border-b text-sm border-0 border-solid border-borders  px-4 ">
                  {item.date}
                </td>
                <td className="border-t border-r border-b text-sm border-0 border-solid border-borders  px-4 ">
                  <button className="bg-[#A7A7F3] font-bold text-black px-4 rounded-md hover:bg-[#8383e6] duration-500">
                    View
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </div>
  );
};

export default SecondTable;
