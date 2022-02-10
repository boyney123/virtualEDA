import React from 'react';
import Link from 'next/link';

const navigation = [
  { name: 'Learn', href: '/learn/general' },
  { name: 'Sessions', href: '/sessions' },
  { name: 'Join Discord', href: '#' },
];

function Header() {
  return (
    <nav
      className="max-w-7xl mx-auto sm:flex text-center items-center justify-between py-6 sm:py-8 px-8 xl:px-0"
      aria-label="Global"
    >
      <div className="hidden sm:flex sm:items-center sm:flex-1 mb-4 sm:mb-0">
        <div className="sm:w-auto">
          <Link href="/">
            <a>
              <span className="text-xl sm:text-base font-bold text-white">virtualEDA</span>
            </a>
          </Link>
        </div>
      </div>
      <div className="md:flex">
        <div className="space-x-10 md:flex md:ml-10 text-xs sm:text-base">
          {navigation.map((item) => (
            <Link key={item.name} href={item.href}>
              <a className="font-medium text-white hover:text-gray-300">{item.name}</a>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Header;
