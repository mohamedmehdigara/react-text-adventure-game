import React, { useState } from 'react';
import styled from 'styled-components';

const SaveLoadContainer = styled.div`
  border: 2px solid #000;
  padding: 20px;
  max-width: 400px;
  margin-top: 10px;
`;

const SaveLoadButton = styled.button`
  cursor: pointer;
  display: block;
  margin-top: 10px;
`;

const SaveLoad = () => {
  const [savedData, setSavedData] = useState(null);

  const handleSave = () => {
    // Save the game state (e.g., story progress and character stats) to local storage.
    const gameData = {
      // Include relevant game data to be saved.
    };

    localStorage.setItem('textAdventureSave', JSON.stringify(gameData));
  };

  const handleLoad = () => {
    // Load the game state from local storage and set it to continue the game.
    const savedDataString = localStorage.getItem('textAdventureSave');

    if (savedDataString) {
      const loadedData = JSON.parse(savedDataString);
      setSavedData(loadedData);
      // Apply loaded data to continue the game.
    }
  };

  return (
    <SaveLoadContainer>
      <SaveLoadButton onClick={handleSave}>Save Game</SaveLoadButton>
      <SaveLoadButton onClick={handleLoad}>Load Game</SaveLoadButton>
    </SaveLoadContainer>
  );
};

export default SaveLoad;
