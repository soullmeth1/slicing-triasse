import styled from 'styled-components';

const BtnStyle = styled.button`
  background-color: var(--orange);
  border-radius: 3px;
  color: var(--white);
  border: none;
  cursor: pointer;
  padding: 0.8rem 3rem;
  /* width: 100%; */
  font-size: 1rem;
`;

function Button({ title }) {
  return <BtnStyle>{title}</BtnStyle>;
}

export default Button;
