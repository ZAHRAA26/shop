import React from "react";

const ErrorPageContent = ({ title, message }) => {
  return (
    <>
      <h1>{title}</h1>
      <p>{message}</p>
    </>
  );
};

export default ErrorPageContent;
