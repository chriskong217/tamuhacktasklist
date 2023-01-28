import React, { useState } from 'react';
import 'firebase/compat/auth';
import firebase from "firebase/compat/app";
import './Firebase.js';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { user } = await firebase.auth().signInWithEmailAndPassword(email, password);
      // Store user data in session storage
      sessionStorage.setItem('user', JSON.stringify(user));
    } catch (error) {
      alert("Invalid login!")
      console.error(error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="text" value={email} onChange={event => setEmail(event.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={event => setPassword(event.target.value)} />
      </label>
      <br />
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
