import React, { useState } from "react";
import EntryCards from "./Entries/EntryCards";
import WalletCard from "./Wallet/WalletCard";

function Home() {
  const [totalAmount, setTotalAmount] = useState(0);

  function handleTotalAmount(arrayOfEntries) {
    let borrowedAmount = 0,
      lendedAmount = 0;
    const arrayOfBorrowedAmount = arrayOfEntries.filter(
      (x) => x.type == "option1"
    );
    for (let i = 0; i < arrayOfBorrowedAmount.length; i++) {
      borrowedAmount += parseInt(arrayOfBorrowedAmount[i].amount);
    }
    const arrayOfLendedAmount = arrayOfEntries.filter(
      (x) => x.type == "option2"
    );
    for (let i = 0; i < arrayOfLendedAmount.length; i++) {
      lendedAmount += parseInt(arrayOfLendedAmount[i].amount);
    }
    const finalAmount = lendedAmount - borrowedAmount;
    setTotalAmount(finalAmount);
  }

  return (
    <div>
      <WalletCard totalAmount={totalAmount} />
      <EntryCards handleTotalAmount={handleTotalAmount} />
    </div>
  );
}

export default Home;
