/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // HTMLをiframeで埋め込む場合のセキュリティポリシー設定
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "frame-ancestors 'self';",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;