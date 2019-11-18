import React from 'react';
import Section from '../../../../components/section';
import { Container, CustomButton } from './styled';
import Typography from '../../../../components/typography';
import { Col } from 'react-flexbox-grid';
import TextField from '../../../../components/text-field';

function ContactSection() {
  return (
    <Section className="contact" type="secondary">
      <Container center="xs">
        <Col xs={12}>
          <Typography variant="h2" style={{ 'letter-spacing': '5.7px' }}>
            Contact
          </Typography>
          <Typography style={{ marginTop: '5px' }} variant="h3">
            Send me a message
          </Typography>
          <Typography variant="body1">
            and I will contact you as soon as possible.
          </Typography>
        </Col>
        <Col xs={12}>
          <TextField label={'Name'} />
        </Col>
        <Col xs={12}>
          <TextField label={'Email'} />
        </Col>
        <Col xs={12}>
          <TextField multiline label={'Text'} />
        </Col>
        <Col xs={12}>
          <CustomButton color="secondary" size="medium" label="Send message" />
        </Col>
      </Container>
    </Section>
  );
}

export default ContactSection;
