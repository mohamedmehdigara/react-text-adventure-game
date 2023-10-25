import React from 'react';
import styled from 'styled-components';

const StatsContainer = styled.div`
  border: 2px solid #000;
  padding: 10px;
  max-width: 300px;
  margin-top: 10px;
`;

const StatItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`;

const CharacterStats = ({ stats }) => {
  return (
    <StatsContainer>
      <h3>Character Stats</h3>
      {Object.entries(stats).map(([stat, value]) => (
        <StatItem key={stat}>
          <span>{stat}:</span>
          <span>{value}</span>
        </StatItem>
      ))}
    </StatsContainer>
  );
};

export default CharacterStats;
