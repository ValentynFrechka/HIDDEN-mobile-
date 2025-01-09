import { createContext, useContext } from "react";
import { ETransactionView } from "../enum/ETransactionView";

export interface TransactionViewContextType {
    transactionView: ETransactionView;
    setTransactionView: (nextView: ETransactionView) => void;
}

export const TransactionViewContext = createContext<TransactionViewContextType | undefined>(undefined);

export const useTransactionViewContext = () => {
    const context = useContext(TransactionViewContext);
    if (!context) {
        throw new Error("useTransactionFormValueContext must be used within a TransactionFormValuesContextProvider");
    }
    return context;
}