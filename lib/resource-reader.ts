import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import getConfig from 'next/config';

const getAllFilesFromDir = (dir: string) => {
  const allFiles = fs.readdirSync(dir);
  return allFiles.map((file) => {
    const content = fs.readFileSync(path.join(dir, file), 'utf-8');
    const { data } = matter(content);
    return data;
  });
};

export const getAllResourceGroups = () => {
  const { serverRuntimeConfig } = getConfig();
  return fs.readdirSync(path.join(serverRuntimeConfig.PROJECT_ROOT, './resources'));
};

const orderResourcesByName = (resources) => {
  return resources.sort((a, b) => (a.title > b.title ? 1 : b.title > a.title ? -1 : 0));
};

export const getAllResourcesByGroup = (group: string) => {
  const { serverRuntimeConfig } = getConfig();
  const pathToResources = path.join(serverRuntimeConfig.PROJECT_ROOT, './resources', group);
  const resourceFolders = fs.readdirSync(pathToResources);

  const allResources = resourceFolders.reduce((data, folder) => {
    const resourcesFromFolder = getAllFilesFromDir(path.join(pathToResources, folder));
    return data.concat(resourcesFromFolder);
  }, []);

  return orderResourcesByName(allResources);
};

export const getAllResources = () => {
  const { serverRuntimeConfig } = getConfig();

  const pathToResources = path.join(serverRuntimeConfig.PROJECT_ROOT, './resources/general');
  const resourceFolders = fs.readdirSync(pathToResources);

  return resourceFolders.reduce((data, folder) => {
    const resourcesFromFolder = getAllFilesFromDir(path.join(pathToResources, folder));
    return data.concat(resourcesFromFolder);
  }, []);
};
