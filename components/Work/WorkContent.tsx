import Image from "next/image";
import { WorkContainer } from "./WorkContainer";
import { WorkLeft } from "./WorkLeft";
import { WorkRight } from "./WorkRight";
import { WorkTile } from "./workTiles";

interface WorkContentProps {
  work: WorkTile;
  progress?: number;
}

export default function WorkContent({ work, progress = 0 }: WorkContentProps) {
  const { title, description, image } = work;

  return (
    <WorkContainer>
      <WorkLeft progress={progress}>
        <div className="text-center">
          <div className="font-cabinet text-4xl font-bold tracking-tight md:text-5xl xl:text-6xl">
            {title}
          </div>
          <span className="h-full text-xl font-normal md:text-xl xl:text-xl">{description}</span>
        </div>
      </WorkLeft>
      <WorkRight progress={progress}>
        <div className="drop-shadow-2xl lg:mt-12">
          <Image src={image.src} alt={title} width={image.width} height={image.height} />
        </div>
      </WorkRight>
    </WorkContainer>
  );
}
