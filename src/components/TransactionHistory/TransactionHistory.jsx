import {
  TransactionTable,
  TransactionTableHead,
  TransactionTableHeadItem,
  TransactionTableRow,
  TransactionTableBody,
  TransactionTableBodyItem,
} from './TransactionHistory.styled';
import PropTypes from 'prop-types';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionTable>
      <TransactionTableHead>
        <TransactionTableRow>
          <TransactionTableHeadItem>Type</TransactionTableHeadItem>
          <TransactionTableHeadItem>Amount</TransactionTableHeadItem>
          <TransactionTableHeadItem>Currency</TransactionTableHeadItem>
        </TransactionTableRow>
      </TransactionTableHead>

      <TransactionTableBody>
        {items.map(transaction => {
          return (
            <TransactionTableRow key={transaction.id}>
              <TransactionTableBodyItem>
                {transaction.type}
              </TransactionTableBodyItem>
              <TransactionTableBodyItem>
                {transaction.amount}
              </TransactionTableBodyItem>
              <TransactionTableBodyItem>
                {transaction.currency}
              </TransactionTableBodyItem>
            </TransactionTableRow>
          );
        })}
      </TransactionTableBody>
    </TransactionTable>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
