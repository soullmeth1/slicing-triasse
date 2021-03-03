/* eslint-disable jsx-a11y/anchor-is-valid */

import styled from 'styled-components';
import Button from './Button';
import { FaMapMarkerAlt, FaStar } from 'react-icons/fa';
import getDiscount from '../utils/getDiscount';
import formatMoney from '../utils/formatMoney';
import formatName from '../utils/formatName';

const CardStyle = styled.div`
  padding: 2rem;
  background-color: var(--white);
  border-radius: 5px;
  flex: 1;
  box-shadow: var(--shadow);
  display: flex;
  flex-direction: column;
  h2,
  h3 {
    color: var(--darkBlue);
  }

  ul {
    li {
      color: var(--darkGray);
      margin-left: 1rem;
      &:first-child {
        margin-bottom: 0.5rem;
      }
    }
  }
`;

const PriceStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    margin: 1rem 0;
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
`;

const LabStyle = styled.div`
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  @media only screen and (max-width: 1100px) {
    flex-direction: column;
  }
  svg {
    margin-right: 5px;
  }
  img {
    width: 80px;
    object-fit: fill;
    border-radius: 10px;
  }
  p {
    color: var(--darkGray);
    margin: 0.5rem 0;
  }
  .rate {
    display: flex;
    align-items: center;
    svg {
      color: var(--orange);
    }
  }
  a {
    color: var(--royalBlue);
    display: flex;
    align-items: center;

    &:hover {
      color: var(--red);
    }
  }
`;

function Card({ data }) {
  console.log(data);
  return (
    <CardStyle>
      <h2>Paket {formatName(data?.name)}</h2>
      <hr />
      <LabStyle>
        <img src={data?.img} alt={data?.name} />
        <div>
          <h3>{data?.lab}</h3>
          <p className="rate">
            <FaStar />
            {data?.rating}
          </p>
          <p>{data?.location}</p>
          <a href="#">
            <FaMapMarkerAlt />
            Lihat Peta
          </a>
        </div>
      </LabStyle>
      <hr />
      <ul>
        {data?.terms?.map((val) => (
          <li>{val}</li>
        ))}
      </ul>
      <hr />
      <PriceStyle>
        <div>
          <p className="discount">Hemat {data?.discount}%</p>
          <p className="pricedel">
            <del>{formatMoney(data?.price)}</del>
          </p>
        </div>
        <h2 style={{ color: 'var(--royalBlue)' }}>
          {getDiscount(data.price, data.discount)}
        </h2>
      </PriceStyle>
      <Button title="Pesan Sekarang" />
    </CardStyle>
  );
}

export default Card;
