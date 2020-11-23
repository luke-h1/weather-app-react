import React from "react";

import { ErrorWrapper, ErrorMessage } from "./ErrorElements";

const Error = (props) => {
  return (
    <>
      <ErrorWrapper>
        <ErrorMessage>
          {props.msg}
        </ErrorMessage>
      </ErrorWrapper>
    </>
  );
};
export default Error;
