import styled from 'styled-components';
import contacts from '../data/contacts';

const ContactStyle = styled.div`
  display: flex;
  align-items: center;
  p {
    color: var(--darkGray);
    margin-left: 0.2rem;
  }

  svg > path {
    stroke: var(--royalBlue);
  }
`;

const ContactWrapper = styled.div`
  background-color: var(--lightBlue);
  padding: 0.5rem;
  font-size: 14px;
  border-bottom: 1px solid var(--borderBottom);
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const ContactContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 2rem;
`;

function ContactInfo() {
  return (
    <ContactWrapper>
      <ContactContainer className="container">
        {contacts.map((data, i) => (
          <ContactStyle key={`${data.content}${i}${data.color}`}>
            <data.logo color={data.color} size={18} />
            <p>{data.content}</p>
          </ContactStyle>
        ))}
      </ContactContainer>
    </ContactWrapper>
  );
}

export default ContactInfo;
