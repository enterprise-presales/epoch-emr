import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

// Define the shape of patient data
interface PatientData {
  patientName: string;
  patientDOB: string;
  visitDate: string;
  providerName: string;
  interpreterNeeded: string;
  insurance: string;
  preferredLab: string;
  previousExam: string;
  nextVisit: string;
}

// Define the shape of clinical data
interface ClinicalData {
  historyOfPresentIllness: string;
  physicalExamination: string;
  results: string;
  assessmentPlan: string;
  attestation: string;
  flowsheet?: any;
  eyeExam?: any;
  orders_list?: any;
  problems_list?: any;
  education_instructions?: string;
  procedure_note?: string;
  med_recon?: string;
}

// Define the shape of a scenario
interface Scenario {
  id: string;
  name: string;
  examType: string;
  patientData: PatientData;
  clinicalData: ClinicalData;
}

// Define the shape of the context
interface ScenarioContextType {
  currentScenario: Scenario | null;
  isScenarioActive: boolean;
  loadScenario: (scenarioId: string) => Promise<boolean>;
  clearScenario: () => void;
}

// Create the context
const ScenarioContext = createContext<ScenarioContextType | undefined>(undefined);

// Provider component
export const ScenarioProvider = ({ children }: { children: ReactNode }) => {
  const [scenarios, setScenarios] = useState<Scenario[]>([]);
  const [currentScenario, setCurrentScenario] = useState<Scenario | null>(null);
  const [isScenarioActive, setIsScenarioActive] = useState<boolean>(false);

  // Function to load scenarios from localStorage or fallback to JSON file
  const loadScenarios = async () => {
    try {
      // First check if we have custom scenarios in localStorage
      const customScenarios = localStorage.getItem('custom-scenarios');
      if (customScenarios) {
        try {
          const data = JSON.parse(customScenarios);
          console.log('Loaded scenarios from localStorage');
          setScenarios(data.scenarios || []);
          return data.scenarios || [];
        } catch (parseError) {
          console.error('Error parsing localStorage scenarios:', parseError);
        }
      }
      
      // Fallback to the static file
      console.log('No localStorage scenarios, loading from file');
      const response = await fetch('/scenarios.json');
      if (!response.ok) {
        console.error('Failed to load scenarios:', response.status);
        return [];
      }
      const data = await response.json();
      setScenarios(data.scenarios || []);
      return data.scenarios || [];
    } catch (error) {
      console.error('Error loading scenarios:', error);
      return [];
    }
  };

  // Load scenarios on initial mount
  useEffect(() => {
    loadScenarios();
  }, []);

  // Add a storage event listener to reload scenarios when localStorage changes
  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === 'custom-scenarios') {
        console.log('Detected localStorage change, reloading scenarios');
        loadScenarios().then(newScenarios => {
          // If we have a current scenario, refresh it with the latest data
          if (currentScenario) {
            const updatedScenario = newScenarios.find(s => s.id === currentScenario.id);
            if (updatedScenario) {
              console.log(`Refreshing current scenario: ${updatedScenario.name}`);
              setCurrentScenario(updatedScenario);
            }
          }
        });
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [currentScenario]);

  // Function to load a specific scenario by ID
  const loadScenario = async (scenarioId: string): Promise<boolean> => {
    console.log(`Attempting to load scenario with ID: ${scenarioId}`);
    
    // Always reload scenarios from localStorage to ensure we have the latest data
    const freshScenarios = await loadScenarios();
    
    if (freshScenarios.length > 0) {
      console.log(`Looking for scenario ${scenarioId} in ${freshScenarios.length} loaded scenarios`);
      // Find the scenario in the loaded scenarios
      const scenario = freshScenarios.find((s: Scenario) => s.id === scenarioId);
      if (scenario) {
        console.log(`Found scenario: ${scenario.name}`);
        setCurrentScenario(scenario);
        setIsScenarioActive(true);
        return true;
      }
    }
    
    console.error(`Scenario with ID "${scenarioId}" not found`);
    return false;
  };

  // Function to clear the current scenario
  const clearScenario = () => {
    setCurrentScenario(null);
    setIsScenarioActive(false);
  };

  return (
    <ScenarioContext.Provider value={{ currentScenario, isScenarioActive, loadScenario, clearScenario }}>
      {children}
    </ScenarioContext.Provider>
  );
};

// Hook for easy access
export const useScenario = (): ScenarioContextType => {
  const context = useContext(ScenarioContext);
  if (!context) {
    throw new Error("useScenario must be used within a ScenarioProvider");
  }
  return context;
};