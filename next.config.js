/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",  // <=== enables static exports
    reactStrictMode: true,
    basePath: "/CraftingCalc",  // Set the github repo name as the base path
    env: {
      githubRepoUrl: "https://github.com/Nmerryman/CraftingCalc",
    }
  };
  
 module.exports = nextConfig;
  