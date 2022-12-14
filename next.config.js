/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async ()=>{
    return [
      {
        source: '/about',
        destination: '/login',
        permanent: false
      }
    ]
  }
}

module.exports = nextConfig
