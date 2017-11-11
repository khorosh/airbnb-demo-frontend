import React from "react";
import { Title, Card, Img, CardTitle } from "./Styled";
import explore1 from "./explore1.png";
import explore2 from "./explore2.png";
import explore3 from "./explore3.png";

export default function() {
  return (
    <div className="container">
      <Title>Explore Airbnb</Title>

      <div className="row">
        <div className="col-4">
          <Card href="#">
            <Img src={explore1} alt="Homes" />
            <CardTitle>Homes</CardTitle>
          </Card>
        </div>
        <div className="col-4">
          <Card href="#">
            <Img src={explore2} alt="Experiences" />
            <CardTitle>Experiences</CardTitle>
          </Card>
        </div>
        <div className="col-4">
          <Card href="#">
            <Img src={explore3} alt="Restaurants" />
            <CardTitle>Restaurants</CardTitle>
          </Card>
        </div>
      </div>
    </div>
  );
}
