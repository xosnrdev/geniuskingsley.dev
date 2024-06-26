# geniuskingsley.dev

This is my personal website built with Next.js and MDX. It includes a blog where I write about various topics such as web development, productivity, and personal growth.

## Table of Contents

- [Getting Started](#getting-started)
- [Technologies Used](#technologies-used)
- [Directory Structure](#directory-structure)
- [Available Scripts](#available-scripts)
- [Blog Posts](#blog-posts)
- [License](#license)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You will need the following tools installed on your machine:

- Node.js (version 14 or higher)
- Yarn (version 1.22 or higher)

### Installing

1. Clone the repository:

```bash
git clone https://github.com/xosnrdev/geniuskingsley.dev.git
```

2. Change directory into the project:

```bash
cd geniuskingsley.dev
```

3. Install the dependencies:

```bash
yarn install
```

4. Start the development server:

```bash
yarn dev
```

Your site should now be running at http://localhost:3000.

## Technologies Used

- Next.js - A React framework for building web applications
- MDX - An extension of Markdown that allows you to write JSX inside of your Markdown files
- TypeScript - A typed superset of JavaScript that compiles to plain JavaScript
- Contentful - A headless CMS for managing content
- Vercel - A cloud platform for deploying and hosting web applications

## Directory Structure

```
.
├── components                  # React components
│   ├── Layouts               # Layout components for pages
│   ├── MDX                   # MDX components
│   └── Projects              # Project components
├── content                    # Content for the blog and projects
│   ├── authors               # Author content
│   ├── projects              # Project content
│   └── blog                  # Blog content
├── lib                        # Library files
│   ├── utils                 # Utility functions
│   └── source-files          # Contentlayer source files
├── pages                      # Next.js pages
│   ├── index.tsx             # Home page
│   ├── projects              # Project pages
│   └── blog                  # Blog pages
├── public                     # Static files
├── styles                     # Global styles
│   ├── global.css            # Global styles
│   └── variables.css         # CSS variables
├── .env.local                 # Environment variables
├── .eslintrc.json              # ESLint configuration
├── .gitignore                 # Git ignore file
├── next.config.js             # Next.js configuration
├── package.json               # Package information
└── tsconfig.json              # TypeScript configuration
```

## Available Scripts

In the project directory, you can run:

### `yarn dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `yarn start`

Runs the built app in the production mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn lint`

Runs ESLint to check for errors in the code.

### `yarn format`

Runs Prettier to format the code.

## Blog Posts

You can find the blog posts in the `content/blog` directory. Each blog post is a Markdown file that includes front matter for metadata such as the title, date, tags, and excerpt.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
