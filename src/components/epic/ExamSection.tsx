import { ResizablePanel, ResizablePanelGroup, ResizableHandle } from "@/components/ui/resizable";
import { LayoutGrid, FileText, BarChart, Eye, Circle, MoreHorizontal, Glasses, CrosshairIcon, TestTubes, CheckCircle, ChevronDown, File, Settings, Search, RotateCcw, RotateCw, HelpCircle, PlusCircle } from "lucide-react";
import { useState, useCallback, useEffect } from "react";
import ConditionList from "./ConditionList";
import React from "react";
import { useFlowsheet } from "@/AutoFillContexts";
import WrapUp from "../ui/wrapup";
import ProcedureNote from "../ui/procedurenote";



const ExamSection = () => {

  const { flowsheet: flowsheetContext } = useFlowsheet();
  let parsedFlowsheet: Record<string, any> = {};
  
  try {
    if (flowsheetContext && flowsheetContext.trim() !== "") {
      parsedFlowsheet = JSON.parse(flowsheetContext);
    }
  } catch (err) {
    console.warn("Invalid JSON in flowsheet context:", err);
  }
  
  const [conditionsData, setConditionsData] = useState([
    { name: 'Clear incision', buttons: [] },
    { name: 'Debris in tear film', buttons: [] },
    { name: 'Degeneration', buttons: ['Arcus', 'Pterygium'] },
    { name: 'Dendrite', buttons: [] },
    { name: 'Descemet\'s folds', buttons: ['1+', '2+', '3+', '4+'] },
    { name: 'Dystrophy', buttons: ['ABMD', 'Fuchs'] },
    { name: 'Edema', buttons: ['1+', '2+', '3+', '4+'] },
    { name: 'Epithelial defect', buttons: [] },
    { name: 'Guttata', buttons: ['1+', '2+', '3+', '4+'] },
    { name: 'Infiltrates', buttons: ['Sterile', 'Subepithelial'] },
    { name: 'Keratic precipitates', buttons: ['1+', '2+', '3+', '4+'] },
    { name: 'Keratitis', buttons: [] },
    { name: 'Krukenberg\'s spindle', buttons: [] },
    { name: 'Neovascularization', buttons: ['Central', 'Periph'] },
    { name: 'Keratoplasty', buttons: ['LKP', 'PKP'] },
    { name: 'PEE', buttons: ['1+', '2+', '3+', '4+'] },
    { name: 'Scar', buttons: ['LASIK'] },
    { name: 'Striae', buttons: ['1+', '2+', '3+', '4+'] },
    { name: 'Trauma', buttons: ['Laceration', 'Foreign'] }
  ]);

  const flowsheetSections = [
    {
      title: "vitals",
      rows: [
        "temperatureF",
        "heartRateBpm",
        "respiratoryRate",
        "bloodPressure"
      ]
    },
    {
      title: "physicalDevelopment",
      rows: ["running", "climbing", "appetite"]
    },
    {
      title: "languageDevelopment",
      rows: ["saysMultipleWords", "combinesTwoToThreeWords", "followsTwoStepInstructions"]
    },
    {
      title: "socialDevelopment",
      rows: ["playsNearOtherChildren", "learningToShare"]
    },
    {
      title: "immunizations",
      rows: ["immunizationsGivenToday"]
    },
    {
      title: "vision",
      rows: [
        "visionScreening"
      ]
    },
    {
      title: "oralHealth",
      rows: ["brushingFrequency", "visibleCavities"]
    },
    {
      title: "familyHistory",
      rows: ["asthma", "seasonalAllergies", "diabetes", "cancer"]
    }
  ];

  const [selectedSections, setSelectedSections] = useState(
    flowsheetSections.map((section) => section.title)
  );

  const toggleSection = (title) => {
    setSelectedSections((prev) =>
      prev.includes(title)
        ? prev.filter((t) => t !== title)
        : [...prev, title]
    );
  };

  const showAll = () => {
    setSelectedSections(flowsheetSections.map((section) => section.title));
  };

  const hideAll = () => {
    setSelectedSections([]);
  };
  
  

  const [examType, setExamType] = useState<string>("Clinic Visit");
  const [checkedConditions, setCheckedConditions] = useState<string[]>([]);

  const handleCheckboxChange = useCallback((conditionName: string) => {
    setCheckedConditions((prev) => {
      if (prev.includes(conditionName)) {
        return prev.filter((name) => name !== conditionName);
      } else {
        return [...prev, conditionName];
      }
    });
  }, []);

  return (
    <div className="flex-1 min-w-0">
      <div className="epic-exam-section h-full flex flex-col">
        <div className="flex items-center gap-0.5 px-1 py-1 border-b border-gray-200 bg-[#003059]">
          <button className="flex items-center gap-1.5 px-2 py-1 bg-[#005791] hover:bg-[#0068a8]" style={{ borderTop: '2px solid #FFDA63' }}>
            <div className="bg-[#FFDA63] rounded p-0.5">
              <LayoutGrid className="h-3 w-3 text-[#C68600]" />
            </div>
            <span className="text-xs font-medium text-white">Zeiss Forum</span>
          </button>
          
          <button className="flex items-center gap-1.5 px-2 py-1 bg-[#005791] hover:bg-[#0068a8]" style={{ borderTop: '2px solid #F06292' }}>
            <div className="bg-[#F06292] rounded p-0.5">
              <FileText className="h-3 w-3 text-white" />
            </div>
            <span className="text-xs font-medium text-white">Plan</span>
          </button>
          
          <button className="flex items-center gap-1.5 px-2 py-1 bg-[#005791] hover:bg-[#0068a8]" style={{ borderTop: '2px solid #87CEEB' }}>
            <div className="bg-[#87CEEB] rounded p-0.5">
              <BarChart className="h-3 w-3 text-white" />
            </div>
            <span className="text-xs font-medium text-white">Chart Review</span>
          </button>
          
          <button className="flex items-center gap-1.5 px-2 py-1 bg-[#E0E0E0] hover:bg-[#EEEEEE]" style={{ borderTop: '2px solid #90EE90' }}>
            <div className="bg-[#90EE90] rounded p-0.5">
              <Eye className="h-3 w-3 text-white" />
            </div>
            <span className="text-xs font-medium text-[#212121]">Exam</span>
          </button>
          
          <button className="flex items-center gap-1.5 px-2 py-1 bg-[#005791] border border-[#90CAF9] hover:bg-[#0068a8]" style={{ borderTop: '2px solid pink' }} onClick={() => window.open('https://scribe.athelas.com', '_blank', 'noopener,noreferrer,width=1280,height=720,location=no')}>
            <div className="bg-[#003059] rounded p-0.5">
              <Circle className="h-3 w-3 text-white" strokeWidth={3} />
            </div>
            <span className="text-xs font-medium text-white">Ambient Scribe</span>
          </button>
        </div>

        <div className="bg-[#e6eaee] text-[#00426c] rounded-md p-1 font-bold flex items-center justify-between" style={{ border: '1px solid #00426c', borderStyle: 'inset', marginTop: '0px', marginLeft: '0px', marginBottom: '8px', textAlign: 'left' }}>
          <div>02/18/25 visit with Dr. Michael Commons - For Return Visit / Follow Up</div>
          <div className="flex items-center">
            <select
              value={examType}
              onChange={(e) => setExamType(e.target.value)}
              className="ml-2 text-sm font-normal bg-white border border-gray-300 rounded px-2 py-0.5"
            >
              <option value="Clinic Visit">Clinic Visit</option>
              <option value="Eye Exam">Eye Exam</option>
              <option value="Flowsheets">Flowsheets</option>
              <option value="Wrap Up">Wrap Up</option>
              <option value="Procedure Note">Procedure Note</option>
            </select>
          </div>
        </div>

        <div className="w-full">
          {examType === "Eye Exam" ? (
            <img
              src="/lovable-uploads/eye_exam.png"
              alt="Eye Exam"
              className="h-12"
            />
          ) : examType === "Clinic Visit" ? (
            <img
              src="/lovable-uploads/clinic_visit.png"
              alt="Clinic Visit"
              className="h-12"
            />
          ) : examType === "Flowsheets" ? (
            <img
              src="/lovable-uploads/flowsheets.png"
              alt="Flowsheets"
              className="h-12"
            />
          ) : examType === "Wrap Up" ? (
            <img
            src="/lovable-uploads/wrapup.png"
            alt="Wrapup"
            className="h-12"
          />
          ) : (
            <img
            src="/lovable-uploads/procedurenote.png"
            alt="Wrapup"
            className="h-12"
          />
          )
        
        }
        </div>

        <div className="flex border-b border-gray-200">
          {examType === "Clinic Visit" && (
            <>
              <button className="inline-flex items-center px-2 py-0.5 text-sm border-r border-gray-200 relative before:absolute before:top-0 before:left-0 before:right-0 before:h-0.5 before:bg-blue-500">
                <span className="text-blue-600">Main Menu</span>
              </button>
            </>
          )}
          {examType === "Eye Exam" && (
            <>
              <button className="inline-flex items-center px-2 py-0.5 text-sm border-r border-gray-200 relative before:absolute before:top-0 before:left-0 before:right-0 before:h-0.5 before:bg-blue-500">
                <span className="text-blue-600">Main Menu</span>
              </button>
              <button className="inline-flex items-center px-2 py-0.5 text-sm border-r border-gray-200 gap-1 text-gray-600">
                <Glasses className="h-4 w-4" />
                <span>Contact Lens</span>
              </button>
              <button className="inline-flex items-center px-2 py-0.5 text-sm border-r border-gray-200 gap-1 text-gray-600">
                <Eye className="h-4 w-4" />
                <span>Strabismus</span>
              </button>
              <button className="inline-flex items-center px-2 py-0.5 text-sm gap-1 text-gray-600">
                <TestTubes className="h-4 w-4" />
                <span>ROP</span>
              </button>
            </>
          )}
          {examType === "Flowsheets" && (
            <>
              <button className="inline-flex items-center px-2 py-0.5 text-sm border-r border-gray-200 relative before:absolute before:top-0 before:left-0 before:right-0 before:h-0.5 before:bg-blue-500">
                <span className="text-blue-600">Vitals (ICU)</span>
              </button>
              <button className="inline-flex items-center px-2 py-0.5 text-sm border-r border-gray-200 gap-1 text-gray-600">
                <span>Vent Doc</span>
              </button>
              <button className="inline-flex items-center px-2 py-0.5 text-sm border-r border-gray-200 gap-1 text-gray-600">
                <span>Vitals</span>
              </button>
              <button className="inline-flex items-center px-2 py-0.5 text-sm gap-1 text-gray-600">
                <span>Lines/Drains/Airways</span>
              </button>
            </>
          )}
        </div>
        
        <ResizablePanelGroup direction="horizontal" className="flex flex-1">
          <ResizablePanel defaultSize={65} minSize={30}>
            <div className="p-2">
              <div className="space-y-3 text-xs">
              
                 {(examType === "Clinic Visit" || examType === "Eye Exam") && (
                    <div className="exam-grid items-start">
                      <div className="flex items-center gap-1 text-gray-600 justify-start">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-xs">Exam Normal</span>
                        <ChevronDown className="h-4 w-4" />
                        <div className="flex items-center gap-1 text-gray-400 ml-auto">
                          <File className="h-3 w-3" />
                          <span className="text-xs">Copy Previous</span>
                        </div>
                      </div>
                      <div className="exam-column"></div>
                      <div className="exam-column"></div>
                    </div>
                 )}

                    
               

                

                {examType === "Eye Exam" ? (
                  <>
                    <div className="exam-section">
                      <h3 className="exam-header">Slit Lamp</h3>
                      <div className="flex justify-between">
                        <span>Right</span>
                        <span>Left</span>
                      </div>
                      <div className="space-y-0.5">
                        {[
                          { label: 'L/L', value: 'Normal', id: 'slitlamp-ll' },
                          { label: 'C/S', value: 'White and quiet', id: 'slitlamp-cs' },
                          { label: 'Cornea', value: 'Edema, Corneal dystrophy', id: 'slitlamp-cornea' },
                          { label: 'AC', value: 'Deep and quiet', id: 'slitlamp-ac' },
                          { label: 'Iris', value: 'Round and reactive', id: 'slitlamp-iris' },
                          { label: 'Lens', value: '+1 Nuclear sclerosis', id: 'slitlamp-lens' },
                          { label: 'Vitreous', value: 'Normal', id: 'slitlamp-vitreous' },
                        ].map((item) => (
                          <div key={item.label} className="exam-grid">
                            <div className="flex gap-1 items-center">
                              <span className="exam-label">{item.label}</span>
                              <input type="text" id={`${item.id}-right`} defaultValue={item.value} className="exam-field flex-1" />
                            </div>
                            <div className="flex justify-center">
                              <input
                                type="checkbox"
                                id={`${item.id}-checkbox`}
                                className="h-3 w-3"
                                onChange={(e) => {
                                  const rightValue = (document.getElementById(`${item.id}-right`) as HTMLInputElement).value;
                                  const leftInput = document.getElementById(`${item.id}-left`) as HTMLInputElement;
                                  if (e.target.checked) {
                                    leftInput.value = rightValue;
                                  } else {
                                    leftInput.value = '';
                                  }
                                }}
                              />
                            </div>
                            <div>
                              <input type="text" id={`${item.id}-left`} defaultValue={item.value} className="exam-field w-full" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <hr className="w-full" />
                    <div className="exam-section">
                      <h3 className="exam-header">Fundus</h3>
                      <div className="flex justify-between">
                        <span>Right</span>
                        <span>Left</span>
                      </div>
                      <div className="space-y-0.5">
                        {[
                          { label: 'Disc', value: 'Normal', id: 'fundus-disc' },
                          { label: 'C/D Ratio', value: '0.3', id: 'fundus-cdratio' },
                          { label: 'Macula', value: 'Normal', id: 'fundus-macula' },
                          { label: 'Vessels', value: 'Normal', id: 'fundus-vessels' },
                          { label: 'Periph', value: 'Normal', id: 'fundus-periph' },
                        ].map((item) => (
                          <div key={item.label} className="exam-grid">
                            <div className="flex gap-1 items-center">
                              <span className="exam-label">{item.label}</span>
                              <input type="text" id={`${item.id}-right`} defaultValue={item.value} className="exam-field flex-1" />
                            </div>
                            <div className="flex justify-center">
                              <input
                                type="checkbox"
                                id={`${item.id}-checkbox`}
                                className="h-3 w-3"
                                onChange={(e) => {
                                  const rightValue = (document.getElementById(`${item.id}-right`) as HTMLInputElement).value;
                                  const leftInput = document.getElementById(`${item.id}-left`) as HTMLInputElement;
                                  if (e.target.checked) {
                                    leftInput.value = rightValue;
                                  } else {
                                    leftInput.value = '';
                                  }
                                }}
                              />
                            </div>
                            <div>
                              <input type="text" id={`${item.id}-left`} defaultValue={item.value} className="exam-field w-full" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <hr className="w-full" />
                  </>
                ) : examType === "Clinic Visit" ? (
                  // Clinic Visit View based on image
                  <div className="grid grid-cols-2 gap-4">
                    {/* Left Column */}
                    <div className="space-y-4">
                      {/* Current Medical Condition */}
                      <div className="border rounded">
                        <div className="bg-gray-200 p-1 font-semibold flex justify-between items-center">
                          <span>Current medical condition</span>
                          <button className="text-blue-600 text-xs">+ Add</button>
                        </div>
                        <div className="p-2">
                          <div className="grid grid-cols-3 gap-1 text-xs mb-1">
                            <span>DISEASE/CONDITION</span>
                            <span>START DATE</span>
                            <span>COMMENT</span>
                          </div>
                          <div className="grid grid-cols-3 gap-1">
                            <input type="text" className="exam-field w-full" />
                            <input type="date" className="exam-field w-full" />
                            <input type="text" className="exam-field w-full" />
                          </div>
                          {/* Add more rows as needed */}
                        </div>
                      </div>

                      {/* Past Medical Condition */}
                      <div className="border rounded">
                        <div className="bg-gray-200 p-1 font-semibold flex justify-between items-center">
                          <span>Past medical condition</span>
                          <button className="text-blue-600 text-xs">+ Add</button>
                        </div>
                        <div className="p-2">
                          <div className="grid grid-cols-4 gap-1 text-xs mb-1">
                            <span>DISEASE/CONDITION</span>
                            <span>START DATE</span>
                            <span>END DATE</span>
                            <span>COMMENT</span>
                          </div>
                          <div className="grid grid-cols-4 gap-1">
                            <input type="text" className="exam-field w-full" />
                            <input type="date" className="exam-field w-full" />
                            <input type="date" className="exam-field w-full" />
                            <input type="text" className="exam-field w-full" />
                          </div>
                          {/* Add more rows as needed */}
                        </div>
                      </div>

                      {/* Tobacco Use */}
                      <div className="border rounded">
                        <div className="bg-gray-200 p-1 font-semibold">Tobacco use</div>
                        <div className="p-2 space-y-2">
                          <div className="flex items-center gap-4">
                            <span className="text-xs">SMOKE CIGARETTES?</span>
                            <label className="flex items-center gap-1 text-xs"><input type="checkbox" /> Yes</label>
                            <label className="flex items-center gap-1 text-xs"><input type="checkbox" /> No</label>
                            <label className="flex items-center gap-1 text-xs"><input type="checkbox" /> Never</label>
                          </div>
                          <div className="grid grid-cols-[auto_1fr_1fr] gap-x-2 gap-y-1 items-center text-xs">
                            <span>CURRENT</span>
                            <div className="flex gap-1"><label>Packs/day:</label><input type="text" className="exam-field flex-1" /></div>
                            <div className="flex gap-1"><label># of Years:</label><input type="text" className="exam-field flex-1" /></div>
                            <span>PAST</span>
                            <div className="flex gap-1"><label>Quit Date:</label><input type="date" className="exam-field flex-1" /></div>
                            <div className="flex gap-1"><label>Packs/day:</label><input type="text" className="exam-field flex-1" /></div>
                            <span></span> {/* Empty cell for alignment */}
                            <span></span> {/* Empty cell for alignment */}
                            <div className="flex gap-1"><label># of Years:</label><input type="text" className="exam-field flex-1" /></div>
                          </div>
                        </div>
                      </div>

                      {/* Alcohol Use */}
                      <div className="border rounded">
                        <div className="bg-gray-200 p-1 font-semibold">Alcohol use</div>
                        <div className="p-2 space-y-2">
                          <div className="flex items-center gap-4">
                            <span className="text-xs">DRINK ALCOHOL?</span>
                            <label className="flex items-center gap-1 text-xs"><input type="checkbox" /> Yes</label>
                            <label className="flex items-center gap-1 text-xs"><input type="checkbox" /> No</label>
                          </div>
                          <div className="flex items-center gap-4">
                             <span className="text-xs">ALCOHOL TYPE</span>
                             <label className="flex items-center gap-1 text-xs"><input type="checkbox" /> Beer</label>
                             <label className="flex items-center gap-1 text-xs"><input type="checkbox" /> Wine</label>
                             <label className="flex items-center gap-1 text-xs"><input type="checkbox" /> Liquor</label>
                             <div className="flex gap-1 items-center ml-auto"><label className="text-xs">Drinks/week:</label><input type="text" className="exam-field w-16" /></div>
                          </div>
                        </div>
                      </div>

                      {/* Immunization */}
                      <div className="border rounded">
                        <div className="bg-gray-200 p-1 font-semibold flex justify-between items-center">
                          <span>Immunization</span>
                          <button className="text-blue-600 text-xs">+ Add</button>
                        </div>
                        <div className="p-2">
                          <div className="grid grid-cols-4 gap-1 text-xs mb-1">
                            <span>VACCINE</span>
                            <span>DATE GIVEN</span>
                            <span>LOCATION/FACILITY</span>
                            <span>NEXT DOSE DUE</span>
                          </div>
                          <div className="grid grid-cols-4 gap-1">
                            <input type="text" className="exam-field w-full" />
                            <input type="date" className="exam-field w-full" />
                            <input type="text" className="exam-field w-full" />
                            <input type="date" className="exam-field w-full" />
                          </div>
                           {/* Add more rows as needed */}
                        </div>
                      </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-4">
                      {/* Surgeries */}
                      <div className="border rounded">
                        <div className="bg-gray-200 p-1 font-semibold flex justify-between items-center">
                          <span>Surgeries</span>
                          <button className="text-blue-600 text-xs">+ Add</button>
                        </div>
                        <div className="p-2">
                          <div className="grid grid-cols-3 gap-1 text-xs mb-1">
                            <span>TYPE (specify left/right)</span>
                            <span>DATE</span>
                            <span>LOCATION/FACILITY</span>
                          </div>
                          <div className="grid grid-cols-3 gap-1">
                            <input type="text" className="exam-field w-full" />
                            <input type="date" className="exam-field w-full" />
                            <input type="text" className="exam-field w-full" />
                          </div>
                           {/* Add more rows as needed */}
                        </div>
                      </div>

                      {/* Family History */}
                      <div className="border rounded">
                        <div className="bg-gray-200 p-1 font-semibold flex justify-between items-center">
                          <span>Family history</span>
                          <button className="text-blue-600 text-xs">+ Add</button>
                        </div>
                        <div className="p-2 space-y-2">
                           <div className="flex items-center gap-4">
                             <span className="text-xs">PATIENT ADOPTED?</span>
                             <label className="flex items-center gap-1 text-xs"><input type="checkbox" /> Yes</label>
                             <label className="flex items-center gap-1 text-xs"><input type="checkbox" /> No</label>
                           </div>
                           <div className="grid grid-cols-[auto_1fr_1fr] gap-x-4 gap-y-1 text-xs">
                             <span>RELATIONSHIP</span>
                             <span></span> {/* Header Spacer */}
                             <span>MEDICAL HISTORY</span>

                             <span>Mother</span>
                             <div className="flex gap-2"><label className="flex items-center gap-1"><input type="checkbox" /> Biological</label> <label className="flex items-center gap-1"><input type="checkbox" /> Adoptive</label></div>
                             <input type="text" className="exam-field w-full" />

                             <span>Father</span>
                             <div className="flex gap-2"><label className="flex items-center gap-1"><input type="checkbox" /> Biological</label> <label className="flex items-center gap-1"><input type="checkbox" /> Adoptive</label></div>
                             <input type="text" className="exam-field w-full" />

                             <span>Brother</span>
                             <div className="flex gap-2"><label className="flex items-center gap-1"><input type="checkbox" /> Biological</label> <label className="flex items-center gap-1"><input type="checkbox" /> Adoptive</label></div>
                             <input type="text" className="exam-field w-full" />

                             <span>Sister</span>
                             <div className="flex gap-2"><label className="flex items-center gap-1"><input type="checkbox" /> Biological</label> <label className="flex items-center gap-1"><input type="checkbox" /> Adoptive</label></div>
                             <input type="text" className="exam-field w-full" />
                           </div>
                        </div>
                      </div>

                      {/* Medication */}
                      <div className="border rounded">
                        <div className="bg-gray-200 p-1 font-semibold flex justify-between items-center">
                          <span>Medication</span>
                          <button className="text-blue-600 text-xs">+ Add</button>
                        </div>
                        <div className="p-2">
                          <div className="grid grid-cols-3 gap-1 text-xs mb-1">
                            <span>MEDICATIONS</span>
                            <span>DOSE</span>
                            <span>TIMES PER DAY</span>
                          </div>
                          <div className="grid grid-cols-3 gap-1">
                            <input type="text" className="exam-field w-full" />
                            <input type="text" className="exam-field w-full" />
                            <input type="text" className="exam-field w-full" />
                          </div>
                           {/* Add more rows as needed */}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : examType === "Flowsheets" ? (
                  // FLOWSHEET SECTION
                  <div className="min-h-screen min-w-screen bg-white text-xs text-black font-sans py-4 px-2 flex">
                  {/* Left Panel */}
                  <div className="w-[200px] border border-gray-300 mr-2">

                    <div className="flex items-center justify-between px-2 py-1 text-[11px] border-b border-gray-300">
                      <input
                        type="text"
                        className="text-[11px] border border-gray-300 rounded px-1 w-full"
                        placeholder="Search (Alt+Comma)"
                      />
                    </div>
                    <div className="flex justify-between px-2 py-1 border-b border-gray-300 text-[11px]">
                      <span className="text-blue-700 cursor-pointer" onClick={hideAll}>
                        Hide All
                      </span>
                      <span className="text-blue-700 cursor-pointer" onClick={showAll}>
                        Show All
                      </span>
                    </div>
                    {flowsheetSections.map((section) => (
                      <div key={section.title} className="flex items-center px-2 py-1 border-b border-gray-200">
                        <input
                          type="checkbox"
                          checked={selectedSections.includes(section.title)}
                          onChange={() => toggleSection(section.title)}
                          className="mr-2"
                        />
                        <span className="text-[11px]">{section.title}</span>
                      </div>
                    ))}
                  </div>
            
                  {/* Flowsheet Grid */}
                  <div className="flex-1 space-y-0">
                    {flowsheetSections
                      .filter((section) => selectedSections.includes(section.title))
                      .map((section) => (
                        <div key={section.title}>
                          <div className="grid grid-cols-[200px_1fr_100px] border border-gray-300">
                            {/* Header Row */}
                            <div className="bg-[#BFDCEF] font-semibold p-2 border-r border-gray-300">
                              {section.title}
                            </div>
                            <div className="bg-[#BFDCEF] font-semibold p-2 border-r border-gray-300"></div>
                            <div className="bg-[#BFDCEF] font-semibold p-2">Last Filed</div>

                            {/* Rows */}
                            {section.rows.map((label) => {
                              let value = "";

                              const sectionData = parsedFlowsheet?.[section.title];
                              if (typeof sectionData === "object" && sectionData !== null) {
                                value = sectionData[label] ?? "";
                              } else if (typeof sectionData !== "object") {
                                value = label === section.title ? sectionData : "";
                              }

                              return (
                                <React.Fragment key={label}>
                                  <div className="bg-[#D9E8F3] border-t border-gray-300 p-2">{label}</div>
                                  <input
                                    className="bg-[#EBF4F9] border-t border-l border-gray-300 p-1"
                                    type="text"
                                    defaultValue={value}
                                  />
                                  <div className="bg-[#D9E8F3] border-t border-l border-gray-300 p-2 text-gray-400 italic">
                                    —
                                  </div>
                                </React.Fragment>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                  </div>
                </div>



                ) : examType === "Wrap Up" ? (
                    <WrapUp/>
                ) : examType === "Procedure Note" ? (
                  <ProcedureNote/>
                )
                : null}
                
                {(examType === "Clinic Visit" || examType === "Eye Exam") && (
                  <div>
                    <div style={{textAlign: 'left'}}>
                      <img
                        src="/lovable-uploads/menu.png"
                        alt="Menu Bar"
                        className="h-6 object-contain"
                        style={{ display: 'block', marginLeft: '0', maxWidth: '100%' }}
                      />
                    </div>
                    <textarea
                      className="w-full p-1 border rounded-b-md h-24 text-xs"
                      placeholder="Additional notes..."
                    ></textarea>
                  </div>
                )}

              </div>
            </div>
          </ResizablePanel>
          
          <ResizableHandle />
          
          {/* Conditionally render the right panel only for Eye Exam */}
          {examType === "Eye Exam" && (
            <ResizablePanel defaultSize={35} minSize={20}>
              <div className="p-2">
                <div className="flex border-b border-gray-200">
                  <button className="inline-flex items-center px-2 py-0.5 text-sm border-r border-gray-200 gap-1 text-gray-600">
                    <span className="text-xs">Base</span>
                  </button>
                  <button className="inline-flex items-center px-2 py-0.5 text-sm border-r border-gray-200 gap-1 text-gray-600">
                    <span className="text-xs">Addl</span>
                  </button>
                  <button className="inline-flex items-center px-2 py-0.5 text-sm border-r border-gray-200 relative before:absolute before:top-0 before:left-0 before:right-0 before:h-0.5 before:bg-blue-500">
                    <span className="text-xs text-blue-600">Cornea</span>
                  </button>
                </div>
                <h3 className="text-xs font-bold mb-2">Conditions</h3> {/* Removed conditional header */}
                <ConditionList
                  conditionsData={conditionsData}
                  checkedConditions={checkedConditions}
                  handleCheckboxChange={handleCheckboxChange}
                />
                <img
                  src="/lovable-uploads/examimge.png"
                  alt="Clock"
                  className="h-24 w-full object-contain"
                />
              </div>
            </ResizablePanel>
          )}
        </ResizablePanelGroup>
      </div>
    </div>
  );
};

export default ExamSection;
