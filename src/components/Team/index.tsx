import { CSSProperties } from "react";
import People from "./People";

const header: CSSProperties = {
  fontSize: "3rem",
  textAlign: "center",
  fontWeight: 300,
  margin: "48px",
};

const Team = () => {
  return (
    <div id="team-leaders">
      <hr />
      <h2 style={header}>Team Leaders</h2>
      <People />
    </div>
  );
};

export default Team;
