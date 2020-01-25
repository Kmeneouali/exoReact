import React from "react";

const Key = props => {
  const { value, onClick } = props;

  return (
    <div className="key" onClick={() => onClick(value)}>
      {value}
    </div>
  );
};

export default Key;
