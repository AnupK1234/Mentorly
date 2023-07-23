import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Blog from "./components/blog";
import Event from "./components/event";
import Goals from "./components/goals";
import Mentor from "./components/mentor/Mentor";
import Mentee from "./components/mentee/Mentee";
import Home from "./components/Home";
import MentorshipRequests from './components/mentor/MentorshipRequest';
import CalendarIntegration from './components/mentor/CalendarIntegration';
import CreateNewMeeting from './components/mentor/CreateNewMeeting';
import FeedbackAndRatings from './components/mentor/FeedbackAndRatings';
import MentorSettings from './components/mentor/MentorSettings';
import MentorshipHistory from './components/mentor/MentorshipHistory';
import MentorshipProgressTracking from './components/mentor/MentorshipProgressTracking';
import Notifications from './components/mentor/Notifications';
import MentorshipTipsAndResources from './components/mentor/MentorshipTipsAndResources';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} exact/>
          <Route path="/blogs" element={<Blog/>} exact/>
          <Route path="/events" element={<Event/>} exact/>
          <Route path="/goals" element={<Goals/>} exact/>
          <Route path="/mentor" element={<Mentor/>} exact/>
          <Route path="/mentee" element={<Mentee/>} exact/>
          <Route path="/mentorship_requests" element={<MentorshipRequests/>} exact/>
          <Route path="/mentorship_history" element={<MentorshipHistory/>} exact/>
          <Route path="/create_new_meeting" element={<CreateNewMeeting/>} exact/>
          <Route path="/mentorship_progress_tracking" element={<MentorshipProgressTracking/>} exact/>
          <Route path="/feedback_and_ratings" element={<FeedbackAndRatings/>} exact/>
          <Route path="/notifications" element={<Notifications/>} exact/>
          <Route path="/calendar_integration" element={<CalendarIntegration/>} exact/>
          <Route path="/mentor_settings" element={<MentorSettings/>} exact/>
          <Route path="/mentorship_tips_and_resources" element={<MentorshipTipsAndResources/>} exact/>
        </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
