/* eslint-disable jsx-a11y/anchor-is-valid */

import styled from 'styled-components';
import { description, medsos, navFooter } from '../data/footer';

const FooterWrapper = styled.div`
  background-color: var(--deepBlue);
  padding: 4rem 8rem;
  display: flex;
  gap: 4rem;
  border-bottom: 1px solid var(--blue);
  @media only screen and (max-width: 1300px) {
    gap: 3rem;
    padding: 4rem;
  }
  @media only screen and (max-width: 1150px) {
    flex-direction: column;
  }
  @media only screen and (max-width: 550px) {
    padding: 2rem;
  }
  p {
    color: var(--white);
    max-width: 500px;
  }
  a {
    color: var(--white);
    :hover {
      color: var(--brightBlue);
    }
  }
  ul {
    list-style: none;
    li {
      margin-bottom: 8px;
    }
  }
  div > :nth-child(2) {
    padding-top: 2rem;
  }
`;

const ListStyle = styled.div`
  display: flex;
  gap: 4rem;
  div:nth-child(2) {
    padding-top: 0;
  }
  div:nth-child(3) {
    max-width: 200px;
  }
  @media only screen and (max-width: 1150px) {
    gap: 2rem;
  }
  @media only screen and (max-width: 680px) {
    flex-direction: column;
  }
  @media only screen and (max-width: 495px) {
    display: none;
  }
`;

const CopyStyles = styled.div`
  background-color: var(--nightBlue);
  text-align: center;
  font-size: 0.8rem;
  padding: 1.5rem;
  p {
    color: var(--white);
  }
`;

const MedsosStyle = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  max-width: 200px;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background-color: var(--white);
    color: var(--deepBlue);
  }
  @media only screen and (max-width: 495px) {
    max-width: 100%;
    display: flex;
    justify-content: space-around;
  }
`;

const SubscribeStyle = styled.div`
  background-color: var(--brightBlue);
  padding: 4rem 2rem;
  @media only screen and (max-width: 550px) {
    padding: 2rem;
  }
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    @media only screen and (max-width: 900px) {
      flex-direction: column;
    }
  }
  p {
    color: var(--white);
    font-size: 1.5rem;
  }
  fieldset {
    border: none;
    display: flex;
    align-items: center;
    border-radius: 5px;
    overflow: hidden;
    input {
      border: none;
      padding: 1rem 1rem;
      width: 250px;
      font-size: 0.9rem;
      outline: none;
      @media only screen and (max-width: 450px) {
        width: 100%;
      }
    }
    button {
      background-color: var(--orange);
      border: none;
      padding: 1rem;
      color: var(--white);
      font-size: 0.9rem;
      cursor: pointer;
    }
  }
`;

function Footer() {
  return (
    <footer>
      <SubscribeStyle>
        <div className="container">
          <p>Berlangganan newsletter spesial promo dan penawaran terbaik</p>
          <fieldset>
            <input type="text" placeholder="Masukan email anda" />
            <button>Berlangganan</button>
          </fieldset>
        </div>
      </SubscribeStyle>
      <FooterWrapper>
        <div>
          <img src={description.img} alt="Triasse Logo" />
          <p>{description.desc}</p>
        </div>
        <ListStyle>
          {navFooter.map((data, i) => (
            <div style={{ minWidth: '150px' }} key={`${data}${i}`}>
              <p style={{ fontWeight: 500 }}>{data.label}</p>
              {data.lists ? (
                <ul>
                  {data.lists.map((val, i) => (
                    <li key={`${val}${i}`}>
                      {val.includes('WIB') ? (
                        <p>{val}</p>
                      ) : (
                        <a href="#">{val}</a>
                      )}
                    </li>
                  ))}
                </ul>
              ) : (
                <p>{data.desc}</p>
              )}
            </div>
          ))}
        </ListStyle>
        <div style={{ minWidth: '150px' }}>
          <p style={{ fontWeight: 500 }}>Media Sosial</p>
          <MedsosStyle>
            {medsos.map((val, i) => (
              <li key={`${val}${i}`}>
                <a href={val.href}>
                  <val.img />
                </a>
              </li>
            ))}
          </MedsosStyle>
        </div>
      </FooterWrapper>
      <CopyStyles>
        <p>
          Copyright &copy; 2021 PT. Digital Medika Informatik. All rights
          reserved.
        </p>
      </CopyStyles>
    </footer>
  );
}

export default Footer;
