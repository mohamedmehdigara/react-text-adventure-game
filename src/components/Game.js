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
`;

const ContentContainer = styled.div`
  text-align: center;
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
          <Puzzle
            puzzle={{ description: '', answer: '' }}
            onSuccess={() => handlePuzzleSuccess()}
          />
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
