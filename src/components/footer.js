import React from "react";
import Container from "./container";
import styled from "styled-components";
import SocialLinks from "./social-links";

const Footer = () => {
  return (
    <StyledFooter>
      <FooterWrapper>
        <FooterAttribution>
          Imah Leaf Rahim || BA Data Design + Art, Hochschule Luzern – Design
          Film Kunst © HSLU, 2024
        </FooterAttribution>
        <SocialLinks />
      </FooterWrapper>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  padding-top: var(--size-300);
  padding-bottom: var(--size-300);
`;

const FooterAttribution = styled.p`
  font-size: var(--size-300);

  & a {
    color: inherit;
  }
`;

const FooterWrapper = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
