import React from 'react';

function LoginMessage({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? (
        <>
          <h1>LoginMessage</h1>
          <h2>Logged in</h2>
        </>
      ) : (
        <p>Please log in</p>
      )}
    </div>
  );
}

export default LoginMessage;