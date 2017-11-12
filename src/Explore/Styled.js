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

export const Title = styled.h2`
  font-size: 2rem;
  line-height: 2.125rem;
  font-weight: 700;
  margin: 3rem 0 1.5rem;
`;

export const Card = styled.div`
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  border-radius: 0.25rem;
  cursor: pointer;

  display: flex;
  flex-direction: column;

  &:hover {
    box-shadow: 0px 2px 4px rgba(72, 72, 72, 0);
  }

  @media (min-width: 576px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const Img = styled.img`
  height: 78px;

  @media (min-width: 576px) {
    height: 72px;
    wight: 100%;
  }
`;

export const CardTitle = styled.h3`
  font-size: 0.75rem;
  margin: 0.75rem;

  @media (min-width: 576px) {
    font-size: 1.0625rem;
    margin: 1.5rem;
  }
`;
