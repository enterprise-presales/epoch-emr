import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the shape of your context
interface FlowsheetContextType {
  flowsheet: string;
  setFlowsheet: (value: string) => void;
  ordersList: string;
  setOrdersList: (orders: string) => void;
  problemsList: string;
  setProblemsList: (problems: string) => void;
  educationInstructions: string;
  setEducationInstructions: (education: string) => void;
  procedureNote: string;
  setProcedureNote: (medrecon: string) => void;
  medRecon: string;
  setMedRecon: (medrecon: string) => void;
}

// Create the context
const FlowsheetContext = createContext<FlowsheetContextType | undefined>(undefined);

// Provider component
export const FlowsheetProvider = ({ children }: { children: ReactNode }) => {
  const [flowsheet, setFlowsheet] = useState<string>("");
  const [ordersList, setOrdersList] = useState<string>("");
  const [problemsList, setProblemsList] = useState<string>("");
  const [educationInstructions, setEducationInstructions] = useState<string>("");
  const [procedureNote, setProcedureNote] = useState<string>("");
  const [medRecon, setMedRecon] = useState<string>("");

  return (
    <FlowsheetContext.Provider value={{ flowsheet, setFlowsheet, ordersList, setOrdersList, problemsList, setProblemsList, educationInstructions, setEducationInstructions, procedureNote, setProcedureNote, medRecon, setMedRecon}}>
      {children}
    </FlowsheetContext.Provider>
  );
};

// Hook for easy access
export const useFlowsheet = (): FlowsheetContextType => {
  const context = useContext(FlowsheetContext);
  if (!context) {
    throw new Error("useFlowsheet must be used within a FlowsheetProvider");
  }
  return context;
};
