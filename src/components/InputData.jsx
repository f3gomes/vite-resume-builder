import React from "react";

export default function InputData(props) {
  return (
    <input
      required
      type="text"
      placeholder={props.placeholder}
      className="input-form"
      onChange={props.onChange}
    />
  );
}
