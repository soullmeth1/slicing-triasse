import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';
import formatMoney from '../utils/formatMoney';
import getDiscount from '../utils/getDiscount';

const LabCardStyle = styled.div`
  background-color: var(--white);
  border-radius: 10px;
  box-shadow: var(--shadowNav);
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  overflow: hidden;
  @media only screen and (max-width: 700px) {
    display: grid;
    grid-template-areas:
      'img info info info info'
      'img price price price price';
    justify-content: stretch;
  }
  @media only screen and (max-width: 495px) {
    font-size: 14px;
  }
  hr {
    margin: 0;
    border: none;
    border-left: 1px solid var(--lightGray);
  }
  img {
    flex: 1;
    width: 100%;
    height: 100%;
    max-width: 150px;
    object-fit: fill;
    object-position: 0;
    @media only screen and (max-width: 780px) {
      grid-area: img;
      min-width: 80px;
    }
  }
`;

const InfoStyle = styled.div`
  padding: 1rem;
  flex: 3;
  @media only screen and (max-width: 780px) {
    flex: 4;
    grid-area: info;
    padding: 0.5rem;
  }
  p {
    color: var(--darkGray);
  }
  h3 {
    color: var(--darkBlue);
  }
  .terms {
    display: flex;
    margin-top: 2rem;
    gap: 1rem;
    align-items: center;
    font-size: 0.9rem;
    @media only screen and (max-width: 780px) {
      margin-top: 0.5rem;
    }
    @media only screen and (max-width: 580px) {
      display: none;
    }
    svg {
      color: var(--orange);
      margin-right: 5px;
    }
    li {
      color: var(--darkGray);
      font-size: 0.9rem;
      margin-left: 1rem;
      @media only screen and (max-width: 600px) {
        margin-left: 0.5rem;
        list-style: none;
      }
    }
  }

  .services {
    display: flex;
    gap: 10px;
    margin-bottom: 1rem;
    @media only screen and (max-width: 780px) {
      margin-bottom: 0.5rem;
    }
    @media only screen and (max-width: 495px) {
      /* display: none; */
      p {
        font-size: 10px !important;
      }
    }
    p {
      padding: 0.3rem 1rem;
      border-radius: 20px;
      color: var(--white);
      font-size: 0.8rem;
      font-weight: bold;
      background-color: var(--royalBlue);
    }
    p:first-child {
      background-color: var(--green);
    }
  }
`;

const PriceStyle = styled.div`
  flex: 1;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  @media only screen and (max-width: 860px) {
    padding: 1rem;
    grid-area: price;
    h2 {
      font-size: 1rem;
    }
  }
  @media only screen and (max-width: 700px) {
    flex-direction: row;
    padding: 0 0.5rem 0.5rem;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
  }
  @media only screen and (max-width: 495px) {
    p {
      font-size: 9px;
    }
  }
`;

function LabCard({ data }) {
  const history = useHistory();

  function hanldeClick() {
    history.push(`/detail/${data?.name}`);
  }

  console.log(data);

  return (
    <LabCardStyle onClick={hanldeClick}>
      <img src={data.imgCard} alt={data.name} />
      <InfoStyle>
        <div className="services">
          {data?.services?.map((val) => (
            <p>{val}</p>
          ))}
        </div>
        <h3>{data?.lab}</h3>
        <p>{data.location}</p>
        <ul className="terms">
          <p>
            <FaStar />
            {data.rating}/5
          </p>
          {data?.terms?.map((val) => (
            <li>{val}</li>
          ))}
        </ul>
      </InfoStyle>
      <hr />
      <PriceStyle>
        <p className="discount">Hemat {data?.discount}%</p>
        <p className="pricedel">
          <del>{formatMoney(data?.price)}</del>
        </p>
        <h2 style={{ color: 'var(--orange)' }}>
          {getDiscount(data?.price, data?.discount)}
        </h2>
      </PriceStyle>
    </LabCardStyle>
  );
}

export default LabCard;
