import ProfilePage from "./components/profile/ProfilePage";
import Homepage from "./components/homepage/Homepage";
import EditProfilePage from "./components/editprofile/EditProfilePage";
import JobsPage from "./components/jobs/JobsPage";
import MessagePage from "./components/message/MessagePage";
import NetworkPage from "./components/network/NetworkPage";
import NotificationsPage from "./components/notifications/NotificationsPage";
import "bootstrap/dist/css/bootstrap.min.css";
// import './App.css'
import "./App.css";
import TopNavbar from "./components/layout/Navbar";
import { useAppDispatch } from "./store";
import { useEffect } from "react";
import { fetchCurrentUser } from "./store/userSlice";
import { Routes, Route } from "react-router-dom";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <TopNavbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/edit-profile" element={<EditProfilePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/network" element={<NetworkPage />} />
        <Route path="/messages" element={<MessagePage />} />
        <Route path="/notifications" element={<NotificationsPage />} />
      </Routes>
    </>
  );
}

export default App;
