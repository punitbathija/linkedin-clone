import React, { forwardRef } from "react";
import "./post.css";
import { Avatar } from "@mui/material";
import InputOption from "./Input_Option";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import CommentIcon from "@mui/icons-material/Comment";
import ShareIcon from "@mui/icons-material/Share";
import SendIcon from "@mui/icons-material/Send";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
  const user = useSelector(selectUser);
  return (
    <div ref={ref} className="post">
      <div className="post_header">
        <Avatar src={photoUrl}>{name[0]}</Avatar>
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
});

export default Post;
