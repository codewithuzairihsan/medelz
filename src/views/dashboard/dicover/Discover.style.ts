import styled from 'styled-components'
import discover from "./dicover.png";
import {Image} from 'antd'
const DiscoverDiv = styled.div`
background: black;
width: 100%;
 >.ant-image{
   display: block;
   margin-top: 80px;
   margin-bottom: 80px;
}
`;

const DiscoverImageDiv = styled(Image)`
background-image: url(${discover});
background-position: center;
background-repeat: no-repeat;
width: 100%;
height: 300px;
margin-top: 20px;
`


export {DiscoverDiv,DiscoverImageDiv};