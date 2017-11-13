import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: baseline;
`;

export const Img = styled.img`width: 100%;`;

export const Info = styled.p`
  margin: 0.5rem 0 0.25rem;
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
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Facilities = styled.span`
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
