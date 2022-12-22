import { Avatar } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import "./sidebar.css";

const Sidebar = () => {
  const user = useSelector(selectUser);
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img
          src="https://tippie.uiowa.edu/sites/tippie.uiowa.edu/files/2022-06/linkedinheaders-gold-background.jpg"
          alt=""
        />
        <Avatar src={user.photoUrl} className="sidebar_avatar">
          {user.email[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
        <div className="sidebar_stats">
          <div className="sidebar_stat">
            <p>Who viewed you</p>
            <p className="sidebar_statnumber">2,536</p>
          </div>
          <div className="sidebar_stat">
            <p>Views on post's</p>
            <p className="sidebar_statnumber">2,464</p>
          </div>
        </div>
      </div>
      <div className="sidebar_bottom">
        <p>Discover More</p>
        {recentItem("Mongo DB💾")}
        {recentItem("Express Js🚅")}
        {recentItem("React Js⚛️")}
        {recentItem("Node Js🎮")}
        {recentItem("Next Js🌟")}
      </div>
    </div>
  );
};

export default Sidebar;
