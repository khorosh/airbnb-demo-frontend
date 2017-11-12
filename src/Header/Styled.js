import styled from "styled-components";
import arrowdown from "./arrowdown.svg";
import search from "./search.svg";
import searchmobile from "./searchmobile.svg";

export const Header = styled.header`
  padding: 1rem 0;
  box-shadow: 0px 1px 0px rgba(72, 72, 72, 0.3);
`;

export const LinkMobileMenu = styled.a`
  &:after {
    display: inline-block;
    width: 11px;
    height: 10px;
    content: " ";
    background: url(${arrowdown}) no-repeat;
    margin-left: 0.375rem;
  }

  @media (min-width: 992px) {
    display: none;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LeftSide = styled.div`
  display: flex;
  flex-basis: 100%;
  align-items: center;

  @media (min-width: 768px) {
    flex-basis: 50%;
  }
`;

export const Input = styled.input`
  width: 100%;
  font-family: "Circular", Arial, Helvetica, sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5rem;
  margin-left: 1rem;
  padding: 0.75rem 0rem 0.75rem 2.5rem;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  border-radius: 0.25rem;
  background: url(${searchmobile}) no-repeat 16px 50%;

  @media (min-width: 768px) {
    font-size: 1rem;
    padding: 0.75rem 0 0.75rem 3rem;
    margin-left: 2rem;
    background: url(${search}) no-repeat 16px 50%;
  }

  &:hover {
    box-shadow: 0px 2px 4px rgba(72, 72, 72, 0);
  }
`;

export const Logo = styled.img``;

export const Nav = styled.nav`
  display: none;

  @media (min-width: 992px) {
    display: block;
    text-align: right;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  color: #383838;
  font-size: 0.875rem;
  padding: 0.75rem;

  &:hover {
    opacity: 0.7;
  }
`;
