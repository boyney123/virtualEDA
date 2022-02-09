import React from 'react';
import Link from 'next/link';
const navigation = [
  { name: 'Learn', href: '/learn/general' },
  { name: 'Sessions', href: '/sessions' },
  { name: 'Join Discord', href: '#' },
];

const Header = () => {
  return (
    <nav className="max-w-7xl mx-auto flex items-center justify-between py-8" aria-label="Global">
      <div className="flex items-center flex-1">
        <div className="flex items-center justify-between w-full md:w-auto">
          <Link href="/">
            <a>
              <span className="font-bold text-white">Virtual Event-Driven</span>
            </a>
          </Link>
        </div>
      </div>
      <div className="md:flex">
        <div className="space-x-10 md:flex md:ml-10">
          {navigation.map((item) => (
            <Link key={item.name} href={item.href}>
              <a className="font-medium text-white hover:text-gray-300">{item.name}</a>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Header;
