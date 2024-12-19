import { CSSProperties } from "react";
import People from "./People";

const header: CSSProperties = {
  fontSize: "3rem",
  textAlign: "center",
  fontWeight: 300,
  margin: "20px 0",
};

const Team = () => {
  return (
    <div id="team">
      <hr />
      <h2 style={header}>Team Leaders</h2>
      <People />
    </div>
  );
};

export default Team;
