import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Button from '../components/Button';

export default function LandingPage() {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="mt-24 mx-4 md:mx-0 space-y-8 flex flex-col">
      <div className="text-2xl font-semibold tracking-tight">
        Welcome to the weather forecast web application.
      </div>
      <div className="space-y-4">
        <p>
          Please login with your Github user to use the application and view the
          weather in your city.
        </p>
        <Button onClick={() => loginWithRedirect()}>
          <span>Login</span>
        </Button>
      </div>
    </div>
  );
}
