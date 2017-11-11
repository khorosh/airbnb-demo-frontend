import styled from "styled-components";
import arrow16down from "./arrow16down.svg";

export const Footer = styled.footer`
  margin-top: 4rem;
  box-shadow: 0px -1px 0px rgba(72, 72, 72, 0.3);
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 3rem 0 3rem;
  margin: 0;
  flex-basis: 100%;
`;

export const Settings = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Select = styled.select`
  -ms-appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearence: none;
  select::-ms-expand {
    display: none;
  }

  margin-bottom: 1rem;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  border-radius: 0.25rem;
  font-size: 1.125rem;
  font-weight: 200;
  padding: 0.75rem 0 0.75rem 1rem;
  cursor: pointer;

  background-image: url(${arrow16down});
  background-position: 92% center;
  background-repeat: no-repeat;
  background-color: #fff;

  &:hover {
    background-color: rgba(72, 72, 72, 0.1);
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h3`
  color: #383838;
  font-size: 0.9375rem;
  font-weight: 700;
  margin-bottom: 1rem;
  margin-top: 0;
`;

export const Link = styled.a`
  color: #636363;
  font-size: 0.9375rem;
  margin-bottom: 0.5rem;
  text-decoration: none;
  margin-right: 1rem;
  &:hover {
    opacity: 0.7;
  }
`;

export const Copyright = styled.div`
  display: flex;
  align-items: center;
  color: #636363;
`;

export const Text = styled.p`
  margin: 0;
  font-size: 0.9375rem;
`;

export const CopyrightTermsSocial = styled.div`
  display: flex;
  align-items: center;
  box-shadow: 0px -0.5px 0px rgba(72, 72, 72, 0.3);
  padding: 2rem 0;
`;

export const TermsSocial = styled.div`
  margin-left: auto;
  display: flex;
`;

export const Terms = styled.nav``;

export const Social = styled.div``;

export const Img = styled.img`
  margin-left: 0.75rem;
  &:hover {
    opacity: 0.7;
  }
`;

export const Logo = styled.img`margin-right: 0.75rem;`;
