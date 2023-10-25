import React, { useState } from 'react';
import styled from 'styled-components';

const PuzzleContainer = styled.div`
  border: 2px solid #000;
  padding: 20px;
  max-width: 400px;
  margin-top: 10px;
`;

const PuzzleText = styled.p`
  margin-bottom: 10px;
`;

const PuzzleInput = styled.input`
  padding: 5px;
  margin-right: 10px;
`;

const PuzzleButton = styled.button`
  cursor: pointer;
`;

const Puzzle = ({ puzzle, onSuccess }) => {
  const [userInput, setUserInput] = useState('');
  const [isSolved, setIsSolved] = useState(false);

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleSolvePuzzle = () => {
    if (userInput.toLowerCase() === puzzle.answer.toLowerCase()) {
      setIsSolved(true);
      onSuccess();
    }
  };

  return (
    <PuzzleContainer>
      <PuzzleText>{puzzle.description}</PuzzleText>
      {!isSolved ? (
        <div>
          <PuzzleInput
            type="text"
            placeholder="Enter your answer"
            value={userInput}
            onChange={handleInputChange}
          />
          <PuzzleButton onClick={handleSolvePuzzle}>Solve</PuzzleButton>
        </div>
      ) : (
        <p>Congratulations! Puzzle solved.</p>
      )}
    </PuzzleContainer>
  );
};

export default Puzzle;
