import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { useAuth0 } from '@auth0/auth0-react';

export default function LandingPage() {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="mt-40 space-y-4">
      <h2 className="text-4xl font-bold tracking-tight">
        Ehrlich Weather Forecast
      </h2>
      <div className="space-y-4">
        <button
          className="border border-gray-400
                       px-4 py-1
                       rounded
                       flex items-center justify-center
                       space-x-2"
          onClick={() => loginWithRedirect()}
        >
          <FaGithub /> <span>Login with Github</span>
        </button>
      </div>
    </div>
  );
}
