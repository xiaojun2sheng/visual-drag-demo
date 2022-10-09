const px2rem = require('postcss-px2rem')
const CompressionPlugin = require('compression-webpack-plugin')
const isProd = process.env.NODE_ENV === 'production'

const postcss = px2rem({
    remUnit: 16   //基准大小 baseSize，需要和rem.js中相同
})

module.exports = {
    publicPath: './',
    configureWebpack: () => {
        if (isProd) {
            return {
                plugins: [
                    new CompressionPlugin({
                        test: /\.js$|\.html$|\.css$|\.jpg$|\.jpeg$|\.png/, // 需要压缩的文件类型
                        threshold: 10240, // 归档需要进行压缩的文件大小最小值，这个对 10K 以上的进行压缩
                        deleteOriginalAssets: false, // 是否删除原文件
                    }),
                ],
            }
        }
    },
    css: {
        loaderOptions: {
          postcss: {
            plugins: [
              postcss
            ]
          }
        }
    }
}
