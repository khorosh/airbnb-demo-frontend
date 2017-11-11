import React from "react";
import {
  Title,
  Card,
  Img,
  Info,
  Price,
  Name,
  Reviews,
  Stars,
  Counter,
  Wrapper,
  Link,
  SeeAll,
  ArrowRight,
  Facilities
} from "./Styled";
import homes1 from "./homes1.png";
import homes2 from "./homes2.png";
import homes3 from "./homes3.png";
import stars from "./stars.svg";
import arrowright from "./arrowright.svg";

export default function() {
  return (
    <div className="container">
      <Wrapper>
        <Title>Homes</Title>
        <Link href="#">
          <SeeAll>See All</SeeAll>
          <ArrowRight src={arrowright} />
        </Link>
      </Wrapper>
      <div className="row">
        <div className="col-4">
          <Card href="#">
            <Img src={homes1} alt="La Salentina, see, nature & relax for $82" />
            <Info>
              <Price>$82</Price>
              <Name>La Salentina, see, nature & relax</Name>
            </Info>
            <Facilities>Entire house · 9 beds</Facilities>
            <Reviews>
              <Stars src={stars} />
              <Counter>97 · Superhost</Counter>
            </Reviews>
          </Card>
        </div>
        <div className="col-4">
          <Card href="#">
            <Img
              src={homes2}
              alt="Your private 3 bedr. Riad, an exclusive for rental for $82"
            />
            <Info>
              <Price>$82</Price>
              <Name>Your private 3 bedr. Riad, an exclusi…</Name>
            </Info>
            <Facilities>Entire house · 5 beds</Facilities>
            <Reviews>
              <Stars src={stars} />
              <Counter>161 · Superhost</Counter>
            </Reviews>
          </Card>
        </div>
        <div className="col-4">
          <Card href="#">
            <Img src={homes3} alt="Dreamy Tropical Tree House for $200" />
            <Info>
              <Price>$200</Price>
              <Name>Dreamy Tropical Tree House</Name>
            </Info>
            <Facilities>Entire treehouse · 1 bed</Facilities>
            <Reviews>
              <Stars src={stars} />
              <Counter>364 · Superhost</Counter>
            </Reviews>
          </Card>
        </div>
      </div>
    </div>
  );
}
