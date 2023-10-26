import React from 'react';
import styled from 'styled-components';

const AchievementsContainer = styled.div`
  border: 2px solid #000;
  padding: 20px;
  max-width: 400px;
  margin-top: 10px;
  background-color: #f7f7f7;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const AchievementItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const AchievementIcon = styled.span`
  margin-right: 10px;
  font-size: 24px;
`;

const ProgressContainer = styled.div`
  background-color: #eee;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const ProgressBar = styled.div`
  width: ${(props) => props.progress}%;
  background-color: #4caf50;
  border-radius: 5px;
  text-align: center;
  color: white;
`;

const NoAchievements = styled.p`
  font-style: italic;
`;

const Achievements = ({ achievements }) => {
  const getIconForAchievement = (type) => {
    // Define icons for different achievement types
    const icons = {
      combat: '⚔️',
      exploration: '🌍',
      puzzle: '🧩',
      // Add more icons for other types
    };

    return icons[type] || '🏆'; // Default trophy icon
  };

  return (
    <AchievementsContainer>
      <h3>Achievements</h3>
      {achievements && achievements.length > 0 ? (
        achievements.map((achievement, index) => (
          <AchievementItem key={index}>
            <AchievementIcon>
              {getIconForAchievement(achievement.type)}
            </AchievementIcon>
            <div>
              <span>{achievement.name}</span>
              <span>{achievement.description}</span>
            </div>
            <ProgressContainer>
              <ProgressBar progress={achievement.progress}>
                {achievement.progress}%
              </ProgressBar>
            </ProgressContainer>
          </AchievementItem>
        ))
      ) : (
        <NoAchievements>No achievements yet.</NoAchievements>
      )}
    </AchievementsContainer>
  );
};

export default Achievements;
