import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import Container from "./container";
import ThemeSwitch from "./theme-switch";
import { useStaticQuery, graphql } from "gatsby";

const HEADER_NAV_ITEM = [
  {
    label: "Documentation",
    url: "/blog",
    isExternal: false,
  },
  {
    label: "Tags",
    url: "/tags",
    isExternal: false,
  },
  {
    label: "Clicks For Fics",
    url: "https://imahrahim.github.io/Clicks-for-Fics/",
    isExternal: false,
  },
  // {
  //   label: "Contact",
  //   url: "/contact",
  //   isExternal: false,
  // },
];

const Header = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );

  return (
    <StyledHeader>
      <HeaderWrapper>
        <HeaderTitle>
          <Link to="/">{site.siteMetadata.title}</Link>
        </HeaderTitle>

        <HeaderNavList>
          {HEADER_NAV_ITEM.map((item, index) => {
            if (item.isExternal) {
              return (
                <HeaderNavListItem key={index}>
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    {item.label}
                  </a>
                </HeaderNavListItem>
              );
            }

            return (
              <HeaderNavListItem key={index}>
                <Link to={item.url}>{item.label}</Link>
              </HeaderNavListItem>
            );
          })}
          <HeaderNavListItem>
            {/* <ThemeSwitch /> */}
          </HeaderNavListItem>
        </HeaderNavList>
      </HeaderWrapper>
    </StyledHeader>
  );
};

export default Header;

const HeaderNavList = ({ children }) => {
  return (
    <StyledNav>
      <StyledNavList>{children}</StyledNavList>
    </StyledNav>
  );
};

const HeaderNavListItem = ({ children }) => {
  return <StyledNavListItem>{children}</StyledNavListItem>;
};

const StyledHeader = styled.header`
  padding: var(--size-300) 0;
  background-color: #2d1c48;
`;

const HeaderWrapper = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const HeaderTitle = styled.div`
  & a {
    text-transform: uppercase;
    text-decoration: none;
    font-size: var(--size-400);
    color: #ffffff;
  }
`;

const StyledNav = styled.nav`
  position: static;
  padding: 0;
  background: transparent;
  backdrop-filter: unset;
`;

const StyledNavList = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0;
  list-style-type: none;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

const StyledNavListItem = styled.li`
  &:not(:last-of-type) {
    margin-right: 2rem;
  }
  
  @media screen and (max-width: 700px) {
    &:not(:last-of-type) {
      margin-right: 1rem;
    }
  }
  
  & a {
    color: #ffffff;
    text-transform: uppercase;
    font-size: var(--size-300);
    text-decoration: none;
    letter-spacing: 0.1rem;
  }
  
  @media screen and (max-width: 700px) {
    & a {
      font-size: 0.7rem;
    }
  }
`;
