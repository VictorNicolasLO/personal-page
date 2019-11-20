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
import { Link } from 'react-scroll';
import {
  AnimationBottomToUp,
  AnimationOpacity,
} from '../../../../components/animations';
function MainSection() {
  return (
    <Section
      type="primary"
      style={{
        position: 'relative',
        background: `url("${MainBackground}")`,
        backgroundSize: 'auto',
        backgroundRepeat: 'no-repeat',

        backgroundAttachment: 'fixed',
      }}>
      <BackDrop />
      <Container center="xs">
        <Col xs={12}>
          <AnimationBottomToUp time={0.6} delay={0.3}>
            <ProfilePhoto src={ProfilePhotoIMG} />
          </AnimationBottomToUp>
        </Col>

        <Col xs={12}>
          <AnimationBottomToUp time={0.5} delay={0.6}>
            <Typography color="white" variant="h1">
              Víctor Nicolás
            </Typography>
          </AnimationBottomToUp>

          <Line />

          <AnimationBottomToUp time={0.4} delay={0.8}>
            <Typography color="white" variant="h3">
              Full stack developer
            </Typography>
          </AnimationBottomToUp>
        </Col>

        <Col xs={12}>
          <AnimationOpacity time={0.3} delay={0.9}>
            <Row center="xs">
              <SocialContainers>
                <SocialediaButton src={githubLogo} />
              </SocialContainers>
              <SocialContainers>
                <SocialediaButton src={linkedinLogo} />
              </SocialContainers>
            </Row>
          </AnimationOpacity>
        </Col>
        <AnimationBottomToUp time={0.5} delay={1}>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            duration={900}>
            <Button
              style={{ marginTop: '100px' }}
              label="Hire me"
              size="large"
              color="primary"
            />
          </Link>
        </AnimationBottomToUp>
      </Container>
    </Section>
  );
}

export default MainSection;
