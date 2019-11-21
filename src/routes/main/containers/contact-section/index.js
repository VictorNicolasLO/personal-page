import React from 'react';
import Section from '../../../../components/section';
import { Container, CustomButton } from './styled';
import Typography from '../../../../components/typography';
import { Col } from 'react-flexbox-grid';
import TextField from '../../../../components/text-field';
import { useContactsProvider } from '../../providers/contact.provider';
import useContactForm from './hooks/useContactForm';
import NotificationMessage from '../../../../components/notification-message';
function ContactSection() {
  const { emailInput, messageInput, nameInput, sendEmail } = useContactForm();
  const { loading, emailSent, setEmailSent } = useContactsProvider();
  return (
    <Section className="contact" type="secondary">
      <Container center="xs">
        <Col xs={12}>
          <Typography variant="h2" style={{ letterSpacing: '5.7px' }}>
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
          <TextField label={'Name'} {...nameInput} />
        </Col>
        <Col xs={12}>
          <TextField label={'Email'} {...emailInput} />
        </Col>
        <Col xs={12}>
          <TextField multiline label={'Message'} {...messageInput} />
        </Col>
        <Col xs={12}>
          <CustomButton
            loading={loading}
            disable={loading}
            color="secondary"
            size="medium"
            label="Send message"
            onClick={sendEmail}
          />
        </Col>
        <NotificationMessage
          message={'Great! now just wait a little I will contact you shortly!'}
          open={emailSent}
          closeTime={8}
          onClose={() => {
            setEmailSent(false);
          }}
        />
      </Container>
    </Section>
  );
}

export default ContactSection;
