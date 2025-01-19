/** @type {import('next').NextConfig} */

const isGithubPages = process.env.NODE_ENV === 'production';


const nextConfig = {
  output: 'export',
  assetPrefix: isGithubPages ? '/cv/' : '',
  basePath: isGithubPages ? '/cv' : '',
  trailingSlash: true,
}

module.exports = nextConfig
