import React, { useState } from "react";
import EntryCards from "./Entries/EntryCards";
import WalletCard from "./Wallet/WalletCard";
import { getCurrentDate } from "../utils/utils";

function Home() {
  const [totalAmount, setTotalAmount] = useState(0);
  const todayDate = getCurrentDate();

  function handleTotalAmount(arrayOfEntries) {
    let borrowedAmount = 0,
      lendedAmount = 0;
    const today = new Date(todayDate);
    
    for (let i = 0; i < arrayOfEntries?.length; i++) {
      const entryDate = new Date(arrayOfEntries[i].date);
      const differenceInDays = (today - entryDate) / 86400000;

      if (differenceInDays > 0) {
        let interestRate = 0.005;
        let interestDays = Math.floor(differenceInDays / 5);

        if (differenceInDays <= 5) {
          interestDays = 1;
        }

        if (arrayOfEntries[i].type === "option1") {
          if (interestDays > 0) {
            borrowedAmount += parseInt(arrayOfEntries[i].amount);
            borrowedAmount += borrowedAmount * interestRate * interestDays;
          }
        } else {
          if (interestDays > 0) {
            lendedAmount += parseInt(arrayOfEntries[i].amount);
            lendedAmount += lendedAmount * interestRate * interestDays;
          }
        }
      } else {
        if (arrayOfEntries[i].type === "option1") {
          borrowedAmount += parseInt(arrayOfEntries[i].amount);
        } else {
          lendedAmount += parseInt(arrayOfEntries[i].amount);
        }
      }
    }
    const finalAmount = lendedAmount - borrowedAmount;
    setTotalAmount(finalAmount);
  }
  return (
    <>
      <WalletCard totalAmount={totalAmount} />
      <EntryCards handleTotalAmount={handleTotalAmount} />
    </>
  );
}
export default Home;
