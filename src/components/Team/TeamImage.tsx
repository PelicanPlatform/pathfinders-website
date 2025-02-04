import Image from "next/image";
import { CSSProperties } from "react";

const ImageStyle: CSSProperties = {
  borderRadius: "10px",
  width: "100%",
  height: "auto",
  marginTop: "30px",
};

const TeamImage = () => {
  return (
    <Image
      src={"/images/NDCC_group.jpg"}
      alt={"NDCC Team Image"}
      width={1280}
      height={594}
      style={ImageStyle}
    />
  );
};

export default TeamImage;
