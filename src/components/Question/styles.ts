import styled, { css } from 'styled-components';
import theme from '../../styles/themes/light';

interface QuestionProps {
  isAnswered?: boolean
  isHighlighted?: boolean;
}

export const Container = styled.div<QuestionProps>`
  background: ${theme.colors.details};
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  padding: 24px;

  & + & {
    margin-top: 8px;
  }

  p {
    color: ${theme.colors.black};
  }

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 24px;
  }

  ${props =>
    props.isHighlighted &&
    css`
      background-color: ${theme.colors.highlight};
      border: 1px solid ${theme.colors.purple};
    `
  }

${props =>
    props.isAnswered &&
    css`
      background-color: ${theme.colors.lightGray};
      color: ${theme.colors.purple};
    `
  }
`;

export const UserInfo = styled.footer`
  display: flex;
`;

export const UserInfoContent = styled.div<QuestionProps>`
    display: flex;
    align-items: center;

    img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }

  span {
    margin-left: 8px;
    color: ${theme.colors.darkGray};
    font-size: 14px;
  }

  ${props =>
    props.isHighlighted &&
    css`
      span {
        color: ${theme.colors.black};
      }
    `}
`;
