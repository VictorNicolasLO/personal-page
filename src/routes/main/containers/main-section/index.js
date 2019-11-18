import React from 'react';
import Section from '../../../../components/section';
import { Col, Row } from 'react-flexbox-grid';
import ProfilePhoto from '../../../../components/profile-photo';
import ProfilePhotoIMG from '../../../../assets/images/profile.png';
import Typography from '../../../../components/typography';
import SocialediaButton from '../../../../components/social-media-button';
import linkedinLogo from '../../../../assets/images/linkedin-logo.png';
import githubLogo from '../../../../assets/images/github-logo.png';
import { Line, SocialContainers, Container, BackDrop } from './styled';
import Button from '../../../../components/button';
import MainBackground from '../../../../assets/all-images/landscape-in-mountains.png';
function MainSection() {
  return (
    <Section
      type="primary"
      style={{
        position: 'relative',
        background: `url("${MainBackground}")`,
        backgroundSize: 'auto',
        'background-repeat': 'no-repeat',
      }}>
      <BackDrop />
      <Container center="xs">
        <Col xs={12}>
          <ProfilePhoto src={ProfilePhotoIMG} />
        </Col>

        <Col xs={12}>
          <Typography color="white" variant="h1">
            Victor Nicolas Lizarraga Ochoa
          </Typography>
          <Line />
          <Typography color="white" variant="h3">
            Full stack developer
          </Typography>
        </Col>

        <Col xs={12}>
          <Row center="xs">
            <SocialContainers>
              <SocialediaButton src={githubLogo} />
            </SocialContainers>
            <SocialContainers>
              <SocialediaButton src={linkedinLogo} />
            </SocialContainers>
          </Row>
        </Col>

        <Button
          style={{ marginTop: '50px' }}
          label="Hire me"
          size="large"
          color="primary"
        />
      </Container>
    </Section>
  );
}

export default MainSection;
