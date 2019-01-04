import React, { Fragment } from "react";
import { Form, Input, Button, Text } from "./Styled";

const index = ({ onInputChange, onSubmit, value }) => {
  return (
    <Fragment>
      <Text>This Brain will detect faces on your photos. Give it a try.</Text>
      <Text>Pass an URL with the image to the input field below. </Text>
      <Form>
        <Input value={value} onChange={onInputChange} />
        <Button onClick={onSubmit}> detect </Button>
      </Form>
    </Fragment>
  );
};

export default index;
