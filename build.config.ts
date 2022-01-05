import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  outDir: 'lib',
  clean: true,
  entries: [
    {
      input: './src/',
      format: 'cjs',
    },
    {
      input: './src/',
      format: 'esm',
    },
  ],
  declaration: true,  // generate .d.ts files
  rollup: {
    cjsBridge: true,  // __dirname, require
  },
})
