import styled from 'styled-components';
import theme from '../../styles/themes/light'


export const Container = styled.button`
  height: 40px;
  border-radius: 8px;
  overflow: hidden;
  align-items: center;

  background: ${theme.colors.text};
  border: 1px solid ${theme.colors.purple};
  cursor: pointer;

  display: flex;

  div {
    background: ${theme.colors.purple};
    padding: 0 12px;
    align-self: stretch;
    justify-self: stretch;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  span {
    display: block;
    align-self: center;
    flex: 1;
    padding: 0 16px 0 12px;
    width: 240px;
    font-size: 14px;
    font-weight: 500;
  }
`;
