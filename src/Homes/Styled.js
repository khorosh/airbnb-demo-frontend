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

export const Card = styled.div`cursor: pointer;`;

export const Img = styled.img`
  height: 204px;
  weight: 100%;
`;

export const Info = styled.p`
  margin: 0.5rem 0 0;
  display: flex;
  align-items: baseline;
`;

export const Price = styled.span`
  margin-right: 0.25rem;
  font-size: 0.9375rem;
  font-weight: 700;
`;

export const Name = styled.span`
  font-size: 0.9375rem;
  font-weight: 700;
`;

export const Facilities = styled.span`
  margin-top: 0.125rem;
  font-size: 0.9375rem;
  font-weight: 200;
`;

export const Reviews = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.375rem;
`;

export const Counter = styled.span`
  font-size: 0.75rem;
  margin: 0;
  padding: 0;
`;

export const Stars = styled.img`
  width: auto;
  height: 0.75rem;
  margin-right: 0.5rem;
`;
