import React, { useState } from "react";
import EntryCards from "./Entries/EntryCards";
import WalletCard from "./Wallet/WalletCard";

function Home() {
  const [totalAmount, setTotalAmount] = useState(0);

  function handleArrayOfEntries(arrayOfEntries) {
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

  // const getBalance=(value)=> {
  //   if (value.type === 'option1') {
  //     const finalAmount = totalAmount - parseInt(value.amount);
  //     setTotalAmount(finalAmount);

  //   } else if (value.type === 'option2') {
  //     const finalAmount = totalAmount + parseInt(value.amount);
  //     setTotalAmount(finalAmount);
  //   }
  // }
  // const amountOfDeletedEntry = (amount, type) => {
  //   amount = parseInt(amount);
  //   if (type === "option1") {
  //     const finalAmount = totalAmount + amount;
  //     setTotalAmount(finalAmount);
  //   }
  //   else {
  //     const finalAmount = totalAmount - amount;
  //     setTotalAmount(finalAmount);
  //   }
  // }
  return (
    <div>
      <WalletCard totalAmount={totalAmount} />
      <EntryCards handleArrayOfEntries={handleArrayOfEntries} />
    </div>
  );
}

export default Home;
