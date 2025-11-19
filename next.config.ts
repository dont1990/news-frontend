// import withBundleAnalyzer from "@next/bundle-analyzer";
import type { NextConfig } from "next";

// const bundleAnalyzer = withBundleAnalyzer({
//   enabled: process.env.ANALYZE === "true", // only runs when you set ANALYZE=true
// });

const nextConfig: NextConfig = {
  images: {
    domains: [
      "media.mehrnews.com",
      "img9.irna.ir",
      "www.example.com",
      "s3.castbox.fm",
      "www.irna.ir",
      "media.mashreghnews.ir",
      "www.mashreghnews.ir",
      "cdn.mashreghnews.ir",
      "openweathermap.org",
      "static.jaaar.com",
      "static.shahrekhabar.com",
      "media.khabaronline.ir",
    ],
  },
};

// ✅ Export the combined config
export default nextConfig;
// export default bundleAnalyzer(nextConfig);
