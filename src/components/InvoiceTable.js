
function InvoiceTable({ items, updateItem }) {
  function formatCurrency(amount) {
    return amount.toLocaleString("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }

  return (
    <section className="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Item Description</th>
            <th>Quantity</th>
            <th>Rate (₹)</th>
            <th>Amount (₹)</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>

              <td>
                <input
                  type="number"
                  className="quantity"
                  min="0"
                  step="1"
                  value={item.quantity}
                  onChange={(event) =>
                    updateItem(item.id, "quantity", event.target.value)
                  }
                />
              </td>

              <td>
                <input
                  type="number"
                  className="rate"
                  min="0"
                  step="0.01"
                  value={item.rate}
                  onChange={(event) =>
                    updateItem(item.id, "rate", event.target.value)
                  }
                />
              </td>

              <td className="amount">
                ₹{formatCurrency(item.quantity * item.rate)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default InvoiceTable;
