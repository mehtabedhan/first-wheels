/** @type {import('next').NextConfig} */
module.exports = {
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
 
  images: {
    domains:[
      'firebasestorage.googleapis.com',
      'images.pexels.com',
      'pbblogassets.s3.amazonaws.com',
      'lh3.googleusercontent.com',
      'cdn.pixabay.com'
      
    ]
  },
}
