import React from "react";
import Section from "../../../../components/section";
import { Col } from "react-flexbox-grid";
import Typography from "../../../../components/typography";
import TimeLine from "../../../../components/time-line";
import { events } from "./const";
import { Container, ShowScrollable } from "./styled";

function ExperienceSection() {
  return (
    <Section>
      <Container center="xs">
        <Col xs={12}>
          <ShowScrollable>
            <Typography
              color="#262626"
              variant="h2"
              style={{ letterSpacing: "5.7px" }}
            >
              Work experience
            </Typography>
          </ShowScrollable>
        </Col>
        <Col xs={12}>
          <ShowScrollable animationDelay={0.2}>
            <Typography
              color="#262626"
              variant="body1"
              style={{
                textAlign: "left",
              }}
            >
Passionate about event-driven architectures, microservices, and scalable system design. Experienced across the full development lifecycle, from frontend, backend and DevOps. Always exploring new technologies to create efficient and resilient systems.
            </Typography>
          </ShowScrollable>
        </Col>
        <Col xs={12}>
          <TimeLine events={events} />
        </Col>
      </Container>
    </Section>
  );
}

export default ExperienceSection;
