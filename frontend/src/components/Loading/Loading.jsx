import React from "react";
import loading from "../../assets/Images/loading.gif";

import { LoadingWrapper, LoadingImage } from "./LoadingElements";

const Loading = () => {
  return (
    <>
      <LoadingWrapper>
        <LoadingImage src={loading} />
      </LoadingWrapper>
    </>
  );
};
export default Loading;
