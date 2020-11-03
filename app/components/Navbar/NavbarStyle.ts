import styled from 'styled-components';

export const NavbarStyle = styled.nav`
  display: flex;
  border: 1px solid black;
  list-style: none;
  .pf-c-dropdown__menu.pf-m-align-right {
    position: static;
    top: 40px;
  }
`;
export  const LinkStyle = styled.a`
  margin:10px;
  margin-left:10px;
  font-weight:700;
`;

export const Span = styled.span`
  width: 119px;
  height: 35px;
  border-radius: 5px;
  float: right;
  margin-top: -45px;
  margin-right: 163px;
  background-color: #415e78;
`;
export const P = styled.p`
  float: right;
    margin-top: -44px;
    margin-right: 100px;
`;
