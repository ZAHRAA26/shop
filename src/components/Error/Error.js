import React from "react";
import { useRouteError } from "react-router-dom";
import ErrorPageContent from "../../components/ErrorPageContent/ErrorPageContent";
import { useEffect } from "react";

const Error = () => {
  const error = useRouteError();

  useEffect(console.log(`error is ${error.status}`), [error.status]);
  let title = "An error occurred!";
  let message = "Something went wrong!";
  if (error.status === 500) {
    message = JSON.parse(error.data).message;
  }

  if (error.status === 404) {
    title = "Not found!";
    message = "Could not find resource or page.";
  }
  return <ErrorPageContent title={title} message={message} />;
};
export default Error;
