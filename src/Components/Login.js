import React, { useState } from "react";
import "./login.css";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { firebaseConfig } from "../firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";
const app = initializeApp(firebaseConfig);

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profile, setProfile] = useState("");
  const dispatch = useDispatch();
  const auth = getAuth(app);

  const loginToApp = (e) => {
    signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        const user = userAuth.user;
        dispatch(
          login({
            email: user.user.email,
            uid: user.user.uid,
            displayName: user.user.displayName,
            photoUrl: user.user.photoURL,
          })
        );
        toast.success("Logged in Sucessfully");
      })
      .catch((error) => {
        toast.error("Something went wrong");
      });
    e.preventDefault();
  };
  const register = (e) => {
    if (!name) {
      toast.error("Please enter a valid name");
    }
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        const user = userAuth.user;
        if (user !== null) {
          const displayName = name;
          const photoUrl = profile;
        }
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: name,
            photoUrl: profile,
          })
        );
        toast.success("User Sucessfully Created");
      })
      .catch((error) => {
        toast.error("Something went wrong");
      });
  };
  return (
    <div className="login">
      <ToastContainer position="bottom-left" />
      <img src="https://cdn.sanity.io/images/599r6htc/localized/2dd026fa07535863f16a767a0b43bef597512319-1106x860.png?w=1200&q=70&fit=max&auto=format"></img>
      <h2>Login or Register</h2>
      <p>
        Not a Member?{" "}
        <span onClick={register} style={{ color: "blue" }}>
          Register
        </span>
      </p>
      <form>
        <label>Full Name</label>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          placeholder="Enter full name"
        />
        <label>Profile Picture</label>
        <input
          onChange={(e) => setProfile(e.target.value)}
          value={profile}
          type="text"
          placeholder="Enter url for picture (optional)"
        />
        <label>Email</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          placeholder="Enter valid email"
        />
        <label>Password</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          placeholder="Enter password"
        />
        <button type="submit" onClick={loginToApp}>
          Get In
        </button>
      </form>
    </div>
  );
};

export default Login;
