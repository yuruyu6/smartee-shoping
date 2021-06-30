import React from 'react';
import Logo from './Logo';
import Search from './Search';
import Offers from './Offers';
import Notification from './Notifications';
import HamburgerMenu from './HamburgerMenu';

export default function Header() {
  return (
    <div className="sticky top-0 z-20 bg-white shadow">
      <div className="container mx-auto">
        <nav className="block sm:flex text-center items-center w-full sm:h-16">
          <div className="flex flex-row-reverse justify-between mr-2 pt-2 pl-4 sm:pt-0 md:px-16">
            <HamburgerMenu />
            <Logo />
          </div>
          <div className="flex-auto p-3 sm:pl-8">
            <Search />
          </div>
          <div className="hidden sm:block flex-none px-6">
            <Offers />
          </div>
        </nav>
      </div>
      <Notification />
    </div>
  );
}
