import axios from 'axios';
import { useState } from 'react';
import { useParams } from 'react-router-dom'; // Using react-router for routing (if you're using it)

const ResetPasswordConfirm = () => {
  const { token } = useParams();  // Get the reset token from the URL params (assuming the token is in the URL)
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setLoading(true);

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      setLoading(false);
      return;
    }

    if (password.length < 8) {
      setError('Password must be at least 8 characters long.');
      setLoading(false);
      return;
    }

    try {
      // Simulate an API call to reset the password (Replace with actual API call)
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate delay

      await axios.post('https://musicserver-uluy.onrender.com/user/password-reset', {
        resetToken: token,
        newPassword: password
      })
      // Assuming the reset token is valid and the password reset is successful
      setSuccess(true);
      setError("");
      setLoading(false);

      // Optionally, redirect the user to the login page after successful reset
      //history.push('/login');
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setError("Failed to reset password. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Réinitialisez votre mot de passe</h2>

        {success && (
          <div className="bg-green-100 border border-green-500 text-green-800 p-4 mb-4 rounded">
            Votre mot de passe a été réinitialisé avec succès. Vous pouvez maintenant vous connecter avec votre nouveau mot de passe.
          </div>
        )}

        {error && (
          <div className="bg-red-100 border border-red-500 text-red-800 p-4 mb-4 rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-semibold text-gray-700">
              Nouveau mot de passe
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
              placeholder="Entrez votre nouveau mot de passe"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-sm font-semibold text-gray-700">
              Confirmer le nouveau mot de passe
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="mt-1 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
              placeholder="Confirmez votre nouveau mot de passe"
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
            {loading ? 'Traitement en cours...' : 'Réinitialiser le mot de passe'}
          </button>
        </form>
      </div>
    </div>

  );
};

export default ResetPasswordConfirm;
