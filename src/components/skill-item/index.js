import React from "react";
import { SkillItemContainer, Overlay } from "./styled";
import Typography from "../typography";

function SkillItem({ src, title, backgroundSize }) {
  return (
    <SkillItemContainer>
      <div
        style={{
          width: "180px",
          height: "180px",
          background: `url("${src}")`,
          backgroundSize: backgroundSize || "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        alt="skill"
      />
      <Overlay>
        <Typography
          style={{ fontWeight: "bold", fontSize: "1.5em" }}
          variant="body1"
        >
          {title}
        </Typography>
      </Overlay>
    </SkillItemContainer>
  );
}

export default SkillItem;
