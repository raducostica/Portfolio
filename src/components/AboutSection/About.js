import React from "react";
import HeadingTitle from "../HeadingTitle";
import { Link } from "react-scroll";

const About = () => {
  return (
    <section className="section" id="about">
      <HeadingTitle
        title="About"
        num="#"
        headingClass="heading-title-bg"
        titleClass="heading-title"
      />
      <div className="about-me-div" style={{ position: "relative" }}>
        <div className="about-me-left">
          <p className="about-me-paragraph">
            A 4th year Computer Engineering student with a strong interest in
            Technology and a passion for Software Development. I'm obsessed with
            creating things and learning. I'm also extemely keen in learning new
            technologies to further develop my skills and I am ready to tackle
            any challenge thrown in my direction. <br /> <br /> If you have any
            questions or just want to chat, don't hesistate to contact me.{" "}
            <br />
          </p>
          {/* <button className="contactBtn">Contact Me</button> */}
          <Link
            className="contactBtn"
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-50}
            duration={700}
          >
            Contact Me
          </Link>
        </div>
        <div className="about-me-skills">
          <p style={{ fontSize: "13px" }}>Javascript</p>
          <p style={{ fontSize: "13px" }}>React.js</p>
          <p style={{ fontSize: "13px" }}>Node.js</p>
          <p style={{ fontSize: "13px" }}>MongoDB</p>
          <p style={{ fontSize: "13px" }}>Postgressql</p>
        </div>
      </div>
    </section>
  );
};

export default About;
