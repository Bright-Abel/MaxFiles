import TableComp from '../components/TableComp';
import { tableData, secondTableData } from '../constant/data-json';
import SecondTable from './SecondTable';

const UserDashboard = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2  gap-8">
      <SecondTable data={secondTableData} rowsPerPage={7} />
      <TableComp data={tableData} rowsPerPage={7} />
      <TableComp data={tableData} rowsPerPage={7} />
      <TableComp data={tableData} rowsPerPage={7} />
    </div>
  );
};
export default UserDashboard;
