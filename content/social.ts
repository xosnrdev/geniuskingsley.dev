import { BiLogoGithub, BiLogoLinkedinSquare, BiLogoTwitter } from 'react-icons/bi';
import { FaHashnode, FaProductHunt } from 'react-icons/fa6';
import siteMetadata from './siteMetadata';

export const socialLinks = [
  {
    id: 1,
    name: 'GitHub',
    url: siteMetadata.github,
    icon: BiLogoGithub,
    status: 'social',
  },
  {
    id: 2,
    name: 'Twitter',
    url: siteMetadata.twitter,
    icon: BiLogoTwitter,
    status: 'social',
  },
  {
    id: 3,
    name: 'Linkedin',
    url: siteMetadata.linkedin,
    icon: BiLogoLinkedinSquare,
    status: 'social',
  },
  {
    id: 6,
    name: 'Hashnode',
    url: 'https://geniuskingsley.hashnode.dev',
    icon: FaHashnode,
    status: 'social',
  },
  {
    id: 9,
    name: 'ProductHunt',
    url: 'https://www.producthunt.com/@xosnrdev',
    icon: FaProductHunt,
    status: 'social',
  },
];