import axios from 'axios';
import { useState } from 'react';

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setLoading(true);

    // Example API call (Replace with actual API)
    try {
      await axios.post(
        'https://musicserver-uluy.onrender.com/user/request-password-reset',
        { email: email },
        { headers: { 'Content-Type': 'application/json' } } // Ensure the header is set
      );
      setSuccess(true);
      setError("");
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setError("An error occurred while resetting your password.");
      setSuccess(false);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Reset Your Password</h2>

        {success && (
          <div className="bg-green-100 border border-green-500 text-green-800 p-4 mb-4 rounded">
            A reset link has been sent to your email.
          </div>
        )}

        {error && (
          <div className="bg-red-100 border border-red-500 text-red-800 p-4 mb-4 rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
              placeholder="Enter your email"
              required
            />
          </div>

          <button
            type="submit"
            className={`w-full py-3 text-white font-semibold rounded-lg focus:outline-none ${loading
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-indigo-600 hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-600'
              }`}
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send Reset Link'}
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          Remembered your password?{' '}
          <a href="/login" className="text-indigo-600 hover:text-indigo-700">
            Login here
          </a>
        </p>
      </div>
    </div>
  );
};

export default ResetPassword;
