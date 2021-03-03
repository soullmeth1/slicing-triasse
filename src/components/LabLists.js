import styled from 'styled-components';
import LabCard from './LabCard';

const LabsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2.5;
  gap: 2rem;
`;

function LabLists({ data }) {
  return (
    <LabsContainer>
      {data.map((data, i) => (
        <LabCard key={data.name} data={data} />
      ))}
    </LabsContainer>
  );
}

export default LabLists;
