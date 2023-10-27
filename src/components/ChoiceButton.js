import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: #4caf50; /* Add a background color */
  color: white; /* Set text color to white */
  border: none; /* Remove the default button border */
  border-radius: 5px; /* Add rounded corners */
  transition: background-color 0.3s, transform 0.1s; /* Add smooth transitions */

  /* Hover effect */
  &:hover {
    background-color: #45a049; /* Darken the background color */
    transform: scale(1.05); /* Slightly scale up on hover */
  }

  /* Active (clicked) effect */
  &:active {
    transform: scale(0.95); /* Slightly scale down when clicked */
  }
`;

const ChoiceButton = ({ text, onClick }) => (
  <Button onClick={onClick}>{text}</Button>
);

export default ChoiceButton;
