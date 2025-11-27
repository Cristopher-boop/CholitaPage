import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import PageFooter from './components/PageFooter';
import HomePage from './pages/HomePage';
import LevelsPage from './pages/LevelsPage';
import TeamPage from './pages/TeamPage';
import FeaturesPage from './pages/FeaturesPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-900 flex flex-col">
        <Navigation />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/levels" element={<LevelsPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/features" element={<FeaturesPage />} />
          </Routes>
        </main>
        <PageFooter />
      </div>
    </Router>
  );
}

export default App;
