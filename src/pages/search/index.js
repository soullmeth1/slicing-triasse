import { useEffect, useState } from 'react';
import FilterLabResult from '../../components/FilterLabResult';
import LabLists from '../../components/LabLists';
import SearchLab from '../../components/SearchLab';
import Banner from '../../components/Banner';
import styled from 'styled-components';
import paket from '../../data/paket';

const MainStyle = styled.main`
  padding: 3rem 2rem 5rem;
  @media only screen and (max-width: 550px) {
    padding: 2rem 0.5rem 3rem;
  }
`;

const ContentStyle = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 3rem;
  @media only screen and (max-width: 1050px) {
    flex-direction: column;
  }
`;

function Index() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(paket);
  }, []);
  return (
    <div>
      <Banner />
      <SearchLab />

      <MainStyle className="container">
        <h3 style={{ color: 'var(--darkBlue)', marginBottom: '2rem' }}>
          Filter hasil pencarian
        </h3>
        <ContentStyle>
          <FilterLabResult />
          <LabLists data={data} />
        </ContentStyle>
      </MainStyle>
    </div>
  );
}

export default Index;
