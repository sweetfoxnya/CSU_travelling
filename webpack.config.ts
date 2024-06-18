import path from "path";
import HtmlWebPackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import type { Configuration as DevServerConfiguration} from 'webpack-dev-server';
import Dotenv from 'dotenv-webpack';


type Mode = 'development' | 'production';

interface EnvVariables {
  mode: Mode;
  port: number;
}

console.log(__dirname)

export default (env: EnvVariables) => {
  const isDev = env.mode === 'development';

  const config: webpack.Configuration = {
    mode: env.mode ?? 'development',
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: {
      path: path.resolve(__dirname, 'build'),
      // generate filename depending on files content
      filename: '[name].[contenthash].js',
      // to delete old builds
      clean: true,
      publicPath: '/'
    },
    plugins: [
      // plugin for creating build html using own html
      new HtmlWebPackPlugin({ template: path.resolve(__dirname, 'src', 'index.html') }),
      // slow plugin showing progress of build
      isDev && new webpack.ProgressPlugin(),
      new Dotenv({
        path: '.env',
        safe: true
      })
    ].filter(Boolean),
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.(?:jpg|png)$/,
          type: 'asset/resource',
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
      ]
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
      alias: {
        "@app": path.resolve(__dirname, 'src/app'),
        "@pages": path.resolve(__dirname, 'src/pages'),
        "@widgets": path.resolve(__dirname, 'src/widgets'),
        "@features": path.resolve(__dirname, 'src/features'),
        "@entities": path.resolve(__dirname, 'src/entities'),
        "@shared": path.resolve(__dirname, 'src/shared'),
        "@static": path.resolve(__dirname, 'src/static'),
      }
    },
    // getting stacktrace
    devtool: isDev ? 'inline-source-map' : false,
    // dev-server options
    devServer: isDev ? {
      historyApiFallback: true,
      port: env.port ?? 3000,
      open: true,
    } : undefined,
  }

  return config;
}
