import React from "react";

import { ErrorWrapper, ErrorMessage } from "./ErrorElements";

const Error = (props) => {
  return (
    <>
      <ErrorWrapper>
        <ErrorMessage>
          Problem with the API / Please fill out all fields
        </ErrorMessage>
      </ErrorWrapper>
    </>
  );
};
export default Error;
