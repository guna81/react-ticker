import { uglify } from 'rollup-plugin-uglify'
import babel from 'rollup-plugin-babel'
import postcss from 'rollup-plugin-postcss';

const config = {
    input: 'src/index.js',
    external: ['react'],
    output: {
        format: 'umd',
        name: 'react-ticker',
        globals: {
            react: "React"
        }
    },
    plugins: [
        babel({
            exclude: "node_modules/**"
        }),
        uglify(),
        postcss({
            extensions: ['.css'],
            minimize: true,
            modules: true
        })
    ],
}
export default config