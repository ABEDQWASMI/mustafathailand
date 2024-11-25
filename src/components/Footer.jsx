import { Heading } from "@chakra-ui/react";
import React from "react";
import { BsInstagram } from "react-icons/bs";
import { BiLogoLinkedin } from "react-icons/bi";
import { FaTiktok } from "react-icons/fa";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div id='footer'>
      <div className='footerContainer'>
        <div className='textPart'>
          <Heading>mustafa thailand</Heading>
          <span>
          Discover the world, one unforgettable journey at a time with mustafathailand
          </span>
        </div>
        <div className='socialMedia'>
          <a href="https://www.instagram.com/mostafabashite/profilecard/?igsh=MXFnMW5ydG1ja20wbg==" target="_blank" rel="noopener noreferrer">
            <BsInstagram />
          </a>
          <a href="https://www.linkedin.com/company/leapthelimit/" target="_blank" rel="noopener noreferrer">
            <BiLogoLinkedin />
          </a>
          <a href="https://www.tiktok.com/@mustafathailand1?_r=1&_d=edhmbml0aa63ka&sec_uid=MS4wLjABAAAA-N186CxFCLfMoz2Dw6gPJdcJMpjurOce_lca3VW-av2W3E4iBjwxXVIqj-usLaM3&share_author_id=6749812892504196102" target="_blank" rel="noopener noreferrer">
            <FaTiktok />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
