import { uglify } from 'rollup-plugin-uglify'
import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';

const config = {
    input: 'src/index.tsx',
    external: ['react'],
    output: {
        format: 'umd',
        name: 'react-ticker',
        globals: {
            react: "React"
        }
    },
    plugins: [
        typescript({ useTsconfigDeclarationDir: true }),
        uglify(),
        postcss({
            extensions: ['.css'],
            minimize: true,
            modules: true
        })
    ],
}

export default config