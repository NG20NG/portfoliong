import React from "react";
import c from "./contact.module.css";
const PopMessage = ({ msg }: any) => {
  return (
    <div className={c.emailJsContainerMessage}>
      <div className={c.emailJsOk200}>{msg?.ok}</div>
      <div className={c.emailJsError500}>{msg?.err}</div>
      <div className={c.durationBorder} />
    </div>
  );
};

export default PopMessage;
