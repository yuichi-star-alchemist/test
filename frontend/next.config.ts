const nextConfig = {
  // imageタグのsrcとして有効にする許可オリジンを設定する
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "57.180.44.232",
        port: "9000",
        pathname: "/**",
      },
    ],
  },
  output: "standalone",
}

export default nextConfig
