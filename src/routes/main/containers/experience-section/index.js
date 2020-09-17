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
              Full stack web developer who can develop for frontend, backend
              with microservices patterns and mobile using the best technologies
              and the best architecture for your application.
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
