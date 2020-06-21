import React from "react";
import Social from "./Social";
import styled from "styled-components";

const AboutStyle = styled.div`
  text-align: center;
`;

const AboutAvatar = styled.div`
  padding: 2em 0 0 0;
`;

const AboutImg = styled.img`
  border-radius: 100%;
  width: 160px;
  height: 160px;
  border: 2px solid #000080;
  margin: 0 auto;
  display: block;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.6);
`;

const AboutName = styled.div`
  text-align: center;
`;

const AboutH2 = styled.h2`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  letter-spacing: 1.2px;
  margin: 0.5em 0 0 0;
  color: #0000ff;
`;

const AboutProfession = styled.p`
  margin: 0.2em 0 1em 0;
  letter-spacing: 1.6px;
  font-weight: 300;
  color: #000033;
`;

const AboutBio = styled.p`
  font-size: 1em;
  font-weight: 300;
  color: #202020;
`;

const AboutLocation = styled.p`
  font-size: 1em;
  font-weight: 400;
  color: #202020;
`;

//Return implicito
const About = ({ avatar, name, profession, bio, address, social }) => (
  <AboutStyle>
    <div className="About-container">
      <AboutAvatar>
        <figure>
          <AboutImg src={avatar} alt={name} />
        </figure>
      </AboutAvatar>
      <AboutName>
        <AboutH2>{name}</AboutH2>
      </AboutName>
      <div className="About-profession">
        <AboutProfession>{profession}</AboutProfession>
      </div>
      <div>
        <a href="https://firebasestorage.googleapis.com/v0/b/bayona-me.appspot.com/o/CVLatest.pdf?alt=media&token=cbfbd5b6-b38c-45b0-9bd6-79e2c6e1171b">
          Curriculum Vitae
        </a>
      </div>
      <div className="About-desc">
        <AboutBio>{bio}</AboutBio>
      </div>
      <div className="About-location">
        <AboutLocation>{address}</AboutLocation>
      </div>
      <div className="About-social">
        <Social social={social} />
      </div>
    </div>
  </AboutStyle>
);

export default About;
