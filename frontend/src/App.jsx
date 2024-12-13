import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProtectedRoute from './components/ProtectedRoute';
import AnalysisPage from './pages/AnalysisPage';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import './index.css';
import { ToastContainer } from 'react-toastify';
import AIPage from './pages/AIPage';
import DigitalMarketingPage from './pages/DigitalMarketingPage';
import DigitalStrategyPage from './pages/DigitalStrategyPage';
import { AnimatePresence, motion } from 'framer-motion';

const App = () => {
  return (
    <Router>
      <Navbar />
      <AnimatedRoutes />
      <ToastContainer position="top-right" autoClose={3000} />
    </Router>
  );
};

// Animación para las rutas
const AnimatedRoutes = () => {
  const location = useLocation(); // Necesario para manejar la animación de las rutas

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><HomePage /></PageWrapper>} />
        <Route path="/login" element={<PageWrapper><LoginPage /></PageWrapper>} />
        <Route path="/register" element={<PageWrapper><RegisterPage /></PageWrapper>} />
        <Route
          path="/services/analysis"
          element={
            <ProtectedRoute>
              <PageWrapper>
                <AnalysisPage />
              </PageWrapper>
            </ProtectedRoute>
          }
        />
        <Route
          path="/services/ai"
          element={
            <ProtectedRoute>
              <PageWrapper>
                <AIPage />
              </PageWrapper>
            </ProtectedRoute>
          }
        />
        <Route
          path="/services/digital-marketing"
          element={
            <ProtectedRoute>
              <PageWrapper>
                <DigitalMarketingPage />
              </PageWrapper>
            </ProtectedRoute>
          }
        />
        <Route
          path="/services/digital-strategy"
          element={
            <ProtectedRoute>
              <PageWrapper>
                <DigitalStrategyPage />
              </PageWrapper>
            </ProtectedRoute>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

// Componente para animar las transiciones de las páginas
const PageWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default App;
