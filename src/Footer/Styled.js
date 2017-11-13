import styled from "styled-components";
import arrow16down from "./arrow16down.svg";

export const Footer = styled.footer`
  margin-top: 2.5rem;
  box-shadow: 0px -1px 0px rgba(72, 72, 72, 0.3);

  @media (min-width: 576px) {
    margin-top: 4rem;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 1rem 0 1.5rem;
  margin: 0;
  flex-basis: 100%;

  @media (min-width: 576px) {
    padding: 3rem 0 3rem;
  }
`;

export const Settings = styled.form`
  display: flex;
  width: 100%;

  @media (min-width: 576px) {
    display: block;
    flex-direction: column;
  }
`;

export const Select = styled.select`
  appearance: none;
  ::-ms-expand {
    display: none;
  }

  display: block;
  width: 100%;
  height: 2.5rem;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 0.25rem;

  font-weight: 200;
  padding: 0.75rem 0 0.75rem 0.5rem;
  cursor: pointer;
  font-size: 0.75rem;
  background-image: url(${arrow16down});
  background-position: calc(100% - 0.5rem) center;
  background-repeat: no-repeat;
  background-color: #fff;

  &:hover {
    background-color: rgba(72, 72, 72, 0.1);
  }

  @media (min-width: 576px) {
    padding: 0.75rem 0 0.75rem 1rem;
    height: 3rem;
    background-position: calc(100% - 0.75rem) center;
    font-size: 0.9375rem;
    line-height: 1.1875rem;
  }

  @media (min-width: 768px) {
    font-size: 1.125rem;
    line-height: 1.4375rem;
    margin-bottom: 1rem;
  }
`;

export const Nav = styled.nav`
  display: none;

  @media (min-width: 576px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Title = styled.h3`
  color: #383838;
  font-size: 0.75rem;
  line-height: 0.9375rem;
  font-weight: 700;
  margin-bottom: 1rem;
  margin-top: 0;

  @media (min-width: 768px) {
    font-size: 0.9375rem;
    line-height: 1.1875rem;
  }
`;

export const Link = styled.a`
  color: #636363;
  font-size: 0.75rem;
  line-height: 0.9375rem;
  margin-bottom: 0.5rem;
  text-decoration: none;
  margin-right: 1rem;
  &:hover {
    opacity: 0.7;
  }

  @media (min-width: 768px) {
    font-size: 0.9375rem;
    line-height: 1.1875rem;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0px -1px 0px rgba(72, 72, 72, 0.15);
  padding: 1rem 0;

  @media (min-width: 576px) {
    align-items: center;
    flex-direction: row;
    padding: 2rem 0;
  }
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  color: #636363;
  margin-bottom: 0.75rem;

  @media (min-width: 576px) {
    margin-bottom: 0;
  }
`;

export const Copyright = styled.p`
  margin: 0;
  font-size: 0.75rem;
  line-height: 0.9375rem;

  @media (min-width: 768px) {
    font-size: 0.9375rem;
    line-height: 1.1875rem;
  }
`;

export const Links = styled.div`
  display: flex;

  @media (min-width: 576px) {
    margin-left: auto;
  }
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
