import styled from "styled-components";

export const Section = styled.div`position: relative;`;

export const ScrollButton = styled.a`
  width: 40px;
  height: 40px;
  position: absolute;
  top: 55%;
  left: 98%;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: baseline;
`;

export const Title = styled.h2`
  font-size: 2rem;
  line-height: 2.125rem;
  font-weight: 700;
  margin: 3rem 0 1.5rem;
`;

export const Link = styled.div`
  margin-left: auto;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

export const SeeAll = styled.a`
  font-size: 0.875rem;
  line-height: 24px;
  margin-right: 0.5rem;
`;

export const ArrowRight = styled.img``;

export const Card = styled.div`cursor: pointer;`;

export const Img = styled.img`
  height: 220px;
  weight: 100%;
  margin-bottom: 0.25rem;
`;

export const Name = styled.span`
  font-size: 0.9375rem;
  font-weight: 700;
`;
