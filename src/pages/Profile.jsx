import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';

const Profile = () => {
  const { user, updateProfileFunc, loading, error, clearError } = useContext(AuthContext);
  const [displayName, setDisplayName] = useState(user?.displayName || '');
  const [photoURL, setPhotoURL] = useState(user?.photoURL || '');
  const [isEditing, setIsEditing] = useState(false);
  const [message, setMessage] = useState('');

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    try {
      await updateProfileFunc(displayName, photoURL);
      setMessage('Profile updated successfully!');
      setIsEditing(false);
      clearError();
    } catch (err) {
      setMessage('Failed to update profile');
    }
  };

  const handleCancel = () => {
    setDisplayName(user?.displayName || '');
    setPhotoURL(user?.photoURL || '');
    setIsEditing(false);
    setMessage('');
    clearError();
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">Please log in to view your profile</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="px-6 py-8">
          <div className="text-center mb-8 ">
            <h2 className="text-3xl font-bold text-gray-900">User Profile</h2>
          </div>

          {/* Current Profile Info */}
          {!isEditing ? (
            <div className="space-y-6">
              <div className="text-center">
                {user.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt="Profile"
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                ) : (
                  <div className="w-32 h-32 rounded-full bg-gray-300 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl text-gray-600">
                      {user.displayName ? user.displayName.charAt(0).toUpperCase() : user.email?.charAt(0).toUpperCase()}
                    </span>
                  </div>
                )}
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Display Name</label>
                  <p className="mt-1 text-lg text-gray-900">{user.displayName || 'Not set'}</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <p className="mt-1 text-lg text-gray-900">{user.email}</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Email Verified</label>
                  <p className={`mt-1 text-lg ${user.emailVerified ? 'text-green-600' : 'text-red-600'}`}>
                    {user.emailVerified ? 'Verified' : 'Not Verified'}
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Account Created</label>
                  <p className="mt-1 text-lg text-gray-900">
                    {user.metadata?.creationTime ? new Date(user.metadata.creationTime).toLocaleDateString() : 'Unknown'}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsEditing(true)}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200"
              >
                Edit Profile
              </button>
            </div>
          ) : (
            /* Edit Profile Form */
            <form onSubmit={handleUpdateProfile} className="space-y-6">
              {message && (
                <div className={`p-3 rounded-md ${message.includes('successfully') ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                  {message}
                </div>
              )}

              {error && (
                <div className="p-3 bg-red-50 text-red-800 rounded-md">
                  {error}
                </div>
              )}

              <div>
                <label htmlFor="displayName" className="block text-sm font-medium text-gray-700">
                  Display Name
                </label>
                <input
                  type="text"
                  id="displayName"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-black"
                  placeholder="Enter your display name"
                />
              </div>

              <div>
                <label htmlFor="photoURL" className="block text-sm font-medium text-gray-700">
                  Photo URL
                </label>
                <input
                  type="url"
                  id="photoURL"
                  value={photoURL}
                  onChange={(e) => setPhotoURL(e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-black"
                  placeholder="Enter photo URL"
                />
              </div>

              <div className="flex space-x-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 transition duration-200"
                >
                  {loading ? 'Updating...' : 'Update Profile'}
                </button>
                <button
                  type="button"
                  onClick={handleCancel}
                  disabled={loading}
                  className="flex-1 bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 disabled:opacity-50 transition duration-200"
                >
                  Cancel
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;