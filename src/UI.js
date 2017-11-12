import styled from "styled-components";

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

export const Card = styled.a`
  display: block;
  cursor: pointer;
  text-decoration: none;
  color: #383838;
`;

/* Carousel */

export const Section = styled.div`position: relative;`;

export const Scroll = styled.div`
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;

  @media (min-width: 768px) {
    overflow-x: hidden;
  }
`;

export const ScrollButton = styled.a`
  display: none;

  @media (min-width: 992px) {
    display: block;
    width: 40px;
    height: 40px;
    position: absolute;
    top: 50%;
    right: -1%;
  }
`;

/* Link See All */

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
  white-space: nowrap;
`;

export const ArrowRight = styled.img``;
