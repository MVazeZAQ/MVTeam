import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "purple",
};

const Loader = ({ loading }) => {
  return (
    <ClipLoader
      loading={loading}
      cssOverride={override}
      size={350}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

export default Loader;
