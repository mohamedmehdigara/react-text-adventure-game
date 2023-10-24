import React, { useState } from 'react';
import styled from 'styled-components';
import ChoiceButton from './ChoiceButton';
import EndingScreen from './EndingScreen';

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

  const handleChoice = (choice) => {
    const newStory = story.find((s) => s.id === choice.nextStoryId);
    if (newStory) {
      setCurrentStory(newStory);
    } else {
      setIsGameOver(true);
    }
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
        </>
      )}
    </GameContainer>
  );
};

export default Game;
