import styled from 'styled-components';

export const Container = styled.button`
  height: 40px;
  border-radius: 8px;
  overflow: hidden;
  align-items: center;

  background: transparent;
  border: 1px solid ${props => props.theme.colors.purple};
  color: ${props => props.theme.colors.black};
  cursor: pointer;

  display: flex;

  div {
    background: ${props => props.theme.colors.purple};
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

  @media (max-width: 1024px) {
    font-size: 13px;
  }

  @media (max-width: 720px) {
    span {
      display: none;
    }
  }
`;
