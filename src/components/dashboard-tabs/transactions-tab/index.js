// Module dependencies
import { useContext } from 'react';
import { AppContext } from '../../../reducers';

// UI Components
import MUIDataTable from 'mui-datatables';
import Loading from '../../loading';
import TransactionForm from './transaction-form.js';

// Assets
import { tableColumns, tableOptions } from '../../../utils/table-helpers';

const TransationsTab = () => {
  const { state } = useContext(AppContext);
  const { transactions, processing } = state;

  return (
    <>
      <TransactionForm />
      {
        processing ? ( <Loading /> ) : (
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
