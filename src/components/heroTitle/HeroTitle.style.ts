import styled from 'styled-components'
const TitleDiv = styled.div`
    /* position: absolute; */
    /* top: 38%;
    left: 5%; */
    width: 777px;
    height: 168px;
    transform: translate(84px, 311px);
    h1{
        color: white;
        font-size: 81px;
        text-shadow: 0px 3px 6px #000000;
        font-weight: 600;
        margin-bottom: 0px;
        line-height: normal;
    }
    /* @media screen and (max-width: 860px) {
        h1{
        font-size: 60px;
        text-shadow: 1px 1px 12px #000000;
    }
    p{
        font-size: 25px;
        font-weight: 200;
        text-shadow: 1px 1px 12px #000000;   
    }
    } */
`
const SubTitleDiv = styled.div`
    width: 549px;
    height: 28px;
    transform: translate(84px, 340px);
 p{
        color: white;
        font-size: 27px;
        font-weight: 200;
        text-shadow: 0px 3px 6px #000000;   

    }
`

export {TitleDiv, SubTitleDiv};