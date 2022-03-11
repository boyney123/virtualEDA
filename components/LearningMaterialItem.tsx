import React from 'react';
import getYouTubeID from 'get-youtube-id';

import { VideoCameraIcon, DocumentIcon, CodeIcon, AcademicCapIcon } from '@heroicons/react/outline';
import type { Resource } from '@/types/index';

const getIconForType = (type, props) => {
  switch (type) {
    case 'video':
      return <VideoCameraIcon className={`h-4 w-4 text-resource-video-base mr-2 ${props.className}`} />;
    case 'article':
      return <DocumentIcon className={`h-4 w-4 text-resource-article-base mr-2 ${props.className}`} />;
    case 'code':
      return <CodeIcon className={`h-4 w-4 text-resource-code-base mr-2 ${props.className}`} />;
    default:
      return <VideoCameraIcon className={`h-4 w-4 text-purple-500 mr-2 ${props.className}`} />;
  }
};

interface LearningMaterialItemProps {
  resource: Resource;
}

function LearningMaterialItem({ resource }: LearningMaterialItemProps) {
  const { title, description, type, difficulty, thumbnail, url } = resource;
  const TypeIcon = (props) => getIconForType(type, props);
  const upperCaseValue = (value: string) => `${value.substring(0, 1).toUpperCase()}${value.substring(1, value.length)}`;


  const videoID = getYouTubeID(url);
  const thumbnailURL = `https://img.youtube.com/vi/${videoID}/hqdefault.jpg`;

  return (
    <a
      href={`${url}?ref=virtualeda.io`}
      target="_blank"
      className={`block bg-gradient-to-br from-gray-500 to-resource-${type}-dark p-1 rounded hover:from-gray-100`}
      rel="noreferrer"
    >
      <div className="bg-gray-800 text-left text-gray-400 flex flex-col h-full">
        <div className="bg-black  mb-4">
          {thumbnail && <img src={thumbnail.src} alt={thumbnail.alt} className="w-full px-4 object-contain" />}
          {videoID && thumbnailURL && <img alt="thumbnail" src={thumbnailURL} className="w-full h-64 object-contain " />}
          {!thumbnail && !videoID && (
            <div className="mx-auto w-full py-14">
              <TypeIcon className="w-full h-32 mx-auto opacity-20 empty-icon" />
            </div>
          )}
        </div>
        <div className="px-4 pb-4 flex flex-1 flex-col justify-between">
          <div>
            <h2 className="text-gray-200 font-bold">{title}</h2>
            <div className="space-x-1 text-xs mt-1">
              <div className="py-2 space-x-2">
                <span className="inline-flex  items-center px-2 py-0.5 rounded-full text-xs font-medium text-gray-400 border-gray-700 border">
                  <TypeIcon />
                  {upperCaseValue(type)}
                </span>
                {difficulty && (
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium text-gray-400 border-gray-700 border">
                    <AcademicCapIcon className="h-4 w-4 text-pink-500 mr-2" />
                    {upperCaseValue(difficulty)}
                  </span>
                )}
              </div>
              <p className="text-sm pt-1 pb-3">{description}</p>
            </div>
          </div>
          <div>
            <a className="text-gray-300 underline text-sm" href="">
              Learn more &rarr;
            </a>
          </div>
        </div>
      </div>
    </a>
  );
}

export default LearningMaterialItem;
