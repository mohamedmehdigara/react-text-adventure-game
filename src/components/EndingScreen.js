import React from 'react';
import styled from 'styled-components';

const EndingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f7f7f7; /* Add a background color for improved readability */
`;

const Title = styled.h1`
  font-size: 24px; /* Increase title font size for emphasis */
  margin-bottom: 20px;
  text-align: center; /* Center-align the title */
`;

const Text = styled.p`
  font-size: 18px; /* Enhance text readability with a larger font size */
  text-align: center; /* Center-align the text */
`;

const EndingScreen = ({ title, text }) => (
  <EndingContainer>
    <Title>{title}</Title>
    <Text>{text}</Text>
  </EndingContainer>
);

export default EndingScreen;
