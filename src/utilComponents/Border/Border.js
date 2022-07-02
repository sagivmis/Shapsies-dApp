import React from "react";
import "./border.css";

const Border = ({ border, classN }) => {
    return <img src={border} alt='border' className={classN} />;
};

export default Border;
