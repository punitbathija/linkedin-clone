import React from "react";
import "./post.css";
import { Avatar } from "@mui/material";
import InputOption from "./Input_Option";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import CommentIcon from "@mui/icons-material/Comment";
import ShareIcon from "@mui/icons-material/Share";
import SendIcon from "@mui/icons-material/Send";
const Post = ({ name, description, message, photoUrl }) => {
  return (
    <div className="post">
      <div className="post_header">
        <Avatar />
        <div className="post_info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post_body">
        <p>{message}</p>
      </div>
      <div className="post_buttons">
        <InputOption Icon={ThumbUpOffAltIcon} color="gray" title="Like" />
        <InputOption Icon={CommentIcon} color="gray" title="Comment" />
        <InputOption Icon={ShareIcon} color="gray" title="Repost" />
        <InputOption Icon={SendIcon} color="gray" title="Send" />
      </div>
    </div>
  );
};

export default Post;
