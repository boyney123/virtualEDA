import getConfig from 'next/config';

import { ExternalLinkIcon, ChevronRightIcon } from '@heroicons/react/solid';
import Link from 'next/link';

const people = [
  {
    name: 'Lindsay Walton',
    role: 'Front-end Developer',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Lindsay Walton',
    role: 'Front-end Developer',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Lindsay Walton',
    role: 'Front-end Developer',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Lindsay Walton',
    role: 'Front-end Developer',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  // More people...
];

export default function Example() {
  const { publicRuntimeConfig } = getConfig();

  const { MEETUP_URL } = publicRuntimeConfig;

  return (
    <div>
      <div className="relative bg-gray-900">
        {/* Hero Section */}
        <div className="relative bg-gray-800 overflow-hidden">
          <div className="hidden sm:block sm:absolute sm:inset-0" aria-hidden="true">
            <svg
              className="absolute bottom-0 right-0 transform translate-x-1/2 mb-48 text-gray-700 lg:top-0 lg:mt-28 lg:mb-0 xl:transform-none xl:translate-x-0"
              width={364}
              height={384}
              viewBox="0 0 364 384"
              fill="none"
            >
              <defs>
                <pattern
                  id="eab71dd9-9d7a-47bd-8044-256344ee00d0"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} fill="currentColor" />
                </pattern>
              </defs>
              <rect width={364} height={384} fill="url(#eab71dd9-9d7a-47bd-8044-256344ee00d0)" />
            </svg>
          </div>
          <div className="relative sm:pt-6 pb-16 sm:pb-24 px-4 sm:px-6">
            <main className="lg:mt-24">
              <div className="mx-auto max-w-7xl">
                <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                  <div className=" sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center">
                    <div>
                      <a
                        href="#"
                        className="hidden sm:inline-flex items-center text-white bg-gray-900 rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200"
                      >
                        <span className="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-red-500 rounded-full">
                          New Meetup Group
                        </span>
                        <span className="ml-4 text-sm">Join our Remote Meetup Group</span>
                        <ChevronRightIcon className="ml-2 w-5 h-5 text-gray-500" aria-hidden="true" />
                      </a>
                      <h1 className="mb-8 sm:mb-0 text-center lg:text-left mt-4 text-3xl tracking-tight font-extrabold text-white sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-5xl">
                        <span className="md:block sm:text-3xl">virtualEDA - Online Community</span>{' '}
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-500">
                          Learn, Share and Meet
                        </span>
                      </h1>
                      <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                        A community for people who want to learn more about Event-Driven Architectures.
                      </p>
                      <div className="hidden sm:block">
                        <p className="mt-8 text-sm text-white uppercase tracking-wide font-semibold sm:mt-10">Sponsors</p>
                        <div className="mt-5 w-full sm:mx-auto sm:max-w-lg lg:ml-0">
                          <div className="flex flex-wrap items-start justify-between">
                            <div className="flex justify-center px-1">
                              <img
                                className="h-9 sm:h-10"
                                src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg"
                                alt="Tuple"
                              />
                            </div>
                            <div className="flex justify-center px-1">
                              <img
                                className="h-9 sm:h-10"
                                src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
                                alt="Workcation"
                              />
                            </div>
                            <div className="flex justify-center px-1">
                              <img
                                className="h-9 sm:h-10"
                                src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
                                alt="StaticKit"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 sm:mt-14 lg:mt-0 lg:col-span-6 ">
                    <div className="bg-red-500  sm:max-w-md sm:w-full sm:mx-auto sm:rounded-lg sm:max-w-m px-1 py-1 rounded-xl w-full bg-gradient-to-r p-1 from-gray-700 via-gray-800 to-pink-600">
                      <div className="bg-gray-800 text-white rounded-xl  p-4">
                        <h1 className="text-lg">Welcome,</h1>
                        <p className="text-gray-300 mt-2">
                          virtualEDA is a site for people who want to get more in-depth knowledge of Event-Driven Architectures.
                          The website is driven by the community and we welcome contributions and learning material.
                        </p>
                        <p className="text-gray-100 mt-4 fon">
                          Everybody is welcome to join us, we love learning and growing together.
                        </p>
                        <div className="mt-5 max-w-md mx-auto  sm:justify-center md:mt-8">
                          <div className="rounded-md shadow">
                            <Link href="/learn/general">
                              <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 md:py-2 md:text-lg md:px-10">
                                Start Learning
                              </a>
                            </Link>
                          </div>
                          <div className="mt-3 rounded-md shadow ">
                            <a
                              href={MEETUP_URL}
                              target="_blank"
                              className="text-sm w-full flex items-center justify-center px-8 py-3 border border-gray-500 sm:text-base font-medium rounded-md text-gray-200 bg-gray-800 hover:bg-gray-700 md:py-2 md:text-lg md:px-10"
                              rel="noreferrer"
                            >
                              Join Community Meetup
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>

        {/* <Hero /> */}
        <div className="relative py-8 sm:py-16 bg-white overflow-hidden">
          <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
            <div className="relative h-full text-lg max-w-prose mx-auto" aria-hidden="true">
              <svg
                className="absolute top-12 left-full transform translate-x-32"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
              >
                <defs>
                  <pattern
                    id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width={404} height={384} fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
              </svg>
              <svg
                className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
              >
                <defs>
                  <pattern
                    id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width={404} height={384} fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
              </svg>
              <svg
                className="absolute bottom-12 left-full transform translate-x-32"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
              >
                <defs>
                  <pattern
                    id="d3eb07ae-5182-43e6-857d-35c643af9034"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width={404} height={384} fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
              </svg>
            </div>
          </div>
          <div className="relative px-4 sm:px-6 lg:px-8">
            <div className="text-lg max-w-prose mx-auto">
              <h1>
                <span className="block text-base text-center text-pink-600 font-semibold tracking-wide uppercase">Welcome</span>
                <span className="mt-2 hidden sm:block text-xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                  Event Architectures for Everyone
                </span>
              </h1>
              <p className="hidden sm:block mt-8 text-xl text-gray-500 leading-8">VirutalEDA</p>
            </div>
            <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto pb-10">
              <p>
                virtualEDA is an open community of people that want to learn, share and talk around Event Driven Architectures.
                Event Architectures are becoming more and more popular and we want to give everybody a place they can learn and
                share their experiences with each other.
              </p>
              <h2>Learning & Sharing</h2>
              <p>
                You can explore this website to find learning material that has been recommended, to help you gain a deeper
                understanding of Event Architectures.
              </p>
              <p>
                All the learning material you find on this website is open source and driven by markdown files. We welcome
                contributions you may wish to add to the website.
              </p>
              <h2>Remote Meetups</h2>
              <p>
                We arrange remote meetup sessions where people can come talk and listen to each other&aposs experiences with Event
                Architectures and encourage people to share ideas and learn. Sign up to our Meetup Group to make sure you get the
                announcements and register to our sessions.
              </p>
              <h2>The Future</h2>
              <p>
                virtualEDA is a new idea, and we want to see if we can grow a community of people that are willing to learn and
                share ideas with each other. If you would like to help, speak, contribute or sponsor please get in contact!
              </p>
              <p>We are looking forward to seeing what we can create, let’s make something awesome</p>
            </div>
          </div>
        </div>
        <div className="relative bg-gray-800">
          <div className="h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
              alt=""
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <div className="md:ml-auto md:w-1/2 md:pl-10">
              <h2 className="text-base font-semibold uppercase tracking-wider text-gray-300">Learn together</h2>
              <p className="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">Community</p>
              <p className="mt-3 text-lg text-gray-300">
                Join the virtualEDA Community to connect, learn and share your experince with event-driven architectures.
              </p>
              <div className="mt-8">
                <div className="inline-flex rounded-md shadow space-x-2">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50"
                  >
                    Join Discord
                    <ExternalLinkIcon className="-mr-1 ml-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white">
          <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
            <div className="space-y-12">
              <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
                <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Organisers</h2>
                <p className="text-xl text-gray-500">Volunteers that run help and run virtualEDA.</p>
              </div>
              <ul className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8">
                {people.map((person) => (
                  <li key={person.name}>
                    <div className="space-y-4">
                      <div className="aspect-w-3 aspect-h-2">
                        <img className="object-cover shadow-lg rounded-lg" src={person.imageUrl} alt="" />
                      </div>

                      <div className="space-y-2">
                        <div className="text-lg leading-6 font-medium space-y-1">
                          <h3>{person.name}</h3>
                          <p className="text-indigo-600">{person.role}</p>
                        </div>
                        <ul className="flex space-x-5">
                          <li>
                            <a href={person.twitterUrl} className="text-gray-400 hover:text-gray-500">
                              <span className="sr-only">Twitter</span>
                              <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a href={person.linkedinUrl} className="text-gray-400 hover:text-gray-500">
                              <span className="sr-only">LinkedIn</span>
                              <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                  fillRule="evenodd"
                                  d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
