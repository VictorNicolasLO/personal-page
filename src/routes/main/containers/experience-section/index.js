import React from 'react';
import Section from '../../../../components/section';
import { Col } from 'react-flexbox-grid';
import Typography from '../../../../components/typography';
import TimeLine from '../../../../components/time-line';
import { events } from './const';
import { Container } from './styled';

function ExperienceSection() {
  return (
    <Section style={{ alignItems: 'flex-start', height: 'fit-content' }}>
      <Container center="xs">
        <Col xs={12}>
          <Typography
            color="#262626"
            variant="h2"
            style={{ 'letter-spacing': '5.7px' }}>
            Work experience
          </Typography>
        </Col>
        <Col xs={12}>
          <Typography
            color="#262626"
            variant="body1"
            style={{
              textAlign: 'left',
            }}>
            I have been a developer for almost 3 years and I can develop
            multiple solutions from scratch by using multiple frontend, backend
            and devops technologies to make sofware with the best quality as
            possible.
          </Typography>
        </Col>
        <Col xs={12}>
          <TimeLine events={events} />
        </Col>
      </Container>
    </Section>
  );
}

export default ExperienceSection;
