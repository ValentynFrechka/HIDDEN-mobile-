import { createContext, ReactNode, useContext, useState } from "react";

interface TabbedViewContextType {
    view: string;
    setView: (view: string) => void;
}

const contextRegistry: { [key: string]: React.Context<TabbedViewContextType | undefined> } = {};

export const ensureContext = (contextName: string) => {
    if (!contextRegistry[contextName]) {
        contextRegistry[contextName] = createContext<TabbedViewContextType | undefined>(undefined);
    }
    return contextRegistry[contextName];
};

export const useTabbedViewContext = (contextName: string) => {
    const context = useContext(ensureContext(contextName));
    if (!context) {
        throw new Error(`useTabbedViewContext must be used within a TabbedView component for "${contextName}"`);
    }
    return context;
};