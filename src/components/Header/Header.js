import React from "react";
import Logo from "./Logo";
import Search from "./Search";
import Offers from "./Offers";

export default function Header() {
  return (
    <div className="bg-white shadow">
    <div className="container mx-auto">
      <nav className="flex items-center w-full h-16">
        <div className="flex-none px-2 md:px-16">
          <Logo />
        </div>
        <div className="flex-auto pl-8">
          <Search />
        </div>
        <div className="flex-none px-6">
          <Offers />
        </div>
      </nav>
    </div>
    </div>
  );
}
