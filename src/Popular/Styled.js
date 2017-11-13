import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: baseline;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

export const Img = styled.img`width: 100%;`;

export const Price = styled.span`
  font-size: 1.125rem;
  font-weight: 200;
  opacity: 0.9;
`;

export const Name = styled.span`
  font-size: 1.125rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
`;

export const Place = styled.span`
  font-size: 0.625rem;
  font-weight: 700;
  text-transform: uppercase;
  margin: 0.75rem 0 0.125rem;
`;
