import React, { useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();


const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Clear error function
  const clearError = () => setError(null);

  const createUserWithEmailAndPasswordFunc = async (email, password) => {
    try {
      clearError();
      setLoading(true);
      const result = await createUserWithEmailAndPassword(auth, email, password);
      return result;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const updateProfileFunc = async (displayName, photoURL) => {
    try {
      clearError();
      setLoading(true);
      if (!auth.currentUser) {
        throw new Error("No user is currently logged in");
      }
      await updateProfile(auth.currentUser, {
        displayName,
        photoURL,
      });
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const sendEmailVerificationFunc = async () => {
    try {
      clearError();
      setLoading(true);
      if (!auth.currentUser) {
        throw new Error("No user is currently logged in");
      }
      await sendEmailVerification(auth.currentUser);
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const signInWithEmailAndPasswordFunc = async (email, password) => {
    try {
      clearError();
      setLoading(true);
      const result = await signInWithEmailAndPassword(auth, email, password);
      return result;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const signInWithGoogleFunc = async () => {
    try {
      clearError();
      setLoading(true);
      const result = await signInWithPopup(auth, googleProvider);
      return result;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const signInWithGithubFunc = async () => {
    try {
      clearError();
      setLoading(true);
      const result = await signInWithPopup(auth, githubProvider);
      return result;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const signoutUserFunc = async () => {
    try {
      clearError();
      setLoading(true);
      await signOut(auth);
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const sendPassResetEmailFunc = async (email) => {
    try {
      clearError();
      setLoading(true);
      await sendPasswordResetEmail(auth, email);
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const authInfo = {
    user,
    loading,
    error,
    createUserWithEmailAndPasswordFunc,
    signInWithEmailAndPasswordFunc,
    signInWithGoogleFunc,
    signInWithGithubFunc,
    signoutUserFunc,
    sendPassResetEmailFunc,
    sendEmailVerificationFunc,
    updateProfileFunc,
    clearError,
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      setError(null);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;