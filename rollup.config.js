import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import ts_plugin2 from 'rollup-plugin-typescript2';
import typescript from 'typescript';

const external = [
    'vue',
    'axios',
    /^lodash/,
];

const plugins = [
    resolve(),
    commonjs(),
    ts_plugin2({
        typescript,
        useTsconfigDeclarationDir: true,
    }),
];

export default [
    {
        input: 'src/index.ts',
        external,
        plugins,
        output: [
            {file: 'vue-mc.js', format: 'cjs', exports: 'named'},
            {file: 'vue-mc.es.js', format: 'es'},
        ],
    },
    {
        input: 'src/Validation/index.ts',
        external,
        plugins,
        output: [
            {file: 'validation/index.js', format: 'cjs', exports: 'named'},
        ],
    },
    {
        input: './src/Validation/locale.ts',
        external,
        plugins,
        output: [
            {file: 'validation/locale.js', format: 'cjs', exports: 'named'},
        ],
    },
];
