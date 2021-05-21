import typescript from "@rollup/plugin-typescript";

export default [
  {
    input: "src/index.tsx",
    output: [
      {
        file: "dist/index.js",
        format: "cjs"
      },
      {
        file: "dist/index.esm.js",
        format: "esm"
      }
    ],
    external: ["react", "nexusui"],
    plugins: [
      typescript()
    ]
  }
];
