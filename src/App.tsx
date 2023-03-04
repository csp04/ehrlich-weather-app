import React from 'react';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import LandingPage from './pages/LandingPage';
import { useAuth0 } from '@auth0/auth0-react';
import WeatherPage from './pages/WeatherPage';

function App() {
  const { isLoading, isAuthenticated } = useAuth0();

  return (
    <div className="flex flex-col h-screen">
      <header className="border-b border-gray-300 h-[50px] flex items-center px-4">
        <NavBar />
      </header>
      <main className="flex-grow container mx-auto px-4">
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                isLoading ? null : isAuthenticated ? (
                  <HomePage />
                ) : (
                  <LandingPage />
                )
              }
            />
            <Route
              path="/weather"
              element={
                isLoading ? null : isAuthenticated ? (
                  <WeatherPage />
                ) : (
                  <Navigate to="/" />
                )
              }
            />
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
