import styled from 'styled-components';
import theme from '../../styles/themes/light';

export const Container = styled.button`
  margin-top: 16px;
  width: 100%;
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
