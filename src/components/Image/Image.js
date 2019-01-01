import React from "react";
import { Img, Box, ImageWrap } from "./Styled";

const Image = ({ imageUrl, regions, height, width }) => {
  return (
    <ImageWrap>
      <Img id="analized-image" src={imageUrl} alt="face detection image" />
      {regions.length > 0 &&
        regions.map((region, id) => {
          const { bounding_box } = region.region_info;
          const top = height * bounding_box.top_row + "px";
          const left = width * bounding_box.left_col + "px";
          const right = width - width * bounding_box.right_col + "px";
          const bottom = height - height * bounding_box.bottom_row + "px";
          return (
            <Box key={id} top={top} bottom={bottom} left={left} right={right} />
          );
        })}
    </ImageWrap>
  );
};

export default Image;
