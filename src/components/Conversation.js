import React, { useState } from 'react';
import styled from 'styled-components';

const ConversationContainer = styled.div`
  border: 2px solid #000;
  padding: 20px;
  max-width: 400px;
  margin-top: 10px;
  background-color: #f7f7f7; /* Add a background color */
  border-radius: 5px; /* Add rounded corners */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const DialogueText = styled.p`
  margin-bottom: 10px;
  font-size: 16px; /* Increase text size for better readability */
`;

const ChoiceButton = styled.button`
  cursor: pointer;
  display: block;
  margin-top: 10px;
  padding: 10px 20px;
  font-size: 14px; /* Slightly reduce button text size */
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s, transform 0.1s;

  &:hover {
    background-color: #45a049;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const Conversation = ({ dialogue, choices }) => {
  const [currentDialogueIndex, setCurrentDialogueIndex] = useState(0);

  const handleChoice = (choiceIndex) => {
    if (choiceIndex < choices.length) {
      setCurrentDialogueIndex(choiceIndex);
    }
  };

  return (
    <ConversationContainer>
      <DialogueText>{dialogue[currentDialogueIndex]}</DialogueText>
      {currentDialogueIndex < choices.length && (
        <div>
          {choices.map((choice, index) => (
            <ChoiceButton key={index} onClick={() => handleChoice(index)}>
              {choice}
            </ChoiceButton>
          ))}
        </div>
      )}
    </ConversationContainer>
  );
};

export default Conversation;
