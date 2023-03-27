import PropTypes from 'prop-types';
import { StyledTable } from './styled-transactions';

export const TransactionHistory = ( {items} ) =>
{
    return (
        <StyledTable className="transaction-history">
            <thead>
                <tr>
                    <th className="transaction-header">Type</th>
                    <th className="transaction-header">Amount</th>
                    <th className="transaction-header">Currency</th>
                </tr>
            </thead>
                <tbody>
                {items.map(item => (
                    <tr key={item.id} className="transaction-row">
                        <td className="transaction-data">{item.type}</td>
                        <td className="transaction-data">{item.amount}</td>
                        <td className="transaction-data">{item.currency}</td>
                    </tr>
                ))}
                </tbody>
        </StyledTable>      
    );
};

TransactionHistory.propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired
};