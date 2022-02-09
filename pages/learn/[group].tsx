import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { VideoCameraIcon, ViewGridAddIcon, DocumentIcon, CodeIcon } from '@heroicons/react/outline';
import type { Resource } from '@/types/index';
import { getAllResourcesByGroup, getAllResourceGroups } from '@/lib/resource-reader';

import LearningMaterialItem from '@/components/LearningMaterialItem';

interface LearnProps {
  resources: Resource[];
  group: string;
}

const buildFilters = (group: string) => [
  {
    label: 'View All',
    icon: () => <ViewGridAddIcon className="h-4 w-4 text-blue-500 mr-2" />,
    href: `/learn/${group}`,
  },
  {
    label: 'Videos',
    icon: () => <VideoCameraIcon className="h-4 w-4 text-resource-video-base mr-2" />,
    href: `/learn/${group}?type=video`,
  },
  {
    label: 'Articles',
    icon: () => <DocumentIcon className="h-4 w-4 text-resource-article-base mr-1" />,
    href: `/learn/${group}?type=article`,
  },
  {
    label: 'Code Examples',
    icon: () => <CodeIcon className="h-4 w-4 text-yellow-500 mr-2" />,
    href: `/learn/${group}?type=code`,
  },
];

function Learn({ resources, group }: LearnProps) {
  const { query } = useRouter();
  const shouldFilter = !!query.type;

  const resourcesToRender = shouldFilter ? resources.filter((resource) => resource.type === query.type) : resources;
  const filters = buildFilters(group);

  return (
    <div className="text-center min-h-screen py-10 resource">
      <div className="max-w-4xl mx-auto pb-12">
        {/* <h1 className=" font-bold text-6xl text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-500">What would you like to learn?</h1> */}
        <h1 className=" font-bold text-6xl text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-500">
          Learn Event Driven Architecture
        </h1>
        <span className="text-gray-400 block py-4 pb-0">
          Community list of Videos, Articles and Code to help you learn Event Driven Architectures.
        </span>
        <span className="text-gray-600 block py-4 text-sm">
          Want to add something to the list? Feel free to{' '}
          <a className="underline" href="https://github.com/boyney123/virtual-eda">
            contribute to the website
          </a>
        </span>
      </div>
      <main className="bg-gray-900 min-h-screen py-14">
        {/* Badge List */}
        <div className="space-x-4">
          {filters.map((filter: any) => (
            <Link href={filter.href} key={filter.label}>
              <a className="inline-flex items-center px-2 py-1.5 rounded-full text-xs font-medium bg-gray-800 text-gray-400">
                <filter.icon className="h-4 w-4 text-blue-500 mr-2" />
                {filter.label}
              </a>
            </Link>
          ))}
        </div>

        <div className="py-10 max-w-5xl mx-auto grid grid-cols-2 gap-4">
          {resourcesToRender.map((resource: Resource, index) => (
            <LearningMaterialItem key={index} resource={resource} />
          ))}
        </div>
      </main>
    </div>
  );
}

export async function getStaticPaths() {
  const resourceGroups = await getAllResourceGroups();
  const paths = resourceGroups.map((group) => ({ params: { group } }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const data = await getAllResourcesByGroup(params.group);
  return { props: { resources: data, group: params.group } };
}

export default Learn;
