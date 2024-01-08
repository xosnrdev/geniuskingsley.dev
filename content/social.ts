import { BiLogoGithub, BiLogoLinkedinSquare, BiLogoTwitter } from 'react-icons/bi';
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
];
