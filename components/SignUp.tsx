import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

const SignUp: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { signup } = useAuth();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    window.location.hash = hash;
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password.length < 6) {
      return setError('Password must be at least 6 characters long.');
    }
    setError('');
    setIsLoading(true);

    try {
      await signup(name, email, password);
      window.location.hash = '#home'; // Redirect on success
    } catch (err: any) {
      setError(err.message || 'Failed to create an account. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-20 bg-church-light-gray min-h-[calc(100vh-200px)] flex items-center justify-center">
      <div className="container mx-auto px-6">
        <div className="max-w-md mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100">
          <h2 className="text-3xl font-bold text-center text-church-blue font-serif mb-6">Create Your Account</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
             <div>
              <label htmlFor="name" className="block text-sm font-medium text-church-gray mb-1">Full Name</label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-church-gold focus:border-church-gold outline-none transition-shadow bg-white"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email-signup" className="block text-sm font-medium text-church-gray mb-1">Email Address</label>
              <input
                id="email-signup"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-church-gold focus:border-church-gold outline-none transition-shadow bg-white"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="password-signup" className="block text-sm font-medium text-church-gray mb-1">Password</label>
              <input
                id="password-signup"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-church-gold focus:border-church-gold outline-none transition-shadow bg-white"
                placeholder="At least 6 characters"
              />
            </div>
            {error && <p role="alert" className="text-red-500 text-sm text-center">{error}</p>}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-church-gold text-white px-8 py-3 rounded-full font-semibold hover:bg-church-blue transition-all duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isLoading ? 'Creating Account...' : 'Sign Up'}
              </button>
            </div>
          </form>
          <div className="mt-6 text-center">
            <p className="text-sm text-church-gray">
              Already have an account?{' '}
              <a href="#login" onClick={(e) => handleNavClick(e, '#login')} className="font-semibold text-church-gold hover:underline">
                Log in
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;