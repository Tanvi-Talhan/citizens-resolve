import React from 'react'
import Guidelines from './Components/Guidelines'
import FAQ from './Components/FAQ'
import CardGrid from './Components/CardGrid'

/*import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Home from './pages/Home.jsx';
import ReportIssue from './pages/ReportIssue';
import IssueTracker from './pages/IssueTracker';
import GovernmentAction from './pages/GovernmentAction';
import NewsAndUpdate from './pages/NewsAndUpdate.jsx';
import Guidelines from './pages/Guidelines.jsx';
import UserProfile from './pages/UserProfile';
import FAQ from './pages/FAQ';
import FeedbackAndSuggestion from './pages/FeedbackAndSuggestion';
import AboutUs from './pages/AboutUs';
import TeamAndSupport from './pages/TeamAndSupport';
// import Footer from './components/Footer.jsx';
// import Navbar from './components/Navbar.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          {/* <Route path="navbar" element={<Navbar />} /> }
          <Route path="report-issue" element={<ReportIssue />} />
          <Route path="issue-tracker" element={<IssueTracker />} />
          <Route path="government-action" element={<GovernmentAction />} />
          <Route path="news-and-update" element={<NewsAndUpdate />} />
          <Route path="guidelines-and-safety-tips" element={<Guidelines />} />
          <Route path="user-profile" element={<UserProfile />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="feedback-and-suggestion" element={<FeedbackAndSuggestion />} />
          <Route path="about-us" element={<AboutUs />} />
          {/* <Route path="footer" element={<Footer />} />}
          <Route path="team-and-support" element={<TeamAndSupport />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;*/

import React from 'react';
import Guidelines from './pages/GuidelinesAndSafety';

function App() {
  return (
    <div>
      
      <Guidelines/>
      <FAQ/>
      <CardGrid/>
    </div>
  )
}
export default App
export default App
