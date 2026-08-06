import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export — required for hosts without Node.js support
  // (e.g. SiteGround Shared/Cloud hosting). Produces plain HTML/CSS/JS
  // in the `out/` folder after `npm run build`, deployable to any
  // standard web host via FTP/File Manager. No Node server needed.
  output: "export",
  // Generates about/index.html instead of about.html, so a standard
  // Apache host (SiteGround, etc.) serves /about/ correctly with no
  // extra server configuration (.htaccess rewrites) required.
  trailingSlash: true,
  images: {
    // Next.js Image optimization needs a server; static export can't
    // run it. Images are served as-is instead (still fine — they're
    // already reasonably sized JPGs in public/images).
    unoptimized: true,
  },
};

export default nextConfig;
