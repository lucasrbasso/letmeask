import styled, { css } from 'styled-components';
import theme from '../../styles/themes/light'

interface FuncButtonProps {
  isHighlighted?: boolean;
}

export const Container = styled.div`
    @media (max-width: 1024px) {
    width: 90%;
    padding: 10px;
    margin: 0 auto;
    max-width: 800px;
  }

  @media (max-width: 768px) {
    width: 100%;
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
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
  }

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

  @media (max-width: 768px) {
    > img {
      display: none;
    }
  }
`;

export const Content = styled.main`
  max-width: 800px;
  width: 90%;
  margin: 0 auto;

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
      font-size: 9px;
      padding: 8px 8px;
    }
  }

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

export const QuestionList = styled.div`
  margin-top: 32px;
`;

export const FuncButton = styled.button<FuncButtonProps>`
  border: 0;
  background: transparent;
  cursor: pointer;
  display: flex;
  align-items: flex-end;

  color: ${theme.colors.darkGray};

  &:hover:not(:disabled) {
    color: ${props => props.theme.colors.purpleHighlight};

    svg path {
      stroke: ${props => props.theme.colors.purpleHighlight};
    }
  }

  ${props =>
    props.isHighlighted &&
    css`
      color: ${props => props.theme.colors.purpleHighlight};

      svg path {
        stroke: ${props => props.theme.colors.purpleHighlight};
      }
    }
    `
  }

  &:disabled {
    cursor: default;
  }

  gap: 8px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;

  @media (max-width: 768px) {
    gap: 5px;
  }
`;

