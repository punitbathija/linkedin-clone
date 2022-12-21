import { Avatar } from "@mui/material";
import React from "react";
import "./headerOptions.css";

function HeaderOptions({ Icon, title, avatar, onClick }) {
  return (
    <div onClick={onClick} className="headeroptions">
      {Icon && <Icon className="headerOption_icon" />}
      {avatar && <Avatar className="headerOption_icon" src={avatar} />}
      <h3 className="headerOption_title">{title}</h3>
    </div>
  );
}

export default HeaderOptions;
