import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Button from '../components/Button';

export default function LandingPage() {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="mt-40 space-y-10 flex flex-col">
      <h2 className="text-2xl font-semibold tracking-tight">
        Welcome to the weather forecast web application.
        <br />
        Please login with your Github user to use the application and view the
        weather in your city.
      </h2>
      <div className="space-y-4">
        <Button onClick={() => loginWithRedirect()}>
          <span>Login</span>
        </Button>
      </div>
    </div>
  );
}
