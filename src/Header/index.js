import React from "react";
import {
  Header,
  Wrapper,
  LeftSide,
  Logo,
  Input,
  Nav,
  Link,
  LinkMobileMenu
} from "./Styled";
import logo from "./logo.svg";

export default function() {
  return (
    <Header>
      <div className="container">
        <Wrapper>
          <LeftSide className="col-xs-12">
            <Logo src={logo} alt="AirBnB logotype in vector" />
            <LinkMobileMenu href="#" />
            <Input type="text" placeholder="Try &quot;Miami&quot;" />
          </LeftSide>
          <Nav>
            <Link href="#">Become a host</Link>
            <Link href="#">Help</Link>
            <Link href="#">Sign Up</Link>
            <Link href="#">Sign In</Link>
          </Nav>
        </Wrapper>
      </div>
    </Header>
  );
}
