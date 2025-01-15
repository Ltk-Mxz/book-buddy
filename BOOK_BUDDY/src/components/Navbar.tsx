import React from 'react';
import { Book, Home, Search, User, History, Shuffle, LogOut } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';
import ThemeToggle from './ThemeToggle';
import LanguageSwitch from './LanguageSwitch';

const navigation = [
  { name: 'nav.home', href: '/', icon: Home },
  { name: 'nav.search', href: '/search', icon: Search },
  { name: 'nav.profile', href: '/profile', icon: User },
  { name: 'nav.suggestions', href: '/suggestions', icon: Shuffle },
  { name: 'nav.history', href: '/history', icon: History },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();
  const { t } = useLanguage();

  const isActive = (path: string) => location.pathname === path;

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-amber-50 dark:bg-gray-800 border-b border-amber-100 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Book className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
              <span className="ml-2 text-xl font-serif font-semibold text-emerald-800 dark:text-emerald-200">
                BookBuddy
              </span>
            </Link>
          </div>
          
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`inline-flex items-center px-1 pt-1 text-sm font-medium
                  ${isActive(item.href) 
                    ? 'text-emerald-900 dark:text-emerald-200 border-b-2 border-emerald-500' 
                    : 'text-emerald-700 dark:text-emerald-300 hover:text-emerald-900 dark:hover:text-emerald-100'
                  }`}
              >
                <item.icon className="h-4 w-4 mr-1" />
                {t(item.name)}
              </Link>
            ))}

            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <LanguageSwitch />
              {isAuthenticated && (
                <button
                  onClick={handleLogout}
                  className="inline-flex items-center text-sm font-medium text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300"
                >
                  <LogOut className="h-4 w-4 mr-1" />
                  {t('auth.logout')}
                </button>
              )}
            </div>
          </div>

          <div className="sm:hidden flex items-center space-x-4">
            <ThemeToggle />
            <LanguageSwitch />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-emerald-700 dark:text-emerald-300"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`flex items-center px-3 py-2 text-base font-medium
                  ${isActive(item.href)
                    ? 'text-emerald-900 dark:text-emerald-200 bg-emerald-50 dark:bg-emerald-900'
                    : 'text-emerald-700 dark:text-emerald-300 hover:text-emerald-900 dark:hover:text-emerald-100'
                  }`}
                onClick={() => setIsOpen(false)}
              >
                <item.icon className="h-5 w-5 mr-2" />
                {t(item.name)}
              </Link>
            ))}
            {isAuthenticated && (
              <button
                onClick={handleLogout}
                className="w-full flex items-center px-3 py-2 text-base font-medium text-red-600 dark:text-red-400"
              >
                <LogOut className="h-5 w-5 mr-2" />
                {t('auth.logout')}
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}