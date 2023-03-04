import React from 'react';

export default function LandingPage() {
  return (
    <div className="mt-40 space-y-4">
      <div className="text-4xl font-bold tracking-tight">
        Ehrlich Weather Forecast
      </div>
      <div className="space-y-4">
        <div className="text-sm">
          Please login with your Github user to use the application and view the
          weather in your city.
        </div>
        <button
          className="border border-gray-400
                       px-4 py-1
                       rounded"
        >
          Login
        </button>
      </div>
    </div>
  );
}
