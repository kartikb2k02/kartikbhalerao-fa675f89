import nextConfig from "eslint-config-next";

const eslintConfig = [...nextConfig, { ignores: ["dist/**"] }];

export default eslintConfig;
