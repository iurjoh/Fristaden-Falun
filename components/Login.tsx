import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    window.location.hash = hash;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      await login(email, password);
      window.location.hash = '#home'; // Redirect on success
    } catch (err: any) {
      setError(err.message || 'Failed to log in. Please check your credentials.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-20 bg-church-light-gray min-h-[calc(100vh-200px)] flex items-center justify-center">
      <div className="container mx-auto px-6">
        <div className="max-w-md mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100">
          <h2 className="text-3xl font-bold text-center text-church-blue font-serif mb-6">Login to Your Account</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-church-gray mb-1">Email Address</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-church-gold focus:border-church-gold outline-none transition-shadow bg-white"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-church-gray mb-1">Password</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-church-gold focus:border-church-gold outline-none transition-shadow bg-white"
                placeholder="••••••••"
              />
            </div>
            {error && <p role="alert" className="text-red-500 text-sm text-center">{error}</p>}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-church-gold text-white px-8 py-3 rounded-full font-semibold hover:bg-church-blue transition-all duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isLoading ? 'Logging In...' : 'Login'}
              </button>
            </div>
          </form>
          <div className="mt-6 text-center">
            <p className="text-sm text-church-gray">
              Don't have an account?{' '}
              <a href="#signup" onClick={(e) => handleNavClick(e, '#signup')} className="font-semibold text-church-gold hover:underline">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;