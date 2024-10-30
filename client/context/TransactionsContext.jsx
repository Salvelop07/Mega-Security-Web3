/* eslint-disable react/prop-types */
import { BrowserProvider, ethers } from "ethers";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "../utils/constants";

import { useEffect, useState, createContext } from "react";

export const TransactionContext = createContext();
const { ethereum } = window;

const createEthereumContract = async () => {
  if (!ethereum) {
    console.error("MetaMask is not installed!");
    return;
  }

  try {
    // Request account access from MetaMask
    const provider = new ethers.BrowserProvider(ethereum);
    await provider.send("eth_requestAccounts", []);

    // Get the signer (active account)
    const signer = await provider.getSigner();

    // Initialize the contract instance
    const transactionContract = new ethers.Contract(
      CONTRACT_ADDRESS, // replace with your actual contract address
      CONTRACT_ABI, // replace with your actual contract ABI
      signer
    );

    console.log({ provider, signer, transactionContract });
    // return transactionContract; // Optional: Return contract instance if you need it outside the function
  } catch (error) {
    console.error("Error creating Ethereum contract:", error);
  }
};

export const TransactionsProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState(null);
  const [formData, setFormData] = useState({
    addressTo: "",
    amount: "",
    keyword: "",
    message: "",
  });
  console.log(formData);
  const handleChange = (e, name) => {
    const { value } = e.target;
    console.log(name, value);
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const checkIfWalletIsConnected = async () => {
    try {
      const accounts = await ethereum.request({ method: "eth_accounts" });
      if (accounts.length > 0) {
        setCurrentAccount(accounts[0]);
      } else {
        console.log("No accounts found");
      }
    } catch (error) {
      console.log(error);
      throw new Error("no ethereum object");
    }
  };
  const connectWallet = async () => {
    try {
      if (!ethereum) return alert("Please install metamask");
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      setCurrentAccount(accounts[0]);
      console.log(accounts);
    } catch (error) {
      console.log(error);
      throw new Error("no ethereum object");
    }
  };
  const sendTransaction = async () => {
    try {
      // const { addressTo, amount, keyword, message } = formData;
      createEthereumContract();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);
  return (
    <TransactionContext.Provider
      value={{
        connectWallet,
        currentAccount,
        checkIfWalletIsConnected,
        sendTransaction,
        formData,
        handleChange,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
