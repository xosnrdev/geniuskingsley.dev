import Image from "next/image";
import { WorkContainer } from "./WorkContainer";
import { WorkLeft } from "./WorkLeft";
import { WorkRight } from "./WorkRight";
import { WorkTile } from "./workTiles";
import { almarena } from "app/fonts/localFont";

interface WorkContentProps {
  work: WorkTile;
  progress?: number;
}

export default function WorkContent({ work, progress = 0 }: WorkContentProps) {
  const { title, description, image } = work;

  return (
    <WorkContainer>
      <WorkLeft progress={progress}>
        <div className={`px-2 text-center ${almarena.className}`}>
          <h5 className="text-3xl font-bold md:text-4xl xl:text-5xl">{title}</h5>
          <p className="mt-2 text-xl font-light md:text-xl xl:text-xl">{description}</p>
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
