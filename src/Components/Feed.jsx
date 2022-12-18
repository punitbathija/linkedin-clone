import React from "react";
import "./feed.css";
import CreateIcon from "@mui/icons-material/Create";
import InputOption from "./Input_Option";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";

const Feed = () => {
  return (
    <div className="feed">
      <div className="feed_inputContainer">
        <div className="feed_input">
          <CreateIcon />
          <form>
            <input type="text" />
            <button type="submit">Send</button>
          </form>
        </div>
        <div className="feed_inputOptions">
          <InputOption title="Photo" Icon={ImageIcon} color="#70B5F9" />
          <InputOption title="Vedio" Icon={SubscriptionsIcon} color="#5f9b41" />
          <InputOption title="Event" Icon={EventNoteIcon} color="#c37d16" />
          <InputOption
            title="Write article"
            Icon={CalendarViewDayIcon}
            color="#e16745"
          />
        </div>
      </div>
    </div>
  );
};

export default Feed;
