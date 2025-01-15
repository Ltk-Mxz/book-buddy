import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import { LanguageProvider } from './contexts/LanguageContext';
import AppRoutes from './routes';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AuthProvider>
          <BrowserRouter>
            <div className="min-h-screen bg-amber-50 dark:bg-gray-900 transition-colors duration-200">
              <Navbar />
              <main className="pt-4">
                <AppRoutes />
              </main>
            </div>
          </BrowserRouter>
        </AuthProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}