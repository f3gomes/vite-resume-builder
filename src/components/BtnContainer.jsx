import React from "react";

export default function BtnContainer({ update, reset, cancel }) {
  return (
    <div className={"btn-container"}>
      {update && (
        <button type="button" className="input-form" onClick={update}>
          UPDATE
        </button>
      )}

      {reset && (
        <button type="button" className="input-form" onClick={reset}>
          RESET
        </button>
      )}

      {cancel && (
        <button type="button" className="input-form" onClick={cancel}>
          CANCEL
        </button>
      )}
    </div>
  );
}
