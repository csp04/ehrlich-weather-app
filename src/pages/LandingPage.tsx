import React from 'react';
import { FaGithub } from 'react-icons/fa';

export default function LandingPage() {
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
        >
          <FaGithub /> <span>Login with Github</span>
        </button>
      </div>
    </div>
  );
}
