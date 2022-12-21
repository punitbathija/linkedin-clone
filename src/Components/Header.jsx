import React from "react";
import "./header.css";
import SearchIcon from "@mui/icons-material/Search";
import logo from "../assets/logo.svg";
import HeaderOptions from "./HeaderOptions";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useDispatch } from "react-redux";
import { logout } from "../features/userSlice";
import { getAuth, signOut } from "firebase/auth";
import { firebaseConfig } from "../firebase";
import { initializeApp } from "firebase/app";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Header = () => {
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const dispatch = useDispatch();
  const logOutOfApp = () => {
    dispatch(logout());
    signOut(auth)
      .then(() => {
        toast.success("Signed Out");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="header">
      <ToastContainer position="bottom-left" />
      <div className="header-left">
        <img src={logo} alt="" />
        <div className="header_search">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>

      <div className="header-right">
        <HeaderOptions Icon={HomeIcon} title="Home" />
        <HeaderOptions Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOptions Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOptions Icon={ChatIcon} title="Messaging" />
        <HeaderOptions Icon={NotificationsIcon} title="Notifications" />
        <HeaderOptions
          avatar="https://avatars.githubusercontent.com/u/87932246?v=4"
          title="Me"
          onClick={logOutOfApp}
        />
      </div>
    </div>
  );
};

export default Header;
