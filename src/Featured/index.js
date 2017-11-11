import React from "react";
import {
  Title,
  Card,
  Img,
  Name,
  Wrapper,
  Link,
  SeeAll,
  ArrowRight
} from "./Styled";
import featured1 from "./featured1.png";
import featured2 from "./featured2.png";
import featured3 from "./featured3.png";
import featured4 from "./featured4.png";
import featured5 from "./featured5.png";
import featured6 from "./featured6.png";
import arrowright from "./arrowright.svg";

export default function() {
  return (
    <div className="container">
      <Wrapper>
        <Title>Featured destinations</Title>
        <Link href="#">
          <SeeAll>See All</SeeAll>
          <ArrowRight src={arrowright} />
        </Link>
      </Wrapper>
      <div className="row">
        <div className="col-2">
          <Card href="#">
            <Img src={featured1} alt="Paris" />
            <Name>Paris</Name>
          </Card>
        </div>
        <div className="col-2">
          <Card href="#">
            <Img src={featured2} alt="Miami" />
            <Name>Miami</Name>
          </Card>
        </div>
        <div className="col-2">
          <Card href="#">
            <Img src={featured3} alt="Tokyo" />
            <Name>Tokyo</Name>
          </Card>
        </div>
        <div className="col-2">
          <Card href="#">
            <Img src={featured4} alt="Cape Town" />
            <Name>Cape Town</Name>
          </Card>
        </div>
        <div className="col-2">
          <Card href="#">
            <Img src={featured5} alt="Seoul" />
            <Name>Seoul</Name>
          </Card>
        </div>
        <div className="col-2">
          <Card href="#">
            <Img src={featured6} alt="Los Angeles" />
            <Name>Los Angeles</Name>
          </Card>
        </div>
      </div>
    </div>
  );
}
