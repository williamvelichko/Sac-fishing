import React from "react";
import styled from "styled-components";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
  return (
    <FooterContainer>
      <div className="box">
        <div className="box2">
          <h2 className="title">Sac-Fishing</h2>
          <h5>Sac-Fishing @ 2023</h5>
        </div>
      </div>
      <div className="box">
        <div className="box2">
          <h4>
            <LocationOnIcon />
            Sacramento, California
          </h4>
          <h4>
            <LocalPhoneIcon />
            (916) 882-6630
          </h4>
          <h4>
            <EmailIcon />
            williamvelichko2003@gmail.com
          </h4>
        </div>
      </div>
      <div className="box">
        <b>
          <h3>About</h3>
        </b>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className="icons">
          <a href="https://github.com/williamvelichko">
            <GitHubIcon />
          </a>
          <a href="https://www.linkedin.com/in/williamvelichko/">
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.footer`
  font-family: Fira Sans;
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  text-align: center;
  width: 100%;
  background-color: #a3b18a;

  .box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    width: 30%;
    a {
      color: white;
    }
    h2 {
      font-size: 1.9rem;
      font-family: "Rowdies";
    }
    h5 {
      font-family: "Rowdies";
    }
    h4 {
      display: flex;
      align-items: center;
    }
    p {
      font-size: 0.8rem;
    }
    .box2 {
      display: flex;
      flex-direction: column;
    }
  }
  @media (max-width: 850px) {
    flex-direction: column;
    .box {
      width: 90%;
      border-bottom: 1px solid white;
      justify-content: center;
      margin: auto;
      margin-bottom: 15px;
    }
  }
  @media (max-width: 420px) {
    .box {
      width: 90%;
      border-bottom: 1px solid white;
      justify-content: center;
      margin: auto;
      margin-bottom: 15px;
      h2 {
        font-size: 1.6rem;
      }
    }
    flex-direction: column;
    color: green;
  }
`;
