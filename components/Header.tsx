import React from 'react';
import Link from 'next/link';
import getConfig from 'next/config';

function Header() {
  const { publicRuntimeConfig } = getConfig();

  const navigation = [
    { name: 'Learn', href: '/learn/general' },
    { name: 'Sessions', href: '/sessions' },
    { name: 'Submit a Talk', href: publicRuntimeConfig.SUBMIT_TALK, newWindow: true },
    { name: 'Join Discord', href: publicRuntimeConfig.DISCORD_INVITE_URL, newWindow: true },
  ];

  return (
    <nav
      className="max-w-7xl mx-auto sm:flex text-center items-center justify-between py-6 sm:py-8 px-8 xl:px-0"
      aria-label="Global"
    >
      <div className="hidden sm:flex sm:items-center sm:flex-1 mb-4 sm:mb-0">
        <div className="sm:w-auto">
          <Link href="/">
            <a>
              <img alt="logo" src="/logo.svg" className="w-64" />
            </a>
          </Link>
        </div>
      </div>
      <div className="md:flex">
        <div className="space-x-10 md:flex md:ml-10 text-xs sm:text-base">
          {navigation.map((item) => {
            if (item.newWindow) {
              return (
                <a href={item.href} target="_blank" className="font-medium text-white hover:text-gray-300" rel="noreferrer">
                  {item.name}
                </a>
              );
            }
            return (
              <Link key={item.name} href={item.href}>
                <a className="font-medium text-white hover:text-gray-300">{item.name}</a>
              </Link>
            );
          })}
          ;
        </div>
      </div>
    </nav>
  );
}

export default Header;
