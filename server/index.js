import express from 'express'
import bodyParser from 'body-parser'
import path from 'path'
import webpack from 'webpack'
import webpackMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackConfig from '../build/webpack.dev.conf'
import serveStatic from 'serve-static'

const port = process.env.PORT || 5000
const app = express()

app.use(bodyParser.json())

if (process.env.NODE_ENV === 'development') {
  const compiler = webpack(webpackConfig)
  app.use(webpackMiddleware(compiler, {
    hot: true,
    publicPath: webpackConfig.output.publicPath,
    noInfo: true
  }))
  app.use(webpackHotMiddleware(compiler))
}
app.use(serveStatic(path.join(__dirname, '..', 'dist')))

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'))
})

app.listen(port, () => console.log('Server listen on port =', port, 'ENV =', process.env.NODE_ENV))
