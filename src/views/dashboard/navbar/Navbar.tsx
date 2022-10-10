import { Anchor, Avatar, Col, Row } from "antd";
import React from "react";
import { Img, Menudiv, SearchMenu } from "./Navbar.style";
import { Nav } from "./Navbar.style";
import { SearchOutlined, MenuOutlined, UpOutlined } from "@ant-design/icons";
import MenuItem from "antd/lib/menu/MenuItem";
// import { Competition } from "../competition/Competition";
function Navbar() {
  const { Link } = Anchor;
  return (
    <>
      <Row>
        <Nav>
          <Col>
            <Anchor affix={false}>
              <Link
                href="/"
                title={
                  <Img src="medelz_logo.png" alt="Medelz_log" preview={false} />
                }
              ></Link>
            </Anchor>
          </Col>
          <Col offset={4}>
            <Menudiv>
              <MenuItem key="Competition" className="profile-item">
                Competition
              </MenuItem>
              <MenuItem key="Categories" className="profile-item">
                Categories
              </MenuItem>
              <MenuItem key="Forums" className="profile-item">
                Forums
              </MenuItem>
              <MenuItem key="Blogs" className="profile-item">
                Blogs
              </MenuItem>
              <MenuItem key="Register" className="profile-item">
                Register
              </MenuItem>
            </Menudiv>
          </Col>
          <Col offset={5}>
            <SearchMenu>
              <MenuItem key="Search">
                <SearchOutlined size={3} />
              </MenuItem>
              <MenuItem>
                <Avatar src="https://joeschmoe.io/api/v1/random"></Avatar>
              </MenuItem>
              <MenuItem key="up">
                <UpOutlined />
              </MenuItem>
              <MenuItem key="MenuOutlined">
                <MenuOutlined />
              </MenuItem>
            </SearchMenu>
          </Col>
        </Nav>
      </Row>
    </>
  );
}

export default Navbar;
