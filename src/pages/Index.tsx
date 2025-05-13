
import { useState, useEffect } from "react";
import { ResizableHandle, ResizablePanelGroup, ResizablePanel } from "@/components/ui/resizable";
import EpicHeader from "@/components/epic/EpicHeader";
import PatientSidebar from "@/components/epic/PatientSidebar";
import ExamSection from "@/components/epic/ExamSection";
import ProgressNotes from "@/components/epic/ProgressNotes";
import { useScenario } from "@/ScenarioContext";

const Index = () => {
  const [examType, setExamType] = useState<string>("Clinic Visit");
  const { loadScenario, isScenarioActive, currentScenario } = useScenario();

  const openScribe = () => {
    window.open(
      'https://scribe.athelas.com',
      'Athelas Scribe',
      'width=1280,height=720,menubar=no,toolbar=no,location=no,status=no'
    );
  };

  // Parse URL parameters on component mount
  useEffect(() => {
    console.log("Parsing URL parameters");
    const searchParams = new URLSearchParams(window.location.search);
    const scenarioParam = searchParams.get('scenario');
    const examTypeParam = searchParams.get('examType');
    
    console.log(`URL parameters - scenario: ${scenarioParam || 'none'}, examType: ${examTypeParam || 'none'}`);
    
    // If scenario parameter is present, load the scenario
    if (scenarioParam) {
      console.log(`Attempting to load scenario: ${scenarioParam}`);
      loadScenario(scenarioParam).then(success => {
        if (success && currentScenario) {
          console.log(`Successfully loaded scenario: ${currentScenario.name}`);
        } else {
          console.error(`Failed to load scenario: ${scenarioParam}`);
        }
      });
    }
    
    // If examType parameter is present, set the exam type
    if (examTypeParam) {
      const validExamTypes = ["Clinic Visit", "Eye Exam", "Flowsheets", "Wrap Up", "Procedure Note"];
      if (validExamTypes.includes(examTypeParam)) {
        console.log(`Setting exam type to: ${examTypeParam}`);
        setExamType(examTypeParam);
      } else {
        console.warn(`Invalid exam type in URL: ${examTypeParam}. Using default.`);
      }
    }
  }, [loadScenario]);

  // Update exam type when scenario changes
  useEffect(() => {
    if (currentScenario && currentScenario.examType) {
      setExamType(currentScenario.examType);
    }
  }, [currentScenario]);

  return (
    <div className="h-screen flex flex-col">
      <EpicHeader openScribe={openScribe} />
      
      <div className="flex flex-1">
        <PatientSidebar />
        <div className="epic-vertical-separator" />
        
        <ResizablePanelGroup direction="horizontal" className="flex-1">
          <ResizablePanel defaultSize={65} minSize={0}>
            <ExamSection examType={examType} setExamType={setExamType} />
          </ResizablePanel>
          <ResizableHandle className="w-1 bg-gray-200 hover:bg-gray-300 transition-colors" />
          <ResizablePanel defaultSize={35}>
            <ProgressNotes />
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  );
};

export default Index;
