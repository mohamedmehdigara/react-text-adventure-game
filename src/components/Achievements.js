import React from 'react';
import styled from 'styled-components';

const AchievementsContainer = styled.div`
  border: 2px solid #000;
  padding: 20px;
  max-width: 400px;
  margin-top: 10px;
`;

const AchievementItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`;

const Achievements = ({ achievements }) => {
  return (
    <AchievementsContainer>
      <h3>Achievements</h3>
      {achievements.length > 0 ? (
        achievements.map((achievement, index) => (
          <AchievementItem key={index}>
            <span>{achievement.name}</span>
            <span>{achievement.description}</span>
          </AchievementItem>
        ))
      ) : (
        <p>No achievements yet.</p>
      )}
    </AchievementsContainer>
  );
};

export default Achievements;
