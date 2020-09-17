import React from "react";
import { VerticalLine, TimeLineContainer, TopDot, BottomDot } from "./styled";
import Event from "./event";
function TimeLine({ events }) {
  return (
    <TimeLineContainer>
      <VerticalLine />
      <TopDot />
      <BottomDot />
      {events.map((item, key) => (
        <Event {...item} key={key} />
      ))}
    </TimeLineContainer>
  );
}

export default TimeLine;
