import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Admin = () => {
  const [scenariosJson, setScenariosJson] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [showPasswordPrompt, setShowPasswordPrompt] = useState(false);
  const [password, setPassword] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Check if we have scenarios in localStorage first
    const localScenarios = localStorage.getItem("custom-scenarios");
    
    if (localScenarios) {
      try {
        const parsedScenarios = JSON.parse(localScenarios);
        setScenariosJson(JSON.stringify(parsedScenarios, null, 2));
        setMessage("Loaded custom scenarios from localStorage");
      } catch (error) {
        console.error("Error parsing localStorage scenarios:", error);
        loadDefaultScenarios();
      }
    } else {
      loadDefaultScenarios();
    }
    
    setIsLoading(false);
  }, []);

  const loadDefaultScenarios = async () => {
    try {
      const response = await fetch('/scenarios.json');
      if (!response.ok) {
        throw new Error(`Failed to load scenarios: ${response.status}`);
      }
      const data = await response.json();
      setScenariosJson(JSON.stringify(data, null, 2));
      setMessage("Loaded default scenarios");
    } catch (error) {
      console.error('Error loading scenarios:', error);
      setMessage(`Error loading scenarios: ${error.message}`);
    }
  };

  const handleSaveClick = () => {
    // Show password prompt
    setShowPasswordPrompt(true);
  };

  const handleSave = () => {
    try {
      const adminPassword = import.meta.env.VITE_ADMIN_PASSWORD;
      
      // Check if password is correct
      if (password !== adminPassword) {
        setMessage("Incorrect password. Changes not saved.");
        setShowPasswordPrompt(false);
        setPassword("");
        return;
      }
      
      // Validate JSON
      const parsedJson = JSON.parse(scenariosJson);
      
      // Additional validation to ensure it has the expected structure
      if (!parsedJson.scenarios || !Array.isArray(parsedJson.scenarios)) {
        throw new Error("Invalid JSON structure: missing 'scenarios' array");
      }
      
      // Format the JSON properly before saving
      const formattedJson = JSON.stringify(parsedJson, null, 2);
      setScenariosJson(formattedJson);
      
      // Save to localStorage
      localStorage.setItem("custom-scenarios", JSON.stringify(parsedJson));
      setMessage("Scenarios saved to localStorage successfully!");
      
      // Reset password and close prompt
      setShowPasswordPrompt(false);
      setPassword("");
    } catch (error) {
      setMessage(`Error saving scenarios: ${error.message}`);
      setShowPasswordPrompt(false);
      setPassword("");
    }
  };

  const handleReset = async () => {
    try {
      // Remove from localStorage
      localStorage.removeItem("custom-scenarios");
      
      // Load default scenarios
      await loadDefaultScenarios();
      setMessage("Reset to default scenarios successfully!");
    } catch (error) {
      setMessage(`Error resetting scenarios: ${error.message}`);
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const content = e.target?.result as string;
        // Validate JSON
        const parsedJson = JSON.parse(content);
        
        // Additional validation to ensure it has the expected structure
        if (!parsedJson.scenarios || !Array.isArray(parsedJson.scenarios)) {
          throw new Error("Invalid JSON structure: missing 'scenarios' array");
        }
        
        // Format and set the content
        setScenariosJson(JSON.stringify(parsedJson, null, 2));
        setMessage("File loaded successfully. Click 'Save Changes' to apply.");
      } catch (error) {
        setMessage(`Error parsing JSON file: ${error.message}`);
      }
    };
    reader.onerror = () => {
      setMessage("Error reading file");
    };
    reader.readAsText(file);
  };

  const handleDownload = () => {
    try {
      // Create a blob from the JSON
      const blob = new Blob([scenariosJson], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      
      // Create a link and click it to download
      const a = document.createElement('a');
      a.href = url;
      a.download = 'scenarios.json';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (error) {
      setMessage(`Error downloading file: ${error.message}`);
    }
  };

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Scenario Admin</h1>
        <Link to="/" className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">
          Back to App
        </Link>
      </div>
      
      {message && (
        <div className={`p-4 mb-4 rounded ${message.includes('Error') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
          {message}
        </div>
      )}
      
      <div className="mb-4">
        <p className="text-gray-600 mb-2">
          Edit the scenarios JSON below or upload a new JSON file. Changes will be saved to your browser's localStorage.
        </p>
        <p className="text-gray-600 mb-4">
          <strong>Note:</strong> This is for demo purposes only. In a real application, you would save changes to a database.
        </p>
      </div>
      
      <div className="flex gap-4 mb-4">
        <input
          type="file"
          accept=".json"
          onChange={handleFileUpload}
          ref={fileInputRef}
          className="hidden"
        />
        <button
          onClick={() => fileInputRef.current?.click()}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          Upload JSON
        </button>
        <button
          onClick={handleDownload}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          Download JSON
        </button>
      </div>
      
      {isLoading ? (
        <div className="text-center py-8">Loading scenarios...</div>
      ) : (
        <>
          <textarea
            value={scenariosJson}
            onChange={(e) => setScenariosJson(e.target.value)}
            className="w-full h-[60vh] font-mono text-sm p-4 border border-gray-300 rounded"
            spellCheck="false"
          />
          
          <div className="flex gap-4 mt-4">
            <button
              onClick={handleSaveClick}
              className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
            >
              Save Changes
            </button>
            <button
              onClick={handleReset}
              className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600"
            >
              Reset to Default
            </button>
          </div>
          
          {/* Password Prompt Dialog */}
          {showPasswordPrompt && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h3 className="text-lg font-semibold mb-4">Enter Admin Password</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Please enter the admin password to save changes.
                </p>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
                  placeholder="Password"
                  autoFocus
                />
                <div className="flex justify-end gap-2">
                  <button
                    onClick={() => {
                      setShowPasswordPrompt(false);
                      setPassword("");
                    }}
                    className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSave}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Admin;