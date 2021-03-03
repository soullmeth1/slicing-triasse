import styled from 'styled-components';
import bnr from '../assets/img/img-doctor.svg';

const BannerWrapper = styled.div`
  background-color: var(--whiteBlue);
  position: relative;
  z-index: -1;
  @media only screen and (max-width: 1200px) {
    padding: 0 1rem;
  }
`;

const BannerStyle = styled.div`
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 850px) {
    flex-direction: column;
  }
  h2 {
    margin: 1rem 0 0.5rem;
  }
  h2,
  p {
    color: var(--darkBlue);
  }
`;

function Banner() {
  return (
    <BannerWrapper>
      <BannerStyle className="container">
        <div>
          <h2>Pilih Jenis Pemeriksaan & Lab Terdekat</h2>
          <p>
            Dapatkan biaya cek kesehatan lebih murah di Laboratorium terbaik
          </p>
        </div>
        <img src={bnr} alt="Triasse Lab" />
      </BannerStyle>
    </BannerWrapper>
  );
}

export default Banner;
