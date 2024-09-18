// LESSON 118
// NEW CHAPTER: NEXTJS

// What is NEXTJS
// Routing System of NEXTJS
// Rendering System of NEXTJS

// What is NEXTJS => Next.js is a React framework for building full-stack web applications. You use React Components to build user interfaces, and Next.js for additional features and optimizations.

// Next.js has two different routers: the App Router and the Pages Router. The App Router is a newer router that allows you to use React's latest features, such as Server Components and Streaming. The Pages Router is the original Next.js router, which allowed you to build server-rendered React applications and continues to be supported for older Next.js applications.

//    "lint": "next lint" => help developers identify and fix coding errors

// next - env.d.ts; => This is a TypeScript configuration reference file for a Next.js project. It provides type definitions to ensure TypeScript understands Next.js-specific features.

// next.config.js; => This is a configuration file for a Next.js project. It allows you to customize the behavior of Next.js, such as enabling features, setting environment variables, and defining custom server configuration.

// package.json specifies general project dependencies and settings.
// package-lock.json locks down exact versions of dependencies and their sub-dependencies to ensure consistency in environments.

// README.md => The README.md file acts as a guide for users and developers, explaining what the project is, how to set it up, and how to contribute.

// tsconfig.json => you add a TypeScript configuration file called tsconfig.json to your project to guide the compiler as it generates JavaScript files.

// yarn.lock=>  ensures that your package is consistent across installations by storing the versions of which dependencies are installed with your package.

// Yarn is an established open-source package manager used to manage dependencies in JavaScript projects.

// While . ts files are used for general TypeScript code, . tsx files are specifically tailored for writing React components and JSX syntax.

// Pages Router creates folder based routing system.

// App components are server side rendering components on default case
// Page components are client side rendering components on default case
// ext: _document.tsx makes ssr mechanism.

// _DOCUMENT => (_) sign means private to router.

// "use clients" => to use client side rendering in app components.

// 1. Most companies prefer to use pages router system.
// 2. It also includes web-mobile version. We use hooks.
// 3. nextjs allows to build both backend and front end but it is not recommended.