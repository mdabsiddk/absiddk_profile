import type { NextConfig } from "next";
// added by create cloudflare to enable calling `getCloudflareContext()` in `next dev`
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

// Only run in development — this crashes on Vercel production builds (EPIPE error)
if (process.env.NODE_ENV === "development") {
  initOpenNextCloudflareForDev();
}

const nextConfig: NextConfig = {
	/* config options here */
};

export default nextConfig;
