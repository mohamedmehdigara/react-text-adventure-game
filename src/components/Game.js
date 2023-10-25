import React, { useState } from 'react';
import styled from 'styled-components';
import ChoiceButton from './ChoiceButton';
import EndingScreen from './EndingScreen';
import Story from './Story';
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

const Game = ({ story }) => {
  const [currentStory, setCurrentStory] = useState(story[0]);
  const [isGameOver, setIsGameOver] = useState(false);
  const [inventory, setInventory] = useState([]); // Define the inventory state and setter


  const handleChoice = (choice) => {
    const newStory = story.find((s) => s.id === choice.nextStoryId);
    if (newStory) {
      setCurrentStory(newStory);
    } else {
      setIsGameOver(true);
    }
  };

  // Define the handlePuzzleSuccess function
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
          <h1>{currentStory.title}</h1>
          <p>{currentStory.text}</p>
          {currentStory.choices.map((choice) => (
            <ChoiceButton
              key={choice.id}
              text={choice.text}
              onClick={() => handleChoice(choice)}
            />
          ))}
          {/* Integrate the new components here */}
          <Inventory items={[] /* Your inventory data */} />
          <CharacterStats stats={{} /* Your character stats data */} />
          <Puzzle puzzle={{ description: '', answer: '' } /* Your puzzle data */} onSuccess={() => handlePuzzleSuccess()} />
          <Conversation dialogue={[]} choices={[]} />
          <SaveLoad />
          <Achievements achievements={[] /* Your achievements data */} />
          <Leaderboard />
          <Image src='' alt='' />
          
        </>
      )}
    </GameContainer>
  );
};

export default Game;
