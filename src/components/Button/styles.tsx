import styled, { css } from 'styled-components';

interface ContainerProps {
  isOutlined?: boolean
};

export const Container = styled.button<ContainerProps>`
  height: 50px;
  border-radius: 8px;
  font-weight: 400;
  font-size: 16px;
  background: ${props => props.theme.colors.purple};
  color: ${props => props.theme.colors.text};
  padding: 0 32px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  transition: filter 0.2s;

  ${props =>
    props.isOutlined &&
    css`
      background: transparent;
      border: 1px solid ${props => props.theme.colors.purple};;
      color: ${props => props.theme.colors.purple};;
  `}

  img {
    margin-right: 8px;
  }

  &:not(:disabled):hover {
    filter: brightness(0.9);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
