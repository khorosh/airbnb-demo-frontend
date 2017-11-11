import styled from "styled-components";

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

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

export const Img = styled.img`
  height: 164px;
  weight: 100%;
`;

export const Price = styled.span`
  font-size: 1.125rem;
  font-weight: 200;
  opacity: 0.9;
`;

export const Name = styled.span`
  font-size: 1.125rem;
  font-weight: 700;
`;

export const Place = styled.span`
  font-size: 0.625rem;
  font-weight: 700;
  text-transform: uppercase;
  margin: 0.75rem 0 0.125rem;
`;
