/** @type {import('@babel/core').TransformOptions} */
const babelConfig = {
  presets: [
    [
      "@babel/preset-env",
      {
        useBuiltIns: "usage",
        corejs: 3,
        targets: {
          chrome: "58",
          ie: "11",
        },
        // https://babeljs.io/docs/babel-preset-env#include
        // 没效果
        // include: [
        //   '@babel/plugin-transform-template-literals',
        // ],
      },
    ],
  ],
};

export default babelConfig;
