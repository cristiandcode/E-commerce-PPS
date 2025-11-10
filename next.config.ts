import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true, // Evita que eslint bloquee el build
  },
  typescript: {
    ignoreBuildErrors: false, // Si querés más rigidez, cambialo a true
  },
  experimental: {
    turbo: {
      rules: {
        // Opcional, mejora tiempos de recarga con Tailwind
        '*.css': ['postcss-loader'],
      },
    },
  },
};

export default nextConfig;
