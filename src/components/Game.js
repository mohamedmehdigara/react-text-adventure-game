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

<SaveLoad />
<Achievements achievements={currentStory.achievements} />
<Leaderboard />
<Image src={currentStory.imageSrc} alt={currentStory.imageAlt} />

        </>
      )}
    </GameContainer>
  );
};

export default Game;
