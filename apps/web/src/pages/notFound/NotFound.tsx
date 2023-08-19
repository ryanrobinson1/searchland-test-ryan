import React from "react";
import { Link } from "ui";

const NotFound = () => {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">Oh no, something went wrong</h1>
      <p>Go back to the home page and try again</p>
      <Link href="/">Home</Link>
    </div>
  );
};

export default NotFound;
