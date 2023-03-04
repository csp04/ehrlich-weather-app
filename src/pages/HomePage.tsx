import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { FaSearch } from 'react-icons/fa';
import Button from '../components/Button';

export default function HomePage() {
  const { user } = useAuth0();

  return (
    <div className="mt-40 flex flex-col items-center space-y-14">
      <div className="hidden md:flex flex-col items-center space-y-4">
        {user && (
          <>
            <span className="font-semibold">{user.name}</span>
            <span className="text-sm">https://github.com/{user.nickname}</span>
          </>
        )}
      </div>
      <div className="flex flex-col items-center space-y-4">
        <div className="border border-gray-400 flex items-center px-4 py-1 space-x-2 rounded">
          <FaSearch />
          <input
            type="text"
            className="outline-none text-sm w-[300px] h-[40px]"
          />
        </div>
        <Button onClick={() => {}} className="font-semibold uppercase">
          Display Weather
        </Button>
      </div>
    </div>
  );
}
