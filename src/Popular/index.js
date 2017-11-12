import React from "react";
import {
  Title,
  Card,
  Img,
  Price,
  Name,
  Wrapper,
  Link,
  SeeAll,
  ArrowRight,
  Place,
  ScrollButton,
  Section,
  Scroll
} from "./Styled";
import popular1 from "./popular1.png";
import popular2 from "./popular2.png";
import popular3 from "./popular3.png";
import popular4 from "./popular4.png";
import arrowright from "./arrowright.svg";
import arrowscroll from "./arrowscroll.svg";

export default function() {
  return (
    <div className="container">
      <Section>
        <Wrapper>
          <Title>Popular reservations around the world</Title>
          <Link href="#">
            <SeeAll>See All</SeeAll>
            <ArrowRight src={arrowright} />
          </Link>
        </Wrapper>
        <div className="row">
          <Scroll>
            <div className="col-xs-6 col-sm-4 col-md-3">
              <Card href="#">
                <Img
                  src={popular1}
                  alt="Speakeasy Chumley’s at $60 per person"
                />
                <Place>Speakeasy</Place>
                <Name>Chumley’s</Name>
                <Price>About $60 per person</Price>
              </Card>
            </div>
            <div className="col-xs-6 col-sm-4 col-md-3">
              <Card href="#">
                <Img
                  src={popular2}
                  alt="Korean Gastropub Hanjan at $50 per person"
                />
                <Place>Korean Gastropub</Place>
                <Name>Hanjan</Name>
                <Price>About $50 per person</Price>
              </Card>
            </div>
            <div className="col-xs-6 col-sm-4 col-md-3">
              <Card href="#">
                <Img
                  src={popular3}
                  alt="German American Prime Meats at $55 per person"
                />
                <Place>German American</Place>
                <Name>Prime Meats</Name>
                <Price>About $55 per person</Price>
              </Card>
            </div>
            <div className="col-xs-6 col-sm-4 col-md-3">
              <Card href="#">
                <Img
                  src={popular4}
                  alt="Fine Seafood Seaprice at $70 per person"
                />
                <Place>Fine Seafood</Place>
                <Name>Seaprice</Name>
                <Price>About $70 per person</Price>
              </Card>
            </div>
          </Scroll>
        </div>
        <ScrollButton href="#">
          <img src={arrowscroll} alt="" />
        </ScrollButton>
      </Section>
    </div>
  );
}
