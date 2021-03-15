import React from "react";
import Logo from "./Logo";
import Search from "./Search";
import Offers from "./Offers";

export default function Header() {
  return (
    <div className="bg-white border-b border-gray-200">
    <div className="container mx-auto">
      <nav className="flex items-center w-full h-16">
        <div className="flex-none px-16">
          <Logo />
        </div>
        <div className="flex-auto pl-8">
          <Search />
        </div>
        <div className="flex-none px-6">
          <Offers />
        </div>
      </nav>
      <h1 className="h1 font-black"></h1>
    </div>
    </div>
  );
}
