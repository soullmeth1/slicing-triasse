import styled from 'styled-components';

const FilterWrapper = styled.div`
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  /* max-width: 300px; */
  flex: 1;
  align-self: flex-start;
  box-shadow: var(--shadowNav);
  border-radius: 5px;
  hr {
    margin: 0 !important;
  }
  @media only screen and (max-width: 1050px) {
    flex-direction: row;
    align-self: stretch;
    div {
      flex: 1;
      div {
        display: inline-block;
        &:nth-child(2) {
          margin-right: 2rem;
        }
      }
    }
  }
`;

const FilterContainer = styled.div`
  padding: 2rem;
  @media only screen and (max-width: 1050px) {
    padding: 1rem;
  }
  h4 {
    color: var(--darkBlue);
    margin-bottom: 1rem;
  }
  input {
    margin-right: 10px;
    padding: 5px;
  }
  label {
    color: var(--darkGray);
    font-size: 0.8rem;
  }
  > div:nth-child(2) {
    margin-bottom: 0.5rem;
  }
`;

function FilterLabResult() {
  return (
    <FilterWrapper>
      <FilterContainer>
        <h4>Harga</h4>
        <div>
          <input type="checkbox" name="lowtohigh" />
          <label htmlFor="lowtohigh">Terendah - tertinggi</label>
        </div>
        <div>
          <input type="checkbox" name="hightolow" />
          <label htmlFor="hightolow">Tertinggi - terendah</label>
        </div>
      </FilterContainer>
      <hr />
      <FilterContainer>
        <h4>Jenis Layanan</h4>
        <div>
          <input type="checkbox" name="homeservice" />
          <label htmlFor="homeservice">Home Service</label>
        </div>
        <div>
          <input type="checkbox" name="onsite" />
          <label htmlFor="onsite">Datang ke Lab</label>
        </div>
      </FilterContainer>
    </FilterWrapper>
  );
}

export default FilterLabResult;
