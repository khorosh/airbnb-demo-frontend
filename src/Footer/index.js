import React from "react";
import {
  Footer,
  Wrapper,
  Logo,
  Nav,
  Link,
  Left,
  Img,
  Copyright,
  Title,
  Info,
  Links,
  Settings,
  Social,
  Terms,
  Select
} from "./Styled";
import logofooter from "./logofooter.svg";
import instagram from "./instagram.svg";
import facebook from "./facebook.svg";
import twitter from "./twitter.svg";

export default function() {
  return (
    <Footer>
      <div className="container">
        <div className="row">
          <Wrapper>
            <div className="col-xs-12 col-sm-3">
              <Settings>
                <div className="col-xs-6 col-sm-12">
                  <Select>
                    <option value="">English</option>
                  </Select>
                </div>
                <div className="col-xs-6 col-sm-12">
                  <Select>
                    <option value="">United States dollar</option>
                  </Select>
                </div>
              </Settings>
            </div>
            <div className="col-sm-2">
              <Nav>
                <Title>Airbnb</Title>
                <Link href="#">About us</Link>
                <Link href="#">Careers</Link>
                <Link href="#">Press</Link>
                <Link href="#">Policies</Link>
                <Link href="#">Help</Link>
                <Link href="#">Diversity & Belonging</Link>
              </Nav>
            </div>
            <div className="col-sm-2">
              <Nav>
                <Title>Discover</Title>
                <Link href="#">Trust & Safety</Link>
                <Link href="#">Travel Credit</Link>
                <Link href="#">Gift Cards</Link>
                <Link href="#">Airbnb Citizen</Link>
                <Link href="#">Business Travel</Link>
                <Link href="#">Guidebooks</Link>
                <Link href="#">Airbnbmag</Link>
              </Nav>
            </div>
            <div className="col-sm-2">
              <Nav>
                <Title>Hosting</Title>
                <Link href="#">Why Host</Link>
                <Link href="#">Hospitality</Link>
                <Link href="#">Responsible Hosting</Link>
                <Link href="#">Community Center</Link>
              </Nav>
            </div>
          </Wrapper>
        </div>
        <Info>
          <Left>
            <Logo src={logofooter} alt="AirBnB logotype" />
            <Copyright>© Airbnb Inc.</Copyright>
          </Left>
          <Links>
            <Terms>
              <Link href="#">Terms</Link>
              <Link href="#">Privacy</Link>
              <Link href="#">Site map</Link>
            </Terms>
            <Social>
              <Img src={facebook} href="https://www.facebook.com/Airbnb" />
              <Img src={twitter} href="https://www.twitter.com/Airbnb" />
              <Img src={instagram} href="https://www.instagram.com/Airbnb" />
            </Social>
          </Links>
        </Info>
      </div>
    </Footer>
  );
}
