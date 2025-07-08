import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Profile from "../pages/Profile";
import ProfileEdit from "../pages/Profile Pages/Edit";
import Mentor from "../pages/Profile Pages/Mentor";
import MentorAvailability from "../pages/Profile Pages/Mentor Pages/MentorAvailability";
import MenteeRequests from "../pages/Profile Pages/Mentor Pages/MenteeRequests";
import UpcomingSessions from "../pages/Profile Pages/Mentor Pages/UpcomingSessions";
import SessionDetails from "../components/SessionDetails";

export default function Router() {
  return (
    <div className="w-full ">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/profile" element={<Profile />}>
            <Route path="edit" element={<ProfileEdit />} />
            <Route path="mentor" element={<Mentor />} />
          </Route>
          <Route path="/availability" element={<MentorAvailability />} />
          <Route path="/requests" element={<MenteeRequests />} />
          <Route path="/sessions" element={<UpcomingSessions />}>
            <Route path="details" element={<SessionDetails/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
