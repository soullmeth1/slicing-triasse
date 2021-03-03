import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Card from '../../components/Card';
import paket from '../../data/paket';
import formatName from '../../utils/formatName';

const ContentContainerStyle = styled.div`
  display: flex;
  gap: 2rem;
  align-items: flex-start;
  @media only screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

const ContentStyle = styled.div`
  background-color: var(--white);
  border-radius: 5px;
  box-shadow: var(--shadow);
  flex: 3;
  overflow: hidden;
  .mainContent {
    padding: 2rem 3rem;
    @media only screen and (max-width: 900px) {
      padding: 1rem 2rem;
    }
    @media only screen and (max-width: 450px) {
      h1 {
        font-size: 1.8rem;
      }
    }
    h1,
    h2 {
      margin-bottom: 1.5rem;
      color: var(--darkBlue);
    }
    p {
      margin-bottom: 1.5rem;
      color: var(--darkGray);
    }
    ol {
      li {
        margin-left: 1rem;
        &::marker {
          color: var(--darkGray);
        }
      }
    }
  }
  .imgContent {
    max-height: 300px;
    overflow: hidden;
  }
  img {
    width: 100%;
  }
`;

const MainDetailWrapper = styled.div`
  padding: 2rem;
  @media only screen and (max-width: 550px) {
    padding: 1rem;
  }
`;

function Index() {
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    if (id) {
      const result = paket.filter((val) => val.name === id);
      setData(...result);
    }
  }, [id]);

  if (!data) {
    return <h1>Data Not Found..</h1>;
  }

  return (
    <MainDetailWrapper>
      <ContentContainerStyle className="container">
        <ContentStyle>
          <div className="imgContent">
            <img src={data?.imgArticle} alt={data?.name} />
          </div>
          <div className="mainContent">
            <h1>Paket {formatName(data?.name)}</h1>
            <h2>Informasi Detail</h2>
            {data?.info?.map((val, i) => (
              <p key={`${val}${i}`}>{val}</p>
            ))}

            <ol>
              <p>{data?.type?.title}</p>
              {data?.type?.content.map((content, i) => (
                <li key={`${content}${i}`}>
                  <p>{content}</p>
                </li>
              ))}
            </ol>
            <h2>Persiapan</h2>
            <p>{data?.prepare}</p>
          </div>
        </ContentStyle>
        <Card data={data} />
      </ContentContainerStyle>
    </MainDetailWrapper>
  );
}

export default Index;
