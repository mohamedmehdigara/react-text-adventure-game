import React from 'react';
import styled from 'styled-components';

const UIContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 800px;
  margin: 0 auto;
`;

const Sidebar = styled.div`
  flex: 1;
  padding: 10px;
`;

const MainContent = styled.div`
  flex: 3;
  padding: 10px;
`;

const UI = ({ sidebar, mainContent }) => {
  return (
    <UIContainer>
      <Sidebar>{sidebar}</Sidebar>
      <MainContent>{mainContent}</MainContent>
    </UIContainer>
  );
};

export default UI;
