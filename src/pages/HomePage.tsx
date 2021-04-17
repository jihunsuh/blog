import { Button } from '@entropyparadox/reusable-react';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

export const HomePage: FC = () => {
  return (
    <div className="w-full h-screen">
      Home
      <Link to="/blog/apple">
        <Button>Go To Apple</Button>
      </Link>
      version 0.0.14
      <div className="w-full max-w-128 mx-auto">
        <div className="border-2 border-gray-800 px-4 py-3">BLOG</div>
      </div>
    </div>
  );
};
