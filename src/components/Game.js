import React, { useState } from 'react';
import styled from 'styled-components';
import ChoiceButton from './ChoiceButton';
import EndingScreen from './EndingScreen';
import Story from './Story';
import Inventory from './Inventory';
import CharacterStats from './CharacterStats';

const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const ContentContainer = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const Game = ({ story }) => {
  const [currentStory, setCurrentStory] = useState(story[0]);
  const [isGameOver, setIsGameOver] = useState(false);
  const [inventory, setInventory] = useState([]);
  const [characterStats, setCharacterStats] = useState({
    health: 100,
    energy: 100,
  });

  const handleChoice = (choice) => {
    const newStory = story.find((s) => s.id === choice.nextStoryId);
    if (newStory) {
      setCurrentStory(newStory);
    } else {
      setIsGameOver(true);
    }
  };

  const handlePuzzleSuccess = () => {
    const newItem = 'Puzzle Key';
    setInventory((prevInventory) => [...prevInventory, newItem]);
    console.log('Congratulations! You solved the puzzle and found a key.');
  };

  const handleFightDragon = () => {
    // Decrease health and energy when fighting the dragon
    const updatedHealth = characterStats.health - 50;
    const updatedEnergy = characterStats.energy - 50;

    // Check if the character has enough health and energy to continue
    if (updatedHealth <= 0 || updatedEnergy <= 0) {
      setIsGameOver(true); // Game over if health or energy is depleted
    } else {
      setCharacterStats({
        health: updatedHealth,
        energy: updatedEnergy,
      });
    }
  };

  return (
    <GameContainer>
      {isGameOver ? (
        <EndingScreen title={currentStory.title} text={currentStory.text} />
      ) : (
        <>
          <ContentContainer>
            <h1>{currentStory.title}</h1>
            <p>{currentStory.text}</p>
          </ContentContainer>

          {currentStory.choices.map((choice) => (
            <ChoiceButton
              key={choice.id}
              text={choice.text}
              onClick={() => {
                if (choice.id === 'fight-dragon') {
                  handleFightDragon(); // Handle the fight choice
                } else if (choice.id === 'puzzle-ending') {
                  handlePuzzleSuccess(); // Handle the puzzle success
                } else {
                  handleChoice(choice); // Handle other choices
                }
              }}
            />
          ))}

          <Inventory items={inventory} />
          <CharacterStats stats={characterStats} />
          {/* Include other components as needed */}
        </>
      )}
    </GameContainer>
  );
};

export default Game;
