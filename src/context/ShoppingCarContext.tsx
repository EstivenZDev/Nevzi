import { createContext, ReactNode, useState } from "react";

// Tipo para el contexto
export type ShoppingCartContextType = {
    productsList: string[];
    total: number;
    setProductsList: (productsList: string[]) => void;
    setTotal: (total: number) => void;
};

// Tipo para las props del Provider
type ShoppingCartProviderProps = {
    children: ReactNode;
};

// Crear el contexto
export const ShoppingCartContext = createContext<ShoppingCartContextType | undefined>(undefined);

// Provider component
export const ShoppingCartProvider = ({ children }: ShoppingCartProviderProps) => {
    const [productsList, setProductsList] = useState<string[]>([]);
    const [total, setTotal] = useState<number>(0);

    return (
        <ShoppingCartContext.Provider 
            value={{
                productsList,
                setProductsList,
                total,
                setTotal
            }}
        >
            {children}
        </ShoppingCartContext.Provider>
    );
};