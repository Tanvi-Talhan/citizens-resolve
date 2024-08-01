
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReportIssue from './pages/ReportIssue';
import Home from './pages/Home';
import MainLayout from './components/MainLayout';
import Home from './pages/Home.jsx';
import ReportIssue from './pages/ReportIssue.jsx';
import IssueTracker from './pages/IssueTracker.jsx';
import GovernmentAction from './pages/GovernmentAction.jsx';
import NewsAndUpdate from './pages/NewsAndUpdate.jsx';
import Guidelines from './pages/GuidelinesAndSafety.jsx';
import UserProfile from './pages/UserProfile.jsx'
import FAQ from './pages/FAQ.jsx';
import FeedbackAndSuggestion from './pages/FeedbackAndSuggestion.jsx';
import AboutUs from './pages/AboutUs.jsx';
import TeamAndSupport from './pages/TeamAndSupport.jsx';
// import Footer from './components/Footer.jsx';
// import Navbar from './components/Navbar.jsx';

function App() {
  return (
    // <ReportIssue />
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          {<Route path="navbar" element={<Navbar />} />}
          <Route path="report-issue" element={<ReportIssue />} />
          <Route path="issue-tracker" element={<IssueTracker />} />
          <Route path="government-action" element={<GovernmentAction />} />
          <Route path="news-and-update" element={<NewsAndUpdate />} />
          <Route path="guidelines-and-safety-tips" element={<Guidelines />} />
          <Route path="user-profile" element={<UserProfile />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="feedback-and-suggestion" element={<FeedbackAndSuggestion />} />
          <Route path="about-us" element={<AboutUs />} />
          {<Route path="footer" element={<Footer />} />}
          <Route path="team-and-support" element={<TeamAndSupport />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

/*import Guidelines from './pages/GuidelinesAndSafety';

function App() {
  return (
    <div>
      <Guidelines />
      <Guidelines/>
      <FAQ/>
      <CardGrid/>
    </div>
  )
}
export default App*/
