import styled from "styled-components";
import img from '../Login/LoginBackground.png'

// Style of Login background
const LoginBackGround = styled.div`
    width: 100vw;
    min-height: 100vh;
    background-image: linear-gradient(rgba(15,9,30,0.5),rgba(4,9,30,0.5)), url(${img});
    background-position: center;
    position: relative;

h1, h5{
    color: #fff;
    text-align: center;
    margin-top: 10px;
    font-weight: 600;
    margin-bottom: 0.5em;
}
@media(max-width: 765px){
         h1{ 
            font-size: 24px;

         }}
`;

// Container Tag contains Form
 const Container = styled.div`
    margin: auto;
    top: 12px;
    height: 70vh;
    width: 50%;
    margin-top: -10px;
`;


// Email Input Style
 const InputEmail = styled.input`
 background: rgba(48, 48, 48, 1);
    border: 2px solid rgba(48, 48, 48, 1);
    width: 100%;
    height: 40px;
    color: white;
    border-radius: 20px;
    transition: 0.5s ease-in-out;
    padding-left: 50px;
    ::placeholder{
        font-weight: 500;
    }

    &:hover{
        border: 2px solid rgba(108, 122, 137, 1);
    }
`;
// Passwrod Input Style
 const InputPassword = styled.input`
    background: rgba(48, 48, 48, 1);
    border: 2px solid rgba(48, 48, 48, 1);
    width: 100%;
    color: white;
    height: 40px;
    border-radius: 20px;
    transition: 0.5s ease-in-out;
    padding-left: 50px;
    &:hover{
        border: 2px solid rgba(108, 122, 137, 1);
    }
`
// CheckBox Parent tag and sub tags style
 const ParentCheckBox = styled.div`
    & .ant-checkbox-wrapper-in-form-item{
        color: white;
        letter-spacing: 1px;
    }
    & .ant-checkbox-inner{
        background: transparent;
        border: 1px solid #d9d9d9;
    }
    & .ant-checkbox-input:focus .ant-checkbox-inner, .ant-checkbox-wrapper:hover .ant-checkbox-inner, .ant-checkbox:hover .ant-checkbox-inner{
        border: 1px solid #d9d9d9;
    }
`
 const Row = styled.div`
    & .ant-row {
        display: flex;
    justify-content: center;
    }
`
const Anchor = styled.a`
    float: right;
    color: #d9d9d9;
    text-decoration: underline;
    & :hover{
        color: #d9d9d9;
    }
`
 const StyledButton = styled.button`
    & .ant-btn{
        /* border: 2px solid #198754; */
        /* color: white; */
        /* background: #198754; */
        /* border-radius: 20px; */
        /* transition: 0.5s ease-in-out; */
        /* padding: 5px 20px; */
    }
    background: #198754;
&:hover{
    border: 2px solid white;
}
`


export { LoginBackGround, Container, InputEmail, InputPassword, ParentCheckBox, Row, StyledButton, Anchor};