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
import {
  getFirestore,
  collection,
  getDocs,
  onSnapshot,
  doc,
  addDoc,
  Timestamp,
  orderBy,
  query,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCzVKJf4uOyQxyWYaLD39pkd0_Up2u2gnY",
  authDomain: "linked-in-clone-464d9.firebaseapp.com",
  projectId: "linked-in-clone-464d9",
  storageBucket: "linked-in-clone-464d9.appspot.com",
  messagingSenderId: "854248874047",
  appId: "1:854248874047:web:a3295eef90c80aec7b988a",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore();

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");

  const colRef = collection(db, "posts");

  const q = query(colRef, orderBy("timestamp", "desc"));

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
      name: "Punit",
      description: "Software Engineer",
      message: input,
      photoUrl: "",
      timestamp: Timestamp.fromMillis(Date.now()),
    });

    setInput("");
  };

  return (
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
          <InputOption title="Vedio" Icon={SubscriptionsIcon} color="#5f9b41" />
          <InputOption title="Event" Icon={EventNoteIcon} color="#c37d16" />
          <InputOption
            title="Write article"
            Icon={CalendarViewDayIcon}
            color="#e16745"
          />
        </div>
      </div>
      {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
        <Post
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
        />
      ))}
    </div>
  );
};

export default Feed;
