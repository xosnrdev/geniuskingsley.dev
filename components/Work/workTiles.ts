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
      src: '/static/images/project/all-project.webp',
      width: 600,
      height: 770,
    },
  },
  {
    description: `
    A peer-2-peer coding editor that helps developer share coding space, particularly for coding mentors and tutoring.`,
    title: 'P2PCoder',
    image: {
      src: '/static/images/project/p2pcoder-project.webp',
      width: 600,
      height: 554,
    },
  },
  {
    description: `A web-based application that aims to redefine the way you personalize your clothing, with DALLE AI the application generates and integrates images, enriching the customization process.`,
    title: 'ThreeJS Shirt Customizer',
    image: {
      src: '/static/images/project/threejs-project.webp',
      width: 600,
      height: 717,
    },
  },
  {
    description: `An Anonymous Chat platform that connects individuals to converse allowing users to engage in real-time, anonymous conversations with other users.`,
    title: 'Annon Chat',
    image: {
      src: '/static/images/project/annon-project.webp',
      width: 600,
      height: 717,
    },
  },
];
