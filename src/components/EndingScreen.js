import React from 'react';
import styled from 'styled-components';

const EndingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const EndingScreen = ({ title, text }) => (
  <EndingContainer>
    <h1>{title}</h1>
    <p>{text}</p>
  </EndingContainer>
);

export default EndingScreen;
