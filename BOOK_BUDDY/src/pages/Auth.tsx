import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Lock, Mail } from 'lucide-react';
import Button from '../components/Button';
import Input from '../components/Input';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login, register } = useAuth();
  const { t } = useLanguage();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (isLogin) {
        await login(formData.email, formData.password);
      } else {
        await register(formData.name, formData.email, formData.password);
      }
      navigate('/profile');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  // Function to fill admin credentials
  const fillAdminCredentials = () => {
    setFormData({
      ...formData,
      email: 'admin@bookbuddy.com',
      password: 'admin123'
    });
  };

  return (
    <div className="min-h-screen bg-amber-50 dark:bg-gray-900 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-gray-100">
          {isLogin ? t('auth.login') : t('auth.register')}
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="font-medium text-emerald-600 dark:text-emerald-400 hover:text-emerald-500"
          >
            {isLogin ? t('auth.register') : t('auth.login')}
          </button>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white dark:bg-gray-800 py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {error && (
            <div className="mb-4 p-2 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-200 rounded">
              {error}
            </div>
          )}
          
          <form className="space-y-6" onSubmit={handleSubmit}>
            {!isLogin && (
              <Input
                label={t('auth.name')}
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                disabled={loading}
              />
            )}
            
            <Input
              label={t('auth.email')}
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              disabled={loading}
            />

            <Input
              label={t('auth.password')}
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
              disabled={loading}
            />

            <Button 
              type="submit" 
              className="w-full"
              disabled={loading}
            >
              {loading ? 'Loading...' : isLogin ? t('auth.login') : t('auth.register')}
            </Button>

            {isLogin && (
              <div className="mt-4">
                <Button
                  type="button"
                  variant="secondary"
                  className="w-full"
                  onClick={fillAdminCredentials}
                >
                  Use Admin Account
                </Button>
                <p className="mt-2 text-xs text-center text-gray-500 dark:text-gray-400">
                  Admin email: admin@bookbuddy.com<br />
                  Password: admin123
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}