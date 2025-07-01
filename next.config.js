/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  distDir: 'dist',
  
  // Image optimization for static export
  images: {
    unoptimized: true,
  },

  // Experimental features for better performance
  experimental: {
    gzipSize: true,
  },

  // Webpack optimizations
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Bundle analyzer in development
    if (!dev && !isServer) {
      config.optimization.splitChunks.cacheGroups = {
        ...config.optimization.splitChunks.cacheGroups,
        // Separate vendor bundle for better caching
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
          priority: 10,
        },
        // Separate common components
        common: {
          name: 'common',
          minChunks: 2,
          chunks: 'all',
          priority: 5,
          reuseExistingChunk: true,
        }
      }
    }

    // Optimize bundle size
    config.optimization.usedExports = true
    config.optimization.sideEffects = false

    return config
  },

  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Enable compression
  compress: true,

  // Power pack optimizations
  poweredByHeader: false,
  
  // Asset optimization
  assetPrefix: process.env.NODE_ENV === 'production' ? '/finpromptu-website' : '',
}

module.exports = nextConfig