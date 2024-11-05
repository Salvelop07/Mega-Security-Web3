import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { TransactionsProvider } from "../context/TransactionsContext";
createRoot(document.getElementById("root")).render(
  <TransactionsProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </TransactionsProvider>
);
