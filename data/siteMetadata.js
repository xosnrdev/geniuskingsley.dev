const siteMetadata = {
  title: "Chidera Kingsley",
  author: "Chidera Kingsley",
  headerTitle: "geniuskingsley",
  description: "Software Developer at World Wide Techies - WWT",
  language: "en-us",
  theme: "dark", // system, dark or light
  siteUrl: "https://www.geniuskingsley.dev",
  siteRepo: "https://github.com/spadechaser/blog-portfolio",
  siteLogo: "/static/images/logo.png",
  image: "/static/images/avatar.png",
  socialBanner: "/static/image/opengraph-image.jpg",
  email: "devopszn@gmail.com",
  github: "https://github.com/spadechaser",
  twitter: "https://twitter.com/spadeofchase",
  linkedin: "https://www.linkedin.com/in/zer0szn/",
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
