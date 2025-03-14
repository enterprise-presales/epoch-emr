import { Check, X, Bold, Italic, AlignLeft, Plus, Share2, Lock, Edit3, AlertTriangle, Mail, FileText } from "lucide-react";
import { ResizablePanel } from "@/components/ui/resizable";
import { useState } from "react";

const ProgressNotes = () => {
  // State for the sectioned view
  const [historyOfPresentIllness, setHistoryOfPresentIllness] = useState("");
  const [physicalExam, setPhysicalExam] = useState("");
  const [results, setResults] = useState("");
  const [assessmentPlan, setAssessmentPlan] = useState("");
  const [attestation, setAttestation] = useState("");
  
  // State for the template view
  const [templateContent, setTemplateContent] = useState("");
  
  // State to track which view is active
  const [activeView, setActiveView] = useState<"sectioned" | "template" | "mynote">("sectioned");
  
  // Default template for the my note view
  const defaultMyNoteTemplate = `History of Present Illness
💎 [.HPISEC-EPIC#31000231848]

Physical Examination
💎 [.PESEC-EPIC#31000231850]

Results
💎 [.RESULTSEC-EPIC#31000231851]

Assessment & Plan
💎 [.APSEC-EPIC#31000231852]

Attestation
💎 [.ATTESTSEC-EPIC#31000231857]`;

  // State for the my note view
  const [myNoteContent, setMyNoteContent] = useState(defaultMyNoteTemplate);

  const parseClipboardContent = (clipboardData: string) => {
    console.log("Parsing clipboard data:", clipboardData);
    
    // Define section headers and their corresponding state setters
    const sections = [
      { header: 'History of Present Illness:', setter: setHistoryOfPresentIllness, key: 'hpi' },
      { header: 'Physical Examination:', setter: setPhysicalExam, key: 'pe' },
      { header: 'Results:', setter: setResults, key: 'results' },
      { header: 'Assessment & Plan:', setter: setAssessmentPlan, key: 'assessment' },
      { header: 'Attestation:', setter: setAttestation, key: 'attestation' }
    ];
    
    try {
      // Split the clipboard text into lines
      const lines = clipboardData.split('\n');
      const sectionContents: Record<string, string[]> = {};
      let currentSection: string | null = null;
      
      // Initialize all section contents as empty arrays
      sections.forEach(section => {
        sectionContents[section.key] = [];
      });
      
      // Process each line to determine which section it belongs to
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        // Check if this line is a section header
        let foundHeader = false;
        for (const section of sections) {
          if (line.includes(section.header)) {
            currentSection = section.key;
            foundHeader = true;
            break;
          }
        }
        
        // If it's a header line, skip adding content (we don't want the header in the content)
        if (foundHeader) continue;
        
        // If we're in a section, add this line to that section's content
        if (currentSection) {
          sectionContents[currentSection].push(line);
        }
      }
      
      // Set the state for each section with its collected content
      sections.forEach(section => {
        if (sectionContents[section.key].length > 0) {
          const content = sectionContents[section.key].join('\n');
          section.setter(content);
          console.log(`Setting ${section.key} to:`, content);
        }
      });
      
      // Check if any sections are missing
      const missingSections = sections.filter(section =>
        sectionContents[section.key].length === 0
      );
      
      if (missingSections.length > 0) {
        console.warn("Missing sections:", missingSections.map(s => s.header).join(', '));
        return false;
      }
      
      return true;
    } catch (error) {
      console.error("Error parsing clipboard data:", error);
      return false;
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    console.log("Paste event triggered");
    const clipboardData = e.clipboardData.getData('text/plain');
    parseClipboardContent(clipboardData);
  };

  // Sample note for a routine primary care visit
  const sampleNote = `History of Present Illness:
Mr. Robert Thompson, a 45-year-old male, presents for his annual physical examination. He reports feeling generally well with no significant health changes since his last visit. He exercises 3 times weekly (30-minute walks) and follows a balanced diet. He sleeps 7 hours nightly with occasional difficulty falling asleep when stressed about work. He denies chest pain, shortness of breath, unexpected weight changes, or changes in bowel/bladder habits. He reports occasional mild tension headaches (1-2 times monthly) that resolve with over-the-counter ibuprofen. His last physical was approximately 12 months ago, with normal findings.

Physical Examination:
General: Well-developed, well-nourished male in no acute distress.
Vital Signs: Temperature 98.6°F, heart rate 72 bpm, respiratory rate 16, blood pressure 124/78 mmHg.
HEENT: Normocephalic, atraumatic. Pupils equal, round, and reactive to light. Tympanic membranes clear bilaterally. Oropharynx clear without erythema or exudate.
Neck: Supple, no lymphadenopathy or thyromegaly.
Cardiovascular: Regular rate and rhythm, no murmurs, rubs, or gallops.
Respiratory: Clear to auscultation bilaterally, no wheezes, rales, or rhonchi.
Abdomen: Soft, non-tender, non-distended. No hepatosplenomegaly.
Musculoskeletal: Normal range of motion in all extremities. No joint swelling or tenderness.
Neurological: Alert and oriented x3. Cranial nerves II-XII intact. 5/5 strength in all extremities.
Skin: No rashes, lesions, or areas of concern.

Results:
Complete Blood Count: Within normal limits
Comprehensive Metabolic Panel: Within normal limits
Lipid Panel: Total cholesterol 185 mg/dL, HDL 55 mg/dL, LDL 110 mg/dL, Triglycerides 100 mg/dL
Hemoglobin A1c: 5.4%
Urinalysis: Negative for protein, glucose, ketones, blood

Assessment & Plan:
1. Routine physical examination - findings normal
   - Continue current exercise regimen and balanced diet
   - Recommend stress management techniques for occasional insomnia
   - Age-appropriate cancer screenings discussed and scheduled
   - Seasonal influenza vaccination administered today

2. Occasional tension headaches
   - Continue as-needed ibuprofen for symptom management
   - Recommend headache diary if frequency increases
   - Discussed non-pharmacological approaches including stress reduction and proper hydration

3. Preventive care
   - Colonoscopy due at age 45 - referral provided
   - Discussed importance of dental check-ups twice yearly
   - Continue current vitamin D supplementation

4. Follow-up appointment scheduled for 12 months, sooner if concerns arise

Attestation:
I have reviewed the documentation and agree with the content as written.`;

  // Sample note formatted for the My Note view
  const myNoteSample = `History of Present Illness:
Mr. Robert Thompson, a 45-year-old male, presents for his annual physical examination. He reports feeling generally well with no significant health changes since his last visit. He exercises 3 times weekly (30-minute walks) and follows a balanced diet. He sleeps 7 hours nightly with occasional difficulty falling asleep when stressed about work. He denies chest pain, shortness of breath, unexpected weight changes, or changes in bowel/bladder habits. He reports occasional mild tension headaches (1-2 times monthly) that resolve with over-the-counter ibuprofen. His last physical was approximately 12 months ago, with normal findings.

Physical Examination:
General: Well-developed, well-nourished male in no acute distress.
Vital Signs: Temperature 98.6°F, heart rate 72 bpm, respiratory rate 16, blood pressure 124/78 mmHg.
HEENT: Normocephalic, atraumatic. Pupils equal, round, and reactive to light. Tympanic membranes clear bilaterally. Oropharynx clear without erythema or exudate.
Neck: Supple, no lymphadenopathy or thyromegaly.
Cardiovascular: Regular rate and rhythm, no murmurs, rubs, or gallops.
Respiratory: Clear to auscultation bilaterally, no wheezes, rales, or rhonchi.
Abdomen: Soft, non-tender, non-distended. No hepatosplenomegaly.
Musculoskeletal: Normal range of motion in all extremities. No joint swelling or tenderness.
Neurological: Alert and oriented x3. Cranial nerves II-XII intact. 5/5 strength in all extremities.
Skin: No rashes, lesions, or areas of concern.

Results:
Complete Blood Count: Within normal limits
Comprehensive Metabolic Panel: Within normal limits
Lipid Panel: Total cholesterol 185 mg/dL, HDL 55 mg/dL, LDL 110 mg/dL, Triglycerides 100 mg/dL
Hemoglobin A1c: 5.4%
Urinalysis: Negative for protein, glucose, ketones, blood

Assessment & Plan:
1. Routine physical examination - findings normal
   - Continue current exercise regimen and balanced diet
   - Recommend stress management techniques for occasional insomnia
   - Age-appropriate cancer screenings discussed and scheduled
   - Seasonal influenza vaccination administered today

2. Occasional tension headaches
   - Continue as-needed ibuprofen for symptom management
   - Recommend headache diary if frequency increases
   - Discussed non-pharmacological approaches including stress reduction and proper hydration

3. Preventive care
   - Colonoscopy due at age 45 - referral provided
   - Discussed importance of dental check-ups twice yearly
   - Continue current vitamin D supplementation

4. Follow-up appointment scheduled for 12 months, sooner if concerns arise

Attestation:
I have reviewed the documentation and agree with the content as written.`;

  // Function to copy sample note to clipboard only (without applying it)
  const handleGenerateData = async () => {
    try {
      if (navigator.clipboard) {
        // Use the appropriate sample note based on the active view
        const noteToUse = activeView === "mynote" ? myNoteSample : sampleNote;
        await navigator.clipboard.writeText(noteToUse);
        console.log("Sample note copied to clipboard");
      } else {
        console.error("Clipboard API not available");
      }
    } catch (error) {
      console.error("Error copying to clipboard:", error);
    }
  };
  
  // Function to clear the note content
  const handleClearNote = () => {
    console.log("Clear button clicked");
    
    if (activeView === "mynote") {
      // Reset the my note content to the default template
      setMyNoteContent(defaultMyNoteTemplate);
    } else if (activeView === "template") {
      // Clear the template content
      setTemplateContent("");
    } else if (activeView === "sectioned") {
      // Clear all section contents
      setHistoryOfPresentIllness("");
      setPhysicalExam("");
      setResults("");
      setAssessmentPlan("");
      setAttestation("");
    }
  };

  // Function to parse clipboard content for the "mynote" view
  const parseMyNoteClipboardContent = (currentContent: string, clipboardData: string) => {
    console.log("Parsing clipboard data for My Note view");
    
    try {
      // Define section headers and their corresponding markers
      const sections = [
        { header: 'History of Present Illness:', marker: '[.HPISEC-EPIC#31000231848]', key: 'hpi' },
        { header: 'Physical Examination:', marker: '[.PESEC-EPIC#31000231850]', key: 'pe' },
        { header: 'Results:', marker: '[.RESULTSEC-EPIC#31000231851]', key: 'results' },
        { header: 'Assessment & Plan:', marker: '[.APSEC-EPIC#31000231852]', key: 'assessment' },
        { header: 'Attestation:', marker: '[.ATTESTSEC-EPIC#31000231857]', key: 'attestation' }
      ];
      
      // Extract section content from clipboard data (excluding section titles)
      const extractedSections: Record<string, string> = {};
      
      // Initialize with empty strings
      sections.forEach(section => {
        extractedSections[section.key] = '';
      });
      
      // Find the start and end indices for each section in the clipboard data
      const sectionRanges: Record<string, { start: number; end: number }> = {};
      const clipboardLines = clipboardData.split('\n');
      
      // Find the line index for each section header
      for (let i = 0; i < clipboardLines.length; i++) {
        const line = clipboardLines[i].trim();
        
        for (const section of sections) {
          if (line.includes(section.header)) {
            sectionRanges[section.key] = {
              start: i + 1, // Start from the line after the header
              end: clipboardLines.length // Default to end of clipboard data
            };
            break;
          }
        }
      }
      
      // Set the end index for each section (the start of the next section)
      const sectionKeys = Object.keys(sectionRanges);
      sectionKeys.sort((a, b) => {
        return sectionRanges[a].start - sectionRanges[b].start;
      });
      
      for (let i = 0; i < sectionKeys.length; i++) {
        const currentKey = sectionKeys[i];
        const nextKey = sectionKeys[i + 1];
        
        if (nextKey) {
          sectionRanges[currentKey].end = sectionRanges[nextKey].start - 1;
        }
      }
      
      // Extract content for each section, excluding the section headers
      for (const key in sectionRanges) {
        const { start, end } = sectionRanges[key];
        const sectionLines = clipboardLines.slice(start, end);
        extractedSections[key] = sectionLines.join('\n').trim();
        
        if (extractedSections[key]) {
          console.log(`Extracted ${key}:`, extractedSections[key]);
        }
      }
      
      // Parse the current content to identify sections and markers
      const contentSections: Array<{
        type: 'header' | 'marker' | 'content';
        sectionKey?: string;
        text: string;
      }> = [];
      
      const contentLines = currentContent.split('\n');
      
      for (let i = 0; i < contentLines.length; i++) {
        const line = contentLines[i].trim();
        if (!line) {
          contentSections.push({ type: 'content', text: '' });
          continue;
        }
        
        let isSectionHeader = false;
        let isMarker = false;
        let sectionKey = '';
        
        // Check if this is a section header
        for (const section of sections) {
          if (line.includes(section.header.replace(':', '')) && !line.includes(section.marker)) {
            isSectionHeader = true;
            sectionKey = section.key;
            break;
          }
        }
        
        // Check if this is a marker
        for (const section of sections) {
          if (line.includes(section.marker)) {
            isMarker = true;
            sectionKey = section.key;
            break;
          }
        }
        
        if (isSectionHeader) {
          contentSections.push({ type: 'header', sectionKey, text: contentLines[i] });
        } else if (isMarker) {
          contentSections.push({ type: 'marker', sectionKey, text: contentLines[i] });
        } else {
          contentSections.push({ type: 'content', text: contentLines[i] });
        }
      }
      
      // Build the result by combining the structure with extracted content
      const result: string[] = [];
      let currentSectionKey: string | null = null;
      let addedContent = false;
      
      for (let i = 0; i < contentSections.length; i++) {
        const section = contentSections[i];
        
        if (section.type === 'header') {
          // Add a line break before the header (except for the first header)
          if (currentSectionKey !== null) {
            result.push('');
          }
          
          // Always add the header
          result.push(section.text);
          currentSectionKey = section.sectionKey;
          addedContent = false;
        } else if (section.type === 'marker' && section.sectionKey) {
          // Add the marker
          result.push(section.text);
          
          // Add a single line break after the marker
          result.push('');
          
          // Add the extracted content if available
          if (extractedSections[section.sectionKey]) {
            result.push(extractedSections[section.sectionKey]);
            addedContent = true;
          }
          
          // Skip any existing content until the next header or marker
          let j = i + 1;
          while (j < contentSections.length) {
            if (contentSections[j].type === 'header' || contentSections[j].type === 'marker') {
              i = j - 1; // Set i to the item before the next header/marker
              break;
            }
            j++;
          }
          
          // If we reached the end of the content
          if (j >= contentSections.length) {
            break;
          }
        } else if (section.type === 'content' && !addedContent) {
          // Only add content if we haven't already added extracted content for this section
          result.push(section.text);
        }
      }
      
      return result.join('\n');
    } catch (error) {
      console.error("Error parsing clipboard data for My Note view:", error);
      return currentContent; // Return unchanged content on error
    }
  };

  const handleSyncToEMR = async () => {
    try {
      console.log("Sync to EMR button clicked");
      
      // Check if clipboard API is available
      if (!navigator.clipboard) {
        console.error("Clipboard API not available");
        
        if (activeView === "sectioned") {
          // For sectioned view, parse the sample note
          console.log("Using sample note due to clipboard API unavailability");
          parseClipboardContent(sampleNote);
        } else if (activeView === "template") {
          // For template view, set the template content directly
          setTemplateContent(sampleNote);
        } else if (activeView === "mynote") {
          // For mynote view, update only the variable fields
          const updatedContent = parseMyNoteClipboardContent(myNoteContent, myNoteSample);
          setMyNoteContent(updatedContent);
        }
        return;
      }
      
      try {
        // Read from clipboard
        console.log("Attempting to read from clipboard...");
        const clipboardText = await navigator.clipboard.readText();
        console.log("Clipboard content retrieved");
        
        if (activeView === "sectioned") {
          // For sectioned view, parse the clipboard content
          parseClipboardContent(clipboardText);
        } else if (activeView === "template") {
          // For template view, set the template content directly
          setTemplateContent(clipboardText);
        } else if (activeView === "mynote") {
          // For mynote view, update only the variable fields
          const updatedContent = parseMyNoteClipboardContent(myNoteContent, clipboardText);
          setMyNoteContent(updatedContent);
        }
      } catch (clipboardError) {
        console.error("Error accessing clipboard:", clipboardError);
        
        if (activeView === "sectioned") {
          // For sectioned view, parse the sample note
          console.log("Using sample note as fallback");
          parseClipboardContent(sampleNote);
        } else if (activeView === "template") {
          // For template view, set the template content directly
          setTemplateContent(sampleNote);
        } else if (activeView === "mynote") {
          // For mynote view, update only the variable fields
          const updatedContent = parseMyNoteClipboardContent(myNoteContent, myNoteSample);
          setMyNoteContent(updatedContent);
        }
      }
    } catch (error) {
      console.error("Error in handleSyncToEMR:", error);
    }
  };

  return (
    <div className="epic-notes-section h-full flex flex-col bg-white">
      <div className="border-b border-gray-200 bg-[#003059]">
        <div className="flex items-center px-1 py-1 gap-1">
          <button
            className={`flex items-center gap-1.5 px-2 py-1 border border-[#BDBDBD] hover:bg-[#EEEEEE] ${activeView === "sectioned" ? "bg-[#E0E0E0]" : "bg-[#CCCCCC]"}`}
            onClick={() => setActiveView("sectioned")}
          >
            <div className="bg-[#616161] rounded p-0.5">
              <FileText className="h-3 w-3 text-white" />
            </div>
            <span className="text-xs font-medium text-[#212121]">Notes</span>
          </button>
          
          <button
            className={`flex items-center gap-1.5 px-2 py-1 border border-[#BDBDBD] hover:bg-[#EEEEEE] ${activeView === "template" ? "bg-[#E0E0E0]" : "bg-[#CCCCCC]"}`}
            onClick={() => setActiveView("template")}
          >
            <div className="bg-[#616161] rounded p-0.5">
              <FileText className="h-3 w-3 text-white" />
            </div>
            <span className="text-xs font-medium text-[#212121]">Template</span>
          </button>
          
          <button
            className={`flex items-center gap-1.5 px-2 py-1 border border-[#BDBDBD] hover:bg-[#EEEEEE] ${activeView === "mynote" ? "bg-[#E0E0E0]" : "bg-[#CCCCCC]"}`}
            onClick={() => setActiveView("mynote")}
          >
            <div className="bg-[#616161] rounded p-0.5">
              <FileText className="h-3 w-3 text-white" />
            </div>
            <span className="text-xs font-medium text-[#212121]">My Note</span>
          </button>
        </div>
      </div>

      <div className="flex-none p-4">
        <div className="bg-[#eaecee]" style={{paddingTop: '0'}}>
          <img
            src="/lovable-uploads/menu2.png"
            alt="Create Note"
            className="h-6 object-contain"
            style={{ display: 'block', marginLeft: '0', marginTop: '0' }}
          />
        </div>
        <div className="flex justify-between items-center mb-4 bg-white">
          <div className="flex items-center gap-2">
            <h2 className="text-[#004d92] font-bold">My Note</h2>
          </div>
          <div className="flex gap-2">
            <Share2 className="w-4 h-4 text-[#666]" />
            <Lock className="w-4 h-4 text-[#004d92]" />
            <Edit3 className="w-4 h-4 text-[#666]" />
            <AlertTriangle className="w-4 h-4 text-[#666]" />
            <Mail className="w-4 h-4 text-[#666]" />
          </div>
        </div>

        <div className="flex flex-col space-y-2 mb-4">
          <button onClick={handleSyncToEMR} className="bg-[#004d92] text-white px-4 py-2 rounded">
            Sync to EMR
          </button>
          <div className="flex gap-4">
            <button
              onClick={handleGenerateData}
              className="text-[#004d92] text-sm hover:underline self-start"
            >
              Generate Data
            </button>
            <button
              onClick={handleClearNote}
              className="text-[#004d92] text-sm hover:underline self-start"
            >
              Clear
            </button>
          </div>
        </div>

        <div className="text-sm text-black mb-4">
          Summary: <span className="text-[#666] border-b border-[#666] inline-block w-[85%] ml-1"></span>
        </div>

        <div className="vintage-toolbar mb-2 flex items-center gap-1 bg-[#e4e4e4] p-1 border border-[#999]">
          <Bold className="w-4 h-4" />
          <Italic className="w-4 h-4" />
          <AlignLeft className="w-4 h-4" />
          <Plus className="w-4 h-4" />
          <select className="text-xs bg-[#f4f4f4] border border-[#999] px-1">
            <option>Insert SmartText</option>
          </select>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        {activeView === "sectioned" ? (
          <div className="px-4 space-y-4 [&>*+*]:border-t [&>*+*]:border-[#003366]">
            <div className="pb-4">
              <h3 className="font-bold mb-2 text-[#333]">History of Present Illness:</h3>
              <textarea value={historyOfPresentIllness} onChange={e => setHistoryOfPresentIllness(e.target.value)} onPaste={handlePaste} className="w-full min-h-[100px] p-2 text-sm border border-[#999] bg-white text-[#333] font-sans" />
            </div>

            <div className="pt-4 pb-4">
              <h3 className="font-bold mb-2 text-[#333]">Physical Examination:</h3>
              <textarea value={physicalExam} onChange={e => setPhysicalExam(e.target.value)} onPaste={handlePaste} className="w-full min-h-[60px] p-2 text-sm border border-[#999] bg-[#f8f8f8] text-[#666] font-sans" />
            </div>

            <div className="pt-4 pb-4">
              <h3 className="font-bold mb-2 text-[#333]">Results:</h3>
              <textarea value={results} onChange={e => setResults(e.target.value)} onPaste={handlePaste} className="w-full min-h-[80px] p-2 text-sm border border-[#999] bg-[#f8f8f8] text-[#666] font-sans" />
            </div>

            <div className="pt-4 pb-4">
              <h3 className="font-bold mb-2 text-[#333]">Assessment & Plan:</h3>
              <textarea value={assessmentPlan} onChange={e => setAssessmentPlan(e.target.value)} onPaste={handlePaste} className="w-full min-h-[60px] p-2 text-sm border border-[#999] bg-[#f8f8f8] text-[#666] font-sans" />
            </div>

            <div className="pt-4 pb-4">
              <h3 className="font-bold mb-2 text-[#333]">Attestation:</h3>
              <textarea value={attestation} onChange={e => setAttestation(e.target.value)} onPaste={handlePaste} className="w-full min-h-[60px] p-2 text-sm border border-[#999] bg-[#f8f8f8] text-[#666] font-sans" />
            </div>
          </div>
        ) : activeView === "template" ? (
          <div className="px-4 py-4">
            <h3 className="font-bold mb-2 text-[#333]">Template Note:</h3>
            <textarea
              value={templateContent}
              onChange={e => setTemplateContent(e.target.value)}
              className="w-full min-h-[500px] p-2 text-sm border border-[#999] bg-[#fffde7] text-[#333] font-sans"
              placeholder="Click 'Generate Data' to populate this field with a sample note, or 'Sync to EMR' to paste from clipboard."
            />
          </div>
        ) : (
          <div className="px-4 py-4">
            <h3 className="font-bold mb-2 text-[#333]">My Note:</h3>
            <textarea
              value={myNoteContent}
              onChange={e => setMyNoteContent(e.target.value)}
              className="w-full min-h-[500px] p-2 text-sm border border-[#999] bg-[#fffde7] text-[#333] font-sans"
              placeholder="History of Present Illness
💎 [.HPISEC-EPIC#31000231848]

Physical Examination
💎 [.PESEC-EPIC#31000231850]

Results
💎 [.RESULTSEC-EPIC#31000231851]

Assessment & Plan
💎 [.APSEC-EPIC#31000231852]

Attestation
💎 [.ATTESTSEC-EPIC#31000231857]"
            />
          </div>
        )}
      </div>

      <div className="flex-none p-4 bg-[#e4e4e4] border-t border-[#999]">
        <div className="flex justify-between items-center">
          <span className="text-xs text-[#666]">Sign when Signing Visit</span>
          <div className="flex gap-2">
            <button className="flex items-center gap-1 px-4 py-1 bg-[#e8e8e8] border border-[#999] hover:bg-[#d8d8d8] text-[#333] text-sm">
              <Check className="h-4 w-4" />
              Accept
            </button>
            <button className="flex items-center gap-1 px-4 py-1 bg-[#e8e8e8] border border-[#999] hover:bg-[#d8d8d8] text-[#333] text-sm">
              <X className="h-4 w-4" />
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressNotes;
