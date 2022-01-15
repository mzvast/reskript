import {resolveSync, compact, resolveFrom} from '@reskript/core';
import postCSS from 'postcss';
// import tailwind from 'tailwindcss';
import presetEnv from 'postcss-preset-env';
import nano from 'cssnano';
import {LoaderFactory} from '../interface.js';

const factory: LoaderFactory = async ({mode, projectSettings}) => {
    const {cwd, build: {style: {extract}, uses}} = projectSettings;

    const importTailwind = async () => {
        const resolve = resolveFrom(cwd);
        const location = await resolve('tailwindcss');
        const {default: tailwind} = await import(location);
        return tailwind;
    };
    const plugins = [
        uses.includes('tailwind') && await importTailwind(),
        presetEnv(),
        mode === 'production' ? nano() : null,
    ];

    return {
        loader: resolveSync('postcss-loader'),
        options: {
            sourceMap: extract,
            implementation: postCSS,
            postcssOptions: {
                plugins: compact(plugins),
            },
        },
    };
};

export default factory;
