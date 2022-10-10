import React from "react";
import { Img } from "../navbar/Navbar.style";
import { FooterDiv, FooterImage } from "./Footer.style";

const Footer = () => {
  return (
    <>
      <FooterDiv>
        <FooterImage src="medelz_logo.png" alt="Medelz" preview={false} />
      </FooterDiv>
    </>
  );
};

export default Footer;
