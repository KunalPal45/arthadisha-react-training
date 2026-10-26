
function InvoiceFooter({
  subtotal,
  gstRate,
  taxState,
  cgst,
  sgst,
  igst,
  grandTotal,
}) {
  function formatCurrency(amount) {
    return amount.toLocaleString("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }

  const halfGstRate = gstRate / 2;

  return (
    <section className="totals-section">
      <div className="total-row">
        <span>Subtotal</span>
        <span>{formatCurrency(subtotal)}</span>
      </div>

      {taxState === "Maharashtra" ? (
        <>
          <div className="total-row">
            <span>CGST ({halfGstRate}%)</span>
            <span>{formatCurrency(cgst)}</span>
          </div>

          <div className="total-row">
            <span>SGST ({halfGstRate}%)</span>
            <span>{formatCurrency(sgst)}</span>
          </div>
        </>
      ) : (
        <div className="total-row">
          <span>IGST ({gstRate}%)</span>
          <span>{formatCurrency(igst)}</span>
        </div>
      )}

      <div className="total-row grand-total">
        <span>Grand Total</span>
        <span>{formatCurrency(grandTotal)}</span>
      </div>

      <div className="button-container">
        <button
          id="print-button"
          type="button"
          onClick={() => window.print()}
        >
          🖨 Print Invoice
        </button>
      </div>
    </section>
  );
}

export default InvoiceFooter;
