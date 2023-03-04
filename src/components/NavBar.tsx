import React from 'react';

import { useAuth0 } from '@auth0/auth0-react';
import Button from './Button';
import { AiFillCloud } from 'react-icons/ai';

export default function NavBar() {
  const { isAuthenticated, logout } = useAuth0();

  return (
    <div className="flex items-center justify-between w-full font-bold text-lg tracking-tighter">
      <div className="flex items-center space-x-2">
        <AiFillCloud size={40} />
        <h1>Weather Forecast</h1>
      </div>

      {isAuthenticated && (
        <div>
          <Button onClick={() => logout()}>Logout</Button>
        </div>
      )}
    </div>
  );
}
