import ProfilePage from "./components/profile/ProfilePage";
import Homepage from "./components/homepage/Homepage";
import EditProfilePage from "./components/editprofile/EditProfilePage";
import JobsPage from "./components/jobs/JobsPage";
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
      </Routes>
    </>
  );
}

export default App;
