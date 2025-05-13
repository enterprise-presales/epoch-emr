import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Admin = () => {
  const [scenariosJson, setScenariosJson] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    // Load scenarios from the Netlify Function
    const loadScenarios = async () => {
      try {
        const response = await fetch('/.netlify/functions/scenarios');
        if (!response.ok) {
          throw new Error(`Failed to load scenarios: ${response.status}`);
        }
        const data = await response.text();
        setScenariosJson(data);
        setMessage("Loaded scenarios from server");
      } catch (error) {
        console.error('Error loading scenarios:', error);
        
        // Fallback to loading from the static file if the function fails
        try {
          const staticResponse = await fetch('/scenarios.json');
          if (staticResponse.ok) {
            const staticData = await staticResponse.text();
            setScenariosJson(staticData);
            setMessage("Loaded scenarios from static file (function failed)");
          } else {
            setMessage(`Error loading scenarios: ${error.message}`);
          }
        } catch (staticError) {
          setMessage(`Error loading scenarios: ${error.message}, static fallback also failed: ${staticError.message}`);
        }
      } finally {
        setIsLoading(false);
      }
    };

    loadScenarios();
  }, []);

  const handleSave = async () => {
    try {
      // Validate JSON
      JSON.parse(scenariosJson);
      
      setIsSaving(true);
      setMessage("Saving scenarios...");
      
      // Save using the Netlify Function
      const response = await fetch('/.netlify/functions/scenarios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: scenariosJson }),
      });
      
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to save scenarios: ${response.status} - ${errorText}`);
      }
      
      setMessage("Scenarios saved successfully to the server!");
    } catch (error) {
      setMessage(`Error saving scenarios: ${error.message}`);
    } finally {
      setIsSaving(false);
    }
  };

  const handleReset = async () => {
    try {
      setIsLoading(true);
      setMessage("Resetting scenarios...");
      
      // Reset using the Netlify Function
      const response = await fetch('/.netlify/functions/scenarios', {
        method: 'DELETE',
      });
      
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to reset scenarios: ${response.status} - ${errorText}`);
      }
      
      // Load the reset scenarios
      const getResponse = await fetch('/.netlify/functions/scenarios');
      if (!getResponse.ok) {
        throw new Error(`Failed to load reset scenarios: ${getResponse.status}`);
      }
      
      const data = await getResponse.text();
      setScenariosJson(data);
      setMessage("Reset to original scenarios successfully!");
    } catch (error) {
      setMessage(`Error resetting scenarios: ${error.message}`);
      
      // Fallback to loading from the static file if the function fails
      try {
        const staticResponse = await fetch('/scenarios.json');
        if (staticResponse.ok) {
          const staticData = await staticResponse.text();
          setScenariosJson(staticData);
          setMessage("Reset using static file (function failed)");
        }
      } catch (staticError) {
        // Already showing the main error, no need to update message
      }
    } finally {
      setIsLoading(false);
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
          Edit the scenarios JSON below. Changes will be saved to the server and will persist until you reset them.
        </p>
        <p className="text-gray-600 mb-4">
          <strong>Note:</strong> This is for demo purposes only. The changes are saved using Netlify Functions.
        </p>
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
              onClick={handleSave}
              disabled={isSaving}
              className={`${isSaving ? 'bg-blue-300' : 'bg-blue-500 hover:bg-blue-600'} text-white px-6 py-2 rounded`}
            >
              {isSaving ? 'Saving...' : 'Save Changes'}
            </button>
            <button
              onClick={handleReset}
              disabled={isLoading}
              className={`${isLoading ? 'bg-red-300' : 'bg-red-500 hover:bg-red-600'} text-white px-6 py-2 rounded`}
            >
              {isLoading ? 'Resetting...' : 'Reset to Original'}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Admin;