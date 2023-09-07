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
    description: `Here are things`,
    title: `I've worked on`,
    image: {
      src: "/static/images/merged.png",
      width: 500,
      height: 700,
    },
  },
  {
    description: "I worked on",
    title: "P2PCoder - WWT Project",
    image: {
      src: "/static/images/p2pcoder.gif",
      width: 700,
      height: 700,
    },
  },
  {
    description: "I built",
    title: "Threejs Shirt Customizer",
    image: {
      src: "/static/images/threejs.png",
      width: 700,
      height: 700,
    },
  },
  {
    description: `I'm working on`,
    title: "Annon Chat - WWT Project",
    image: {
      src: "/static/images/annon_chat.png",
      width: 700,
      height: 700,
    },
  },
];
