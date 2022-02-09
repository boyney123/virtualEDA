import React from 'react';
import getConfig from 'next/config';

const Sessions = () => {
  const { publicRuntimeConfig } = getConfig();

  return (
    <div className="text-center min-h-screen py-10 resource">
      <div className="max-w-4xl mx-auto pb-12">
        <h1 className=" font-bold text-6xl text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-500">Sessions Event Driven Architecture</h1>
        <span className="text-gray-400 block py-4 pb-0">Community list of Videos, Articles and Code to help you learn Event Driven Architectures.</span>
        <span className="text-gray-600 block py-4 text-sm">
          Want to add something to the list? Feel free to{' '}
          <a className="underline" href="https://github.com/boyney123/virtual-eda">
            contribute to the website
          </a>
        </span>
      </div>
      <main className="bg-gray-900 min-h-screen py-14 text-gray-500">
        <h3 className="text-2xl">Virtual Event-Driven remote meetups will be starting soon...</h3>
        <div className="mt-4 space-y-2">
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
};

export default Sessions;
