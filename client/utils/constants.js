import Transactions from '../utils/Transactions.json';

// The CONTRACT_ADDRESS is set in the .env file and accessed via Vite's import.meta.env
export const CONTRACT_ADDRESS = import.meta.env.VITE_CONTRACT_ADDRESS;
export const CONTRACT_ABI = Transactions.abi;
