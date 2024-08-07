import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Home from './Pages/Home.jsx';
import ReportIssue from './Pages/ReportIssue.jsx';
import IssueTracker from './Pages/IssueTracker.jsx';
import GovernmentAction from './Pages/GovernmentAction.jsx';
import NewsAndUpdate from './Pages/NewsAndUpdate.jsx';
import UserProfile from './Pages/UserProfile.jsx'
import FeedbackAndSuggestion from './Pages/FeedbackAndSuggestion.jsx';
import AboutUs from './Pages/AboutUs.jsx';
import TeamAndSupport from './Pages/TeamAndSupport.jsx';
import FAQ from './Pages/FAQ.jsx';
import GuidelinesAndSafety from './Pages/GuidelinesAndSafety.jsx';
import Home from './pages/Home.jsx';
import ReportIssue from './pages/ReportIssue.jsx';
import IssueTracker from './pages/IssueTracker.jsx';
import GovernmentAction from './pages/GovernmentAction.jsx';
import NewsAndUpdate from './pages/NewsAndUpdate.jsx';
import UserProfile from './pages/UserProfile.jsx'
import FeedbackAndSuggestion from './pages/FeedbackAndSuggestion.jsx';
import AboutUs from './pages/AboutUs.jsx';
import TeamAndSupport from './pages/TeamAndSupport.jsx';
import FAQ from './pages/FAQ.jsx';
import GuidelinesAndSafety from './pages/GuidelinesAndSafety.jsx';
import Sidebar from './components/Sidebar.jsx';
function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Sidebar />}>
          <Route index element={<Home />} />
          <Route path="report-issue" element={<ReportIssue />} />
          <Route path="issue-tracker" element={<IssueTracker />} />
          <Route path="government-action" element={<GovernmentAction />} />
          <Route path="news-and-update" element={<NewsAndUpdate />} />
          <Route path="guidelines-and-safety-tips" element={<GuidelinesAndSafety />} />
          <Route path="user-profile" element={<UserProfile />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="feedback-and-suggestion" element={<FeedbackAndSuggestion />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="team-and-support" element={<TeamAndSupport />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
