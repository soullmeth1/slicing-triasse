import { FaMapMarkerAlt } from 'react-icons/fa';
import { GrMap } from 'react-icons/gr';
import { RiStethoscopeLine } from 'react-icons/ri';
import { AiFillCloseSquare } from 'react-icons/ai';
import styled from 'styled-components';
import Button from './Button';

const FormSearchStyle = styled.form`
  display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  @media only screen and (max-width: 770px) {
    grid-template-columns: 1fr;
  }
  fieldset {
    border: none;
    display: flex;
    flex-direction: column;
    position: relative;
    label {
      font-size: 0.8rem;
      color: var(--darkGray);
      margin-bottom: 0.5rem;
    }
    input {
      padding: 0.8rem 0.5rem 0.8rem 2.5rem;
      border: 1px solid var(--lightGray);
      border-radius: 2px;
    }
    svg {
      position: absolute;
      bottom: 0.8rem;
      left: 1rem;
      color: var(--royalBlue);
      font-size: 1.2rem;
      path {
        stroke: var(--royalBlue);
      }
    }
  }
`;

const FormWrapper = styled.div`
  padding: 2rem;
  background-color: var(--white);
  border-bottom: 2px solid var(--royalBlue);
  @media only screen and (max-width: 550px) {
    padding: 1rem;
  }
`;

const ListFilterStyle = styled.div`
  display: flex;
  margin-top: 1.5rem;
  gap: 2rem;
  @media only screen and (max-width: 560px) {
    flex-direction: column;
  }
  ul {
    flex: 1;
    display: flex;
    list-style: none;
    gap: 0.5rem;
    flex-wrap: wrap;
    li {
      background-color: var(--lightGreen);
      color: var(--darkGreen);
      padding: 0.5rem 1rem;
      white-space: nowrap;
      font-size: 1rem;
      display: flex;
      align-items: center;
      svg {
        margin-left: 0.5rem;
        cursor: pointer;
        font-size: 1.2rem;
      }
    }
    button {
      font-size: 1rem;
      border: 1px solid var(--borderBottom);
      padding: 0.5rem 1rem;
      color: var(--darkGray);
      cursor: pointer;
    }
  }
  button {
    align-self: flex-end;
  }
`;

function SearchLab() {
  return (
    <FormWrapper>
      <div className="container">
        <FormSearchStyle>
          <fieldset>
            <label htmlFor="provinsi">Provinsi</label>
            <input list="provinsi" name="provinsi" placeholder="DKI Jakarta" />
            <FaMapMarkerAlt />
            <datalist id="provinsi">
              <option value="FAIQ" />
              <option value="FATIH" />
            </datalist>
          </fieldset>
          <fieldset>
            <label htmlFor="provinsi">Kabupaten</label>
            <input
              list="kabupaten"
              name="kabupaten"
              placeholder="Jakarta Pusat"
            />
            <GrMap />
            <datalist id="kabupaten">
              <option value="FAIQ" />
              <option value="FATIH" />
            </datalist>
          </fieldset>
          <fieldset>
            <label htmlFor="paket">Paket & jenis pemeriksaan</label>
            <input list="paket" name="paket" placeholder="Pap Smear" />
            <RiStethoscopeLine />
            <datalist id="paket">
              <option value="FAIQ" />
              <option value="FATIH" />
            </datalist>
          </fieldset>
        </FormSearchStyle>
        <ListFilterStyle>
          <ul>
            <li>
              Paket Skrining Diabetes Mellitus <AiFillCloseSquare />
            </li>
            <li>
              Glukosa Puasa* <AiFillCloseSquare />
            </li>
            <li>
              Cholesterol (kolesterol) Total* <AiFillCloseSquare />
            </li>
            <li>
              Cholesterol (kolesterol) HDL* <AiFillCloseSquare />
            </li>
            <li>
              Insulin <AiFillCloseSquare />
            </li>
            <li>
              Pap Smear <AiFillCloseSquare />
            </li>
            <button>Hapus Semua</button>
          </ul>
          <Button title="Cari Lab" />
        </ListFilterStyle>
      </div>
    </FormWrapper>
  );
}

export default SearchLab;
