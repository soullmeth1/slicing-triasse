import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import paket from '../data/paket';
import LabCard from './LabCard';

const LabsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2.5;
  gap: 2rem;
`;

function LabLists() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(paket);
  }, []);

  return (
    <LabsContainer>
      {data.map((data, i) => (
        <LabCard key={data.name} data={data} />
      ))}
    </LabsContainer>
  );
}

export default LabLists;
