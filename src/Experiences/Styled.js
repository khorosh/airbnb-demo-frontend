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

export const Img = styled.img`width: 100%;`;

export const Info = styled.p`
  margin: 0.5rem 0 0 0;
  display: flex;
  align-items: baseline;
`;

export const Price = styled.span`
  margin-right: 0.25rem;
  font-size: 1rem;
  font-weight: 700;
`;

export const Name = styled.span`
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
