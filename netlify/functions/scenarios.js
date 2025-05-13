const fs = require('fs');
const path = require('path');

// Path to the scenarios.json file
const scenariosPath = path.join(__dirname, '../../public/scenarios.json');
// Path to store the custom scenarios
const customScenariosPath = path.join(__dirname, '../../.netlify/custom-scenarios.json');

exports.handler = async (event, context) => {
  // Set CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, DELETE, OPTIONS',
  };

  // Handle preflight OPTIONS request
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 204,
      headers,
      body: '',
    };
  }

  try {
    // GET request - Read scenarios
    if (event.httpMethod === 'GET') {
      // Check if custom scenarios exist
      if (fs.existsSync(customScenariosPath)) {
        const customScenarios = fs.readFileSync(customScenariosPath, 'utf8');
        return {
          statusCode: 200,
          headers,
          body: customScenarios,
        };
      }

      // Fall back to the original scenarios
      const scenarios = fs.readFileSync(scenariosPath, 'utf8');
      return {
        statusCode: 200,
        headers,
        body: scenarios,
      };
    }

    // POST request - Save scenarios
    if (event.httpMethod === 'POST') {
      const { content } = JSON.parse(event.body);
      
      // Validate the JSON
      JSON.parse(content); // This will throw if invalid
      
      // Create the .netlify directory if it doesn't exist
      const netlifyDir = path.join(__dirname, '../../.netlify');
      if (!fs.existsSync(netlifyDir)) {
        fs.mkdirSync(netlifyDir, { recursive: true });
      }
      
      // Write the custom scenarios
      fs.writeFileSync(customScenariosPath, content);
      
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ message: 'Scenarios saved successfully' }),
      };
    }

    // DELETE request - Reset scenarios
    if (event.httpMethod === 'DELETE') {
      // Delete the custom scenarios if they exist
      if (fs.existsSync(customScenariosPath)) {
        fs.unlinkSync(customScenariosPath);
      }
      
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ message: 'Scenarios reset successfully' }),
      };
    }

    // Unsupported method
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ message: 'Method not allowed' }),
    };
  } catch (error) {
    console.error('Error in scenarios function:', error);
    
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ message: `Error: ${error.message}` }),
    };
  }
};