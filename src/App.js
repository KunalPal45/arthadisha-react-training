
import { useState } from "react";
import "./App.css";

import CompanyHeader from "./components/CompanyHeader";
import ClientInfo from "./components/ClientInfo";
import InvoiceTable from "./components/InvoiceTable";
import InvoiceFooter from "./components/InvoiceFooter";

function App() {
  // Invoice items
  const [items, setItems] = useState([
    { id: 1, name: "Website Development", quantity: 1, rate: 15000 },
    { id: 2, name: "UI/UX Design", quantity: 2, rate: 5000 },
    { id: 3, name: "INVOICE Feature", quantity: 3, rate: 4000 },
    { id: 4, name: "API Integration", quantity: 1, rate: 6000 },
    { id: 5, name: "Testing & Deployment", quantity: 1, rate: 3000 },
  ]);

  // Tax settings
  const [taxState, setTaxState] = useState("Maharashtra");
  const [gstRate, setGstRate] = useState(18);

  // Calculate subtotal
  const subtotal = items.reduce((total, item) => {
    return total + item.quantity * item.rate;
  }, 0);

  // Calculate GST
  const gstAmount = subtotal * (gstRate / 100);

  const cgst =
    taxState === "Maharashtra" ? gstAmount / 2 : 0;

  const sgst =
    taxState === "Maharashtra" ? gstAmount / 2 : 0;

  const igst =
    taxState === "Other" ? gstAmount : 0;

  const grandTotal = subtotal + gstAmount;

  // Update quantity or rate when the user edits an item
  function updateItem(id, field, value) {
    setItems((previousItems) =>
      previousItems.map((item) =>
        item.id === id
          ? {
              ...item,
              [field]: Math.max(0, Number(value) || 0),
            }
          : item
      )
    );
  }

  return (
    <main className="invoice-container">
      <CompanyHeader />

      <ClientInfo
        taxState={taxState}
        setTaxState={setTaxState}
        gstRate={gstRate}
        setGstRate={setGstRate}
      />

      <InvoiceTable
        items={items}
        updateItem={updateItem}
      />

      <InvoiceFooter
        subtotal={subtotal}
        gstRate={gstRate}
        taxState={taxState}
        cgst={cgst}
        sgst={sgst}
        igst={igst}
        grandTotal={grandTotal}
      />
    </main>
  );
}

export default App;
