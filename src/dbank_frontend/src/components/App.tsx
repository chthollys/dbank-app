import React, { ChangeEvent, ChangeEventHandler, FormEvent, useCallback, useEffect, useState } from 'react';
import { dbank_backend } from 'declarations/dbank_backend';
import { toast, ToastContainer } from "react-toastify";

function App() {

  const [currentAmount, setCurrentAmount] = useState<number | null>(null);
  const [topUpAmount, setTopUpAmount] = useState<string>("");
  const [withdrawAmount, setWithdrawAmount] = useState<string>("");
  const fetchBalance = useCallback(async () => {
    try {
      const result = await dbank_backend.checkBalance();
      setCurrentAmount(result); // Update the currentAmount with the fetched value
    } catch (error) {
      console.error("Failed to fetch balance: ", error);
    }
  }, []);

  const trackValue = (event : ChangeEvent<HTMLInputElement>) => {
    try {
      const { name, value } = event.target;
      if (name === "topUp") {
        setTopUpAmount(value);
      }
      else if (name === "withdraw") {
        setWithdrawAmount(value);
      }
    } catch (error) {
      console.error("Failed to keep track the input value: ", error);
    }
  };

  const updateBackEnd = (event : FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const isTopUp = topUpAmount.trim() !== "";
      const isWithdraw = withdrawAmount.trim() !== "";
      const isEmpty = !isTopUp && !isWithdraw;
      if (!isEmpty) {
        try {
          if (isTopUp) {
            dbank_backend.topUp(parseFloat(topUpAmount));
          }
          if (isWithdraw) {
            dbank_backend.withdraw(parseFloat(withdrawAmount));
          }
        } catch (error) {
          toast.error("Error in server calling function.");
          console.error("Error in server: ", error);
        }
      } else {
        toast.error("Please fill one of the input from the form to start transaction");
        return;
      }
      setTopUpAmount("");
      setWithdrawAmount("");
    } catch (error) {
      toast.error("Error in proccessing the transaction.");
      console.error("Error occured in transaction: ", error);
    }
  };

  // Fetch the balance when the component mount
  useEffect(() => {
    fetchBalance(); // Fetch balance immediately on mount

    const intervalId = setInterval(() => {
      fetchBalance();
    }, 500); // Set up interval to fetch the latest balance value

    return () => clearInterval(intervalId); // Cleanup the interval when the component unmount
  }, [fetchBalance]);

  return (
    <div className="container">
      <img src="dbank_logo.png" alt="DBank logo" width="100"/>
      <h1>Current Balance: $<span id="value">{currentAmount != null ? currentAmount.toFixed(3) : "Loading..."}</span></h1>
      <div className="divider"></div>
      <form onSubmit={updateBackEnd}>
        <ToastContainer />
        <h2>Amount to Top Up</h2>
        <input
          id="input-amount"
          type="number"
          step="0.001"
          min={0}
          name="topUp"
          value={topUpAmount}
          onChange={trackValue}
        />
        <h2>Amount to Withdraw</h2>
        <input
          id="withdrawal-amount"
          type="number"
          name="withdraw"
          step="0.001"
          min={0}
          value={withdrawAmount}
          onChange={trackValue}
        />
        <input id="submit-btn" type="submit" />
      </form>
    </div>
  );
}

export default App;
