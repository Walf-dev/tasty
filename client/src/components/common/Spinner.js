import { Spinner } from "@chakra-ui/react";
import React from "react";

const SpinnerReusable = ({ size }) => {
  return (
    <>
      <Spinner size={size}  color='green.500' />
    </>
  );
};

export default SpinnerReusable;
