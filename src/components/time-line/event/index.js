import React from 'react';
import {
  EventContainer,
  InfoContainer,
  TitleContainer,
  DateContainer,
} from './styled';
import Card from '../../card';

function Event({ date, title, text, direction }) {
  return (
    <EventContainer>
      <InfoContainer>
        <TitleContainer>{title}</TitleContainer>
        <Card>{text}</Card>
      </InfoContainer>
      <DateContainer className="date-container">{date}</DateContainer>
    </EventContainer>
  );
}

export default Event;
