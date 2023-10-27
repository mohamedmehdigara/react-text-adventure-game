import React, { useState } from 'react';
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

const LeaderboardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  cursor: pointer;
`;

const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

const StyledButton = styled.button`
  padding: 5px 10px;
  cursor: pointer;
  margin: 0 10px;
`;

const Leaderboard = ({ scores }) => {
  const [sortBy, setSortBy] = useState('score');
  const [sortOrder, setSortOrder] = useState('desc');
  const [currentPage, setCurrentPage] = useState(1);
  const scoresPerPage = 10;

  if (!scores || scores.length === 0) {
    return (
      <LeaderboardContainer>
        <h3>Leaderboard</h3>
        <p>No scores to display.</p>
      </LeaderboardContainer>
    );
  }

  const handleSort = (criteria) => {
    if (sortBy === criteria) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(criteria);
      setSortOrder('desc');
    }
  };

  const paginateScores = (scores, page, perPage) => {
    const startIndex = (page - 1) * perPage;
    const endIndex = startIndex + perPage;
    return scores.slice(startIndex, endIndex);
  };

  const sortedScores = scores.sort((a, b) => {
    const order = sortOrder === 'asc' ? 1 : -1;
    return order * (a[sortBy] - b[sortBy]);
  });

  const paginatedScores = paginateScores(sortedScores, currentPage, scoresPerPage);

  return (
    <LeaderboardContainer>
      <h3>Leaderboard</h3>
      <LeaderboardHeader>
        <span onClick={() => handleSort('playerName')}>Player Name</span>
        <span onClick={() => handleSort('score')}>Score</span>
        <span onClick={() => handleSort('date')}>Date</span>
      </LeaderboardHeader>
      {paginatedScores.map((score, index) => (
        <LeaderboardItem key={index}>
          <span>{score.playerName}</span>
          <span>{score.score}</span>
          <span>{score.date}</span>
        </LeaderboardItem>
      ))}
      <Pagination>
        <StyledButton
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </StyledButton>
        <span>Page {currentPage}</span>
        <StyledButton
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={paginatedScores.length < scoresPerPage}
        >
          Next
        </StyledButton>
      </Pagination>
    </LeaderboardContainer>
  );
};

export default Leaderboard;
