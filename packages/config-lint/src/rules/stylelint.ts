import {resolveSync} from '@reskript/core';
import lessSyntax from 'postcss-less';

const config: Record<string, any> = {
    extends: resolveSync('@ecomfe/stylelint-config'),
    overrides: [
        {
            files: ['**/*.less'],
            customSyntax: lessSyntax,
        },
    ],
};

export default config;
