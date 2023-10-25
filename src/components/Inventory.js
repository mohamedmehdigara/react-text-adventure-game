import React from 'react';
import styled from 'styled-components';

const InventoryContainer = styled.div`
  border: 2px solid #000;
  padding: 10px;
  max-width: 300px;
  margin-top: 10px;
`;

const InventoryItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`;

const Inventory = ({ items }) => {
  return (
    <InventoryContainer>
      <h3>Inventory</h3>
      {items.length > 0 ? (
        items.map((item, index) => (
          <InventoryItem key={index}>
            <span>{item.name}</span>
            <span>{item.description}</span>
          </InventoryItem>
        ))
      ) : (
        <p>No items in the inventory.</p>
      )}
    </InventoryContainer>
  );
};

export default Inventory;
