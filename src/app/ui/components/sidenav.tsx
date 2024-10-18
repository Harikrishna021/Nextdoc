import React from "react";
import Link from "next/link";

const sidebar = () => {
  return (
    <div className="h-screen w-64 bg-gray-800 text-white">
      <nav className="flex flex-col p-4">
        <h2 className="text-2xl font-bold mb-6">My Sidebar</h2>
        <Link href="/ " className="p-2 hover:bg-gray-700 rounded">
          Home
        </Link>
        <Link href="/about" className="p-2 hover:bg-gray-700 rounded">
          About
        </Link>
        <Link href="/contact" className="p-2 hover:bg-gray-700 rounded">
          Contact
        </Link>
        <Link href="/services" className="p-2 hover:bg-gray-700 rounded">
          Services
        </Link>
      </nav>
    </div>
  );
};

export default sidebar;
