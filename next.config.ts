import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
  },
  images: {
    domains: ['i.ibb.co','www.singbetter.net','upload.wikimedia.org','www.hr.kmitl.ac.th','www.smartmathpro.com'] // เพิ่มโดเมนที่ใช้งานภาพ
  },
}

export default nextConfig;
