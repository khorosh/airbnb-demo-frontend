import styled from "styled-components";

export const Scroll = styled.div`
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;

  @media (min-width: 768px) {
    overflow-x: hidden;
    flex-basis: 100%;
  }
`;

export const Section = styled.div`position: relative;`;

export const ScrollButton = styled.a`
  display: none;

  @media (min-width: 992px) {
    display: block;
    width: 40px;
    height: 40px;
    position: absolute;
    top: 50%;
    left: 98%;
  }
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  line-height: 1.875rem;
  font-weight: 700;
  margin: 2.625rem 0 1rem;

  @media (min-width: 576px) {
    font-size: 2rem;
    line-height: 2.125rem;
    margin: 3rem 0 1.5rem;
  }
`;

export const Card = styled.div`cursor: pointer;`;

export const Img = styled.img`
  width: 100%;
  margin-bottom: 0.25rem;
`;

export const Name = styled.span`
  font-size: 0.9375rem;
  font-weight: 700;
`;
