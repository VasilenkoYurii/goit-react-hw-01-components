const TransactionHistory = items => {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>{items.map(item => console.log(item))}</tbody>
    </table>
  );
};

export default TransactionHistory;
