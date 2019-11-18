import React from 'react';
import Section from '../../../../components/section';
import { Container } from './styled';
import Typography from '../../../../components/typography';
import { Col } from 'react-flexbox-grid';
import TextField from '../../../../components/text-field';

function ContactSection() {
  return (
    <Section type="secondary">
      <Container center="xs">
        <Col xs={12}>
          <Typography variant="h2" style={{ 'letter-spacing': '5.7px' }}>
            Contact
          </Typography>
        </Col>
        <Col xs={12}>
          <TextField />
        </Col>
      </Container>
    </Section>
  );
}

export default ContactSection;
