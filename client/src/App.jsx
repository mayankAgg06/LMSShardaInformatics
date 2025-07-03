// client/src/App.js
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Import Link

import { Header, Footer } from './components';
import { AuthProvider } from './context/AuthContext'; // Import AuthProvider

// Lazy Load Pages
const DashboardPage = lazy(() => import('./pages/DashboardPage'));
const CoursesPage = lazy(() => import('./pages/CoursesPage'));
const AssignmentsPage = lazy(() => import('./pages/AssignmentsPage'));
const ProfilePage = lazy(() => import('./pages/ProfilePage'));
const SettingsPage = lazy(() => import('./pages/SettingsPage'));
const LoginPage = lazy(() => import('./pages/Auth/LoginPage'));
const RegisterPage = lazy(() => import('./pages/Auth/RegisterPage'));

// Main App Component
const App = () => {
  // Removed getCurrentUserId as user info will now come from AuthContext

  return (
    // Wrap the entire app with AuthProvider
    <Router>
      <AuthProvider> {/* New: AuthProvider wraps the content */}
        <div className="min-h-screen bg-gray-100 font-sans antialiased text-gray-900">
          <Header /> {/* Removed userId prop, Header will get it from context */}

          <main className="container mx-auto mt-8 p-4">
            <Suspense fallback={
              <div className="flex justify-center items-center h-48">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
                <p className="ml-3 text-gray-600">Loading page...</p>
              </div>
            }>
              <Routes>
                <Route path="/" element={<DashboardPage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/courses" element={<CoursesPage />} />
                <Route path="/assignments" element={<AssignmentsPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/settings" element={<SettingsPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="*" element={
                  <div className="text-center p-10">
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">404 - Page Not Found</h1>
                    <p className="text-lg text-gray-600">The page you are looking for does not exist.</p>
                    <Link to="/" className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out">
                      Go to Dashboard
                    </Link>
                  </div>
                } />
              </Routes>
            </Suspense>
          </main>

          <Footer />
        </div>
      </AuthProvider> {/* End AuthProvider */}
    </Router>
  );
};

export default App;