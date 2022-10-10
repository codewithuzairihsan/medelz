import { Layout } from 'antd';
import img from "./Dashboard.png";
import styled from "styled-components";

const Main = styled.div`
  background-image: url(${img});
  min-height: 768px;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  background-size: cover;
`;
const MainLayout = styled(Layout)`
>.ant-layout{
  background: black;
}
`;
const MainNavbarLayout =styled(Layout)`
`;
const CompetitionLayout = styled(Layout)`
`;
const CategoryLayout = styled(Layout)`
`;
const DiscoverLayout = styled(Layout)`
`;
const FooterLayout = styled(Layout)`
`;



export { Main,DiscoverLayout, MainLayout,MainNavbarLayout,CompetitionLayout,CategoryLayout,FooterLayout};
