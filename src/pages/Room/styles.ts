import styled, { css } from 'styled-components';

interface LikeButtonProps {
  isLiked?: boolean;
}

export const Container = styled.div`
  @media (max-width: 1024px) {
    width: 90%;
    padding: 10px;
    margin: 0 auto;
    max-width: 800px;
  }

  @media (max-width: 768px) {
    width: 90%;
    padding: 10px;
    margin: 0 auto;
    max-width: 400px
  }
`;

export const Header = styled.header`
  padding: 24px;
  border-bottom: 1px solid ${props => props.theme.colors.border};
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

  @media (max-width: 768px) {
    > img {
      display: none;
    }
  }
`;

export const Content = styled.main`
  max-width: 800px;
  margin: 0 auto;
  padding-bottom: 20px;

  @media (max-width: 768px) {
    max-width: 400px;
  }
`;

export const RoomTitle = styled.div`
  margin: 32px 0 24px;
  display: flex;
  align-items: center;

  h1 {
    font-family: 'Poppins', sans-serif;
    font-size: 24px;
    color: ${props => props.theme.colors.black};
  }

  span {
    margin-left: 16px;
    background: ${props => props.theme.colors.darkPink};
    border-radius: 9999px;
    padding: 8px 16px;
    color: ${props => props.theme.colors.text};
    font-weight: 500;
    font-size: 14px;

    @media (max-width: 768px) {
      font-size: 10px;
    }
  }

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

export const Form = styled.form`
  textarea {
    width: 100%;
    border: 0;
    padding: 16px;
    border-radius: 8px;
    background: ${props => props.theme.colors.details};
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
    color: ${props => props.theme.colors.black};
    resize: vertical;
    min-height: 130px;
  }

  @media (max-width: 768) {
    min-height: 60px;
    padding: 10px;
  }
`;

export const FormFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;

  > span {
    font-size: 14px;
    color: ${props => props.theme.colors.darkGray};
    font-weight: 500;

    button {
      background: transparent;
      border: none;
      color: ${props => props.theme.colors.purple};
      text-decoration: underline;
      font-size: 14px;
      font-weight: 500px;
    }

    @media (max-width: 768) {
      font-size: 10px;
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
    color: ${props => props.theme.colors.black};
    font-weight: 500;
    font-size: 14px;
  }

  @media (max-width: 768) {
    span {
      display: none;
    }
  }
`;

export const QuestionList = styled.div`
  margin-top: 32px;
`;

export const LikeButton = styled.button<LikeButtonProps>`
  border: 0;
  background: transparent;
  cursor: pointer;
  display: flex;
  align-items: flex-end;

  color: ${props => props.theme.colors.darkGray};
  gap: 8px;

  ${props =>
    props.isLiked &&
    css`
      color: ${props => props.theme.colors.purpleHighlight};

      svg path {
        stroke: ${props => props.theme.colors.purpleHighlight};
      }
    `
  }

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }
`;




