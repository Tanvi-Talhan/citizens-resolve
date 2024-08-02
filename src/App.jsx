import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MainLayout from './components/MainLayout';
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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="report-issue" element={<ReportIssue />} />
          <Route path="issue-tracker" element={<IssueTracker />} />
          <Route path="government-action" element={<GovernmentAction />} />
          <Route path="news-and-update" element={<NewsAndUpdate />} />
          <Route path="guidelines-and-safety-tips" element={<GuidelinesAndSafety />} />
          <Route path="user-profile" element={<UserProfile />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="feedback-and-suggestion" element={<FeedbackAndSuggestion />} />
          <Route path="guidelines-and-safety" element={<GuidelinesAndSafety />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="team-and-support" element={<TeamAndSupport />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
