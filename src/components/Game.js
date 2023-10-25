import React, { useState } from 'react';
import styled from 'styled-components';
import ChoiceButton from './ChoiceButton';
import EndingScreen from './EndingScreen';
import Story from './Story'; // Import the Story component
import Inventory from './Inventory';
import CharacterStats from './CharacterStats';
import Puzzle from './Puzzle';
import Conversation from './Conversation';
import SaveLoad from './SaveLoad';
import Achievements from './Achievements';
import Leaderboard from './Leaderboard';
import Image from './Image';

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

  const handleChoice = (choice) => {
    const newStory = story.find((s) => s.id === choice.nextStoryId);
    if (newStory) {
      setCurrentStory(newStory);
    } else {
      setIsGameOver(true);
    }
  };

  const handlePuzzleSuccess = () => {
    // You can perform actions when the player successfully solves a puzzle here
    // For example, you can add an item to the player's inventory, update character stats, or advance the story.
    // Here, we'll add an item to the inventory as an example.
  
    // Create a new item to add to the inventory
    const newItem = 'Puzzle Key';
  
    // Update the inventory state to include the new item
    setInventory((prevInventory) => [...prevInventory, newItem]);
  
    // Optionally, update the story to provide feedback or continue the game
    // You can set the next story segment here if needed.
  
    // Display a success message to the player
    console.log('Congratulations! You solved the puzzle and found a key.');
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
              onClick={() => handleChoice(choice)}
            />
          ))}

          <Inventory items={inventory} />
          <CharacterStats stats={{ health: 100, energy: 100 }} />
          <Puzzle puzzle={{ description: '', answer: '' }} onSuccess={() => handlePuzzleSuccess()} />
          <Conversation dialogue={[]} choices={[]} />
          <SaveLoad />
          <Achievements achievements={[]} />
          <Leaderboard />
          <Image src="" alt="" />
        </>
      )}
    </GameContainer>
  );
};

export default Game;
