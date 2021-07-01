import styled from 'styled-components';


export const Container = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;
`;

export const Banner = styled.aside`
  flex: 7;
  background-color: ${props => props.theme.colors.secondaryBackground};
  color: ${props => props.theme.colors.text};

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 120px 80px;

  img {
    max-width: 320px;
  }

  strong {
    font: 700 36px Poppins, sans-serif;
    line-height: 42px;
    margin-top: 16px;
  }

  p {
    font-size: 24px;
    line-height: 32px;
    margin-top: 16px;
    color: ${props => props.theme.colors.text};
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;



export const Main = styled.main`
  flex: 8;

  padding: 0 32px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 320px;
  align-items: stretch;
  text-align: center;

  > img {
    align-self: center;
  }

  @media (max-width: 1024px) {
    width: 90%;
  }
`;

export const ButtonLogin = styled.button`
  margin-top: 64px;
  height: 50px;
  border-radius: 8px;
  font-weight: 400;
  font-size: 16px;
  background: ${props => props.theme.colors.gmail};
  color: ${props => props.theme.colors.text};

  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  transition: filter 0.2s;

  img {
    margin-right: 8px;
  }

  &:hover {
    filter: brightness(0.9);
  }

  @media (max-width: 320px) {
    img {
      display: none;
    }
  }
`;

export const Divider = styled.div`
  font-size: 14px;
  color: ${props => props.theme.colors.mediumGray};

  margin: 32px 0;
  display: flex;
  align-items: center;

  &::before {
    content: '';
    flex: 1;
    height: 1px;
    background: ${props => props.theme.colors.mediumGray};
    margin-right: 16px;
  };

  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: ${props => props.theme.colors.mediumGray};
    margin-left: 16px;
  };
`;

export const Form = styled.form`
  input {
    height: 50px;
    width: 100%;
    border-radius: 8px;
    padding: 0 16px;
    background: ${props => props.theme.colors.details};
    border: 1px solid ${props => props.theme.colors.formBorder};
    color: ${props => props.theme.colors.black};
  }

  button {
    margin-top: 16px;
    width: 100%;
  }
`;
