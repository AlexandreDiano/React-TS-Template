import type { IconType } from 'react-icons';

interface ILink {
  url: string;
  name: string;
}

interface IRoute {
  icon: IconType;
  name: string;
  children: Array<ILink>;
  showChildren?: boolean;
}

type IRoutes = Array<IRoute>;

export type { IRoutes, ILink, IconType };
