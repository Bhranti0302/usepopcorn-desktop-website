import React from "react";

function Error({ message }) {
  return (
    <p className="error">
      <span>🚫</span>
      {message}
    </p>
  );
}

export default Error;
