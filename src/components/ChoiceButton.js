import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
`;

const ChoiceButton = ({ text, onClick }) => (
  <Button onClick={onClick}>{text}</Button>
);

export default ChoiceButton;
