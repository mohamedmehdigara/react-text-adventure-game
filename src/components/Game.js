import React, { useState } from 'react';
import styled from 'styled-components';
import ChoiceButton from './ChoiceButton';
import EndingScreen from './EndingScreen';
import Conversation from './Conversation'; // Import only necessary components

import CharacterStats from './CharacterStats';
import SaveLoad from './SaveLoad';
import Achievements from './Achievements';
import Image from './Image';

const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ContentContainer = styled.div`
  text-align: center;
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
      // Update character stats based on the story segment
      if (newStory.effects) {
        const { healthChange, energyChange } = newStory.effects;
        setCharacterStats((prevStats) => ({
          health: prevStats.health + healthChange,
          energy: prevStats.energy + energyChange,
        }));
      }
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

  return (
    <GameContainer>
      {isGameOver ? (
        <EndingScreen title={currentStory.title} text={currentStory.text} />
      ) : (
        <>
          <ContentContainer>
            <h1>{currentStory.title}</h1>
            <p>{currentStory.text}</p>
            {currentStory.description && <p>{currentStory.description}</p>}
          </ContentContainer>

          {currentStory.choices.map((choice) => (
            <ChoiceButton
              key={choice.id}
              text={choice.text}
              onClick={() => handleChoice(choice)}
            />
          ))}

          {currentStory.dialogue && currentStory.dialogueChoices && (
            <Conversation dialogue={currentStory.dialogue} choices={currentStory.dialogueChoices} />
          )}

          <CharacterStats stats={characterStats} /> {/* Pass character stats as props */}
          <SaveLoad />
          <Achievements achievements={currentStory.achievements} /> {/* Pass achievements as props */}
          <Image src={currentStory.imageSrc} alt={currentStory.imageAlt} /> {/* Pass image details as props */}
        </>
      )}
    </GameContainer>
  );
};

export default Game;
