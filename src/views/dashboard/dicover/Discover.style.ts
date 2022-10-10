import { Button } from 'antd';
import styled from 'styled-components'
import discover from "./dicover.png";
// import {Image} from 'antd'
const DiscoverDiv = styled.div`
background-image: url(${discover});
background-repeat:no-repeat;
background-size:cover;
background-position:center;
min-height: 264px;
margin-top: 80px;
margin-bottom: 80px;
`;

const TitleDiv = styled.div`
   display: inline-block;
   transform: translate(76px,66px);
    >h1{
        color: white;
        font-size: 49px;
        font-weight: bold;
        margin-bottom: 0;
    }
    >p{
        margin-top: none;
        color: white;
        font-size: 24px;
        font-weight: 300;
    }
`;

const DiscoverButton = styled(Button)`
  background: transparent;
  color: white;
  border: 2px solid white;
  font-size: 23px;
  font-weight: 200;
  height: 50px;
  float: right;
  transform: translate(-100px,100px);
  > span {
    padding: 0px 25px;
  }
`;

export {DiscoverDiv,TitleDiv,DiscoverButton};