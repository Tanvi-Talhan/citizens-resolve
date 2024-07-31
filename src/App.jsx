import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Home from './components/Home.jsx';
import ReportIssue from './components/ReportIssue';
import IssueTracker from './components/IssueTracker';
import GovernmentAction from './components/GovernmentAction';
import NewsAndUpdate from './components/NewsAndUpdate.jsx';
import GuidelinesAndSafetyTips from './components/GuidelinesAndSafety.jsx';
import UserProfile from './components/UserProfile'
import FAQ from './components/FAQ';
import FeedbackAndSuggestion from './components/FeedbackAndSuggestion';
import AboutUs from './components/AboutUs';
import TeamAndSupport from './components/TeamAndSupport';
// import Footer from './components/Footer.jsx';
// import Navbar from './components/Navbar.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          {/* <Route path="navbar" element={<Navbar />} /> */}
          <Route path="report-issue" element={<ReportIssue />} />
          <Route path="issue-tracker" element={<IssueTracker />} />
          <Route path="government-action" element={<GovernmentAction />} />
          <Route path="news-and-update" element={<NewsAndUpdate />} />
          <Route path="guidelines-and-safety-tips" element={<GuidelinesAndSafetyTips />} />
          <Route path="user-profile" element={<UserProfile />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="feedback-and-suggestion" element={<FeedbackAndSuggestion />} />
          <Route path="about-us" element={<AboutUs />} />
          {/* <Route path="footer" element={<Footer />} /> */}
          <Route path="team-and-support" element={<TeamAndSupport />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
