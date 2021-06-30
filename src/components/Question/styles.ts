import styled, { css } from 'styled-components';

interface QuestionProps {
  isAnswered?: boolean
  isHighlighted?: boolean;
}

export const Container = styled.div<QuestionProps>`
  background: ${props => props.theme.colors.details};
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  padding: 24px;

  & + & {
    margin-top: 8px;
  }

  p {
    color: ${props => props.theme.colors.black};
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
      background-color: ${props => props.theme.colors.highlight};
      border: 1px solid ${props => props.theme.colors.purpleHighlight};
    `
  }

${props =>
    props.isAnswered &&
    css`
      background-color: ${props => props.theme.colors.answered};
      color: ${props => props.theme.colors.purple};
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
    color: ${props => props.theme.colors.darkGray};
    font-size: 14px;
  }

  ${props =>
    props.isHighlighted &&
    css`
      span {
        color: ${props => props.theme.colors.black};
      }
    `}
`;
