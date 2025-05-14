const { createClient } = require('@netlify/functions');
const fetch = require('node-fetch');

// In-memory storage for custom scenarios (will be lost on function cold start)
let customScenarios = null;

// Function to get the default scenarios from the public file
async function getDefaultScenarios() {
  try {
    // Get the site URL from environment
    const siteUrl = process.env.URL || 'https://epochv2.netlify.app';
    const response = await fetch(`${siteUrl}/scenarios.json`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch default scenarios: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching default scenarios:', error);
    // Return a minimal valid structure if we can't fetch the defaults
    return {
      scenarios: [
        {
          id: "default-fallback",
          name: "Default Fallback",
          examType: "Clinic Visit",
          patientData: {
            patientName: "Default Patient",
            patientDOB: "01/01/2000",
            visitDate: "01/01/2025",
            providerName: "Dr. Default",
            interpreterNeeded: "No",
            insurance: "Default Insurance",
            preferredLab: "Default Lab",
            previousExam: "None",
            nextVisit: "01/01/2026"
          },
          clinicalData: {
            historyOfPresentIllness: "Default history",
            physicalExamination: "Default examination",
            results: "Default results",
            assessmentPlan: "Default plan",
            attestation: "Default attestation"
          }
        }
      ]
    };
  }
}

const handler = async (event) => {
  // Set CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, DELETE, OPTIONS',
    'Content-Type': 'application/json'
  };

  // Handle preflight OPTIONS request
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 204,
      headers,
      body: ''
    };
  }

  try {
    // GET request - Read scenarios
    if (event.httpMethod === 'GET') {
      // If we have custom scenarios, return those
      if (customScenarios) {
        return {
          statusCode: 200,
          headers,
          body: JSON.stringify(customScenarios)
        };
      }

      // Otherwise get the default scenarios
      const defaultScenarios = await getDefaultScenarios();
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify(defaultScenarios)
      };
    }

    // POST request - Save scenarios
    if (event.httpMethod === 'POST') {
      const { content } = JSON.parse(event.body);
      
      // Parse and validate the JSON
      const parsedContent = JSON.parse(content);
      
      // Store the custom scenarios in memory
      customScenarios = parsedContent;
      
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ message: 'Scenarios saved successfully' })
      };
    }

    // DELETE request - Reset scenarios
    if (event.httpMethod === 'DELETE') {
      // Clear the custom scenarios
      customScenarios = null;
      
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ message: 'Scenarios reset successfully' })
      };
    }

    // Unsupported method
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ message: 'Method not allowed' })
    };
  } catch (error) {
    console.error('Error in scenarios function:', error);
    
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ message: `Error: ${error.message}` })
    };
  }
};

exports.handler = handler;