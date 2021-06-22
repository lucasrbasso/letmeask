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

  h2 {
    font-size: 24px;
    color: ${theme.colors.black};
    margin: 64px 0 24px;
    font-family: 'Poppins', sans-serif
  }

  p {
    font-size: 14px;
    color: ${theme.colors.darkGray};
    margin-top: 16px;

    a {
      color: ${theme.colors.darkPink};
    }
  }
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
`;
