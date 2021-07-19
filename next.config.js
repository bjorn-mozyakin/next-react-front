module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  async rewrites() {
    return [
      {
        source: "/api/banners/",
        destination: "http://10.51.12.148:4000/api/banners/",
      },
    ];
  },
};
