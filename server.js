const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const pathMatch = require('path-match')

const fs = require('fs')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const route = pathMatch()
const match = route('/article/:name')

const files = fs.readdirSync('./static/articles').reverse()
const articleList = files.map( el => './static/articles/' + el )
const articleNameList = files.map( el => el.slice(4, -3) )

app.prepare()
.then(() => {
  createServer((req, res) => {
    const { pathname } = parse(req.url)
    const params = match(pathname)

    // /article を /article-root につけかえ
    if ( route('/article')(pathname) ) {
      app.render(req, res, '/article-root')
      return
    }

    // 通常のレンダリング
    if (params === false) {
      handle(req, res)
      return
    }

    const articleIndex = articleNameList.indexOf(params.name)

    // ファイルが見つからない場合は 404
    if (articleIndex === -1) {
      app.render(req, res, '/404')
      return
    }

    // /article のレンダリング
    const fname = articleList[articleIndex]
    app.render(req, res, '/article', { fname })
  })
  .listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
