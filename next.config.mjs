/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['three', 'three-stdlib', '@react-three/fiber', '@react-three/drei', '@react-three/postprocessing', '@react-three/rapier', '@react-three/cannon'],
};

export default nextConfig;
