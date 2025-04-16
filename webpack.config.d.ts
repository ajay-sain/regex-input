declare function _exports(): {
    mode: string;
    entry: {
        index: string;
        script: string;
    };
    output: {
        filename: string;
        path: string;
        clean: boolean;
        publicPath: string;
    };
    devServer: {
        open: boolean;
        static: string;
        host: string;
    };
    plugins: any[];
    module: {
        rules: ({
            test: RegExp;
            loader: string;
            exclude: string[];
            use?: undefined;
            type?: undefined;
        } | {
            test: RegExp;
            use: any[];
            loader?: undefined;
            exclude?: undefined;
            type?: undefined;
        } | {
            test: RegExp;
            type: string;
            loader?: undefined;
            exclude?: undefined;
            use?: undefined;
        })[];
    };
    resolve: {
        extensions: string[];
    };
    optimization: {
        runtimeChunk: string;
    };
    watch: boolean;
    watchOptions: {
        ignored: string;
    };
};
export = _exports;
