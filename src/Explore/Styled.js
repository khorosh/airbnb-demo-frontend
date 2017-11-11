import styled from "styled-components";

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
  border-radius: 4px;
  cursor: pointer;

  display: flex;
  align-items: center;

  &:hover {
    box-shadow: 0px 2px 4px rgba(72, 72, 72, 0);
  }
`;

export const Img = styled.img`
  height: 72px;
  weight: 100%;
`;

export const CardTitle = styled.h3`
  font-size: 1.0625rem;
  margin: 1.5rem;
`;
