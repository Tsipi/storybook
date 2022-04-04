import React from "react";

const Checkbox = ({ checked, onChange }) => {
    return (
        <div className={`checkbox ${checked ? "active" : ""}`} onClick={onChange} />
    );
};

export default Checkbox;
