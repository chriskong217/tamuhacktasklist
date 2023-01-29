import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    // Log out the user
    sessionStorage.clear();
    window.location.reload(false);
    // Redirect the user to the home page
    navigate('/');
  }, []);

  return <div>Logging out...</div>;
}

export default Logout;

