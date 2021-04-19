import React from 'react';
import Logo from './Logo';
import Search from './Search';
import Offers from './Offers';
import Notification from './Notification';

export default function Header() {
  return (
    <div className="sticky top-0 z-50 bg-white shadow">
      <div className="container mx-auto">
        <nav className="block md:flex text-center items-center w-full md:h-16">
          <div className="flex-none px-2 md:px-16">
            <Logo />
          </div>
          <div className="flex-auto pl-8">
            <Search />
          </div>
          <div className="hidden md:block flex-none px-6">
            <Offers />
          </div>
        </nav>
      </div>
      <Notification/>
    </div>
  );
}
