import siteMetadata from 'content/siteMetadata';
import Link from 'next/link';
import { Suspense } from 'react';
import { AiFillLinkedin } from 'react-icons/ai';
import { FaGithub, FaSpotify, FaTwitter } from 'react-icons/fa';
import SectionContainer from './SectionContainer';
import NowPlaying from './Spotify/NowPlaying';

export default function Footer() {
  return (
    <SectionContainer>
      <footer>
        <div className="mb-0 flex flex-col justify-start space-x-0 space-y-1.5 py-10 text-slate-500 dark:text-slate-400">
          <Suspense fallback="loading...">
            <NowPlaying />
          </Suspense>
          <div className="flex flex-col items-center space-y-2 text-sm sm:flex-row sm:justify-between sm:text-base">
            <ul className="flex space-x-2">
              <li>{`© ${new Date().getFullYear()}`}</li>
              <li>{` • `}</li>
              <li>
                <Link href="/">{siteMetadata.author}</Link>
              </li>
            </ul>
            <ul className="flex cursor-pointer items-center space-x-5">
              <li>
                <Link
                  href={siteMetadata.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="linkedin"
                >
                  <AiFillLinkedin className="sm:text-lg" />
                </Link>
              </li>
              <li>
                <Link
                  href={siteMetadata.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="github"
                >
                  <FaGithub className="sm:text-lg" />
                </Link>
              </li>
              <li>
                <Link
                  href={siteMetadata.twitter}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="twitter"
                >
                  <FaTwitter className="sm:text-lg" />
                </Link>
              </li>
              <li>
                <Link
                  href={siteMetadata.spotify}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="spotify"
                >
                  <FaSpotify className="sm:text-lg" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </SectionContainer>
  );
}
