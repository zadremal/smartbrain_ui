import React, { Fragment } from "react";
import { Text, Rank } from "./Styled";

const index = props => {
  const { name, entries } = props.currentUser;
  return (
    <Fragment>
      <Text>{`${name}, your current entries count is ..... `}</Text>
      <Rank>{`${entries}`}</Rank>
    </Fragment>
  );
};

export default index;
