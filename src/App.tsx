import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import MainPage from './pages/MainPage';
import TestPage from './pages/TestPage';
import ResultPage from './pages/ResultPage';
import ErrorPage from './pages/ErrorPage';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/questions" element={<TestPage />} />
          <Route path="/result/:mbti" element={<ResultPage />} />
          <Route path="/error" element={<ErrorPage />} />
        <Route path="*" element={<Navigate to="/error" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;