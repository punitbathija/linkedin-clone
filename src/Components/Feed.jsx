import React, { useEffect, useState } from "react";
import "./feed.css";
import CreateIcon from "@mui/icons-material/Create";
import InputOption from "./Input_Option";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import Post from "./Post";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebase";
import {
  getFirestore,
  collection,
  onSnapshot,
  doc,
  addDoc,
  Timestamp,
  orderBy,
  query,
} from "firebase/firestore";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import FlipMove from "react-flip-move";

const app = initializeApp(firebaseConfig);
const db = getFirestore();

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");

  const colRef = collection(db, "posts");

  const q = query(colRef, orderBy("timestamp", "desc"));

  const user = useSelector(selectUser);

  useEffect(() => {
    const dbData = onSnapshot(q, colRef, (snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  const sendPost = (e) => {
    e.preventDefault();
    addDoc(colRef, {
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl || "",
      timestamp: Timestamp.fromMillis(Date.now()),
    });
    toast.success("Post Created");
    setInput("");
  };

  return (
    <>
      <div className="feed">
        <div className="feed_inputContainer">
          <div className="feed_input">
            <CreateIcon />
            <form>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button onClick={sendPost} type="submit">
                Send
              </button>
            </form>
          </div>
          <div className="feed_inputOptions">
            <InputOption title="Photo" Icon={ImageIcon} color="#70B5F9" />
            <InputOption
              title="Vedio"
              Icon={SubscriptionsIcon}
              color="#5f9b41"
            />
            <InputOption title="Event" Icon={EventNoteIcon} color="#c37d16" />
            <InputOption
              title="Write article"
              Icon={CalendarViewDayIcon}
              color="#e16745"
            />
          </div>
        </div>
        <FlipMove>
          {posts.map(
            ({ id, data: { name, description, message, photoUrl } }) => (
              <Post
                key={id}
                name={name}
                description={description}
                message={message}
                photoUrl={photoUrl}
              />
            )
          )}
        </FlipMove>
      </div>
    </>
  );
};

export default Feed;
