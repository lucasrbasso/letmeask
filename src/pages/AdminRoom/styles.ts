import styled from 'styled-components';
import theme from '../../styles/themes/light'


export const Container = styled.div``;

export const Header = styled.header`
  padding: 24px;
  border-bottom: 1px solid ${theme.colors.border};
`;

export const HeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > img {
    max-height: 45px;
  }

  > div {
    display: flex;
    gap: 16px;

    button {
      height: 40px;
      font-weight: 500;
    }
  }
`;

export const Content = styled.main`
  max-width: 800px;
  margin: 0 auto;
`;

export const RoomTitle = styled.div`
  margin: 32px 0 24px;
  display: flex;
  align-items: center;

  h1 {
    font-family: 'Poppins', sans-serif;
    font-size: 24px;
    color: ${theme.colors.black};
  }

  span {
    margin-left: 16px;
    background: ${theme.colors.darkPink};
    border-radius: 9999px;
    padding: 8px 16px;
    color: ${theme.colors.text};
    font-weight: 500;
    font-size: 14px;
  }
`;

export const Form = styled.form`
  textarea {
    width: 100%;
    border: 0;
    padding: 16px;
    border-radius: 8px;
    background: ${theme.colors.details};
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
    resize: vertical;
    min-height: 130px;
  }
`;

export const FormFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;

  > span {
    font-size: 14px;
    color: ${theme.colors.darkGray};
    font-weight: 500;

    button {
      background: transparent;
      border: none;
      color: ${theme.colors.purple};
      text-decoration: underline;
      font-size: 14px;
      font-weight: 500px;
    }
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }

  span {
    margin-left: 8px;
    color: ${theme.colors.black};
    font-weight: 500;
    font-size: 14px;
  }
`;

export const QuestionList = styled.div`
  margin-top: 32px;
`;

export const FuncButton = styled.button`
  border: 0;
  background: transparent;
  cursor: pointer;
  display: flex;
  align-items: flex-end;

  color: ${theme.colors.darkGray};
  gap: 8px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;




