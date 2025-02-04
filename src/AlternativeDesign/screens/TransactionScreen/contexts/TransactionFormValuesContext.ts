import { createContext, useContext } from "react";
import { TransactionFormValues } from "../types/TransactionFormValues";

export interface TransactionFormValuesContextType {
    transactionFormValues: TransactionFormValues;
    setTransactionFormValues: (field: keyof TransactionFormValues, value: string) => void;
    handleSubmit: () => void;
}

export const TransactionFormValuesContext = createContext<TransactionFormValuesContextType | undefined>(undefined);

export const useTransactionFormValueContext = () => {
    const context = useContext(TransactionFormValuesContext);
    if (!context) {
        throw new Error("useTransactionFormValueContext must be used within a TransactionFormValuesContextProvider");
    }
    return context;
};