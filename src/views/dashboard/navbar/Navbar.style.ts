import { Image, Menu } from "antd";

import styled from "styled-components";
// Styling for the Main Navbar
const Nav = styled.div`
  display: flex;
  padding: 15px 55px;
  justify-content: space-between;
  align-items: center;
  background: transparent;
  color: white;

  /* The background color was white it was showing like border */
  & .ant-anchor-ink:before {
    background-color: transparent;
  }
  /* border after and before the menu */
  & .ant-menu-root {
    border: none;
  }
`;

// Styling for the Navbar Image
const Img = styled(Image)`
  width: 300px;
`;

// Styling for Menu tag
const Menudiv = styled(Menu)`
  flex: 1;
  display: flex;
  background: transparent;
  color: white;
  /* style for menu Items */
  & .ant-menu-item.-item-only-child {
    list-style-type: none;
    cursor: pointer;
    font-size: 17px;
    font-weight: 300;
  }
`;
// styling for searchMenu itmes
const SearchMenu = styled(Menudiv)`
  /* styling for menu icons */
  &.ant-menu-item-icon,
  .ant-menu-item .anticon {
    font-size: 23px;
  }
`;

export { Nav, Img, Menudiv, SearchMenu };
