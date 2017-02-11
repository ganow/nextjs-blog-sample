import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import fs from 'fs'
import frontMatter from 'front-matter'
const md = require('markdown-it')({
    html: true
  })
  .use(require('markdown-it-highlightjs'))
  .use(require('markdown-it-katex'))

export default class extends React.Component {
  static async getInitialProps ({ query: { fname } }) {
    return new Promise((resolve, reject) => {
      fs.readFile(fname, 'utf-8', (error, content) => {
        if (error) {
          reject(error);
        } else {
          resolve(content)
        }
      })
    }).then((content) => {
      const meta = frontMatter(content)
      // const body = md.render(meta.body)

      return {
        title: meta.attributes.title,
        bodytxt: meta.body
      }
    })
  }

  render () {

    return <div>
      <Head>
        <title>{this.props.title}</title>
        <link rel="stylesheet" type="text/css" href="/static/css/paraiso-light.css" media="screen" />
        <link rel="stylesheet" type="text/css" href="/static/css/katex.min.css" media="screen" />
      </Head>

      <main>
        <div dangerouslySetInnerHTML={{__html: md.render(this.props.bodytxt)}} />
      </main>

    </div>
  }
}
