import React, { useState } from 'react';
import { Button } from '@mui/material';

const App = () => {
  const suggestionList = [
    "AI", "Tendances", "Musique", "Sports", "Jeux",
    "Films", "Actualités", "Apprendre", "En direct",
    "Voyages", "Technologie", "Cuisine"
  ];

  const [selectedSuggestion, setSelectedSuggestion] = useState(null);

  const handleSuggestionClick = (suggestion) => {
    setSelectedSuggestion(suggestion);
  };

  return (
    <div className='  mx-auto lg:w-[900px] md:[700px] sm:w-[500px] w-[400px]    '>
      <div className="suggestion-bar" style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        {suggestionList.map((suggestion, index) => (
          <Button
            key={index}
            variant={selectedSuggestion === suggestion ? "contained" : "outlined"}
            onClick={() => handleSuggestionClick(suggestion)}
          >
            {suggestion}
          </Button>
        ))}
      </div>
      {selectedSuggestion && (
        <div style={{ marginTop: '20px' }}>
          <h2>Suggestions pour: {selectedSuggestion}</h2>
          {/* Contenu affiché en fonction de la suggestion sélectionnée */}
        </div>
      )}
    </div>
  );
};

export default App;
