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
  ScrollButton,
  Section
} from "./Styled";
import experiences1 from "./experiences1.png";
import experiences2 from "./experiences2.png";
import experiences3 from "./experiences3.png";
import experiences4 from "./experiences4.png";
import stars from "./stars.svg";
import arrowright from "./arrowright.svg";
import arrowscroll from "./arrowscroll.svg";

export default function() {
  return (
    <div className="container">
      <Section>
        <Wrapper>
          <Title>Experiences</Title>
          <Link href="#">
            <SeeAll>See All</SeeAll>
            <ArrowRight src={arrowright} />
          </Link>
        </Wrapper>
        <div className="row">
          <div className="col-3">
            <Card href="#">
              <Img src={experiences1} alt="Forest therapy for $29" />
              <Info>
                <Price>$29</Price>
                <Name>Forest therapy</Name>
              </Info>
              <Reviews>
                <Stars src={stars} />
                <Counter>44 reviews</Counter>
              </Reviews>
            </Card>
          </div>
          <div className="col-3">
            <Card href="#">
              <Img src={experiences2} alt="Whale watching for $69" />
              <Info>
                <Price>$69</Price>
                <Name>Whale watching</Name>
              </Info>
              <Reviews>
                <Stars src={stars} />
                <Counter>46 reviews</Counter>
              </Reviews>
            </Card>
          </div>
          <div className="col-3">
            <Card href="#">
              <Img
                src={experiences3}
                alt="Table Mountain Summit, Cable Car Down for $69"
              />
              <Info>
                <Price>$69</Price>
                <Name>Table Mountain Summit, Cable Car Down</Name>
              </Info>
              <Reviews>
                <Stars src={stars} />
                <Counter>44 reviews</Counter>
              </Reviews>
            </Card>
          </div>
          <div className="col-3">
            <Card href="#">
              <Img src={experiences4} alt="Salsa Night for $50" />
              <Info>
                <Price>$50</Price>
                <Name>Salsa Night</Name>
              </Info>
              <Reviews>
                <Stars src={stars} />
                <Counter>44 reviews</Counter>
              </Reviews>
            </Card>
          </div>
        </div>
        <ScrollButton href="#">
          <img src={arrowscroll} alt="" />
        </ScrollButton>
      </Section>
    </div>
  );
}
