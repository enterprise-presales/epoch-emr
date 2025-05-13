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

  // Load scenarios from Netlify Function or fallback to JSON file
  useEffect(() => {
    const loadScenarios = async () => {
      try {
        // First try to load from the Netlify Function
        const functionResponse = await fetch('/.netlify/functions/scenarios');
        if (functionResponse.ok) {
          const data = await functionResponse.json();
          console.log('Loaded scenarios from Netlify Function');
          setScenarios(data.scenarios || []);
          return;
        }
        
        // Fallback to the static file
        console.log('Netlify Function failed, falling back to static file');
        const response = await fetch('/scenarios.json');
        if (!response.ok) {
          console.error('Failed to load scenarios:', response.status);
          return;
        }
        const data = await response.json();
        setScenarios(data.scenarios || []);
      } catch (error) {
        console.error('Error loading scenarios:', error);
      }
    };

    loadScenarios();
  }, []);

  // Function to load a specific scenario by ID
  const loadScenario = async (scenarioId: string): Promise<boolean> => {
    console.log(`Attempting to load scenario with ID: ${scenarioId}`);
    
    // If scenarios haven't been loaded yet, try to load them
    if (scenarios.length === 0) {
      try {
        console.log('No scenarios loaded yet, fetching from server');
        
        // First try to load from the Netlify Function
        let data;
        try {
          const functionResponse = await fetch('/.netlify/functions/scenarios');
          if (functionResponse.ok) {
            data = await functionResponse.json();
            console.log('Loaded scenarios from Netlify Function');
          } else {
            // Fallback to the static file
            console.log('Netlify Function failed, falling back to static file');
            const response = await fetch('/scenarios.json');
            if (!response.ok) {
              console.error('Failed to load scenarios:', response.status);
              return false;
            }
            data = await response.json();
          }
        } catch (fetchError) {
          console.error('Error fetching scenarios:', fetchError);
          // Fallback to the static file
          console.log('Fetch error, falling back to static file');
          const response = await fetch('/scenarios.json');
          if (!response.ok) {
            console.error('Failed to load scenarios:', response.status);
            return false;
          }
          data = await response.json();
        }
        
        if (!data.scenarios || !Array.isArray(data.scenarios)) {
          console.error('Invalid scenarios data format:', data);
          return false;
        }
        
        console.log(`Loaded ${data.scenarios.length} scenarios from server`);
        setScenarios(data.scenarios);
        
        // Find the requested scenario in the newly loaded scenarios
        const scenario = data.scenarios.find((s: Scenario) => s.id === scenarioId);
        if (scenario) {
          console.log(`Found scenario: ${scenario.name}`);
          setCurrentScenario(scenario);
          setIsScenarioActive(true);
          return true;
        }
      } catch (error) {
        console.error('Error loading scenarios:', error);
        return false;
      }
    } else {
      console.log(`Looking for scenario ${scenarioId} in ${scenarios.length} loaded scenarios`);
      // Find the scenario in the already loaded scenarios
      const scenario = scenarios.find(s => s.id === scenarioId);
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