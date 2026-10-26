
function CompanyHeader() {
  return (
    <header className="company-header">
      <div className="company-info">
        <div className="company-logo">AD</div>

        <div>
          <h1>ArthaDisha</h1>
          <p>Software Solutions</p>
          <p>Nashik, Maharashtra - 422001</p>
          <p>contact@arthadisha.com | +91 98765 43210</p>
        </div>
      </div>

      <div className="invoice-info">
        <h2>INVOICE</h2>
        <p>
          <strong>Invoice No:</strong> #INV - 1
        </p>
        <p>
          <strong>Date:</strong>{" "}
          {new Date("2026-10-23T12:00:00").toLocaleDateString(
            "en-GB",
            {
              day: "2-digit",
              month: "short",
              year: "numeric",
            }
          )}
        </p>
      </div>
    </header>
  );
}

export default CompanyHeader;
