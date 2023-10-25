import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const LeaderboardContainer = styled.div`
  border: 2px solid #000;
  padding: 20px;
  max-width: 400px;
  margin-top: 10px;
`;

const LeaderboardItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`;

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);

  // Simulate fetching leaderboard data from a server
  useEffect(() => {
    // Replace this with actual server request
    setTimeout(() => {
      const mockLeaderboard = [
        { playerName: 'Player 1', score: 100 },
        { playerName: 'Player 2', score: 80 },
        { playerName: 'Player 3', score: 60 },
        { playerName: 'Player 4', score: 40 },
        { playerName: 'Player 5', score: 20 },
      ];

      setLeaderboard(mockLeaderboard);
    }, 1000); // Simulate a delay
  }, []);

  return (
    <LeaderboardContainer>
      <h3>Leaderboard</h3>
      {leaderboard.length > 0 ? (
        leaderboard.map((entry, index) => (
          <LeaderboardItem key={index}>
            <span>{entry.playerName}</span>
            <span>{entry.score} points</span>
          </LeaderboardItem>
        ))
      ) : (
        <p>No leaderboard data available.</p>
      )}
    </LeaderboardContainer>
  );
};

export default Leaderboard;
