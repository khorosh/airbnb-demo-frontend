import styled from "styled-components";

export const Header = styled.header`
  padding: 1rem 0;
  box-shadow: 0px 0.5px 0px rgba(72, 72, 72, 0.3);
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LeftSide = styled.div`display: flex;`;

export const Input = styled.input`
  width: 392px;
  font-weight: 400;
  font-family: "Circular", Arial, Helvetica, sans-serif;
  line-height: 1.5rem;
  font-size: 1rem;
  margin-left: 3rem;
  padding: 0.75rem;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  border-radius: 0.25rem;

  &:hover {
    box-shadow: 0px 2px 4px rgba(72, 72, 72, 0);
  }
`;

export const Logo = styled.img``;

export const Nav = styled.nav`
  display: none;

  @media (min-width: 991px) {
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
