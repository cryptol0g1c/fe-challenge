// Module dependencies
import { useContext } from 'react';
import { AppContext } from '../../../reducers';

// UI Components
import MUIDataTable from "mui-datatables";
import Loading from '../../loading';

// Assets
import { tableColumns, tableOptions } from '../../../utils/table-helpers';

const TransationsTab = () => {
  const { state } = useContext(AppContext);
  const { transactions, processing } = state;

  return (
    <>
      {
        processing ? (
          <Loading />
        ) : (
          <MUIDataTable
            data={transactions}
            columns={tableColumns}
            options={tableOptions}
          />
        )
      }
    </>
  );
};


export default TransationsTab;
