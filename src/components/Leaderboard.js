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
`;



const Leaderboard = ({ scores }) => {
  const [sortBy, setSortBy] = useState('score'); // Default sorting by score
  const [sortOrder, setSortOrder] = useState('desc'); // Default sorting in descending order
  const [currentPage, setCurrentPage] = useState(1);
  const scoresPerPage = 10; // Number of scores per page

  // Function to handle sorting by score or other criteria
  const handleSort = (criteria) => {
    if (sortBy === criteria) {
      // Toggle sorting order if the same criteria is selected
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      // If a new criteria is selected, set it as the sorting criteria and default to descending order
      setSortBy(criteria);
      setSortOrder('desc');
    }
  };

  // Function to paginate the scores
  const paginateScores = (scores, page, perPage) => {
    const startIndex = (page - 1) * perPage;
    const endIndex = startIndex + perPage;
    return scores.slice(startIndex, endIndex);
  };

  // Sort the scores based on the selected criteria and order
  const sortedScores = scores.sort((a, b) => {
    const order = sortOrder === 'asc' ? 1 : -1;
    return order * (a[sortBy] - b[sortBy]);
  });

  // Get the scores for the current page
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
      {/* Pagination controls */}
      <div>
        <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </button>
        <span>Page {currentPage}</span>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={paginatedScores.length < scoresPerPage}
        >
          Next
        </button>
      </div>
    </LeaderboardContainer>
  );
};

export default Leaderboard;
