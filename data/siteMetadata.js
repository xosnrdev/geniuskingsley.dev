const siteMetadata = {
  title: "Chidera Kingsley",
  author: "Chidera Kingsley",
  headerTitle: "xosnrdev",
  description: "Software Engineer at World Wide Techies (Talent Yard)",
  language: "en-us",
  theme: "dark", // system, dark or light
  siteUrl: "https://www.geniuskingsley.dev",
  siteRepo: "https://github.com/xosnrdev/blog-portfolio",
  siteLogo: "/static/images/logo.png",
  image: "https://res.cloudinary.com/dc5x1aox7/image/upload/v1694168407/IMG_3790_xf2xjf.png",
  socialBanner: "https://res.cloudinary.com/dc5x1aox7/image/upload/v1694170718/IMG_4810_sfjnft.jpg",
  blogOpenGraph:
    "https://res.cloudinary.com/dc5x1aox7/image/upload/v1694170718/IMG_4808_q0hpvr.jpg",
  email: "chidera@geniuskingsley.dev",
  github: "https://github.com/xosnrdev",
  twitter: "https://twitter.com/xosnrdev",
  linkedin: "https://www.linkedin.com/in/xosnrdev/",
  spotify: "https://open.spotify.com/user/31wuvc3q22pqbn7m5smst6jsbxae",
  locale: "en-US",
  comment: {
    provider: "giscus",
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO || "",
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID || "",
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY || "",
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID || "",
      mapping: "pathname",
      reactions: "1",
      metadata: "0",
      theme: "light",
      darkTheme: "transparent_dark",
      themeURL: "",
    },
  },
};

module.exports = siteMetadata;
