import React from 'react';
import getConfig from 'next/config';

function Sessions() {
  const { publicRuntimeConfig } = getConfig();

  return (
    <div className="text-center min-h-screen py-10 resource">
      <div className="max-w-4xl mx-auto pb-12  px-4">
        <h1 className=" font-bold text-4xl sm:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-500">
          Sessions
        </h1>
        <span className="text-gray-400 block py-4 pb-0">Recorded Meetup Sessions from VirtualEDA</span>
      </div>
      <main className="bg-gray-900 min-h-screen py-8 sm:py-14 text-gray-500 px-8">
        <h3 className="text-lg sm:text-2xl">Virtual Event-Driven remote meetups will be starting soon...</h3>
        <div className="mt-4 space-y-2 text-xs sm:text-base">
          <p>
            If you would like to attend please sign up to our{' '}
            <a className="underline text-gray-400" href={publicRuntimeConfig.MEETUP_URL} target="_blank" rel="noreferrer">
              Meetup Group.
            </a>
          </p>
          <p>If you would like to speak please get in touch.</p>
        </div>
      </main>
    </div>
  );
}

export default Sessions;
