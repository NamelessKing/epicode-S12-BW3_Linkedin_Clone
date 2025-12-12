import ProfilePage from "./components/profile/ProfilePage";
import Homepage from "./components/homepage/Homepage";
import EditProfilePage from "./components/editprofile/EditProfilePage";
import JobsPage from "./components/jobs/JobsPage";
import MessagePage from "./components/message/MessagePage";
import NetworkPage from "./components/network/NetworkPage";
import NotificationsPage from "./components/notifications/NotificationsPage";
import LoginPage from "./components/login/LoginPage";
import ProtectedRoute from "./components/ProtectedRoute";
import "bootstrap/dist/css/bootstrap.min.css";
// import './App.css'
import "./App.css";
import TopNavbar from "./components/layout/Navbar";
import { useAppDispatch } from "./store";
import { useEffect } from "react";
import { fetchCurrentUser } from "./store/userSlice";
import { Routes, Route, useLocation } from "react-router-dom";
import { isAuthenticated } from "./config/auth";

function App() {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const authenticated = isAuthenticated();

  useEffect(() => {
    // Carica il profilo utente solo se autenticato e non sulla pagina di login
    if (authenticated && location.pathname !== "/login") {
      dispatch(fetchCurrentUser());
    }
  }, [dispatch, authenticated, location.pathname]);

  return (
    <>
      {/* Mostra la navbar solo se non siamo nella pagina di login */}
      {location.pathname !== "/login" && <TopNavbar />}

      <Routes>
        <Route path="/login" element={<LoginPage />} />

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Homepage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/edit-profile"
          element={
            <ProtectedRoute>
              <EditProfilePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/jobs"
          element={
            <ProtectedRoute>
              <JobsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/network"
          element={
            <ProtectedRoute>
              <NetworkPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/messages"
          element={
            <ProtectedRoute>
              <MessagePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/notifications"
          element={
            <ProtectedRoute>
              <NotificationsPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
