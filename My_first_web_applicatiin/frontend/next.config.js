// next.config.js
module.exports = {
  publicRuntimeConfig: {
    // Will be available on both server and client
    BACKEND_URL: process.env.BACKEND_URL,
  },
}