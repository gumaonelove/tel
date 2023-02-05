import React from "react";
import { ToastContainer } from "react-toastify";

const ToastConfigContainer = () => {
  return (
    <ToastContainer
      position={"top-right"}
      pauseOnHover
      hideProgressBar={false}
      theme="colored"
      toastStyle={{
        zIndex: 99999,
      }}
    />
  );
};

export default ToastConfigContainer;
