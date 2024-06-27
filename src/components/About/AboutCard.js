import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, We Are <span className="purple">WebPro Team </span>
            from <span className="purple"> Iran.</span>
            <br />
              We are curently Working as a Powerfull Freelancer Team 
            <br />
              We Love what we do. We are a team with Professional individuals and manager. 
            <br />
            <br />
            Apart from coding, some other activities that We love to do togather!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Live your dreams!"{" "}
          </p>
          <footer className="blockquote-footer">WebPro Team</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
