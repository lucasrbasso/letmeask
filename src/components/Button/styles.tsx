import styled, { css } from 'styled-components';
import theme from '../../styles/themes/light';

interface ContainerProps {
  isOutlined?: boolean
};

export const Container = styled.button<ContainerProps>`
  height: 50px;
  border-radius: 8px;
  font-weight: 400;
  font-size: 16px;
  background: ${theme.colors.purple};
  color: ${theme.colors.text};
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
      border: 1px solid ${theme.colors.purple};
      color: ${theme.colors.purple};
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
