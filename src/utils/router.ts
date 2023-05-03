import { compile, match } from 'path-to-regexp';

export const pathToUrl = (path: string, params: object = {}) => compile(path)(params);

export const isMatchRoute = (templatePath: string, realPath: string) => {
  const fn = match(templatePath, { decode: decodeURIComponent });
  return fn(realPath) !== false;
};
