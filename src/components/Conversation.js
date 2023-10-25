import React, { useState } from 'react';
import styled from 'styled-components';

const ConversationContainer = styled.div`
  border: 2px solid #000;
  padding: 20px;
  max-width: 400px;
  margin-top: 10px;
`;

const DialogueText = styled.p`
  margin-bottom: 10px;
`;

const ChoiceButton = styled.button`
  cursor: pointer;
  display: block;
  margin-top: 10px;
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
