import React from "react";
import { Title } from "./../UI.js";
import { Card, Img, CardTitle, Scroll } from "./Styled";
import explore1 from "./explore1.png";
import explore2 from "./explore2.png";
import explore3 from "./explore3.png";

export default function() {
  return (
    <div className="container">
      <Title>Explore Airbnb</Title>
      <div className="row">
        <Scroll>
          <div className="col-xs-6 col-sm-5 col-md-4">
            <Card href="#">
              <Img src={explore1} alt="Homes" />
              <CardTitle>Homes</CardTitle>
            </Card>
          </div>
          <div className="col-xs-6 col-sm-5 col-md-4">
            <Card href="#">
              <Img src={explore2} alt="Experiences" />
              <CardTitle>Experiences</CardTitle>
            </Card>
          </div>
          <div className="col-xs-6 col-sm-5 col-md-4">
            <Card href="#">
              <Img src={explore3} alt="Restaurants" />
              <CardTitle>Restaurants</CardTitle>
            </Card>
          </div>
        </Scroll>
      </div>
    </div>
  );
}
