module.exports = {
    src: [
        './src/to-binance-timeframe.ts',
    ],
    mode: 'file',
    includeDeclarations: true,
    tsconfig: 'tsconfig.json',
    out: './doc',
    excludePrivate: true,
    excludeProtected: true,
    excludeExternals: true,
    excludeNotExported: true,
    readme: 'readme.md',
    name: 'to-binance-timeframe',
    ignoreCompilerErrors: true,
    plugin: 'none',
    listInvalidSymbolLinks: true,
    theme: 'markdown'
};
