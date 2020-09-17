import React from "react";
import Section from "../../../../components/section";
import { Container } from "./styled";
import { Col } from "react-flexbox-grid";
import Typography from "../../../../components/typography";
import SkillItem from "../../../../components/skill-item";
import { SkillsLanguages, SkillsFrameworks, SkillsDevops } from "./const";

function SkillsSection() {
  return (
    <Section type="primary">
      <Container center="xs">
        <Col xs={12}>
          <Typography
            color="white"
            variant="h2"
            style={{ letterSpacing: "5.7px" }}
          >
            Skills
          </Typography>
        </Col>
        <Col xs={12}>
          <Typography color="white" variant="h3">
            Languages
          </Typography>
        </Col>
        {SkillsLanguages.map((item, index) => (
          <Col md xs key={index}>
            <SkillItem {...item} />
          </Col>
        ))}
        <Col xs={12}>
          <Typography color="white" variant="h3">
            Frameworks
          </Typography>
        </Col>
        {SkillsFrameworks.map((item, index) => (
          <Col md xs key={index}>
            <SkillItem {...item} />
          </Col>
        ))}
        <Col xs={12}>
          <Typography color="white" variant="h3">
            Devops
          </Typography>
        </Col>
        {SkillsDevops.map((item, index) => (
          <Col md xs key={index}>
            <SkillItem {...item} />
          </Col>
        ))}
      </Container>
    </Section>
  );
}

export default SkillsSection;
