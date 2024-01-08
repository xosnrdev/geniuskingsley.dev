import Image from 'next/image';
import { WorkContainer } from './WorkContainer';
import { WorkLeft } from './WorkLeft';
import { WorkRight } from './WorkRight';
import { WorkTile } from './workTiles';

interface WorkContentProps {
  work: WorkTile;
  progress?: number;
}

export default function WorkContent({ work, progress = 0 }: WorkContentProps) {
  const { title, description, image } = work;

  return (
    <WorkContainer>
      <WorkLeft progress={progress}>
        <div className="text-center mx-2">
          <div className="text-2xl font-bold md:text-3xl xl:text-4xl">{title}</div>
          <p className="prose max-w-none mx-auto pb-8 dark:prose-dark text-lg tracking-tight md:text-xl xl:text-xl flex flex-wrap">
            {description}
          </p>
        </div>{' '}
      </WorkLeft>
      <WorkRight progress={progress}>
        <div className="drop-shadow-2xl sm:mt-10 md:mt-24">
          <Image src={image.src} alt={title} width={image.width} height={image.height} priority />
        </div>
      </WorkRight>
    </WorkContainer>
  );
}
