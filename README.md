# NPM Package creation Demo

## Get started

`npm init -y`

## Install bundling dependency rollup

`npm install --save-dev rollup`

## Install necessary dependency

`npm install --save-dev react react-dom`

## Install these if using typescript

`npm install --save-dev @rollup/plugin-typescript tslib`

## Install types for the necessary dependencies

`npm install --save-dev @types/react`

## Create rollup.config.js

`import { defineConfig } from 'rollup';
import typescript from 'rollup-plugin-typescript2';

export default defineConfig({
input: 'src/index.ts',
output: {
dir: 'dist',
format: 'esm',
name: 'dynamic-ui',
},
external: ['react', 'react-dom'],
plugins: [typescript({ tsconfig: 'tsconfig.json' })],
});
`

## Create tsconfig.json

`{
"compilerOptions": {
"jsx": "react",
"target": "ES2015",
"module": "ESNext",
"declaration": true,
"declarationDir": "/dist",
"strict": true
}
}
`

## Add these to package.json

`
"type": "module",
"main": "dist/index.js",
"types": "dist/index.d.ts",
"scripts": {
    "build": "npx rollup -c"
},`

# Change Version before every npm publish
