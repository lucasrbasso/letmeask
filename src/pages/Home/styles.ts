import styled from 'styled-components';
import theme from '../../styles/themes/light'


export const Container = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;
`;

export const Banner = styled.aside`
  flex: 7;
  background-color: ${theme.colors.purple};
  color: ${theme.colors.text};

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
    color: ${theme.colors.background};
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
`;

export const ButtonLogin = styled.button`
  margin-top: 64px;
  height: 50px;
  border-radius: 8px;
  font-weight: 400;
  font-size: 16px;
  background: ${theme.colors.gmail};
  color: ${theme.colors.text};

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
`;

export const Divider = styled.div`
  font-size: 14px;
  color: ${theme.colors.mediumGray};

  margin: 32px 0;
  display: flex;
  align-items: center;

  &::before {
    content: '';
    flex: 1;
    height: 1px;
    background: ${theme.colors.mediumGray};
    margin-right: 16px;
  };

  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: ${theme.colors.mediumGray};
    margin-left: 16px;
  };
`;

export const Form = styled.form`
  input {
    height: 50px;
    width: 100%;
    border-radius: 8px;
    padding: 0 16px;
    background: ${theme.colors.text};
    border: 1px solid ${theme.colors.darkGray};
  }

  button {
    margin-top: 16px;
    width: 100%;
  }
`;
