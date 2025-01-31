import React, { useState } from "react";

const Form = () => {
  const [isHover, setIsHover] = useState(false);

  const [isChecked, setIsChecked] = useState(false);
  return (
    <form className="my-5 mb-4 d-flex justify-content-center align-items-center gap-3">
      <input
        onChange={(e) => setIsChecked(e.target.checked)}
        id="terms"
        type="checkbox"
        className="form-check-input"
      />

      <div className="terms-wrapper">
        <p
          style={{
            visibility: isHover ? "visible" : "hidden",
          }}
        >
          You are accepting our policy by clicking here
        </p>

        <label htmlFor="terms">I read terms and conditions</label>
      </div>

      <button
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        disabled={!isChecked}
        className="btn btn-primary"
      >
        Confirm
      </button>
    </form>
  );
};

export default Form;
