import React from 'react';
import Section from '../../../../components/section';
import { Container } from './styled';
import Typography from '../../../../components/typography';
import { Col, Row } from 'react-flexbox-grid';
import TextField from '../../../../components/text-field';
import Button from '../../../../components/button';

function ContactSection() {
  return (
    <Section type="secondary">
      <Container center="xs">
        <Col xs={12}>
          <Typography variant="h2" style={{ 'letter-spacing': '5.7px' }}>
            Contact
          </Typography>
          <Typography style={{ marginTop: '5px' }} variant="h3">
            Send me a message
          </Typography>
          <Typography variant="body1">
            and I will contact you as soon is posible.
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
          <Button
            style={{
              marginLeft: '480px',
            }}
            color="secondary"
            size="medium"
            label="Send message"
          />
        </Col>
      </Container>
    </Section>
  );
}

export default ContactSection;
