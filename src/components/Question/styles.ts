import styled from 'styled-components';
import theme from '../../styles/themes/light';

export const Container = styled.div`
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
`;

export const UserInfo = styled.footer`
  display: flex;
`;

export const UserInfoContent = styled.div`
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
`;
