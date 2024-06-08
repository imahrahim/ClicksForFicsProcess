import React from "react";
import Container from "./container";
import styled from "styled-components";
import SocialLinks from "./social-links";

const Footer = () => {
  return (
    <StyledFooter>
      <FooterWrapper>
        <FooterAttribution>
          Imah Leaf Rahim | 2024-06-10 | Mentor: Max Frischknecht | BA Data Design +
          Art, Hochschule Luzern – Design Film Kunst © HSLU, 2024
        </FooterAttribution>
        <SocialLinks />
      </FooterWrapper>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  padding: var(--size-300) 0;

  @media (max-width: 950px) {
    background-color: #2d1c4858;
    margin: 1rem;
    padding-top: 1rem;
    border: 0.1rem solid #000;
    border-radius: 0.5rem;
  }
`;

const FooterAttribution = styled.p`
  font-size: 0.8rem;
  color: #000000;
  text-align: center;
  margin-bottom: var(--size-300);

  @media (max-width: 768px) {
    margin-bottom: var(--size-400);
  }
  
  & a {
    color:inherit;
  }
`;

const FooterWrapper = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 950px) {
    flex-direction: column;
  }
`;
