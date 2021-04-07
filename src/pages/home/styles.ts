import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 50px;
  text-align: center;
  max-width: 500px;
  margin: 30px 0;
  line-height: 56px;
  font-family: Montserrat, Arial, Helvetica, sans-serif;
`;

export const Form = styled.form`
  border: 1px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;

  max-width: 500px;
  margin: 0 auto;
  padding: 3rem 0;

  .form-input {
    padding: 0.5rem;
    margin: 25px;
    display: flex;
    flex-direction: column;
    color: #1a1a1a;
    font-size: 20px;
  }
`;

export const Profiles = styled.ul`
  display: flex;
  list-style: none;

  li {
    margin: 1rem;

    a {
      text-decoration: none;
    }
  }
`;
