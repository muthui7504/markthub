import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ConnectionPage = () => {
  const [connectionRequests, setConnectionRequests] = useState([]);
  const [suggestedConnections, setSuggestedConnections] = useState([]);

  useEffect(() => {
    // Fetch connection requests and suggestions (dummy data for now)
    async function fetchData() {
      const requests = await axios.get('/api/connection-requests');
      const suggestions = await axios.get('/api/suggested-connections');
      setConnectionRequests(requests.data);
      setSuggestedConnections(suggestions.data);
    }
    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col space-y-6">
        {/* Connection Requests */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-4">Invitations</h2>
          <div className="space-y-3">
            {connectionRequests.length > 0 ? (
              connectionRequests.map((request) => (
                <div key={request.id} className="flex items-center justify-between bg-gray-100 p-3 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <img src={request.avatar} alt={request.name} className="w-12 h-12 rounded-full" />
                    <div>
                      <h3 className="font-medium">{request.name}</h3>
                      <p className="text-gray-500">{request.role}</p>
                    </div>
                  </div>
                  <div className="space-x-2">
                    <button className="px-4 py-1 bg-blue-500 text-white rounded-full">Connect</button>
                    <button className="px-4 py-1 bg-gray-200 text-gray-800 rounded-full">Ignore</button>
                  </div>
                </div>
              ))
            ) : (
              <p>No invitations yet.</p>
            )}
          </div>
        </div>

        {/* Suggested Connections */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-4">Suggested Connections</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {suggestedConnections.map((suggestion) => (
              <div key={suggestion.id} className="bg-gray-100 p-4 rounded-lg">
                <img src={suggestion.avatar} alt={suggestion.name} className="w-16 h-16 rounded-full mx-auto mb-3" />
                <h3 className="text-center font-medium">{suggestion.name}</h3>
                <p className="text-center text-gray-500">{suggestion.role}</p>
                <button className="w-full mt-3 py-1 bg-blue-500 text-white rounded-full">Connect</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectionPage;
