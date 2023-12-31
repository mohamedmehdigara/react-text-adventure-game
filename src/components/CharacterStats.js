import React from 'react';
import styled from 'styled-components';

const StatsContainer = styled.div`
  border: 2px solid #000;
  padding: 10px;
  max-width: 300px;
  margin-top: 10px;
  background-color: #f7f7f7;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const StatItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
  font-weight: ${(props) => (props.isCritical ? 'bold' : 'normal')};
  color: ${(props) => (props.isCritical ? 'red' : 'inherit')};
  padding: 5px; /* Increase padding for better readability */
  border-radius: 5px; /* Add rounded corners for a polished look */
  transition: background-color 0.3s; /* Add a subtle transition for hover effect */
  &:hover {
    background-color: #e0e0e0; /* Change background color on hover */
  }
`;

const Icon = styled.span`
  margin-right: 5px;
  font-size: 18px; /* Slightly reduce icon size for better alignment */
`;

const CharacterStats = ({ stats }) => {
  return (
    <StatsContainer>
      <h3>Character Stats</h3>
      {Object.entries(stats).map(([stat, value]) => (
        <StatItem key={stat} isCritical={value < 10}>
          <Icon>{getIconForStat(stat)}</Icon>
          <span>{stat}:</span>
          <span>{value}</span>
        </StatItem>
      ))}
    </StatsContainer>
  );
};

const getIconForStat = (stat) => {
  // Define icons for different statistics
  const icons = {
    health: '❤️',
    energy: '⚡',
    // Add more icons for other statistics
  };

  return icons[stat] || 'ℹ️'; // Default icon for unknown stats
};

export default CharacterStats;
