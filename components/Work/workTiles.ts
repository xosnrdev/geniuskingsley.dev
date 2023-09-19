export type WorkTile = {
  title: string;
  description: string;
  image: {
    src: string;
    width: number;
    height: number;
  };
};

export const workTiles: WorkTile[] = [
  {
    description: ``,
    title: `Portfolio - Projects`,
    image: {
      src: "/static/images/merged.png",
      width: 1000,
      height: 800,
    },
  },
  {
    description: `
    A peer-2-peer coding editor that helps developer share coding space, particularly for coding mentors and tutoring.`,
    title: "P2PCoder - Talent Yard Project",
    image: {
      src: "/static/images/p2pcoder.gif",
      width: 1000,
      height: 800,
    },
  },
  {
    description: `A web-based application that aims to redefine the way you personalize your clothing, with DALLE AI the application generates and integrates images, enriching the customization process.`,
    title: "ThreeJS Shirt Customizer",
    image: {
      src: "https://res.cloudinary.com/dc5x1aox7/image/upload/v1694377448/IMG_4821_i1p5pu.png",
      width: 1000,
      height: 800,
    },
  },
  {
    description: `An Anonymous Chat platform that connects individuals to converse allowing users to engage in real-time, anonymous conversations with other users.`,
    title: "Annon Chat - Talent Yard Project",
    image: {
      src: "/static/images/annon_chat.png",
      width: 1000,
      height: 800,
    },
  },
];
